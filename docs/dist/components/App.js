import React from "../../snowpack/pkg/react.js";
import axios from "../../snowpack/pkg/axios.js";
import Menu from "./Menu.js";
import AppNavigator, {Mode} from "./application-state/StateContext.js";
import Board from "./game/Board.js";
function App() {
  return /* @__PURE__ */ React.createElement("div", {
    className: "App"
  }, /* @__PURE__ */ React.createElement(AppNavigator, null, /* @__PURE__ */ React.createElement(Mode, {
    modeId: "menu"
  }, /* @__PURE__ */ React.createElement(Menu, null)), /* @__PURE__ */ React.createElement(Mode, {
    modeId: "game"
  }, /* @__PURE__ */ React.createElement(Board, null))));
}
export default App;
