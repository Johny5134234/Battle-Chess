import React from "../../../_snowpack/pkg/react.js";
import {useContext} from "../../../_snowpack/pkg/react.js";
import {createUseStyles} from "../../../_snowpack/pkg/react-jss.js";
import NavContext from "./NavContext.js";
const useStyles = createUseStyles({
  crumbContainer: {
    width: "100%",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    color: "var(--light-text)"
  },
  crumbList: {
    margin: 0,
    padding: 0,
    listStyle: "none",
    display: "flex",
    flexDirection: "row",
    "& > *": {
      padding: [[0, 3]]
    }
  },
  crumbItem: {
    fontSize: "1.4rem",
    cursor: "pointer",
    "&:not(:last-child)::after": {
      content: '" => "',
      paddingLeft: 3
    },
    "&:last-child": {
      color: "var(--blue)"
    }
  }
});
const NavigatorBreadcrumbs = (props) => {
  const classes = useStyles();
  const context = useContext(NavContext);
  function handleNavigation(e, pageId) {
    context.setPage(pageId, context);
  }
  if (!context.trail)
    return /* @__PURE__ */ React.createElement("nav", {
      className: classes.crumbContainer
    });
  return /* @__PURE__ */ React.createElement("nav", {
    className: classes.crumbContainer
  }, /* @__PURE__ */ React.createElement("ol", {
    className: classes.crumbList
  }, context.trail.map(({pageId}) => /* @__PURE__ */ React.createElement("li", {
    className: classes.crumbItem,
    onClick: (e) => handleNavigation(e, pageId),
    key: "breadcrumb-" + pageId
  }, pageId.replace("-", " ")))));
};
export default NavigatorBreadcrumbs;
