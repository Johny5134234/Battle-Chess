import React from "react";
import { empty } from "../../util/Util";

export const defaultNavContext = {
	currentPage: { pageId: "home", owner: "none" },
	transitionPage: null,
	pages: [{ pageId: "home", owner: "none" }],
	trail: [{ pageId: "home", owner: "none" }],
	backPage: empty,
	setPage: empty,
	transitioning: false,
};

const NavContext = React.createContext(defaultNavContext);

export default NavContext;
