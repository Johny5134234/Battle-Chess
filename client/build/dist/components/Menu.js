import React, {useContext} from "../../_snowpack/pkg/react.js";
import {createUseStyles} from "../../_snowpack/pkg/react-jss.js";
import Button from "./form/Button.js";
import TextEntry from "./form/TextEntry.js";
import Title from "./Title.js";
import Navigator from "./navigation/Navigator.js";
import NavigatorPage from "./navigation/NavigatorPage.js";
import {ChessIconType, ColorType} from "../util/Util.js";
import LogIn from "./form/Login.js";
import socket from "../api/socket.js";
import {AppContext} from "./application-state/StateContext.js";
const useStyles = createUseStyles({
  menu: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    width: "80vw",
    maxWidth: 600,
    margin: "auto",
    marginTop: 30,
    "& > :nth-child(1)": {
      marginTop: 0,
      marginBottom: 60
    }
  },
  row: {
    display: "flex",
    width: "100%",
    justifyContent: "space-between",
    gap: 30
  },
  form: {
    width: "100%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    gap: 40
  }
});
const Menu = () => {
  const classes = useStyles();
  const appContext = useContext(AppContext);
  function requestHost(e) {
    e.preventDefault();
    const roomId = e.target.childNodes[0].childNodes[0].childNodes[1].value;
    console.log(roomId);
    socket.emit("request-host", roomId);
  }
  function requestJoin(e) {
    e.preventDefault();
    const roomId = e.target.childNodes[0].childNodes[0].childNodes[1].value;
    console.log(roomId);
    socket.emit("request-join", roomId);
  }
  socket.on("join-game", () => {
    appContext.setMode("game");
  });
  socket.on("host-fail", () => {
    console.log("room id in use!");
  });
  socket.on("join-fail", (inRoom) => {
    console.log(inRoom ? "already in room!" : "no such room exists!");
  });
  return /* @__PURE__ */ React.createElement("div", {
    className: classes.menu
  }, /* @__PURE__ */ React.createElement(Title, null, "BATTLE CHESS"), /* @__PURE__ */ React.createElement(Navigator, {
    breadcrumbs: true
  }, /* @__PURE__ */ React.createElement(NavigatorPage, {
    pageId: "home"
  }, /* @__PURE__ */ React.createElement(Button, {
    navTo: "play"
  }, "Play Game"), /* @__PURE__ */ React.createElement("div", {
    className: classes.row
  }, /* @__PURE__ */ React.createElement(Button, {
    navTo: "login",
    width: "45%"
  }, "Log In"), /* @__PURE__ */ React.createElement(Button, {
    navTo: "signup",
    width: "45%",
    fillColor: ColorType.BLUE,
    textColor: ColorType.WHITE,
    borderColor: ColorType.BLUE
  }, "Sign Up"))), /* @__PURE__ */ React.createElement(NavigatorPage, {
    pageId: "play",
    owner: "home"
  }, /* @__PURE__ */ React.createElement(Button, null, "Find Game"), /* @__PURE__ */ React.createElement(Button, {
    navTo: "join-game"
  }, "Join Game"), /* @__PURE__ */ React.createElement(Button, {
    navTo: "host-game"
  }, "Host Game")), /* @__PURE__ */ React.createElement(NavigatorPage, {
    pageId: "join-game",
    owner: "play"
  }, /* @__PURE__ */ React.createElement("form", {
    className: classes.form,
    onSubmit: requestJoin
  }, /* @__PURE__ */ React.createElement(TextEntry, {
    label: "room id"
  }), /* @__PURE__ */ React.createElement(Button, {
    submit: true
  }, "Join"))), /* @__PURE__ */ React.createElement(NavigatorPage, {
    pageId: "host-game",
    owner: "play"
  }, /* @__PURE__ */ React.createElement("form", {
    className: classes.form,
    onSubmit: requestHost
  }, /* @__PURE__ */ React.createElement(TextEntry, {
    label: "room id"
  }), /* @__PURE__ */ React.createElement(Button, {
    submit: true
  }, "Host"))), /* @__PURE__ */ React.createElement(NavigatorPage, {
    pageId: "login",
    owner: "home"
  }, /* @__PURE__ */ React.createElement(LogIn, null)), /* @__PURE__ */ React.createElement(NavigatorPage, {
    pageId: "signup",
    owner: "home"
  }, /* @__PURE__ */ React.createElement("form", {
    className: classes.form
  }, /* @__PURE__ */ React.createElement("div", {
    className: classes.row
  }, /* @__PURE__ */ React.createElement(TextEntry, {
    width: "50%",
    label: "first name"
  }), /* @__PURE__ */ React.createElement(TextEntry, {
    width: "50%",
    label: "last name"
  })), /* @__PURE__ */ React.createElement(TextEntry, {
    label: "email"
  }), /* @__PURE__ */ React.createElement(TextEntry, {
    label: "password",
    password: true
  }), /* @__PURE__ */ React.createElement("div", {
    className: classes.row
  }, /* @__PURE__ */ React.createElement(Button, {
    width: "50%",
    navTo: "login"
  }, "Log In"), /* @__PURE__ */ React.createElement(Button, {
    width: "50%",
    fillColor: ColorType.BLUE,
    textColor: ColorType.WHITE,
    borderColor: ColorType.BLUE
  }, "Sign Up"))))));
};
export default Menu;
