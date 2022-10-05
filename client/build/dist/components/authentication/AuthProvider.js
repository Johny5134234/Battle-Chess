import React from "../../../_snowpack/pkg/react.js";
import {useState} from "../../../_snowpack/pkg/react.js";
const AuthContext = React.createContext({});
export const AuthProvider = ({children}) => {
  const [auth, setAuth] = useState();
  return /* @__PURE__ */ React.createElement(AuthContext.Provider, {
    value: (auth, setAuth)
  }, children);
};
export default AuthContext;
