/* eslint-disable react-refresh/only-export-components */
import { useState, useContext, createContext } from "react";

const LoginAuthenticationContext = createContext();

// i: custom hook to use authentication
export const useAuthentication = () => {
  return useContext(LoginAuthenticationContext);
};
export const LoginAuthenticationProvider = ({ children }) => {
  const [authenticated, setAuthenticated] = useState(false);
  return (
    <LoginAuthenticationContext.Provider
      value={{ authenticated, setAuthenticated }}
    >
      {children}
    </LoginAuthenticationContext.Provider>
  );
};
