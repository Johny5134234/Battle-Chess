import React, {useEffect, useId, useState} from "../../../snowpack/pkg/react.js";
import {createUseStyles} from "../../../snowpack/pkg/react-jss.js";
import {ColorType} from "../../util/Util.js";
import CheckIcon from "./CheckIcon.js";
function createCondition(desc, regex) {
  return {desc, regex, met: false};
}
const passwordTemplate = [
  createCondition("One or more uppercase letters", new RegExp("w*[A-Z]")),
  createCondition("One or more numbers", new RegExp("w*[0-9]"))
];
const useStylesText = createUseStyles((props) => ({
  container: {
    width: props.width || "100%",
    position: "relative"
  },
  textContainer: {
    position: "relative"
  },
  label: {
    fontSize: "3.3rem",
    position: "absolute",
    top: "50%",
    left: 10,
    transform: "translateY(-50%)",
    color: `${props.primaryColor || ColorType.TEXT}`,
    transition: "font-size 0.5s, transform 0.5s, top 0.5s"
  },
  labelHidden: {
    fontSize: "1.6rem",
    top: 0,
    transform: "translateY(-100%)"
  },
  textEntry: {
    width: "100%",
    height: 85,
    fontSize: "3.2rem",
    fontFamily: "Oswald, sans-serif",
    color: `${props.primaryColor || ColorType.TEXT}`,
    border: [[2, "solid", `${props.primaryColor || ColorType.TEXT}`]],
    borderRadius: 5,
    backgroundColor: `${props.secondaryColor || ColorType.WHITE}`,
    padding: 10,
    transition: [["border ", "0.5s"]],
    "&:focus": {
      outline: "none"
    }
  },
  error: {
    color: `${props.errorColor || ColorType.RED}`,
    "&[type]": {
      border: [[2, "solid", `${props.errorColor || ColorType.RED}`]]
    }
  }
}));
const useStylesConditions = createUseStyles((props) => ({
  conditionList: {
    position: "absolute",
    top: "50%",
    transform: "translateY(-50%)",
    right: -220,
    margin: 0,
    padding: 0,
    listStyle: "none",
    transition: [["opacity", "0.5s"]],
    opacity: 0
  },
  condition: {
    transition: [["color", "0.5s"]],
    color: `${props.primaryColor || ColorType.TEXT}`,
    display: "flex"
  },
  conditionError: {
    color: `${props.errorColor || ColorType.RED}`
  },
  conditionListFocused: {
    opacity: "100%"
  }
}));
const TextEntry = (props) => {
  const [text, setText] = useState("");
  const [focused, setFocused] = useState(false);
  const [error, setError] = useState(false);
  const classes = useStylesText(props);
  const id = useId();
  const [conditions, setConditions] = useState([]);
  useEffect(() => {
    setupConditions();
  }, []);
  function setupConditions() {
    let conditionList = [];
    if (props.password) {
      conditionList = passwordTemplate;
    }
    Object.values(conditionList).forEach((condition) => condition.met = false);
    setConditions(conditionList);
  }
  function handleChange(e) {
    let text2 = e.target.value;
    if (conditions && text2.length > 0) {
      setError(false);
      Object.values(conditions).forEach((condition) => {
        condition.met = condition.regex.test(text2);
        if (!condition.met) {
          setError(true);
        }
      });
    } else {
      Object.values(conditions).forEach((condition) => condition.met = false);
      setError(false);
    }
    setText(text2);
  }
  function processLabelClasses() {
    let classString = classes.label;
    if (text.length > 0 || focused)
      classString += " " + classes.labelHidden;
    if (error)
      classString += " " + classes.error;
    return classString;
  }
  function handleFocus(e) {
    setFocused(true);
  }
  function handleBlur(e) {
    setFocused(false);
  }
  return /* @__PURE__ */ React.createElement("div", {
    className: classes.container
  }, /* @__PURE__ */ React.createElement("div", {
    className: classes.textContainer
  }, /* @__PURE__ */ React.createElement("label", {
    htmlFor: id,
    className: processLabelClasses()
  }, props.label), /* @__PURE__ */ React.createElement("input", {
    id,
    className: error ? classes.textEntry + " " + classes.error : classes.textEntry,
    type: props?.password ? "password" : "text",
    onChange: handleChange,
    onFocus: handleFocus,
    onBlur: handleBlur,
    value: text
  })), /* @__PURE__ */ React.createElement(Conditions, {
    conditions,
    focused,
    primaryColor: props.primaryColor || ColorType.TEXT,
    errorColor: props.errorColor || ColorType.RED
  }));
};
const Conditions = (props) => {
  const classes = useStylesConditions(props);
  if (props.conditions && props.conditions.length > 0) {
    return /* @__PURE__ */ React.createElement("ol", {
      className: props.focused ? classes.conditionList + " " + classes.conditionListFocused : classes.conditionList
    }, props.conditions.map((condition, index) => /* @__PURE__ */ React.createElement("li", {
      className: condition.met ? classes.condition : classes.condition + " " + classes.conditionError,
      key: index
    }, /* @__PURE__ */ React.createElement(CheckIcon, {
      checked: condition.met,
      successColor: props.primaryColor,
      errorColor: props.errorColor
    }), /* @__PURE__ */ React.createElement("p", {
      style: {margin: 0}
    }, condition.desc))));
  }
  return /* @__PURE__ */ React.createElement(React.Fragment, null);
};
TextEntry.defaultProps = {
  primaryColor: ColorType.TEXT,
  secondaryColor: ColorType.WHITE,
  errorColor: ColorType.RED,
  password: false,
  conditions: []
};
export default TextEntry;
