import React from "react";
import { createRoot } from "react-dom/client";
import App from "./components/App";
import { AuthProvider } from "./components/authentication/AuthProvider";
import { ColorType } from "./util/Util";

const root = createRoot(document.getElementById("root"));
root.render(
	<AuthProvider>
		<App></App>
	</AuthProvider>
);
