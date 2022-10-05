import React, {useContext} from "../../../_snowpack/pkg/react.js";
import {createUseStyles} from "../../../_snowpack/pkg/react-jss.js";
import NavContext from "./NavContext.js";
const useStyles = createUseStyles({
  iconContainer: {
    transition: [["opacity", "0.3s"]],
    opacity: 0,
    position: "absolute",
    top: 0,
    left: 0
  },
  icon: {
    width: 20,
    height: 20
  },
  visible: {
    opacity: "100%",
    cursor: "pointer"
  }
});
const NavigatorBack = (props) => {
  const classes = useStyles();
  const context = useContext(NavContext);
  function handleNavigation(e) {
    if (context.currentPage.owner == "none")
      return;
    context.backPage(context);
  }
  return /* @__PURE__ */ React.createElement("div", {
    className: context.currentPage.owner == "none" ? classes.iconContainer : classes.iconContainer + " " + classes.visible,
    onClick: handleNavigation
  }, /* @__PURE__ */ React.createElement("svg", {
    version: "1.0",
    xmlns: "http://www.w3.org/2000/svg",
    width: "512.000000pt",
    height: "512.000000pt",
    viewBox: "0 0 512.000000 512.000000",
    preserveAspectRatio: "xMidYMid meet",
    className: classes.icon
  }, /* @__PURE__ */ React.createElement("g", {
    transform: "translate(0.000000,512.000000) scale(0.100000,-0.100000)",
    fill: "currentColor",
    stroke: "none"
  }, /* @__PURE__ */ React.createElement("path", {
    d: "M1850 4257 c-27 -8 -212 -187 -813 -786 -466 -464 -787 -792 -800\n-816 -28 -54 -28 -136 0 -190 32 -59 1547 -1570 1595 -1590 177 -73 359 110\n279 280 -13 27 -205 225 -590 610 -314 313 -571 573 -571 577 0 4 859 9 1909\n10 l1909 3 44 30 c138 97 118 306 -34 370 -33 13 -245 15 -1933 15 -1042 0\n-1895 3 -1895 7 0 4 263 271 584 593 573 574 584 586 594 635 35 169 -112 302\n-278 252z"
  }))));
};
export default NavigatorBack;
