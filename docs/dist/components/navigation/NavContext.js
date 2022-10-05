import React from "../../../snowpack/pkg/react.js";
import {empty} from "../../util/Util.js";
export const defaultNavContext = {
  currentPage: {pageId: "home", owner: "none"},
  transitionPage: null,
  pages: [{pageId: "home", owner: "none"}],
  trail: [{pageId: "home", owner: "none"}],
  backPage: empty,
  setPage: empty
};
const NavContext = React.createContext(defaultNavContext);
export default NavContext;
