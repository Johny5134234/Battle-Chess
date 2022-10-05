import React from "react";
import { empty } from "../../util/Util";

export const defaultNavContext = {
	currentPage: { pageId: "play", owner: "home" },
	transitionPage: null,
	pages: [{ pageId: "home", owner: "none" }],
	trail: [
		{ pageId: "home", owner: "none" },
		{ pageId: "play", owner: "home" },
	],
	backPage: empty,
	setPage: empty,
};

const NavContext = React.createContext(defaultNavContext);

export default NavContext;
