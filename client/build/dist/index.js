import React from "../_snowpack/pkg/react.js";
import {createRoot} from "../_snowpack/pkg/react-dom/client.js";
import App from "./components/App.js";
import {AuthProvider} from "./components/authentication/AuthProvider.js";
import {ColorType} from "./util/Util.js";
const root = createRoot(document.getElementById("root"));
root.render(/* @__PURE__ */ React.createElement(AuthProvider, null, /* @__PURE__ */ React.createElement(App, null)));
