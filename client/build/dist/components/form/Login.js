import React from "../../../_snowpack/pkg/react.js";
import {createUseStyles} from "../../../_snowpack/pkg/react-jss.js";
import TextEntry from "./TextEntry.js";
import Button from "./Button.js";
import {ColorType} from "../../util/Util.js";
import axios from "../../api/axios.js";
const LOGIN_URL = "/login";
const useStyles = createUseStyles({
  form: {
    width: "100%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    gap: 40
  },
  row: {
    display: "flex",
    width: "100%",
    justifyContent: "space-between",
    gap: 30
  }
});
const LogIn = () => {
  const classes = useStyles();
  const handleSubmit = async (e) => {
    e.preventDefault();
    const email = e.target.childNodes[0].childNodes[0].childNodes[1];
    const password = e.target.childNodes[1].childNodes[0].childNodes[1];
    try {
      const res = await axios.post(LOGIN_URL, JSON.stringify({
        username: email.value,
        password: password.value
      }), {
        headers: {
          "Content-Type": "application/json"
        },
        withCredentials: true
      });
    } catch (err) {
      console.log(err);
    }
  };
  return /* @__PURE__ */ React.createElement("form", {
    className: classes.form,
    onSubmit: handleSubmit
  }, /* @__PURE__ */ React.createElement(TextEntry, {
    label: "email",
    width: "100%"
  }), /* @__PURE__ */ React.createElement(TextEntry, {
    label: "password",
    width: "100%",
    password: true
  }), /* @__PURE__ */ React.createElement("div", {
    className: classes.row
  }, /* @__PURE__ */ React.createElement(Button, {
    width: "50%",
    submit: true
  }, "Log In"), /* @__PURE__ */ React.createElement(Button, {
    width: "50%",
    fillColor: ColorType.BLUE,
    textColor: ColorType.WHITE,
    borderColor: ColorType.BLUE,
    navTo: "signup"
  }, "Sign Up")));
};
export default LogIn;
