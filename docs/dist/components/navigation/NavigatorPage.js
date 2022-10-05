import React from "../../../snowpack/pkg/react.js";
import {createUseStyles} from "../../../snowpack/pkg/react-jss.js";
const useStyles = createUseStyles({
  navPage: {
    marginTop: 25,
    position: "absolute",
    top: 0,
    width: "100%",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    gap: 40
  }
});
const defaultProps = {
  owner: "none"
};
const NavigatorPage = (props) => {
  const classes = useStyles();
  return /* @__PURE__ */ React.createElement("div", {
    className: classes.navPage,
    ref: props.refN
  }, props.children);
};
NavigatorPage.defaultProps = defaultProps;
export default NavigatorPage;
