import React from "react";
import { createRoot } from "react-dom/client";
import App from "./components/App";
import { ColorType } from "./util/Util";

const root = createRoot(document.getElementById("root"));
root.render(<App></App>);
