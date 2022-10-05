import React, {
  useState,
  useContext,
  useEffect,
  useRef,
  useCallback
} from "../../../snowpack/pkg/react.js";
import {createUseStyles} from "../../../snowpack/pkg/react-jss.js";
import NavContext, {defaultNavContext} from "./NavContext.js";
import NavigatorBreadcrumbs from "./NavigatorBreadcrumbs.js";
import NavigatorBack from "./NavigatorBack.js";
let animationDirection = 1;
const outgoingAnimation = (dir) => [
  {
    opacity: 1
  },
  {
    opacity: 0,
    transform: `translateX(${100 * -dir}%)`
  }
];
const incomingAnimation = (dir) => [
  {opacity: 0, transform: `translateX(${100 * dir}%)`},
  {opacity: 1}
];
const animationOptions = {
  duration: 200,
  fill: "both",
  easing: "ease-in"
};
const useStyles = createUseStyles({
  navHelper: {
    width: "100%",
    position: "relative",
    marginBottom: 20
  },
  nav: {
    width: "80vw",
    maxWidth: 600,
    position: "relative"
  }
});
const Navigator = (props) => {
  const [context, setContext] = useState(defaultNavContext);
  const outRef = useCallback((node) => {
    if (node && context.transitionPage)
      node.animate(outgoingAnimation(animationDirection), animationOptions);
  });
  const inRef = useCallback((node) => {
    if (node) {
      node.animate(incomingAnimation(animationDirection), animationOptions).addEventListener("finish", (event) => {
        setContext((prev) => ({
          ...prev,
          transitionPage: null,
          currentPage: prev.transitionPage
        }));
      });
    }
  });
  const classes = useStyles();
  useEffect(() => {
    let newPages = props.children.map((page) => ({
      pageId: page.props.pageId,
      owner: page.props.owner || "none"
    }));
    updateContext({
      pages: newPages,
      setPage: switchPage,
      backPage
    });
  }, []);
  function switchPage(pageId, currentContext) {
    if (currentContext.currentPage.pageId === pageId)
      return;
    if (currentContext.currentPage && currentContext.transitionPage)
      return;
    animationDirection = currentContext.trail.some((trailPage) => trailPage.pageId === pageId) ? -1 : 1;
    let newPage = findPage(pageId, currentContext);
    let newTrail = generateNewTrail(pageId, currentContext);
    updateContext({
      transitionPage: newPage,
      trail: newTrail
    });
  }
  function backPage(currentContext) {
    switchPage(currentContext.currentPage.owner, currentContext);
  }
  function generateNewTrail(pageId, currentContext) {
    let workingPage = findPage(pageId, currentContext);
    let newTrail = [workingPage];
    while (workingPage.owner != "none") {
      workingPage = findPage(workingPage.owner, currentContext);
      newTrail = [workingPage, ...newTrail];
    }
    return newTrail;
  }
  function findPage(pageId, currentContext) {
    let page = currentContext.pages.find((page2) => page2.pageId === pageId);
    if (page === void 0) {
      throw new Error("Page not found!");
    }
    return page;
  }
  function updateContext(modifications = {}) {
    setContext((currentContext) => ({
      ...currentContext,
      ...modifications
    }));
  }
  if (props.breadcrumbs) {
    return /* @__PURE__ */ React.createElement(NavContext.Provider, {
      value: context
    }, /* @__PURE__ */ React.createElement("div", {
      className: classes.navHelper
    }, /* @__PURE__ */ React.createElement(NavigatorBack, null), /* @__PURE__ */ React.createElement(NavigatorBreadcrumbs, null)), /* @__PURE__ */ React.createElement("div", {
      className: classes.nav
    }, React.Children.toArray(props.children).filter((navPage) => navPage.props.pageId === context.currentPage.pageId || navPage.props.pageId == context.transitionPage?.pageId).map((navPage) => {
      if (navPage.props.pageId === context.currentPage.pageId) {
        return React.cloneElement(navPage, {
          refN: outRef
        });
      } else {
        return React.cloneElement(navPage, {
          refN: inRef
        });
      }
    })));
  }
  return /* @__PURE__ */ React.createElement(NavContext.Provider, {
    value: context
  }, /* @__PURE__ */ React.createElement("div", {
    className: classes.nav
  }, props.children.find((navPage) => navPage.props.pageId === context.currentPage.pageId)));
};
export default Navigator;
