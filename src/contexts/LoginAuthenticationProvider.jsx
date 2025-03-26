import { createContext } from "react";

const LoginAuthenticationContext = createContext();
const LoginAuthenticationProvider = ({ children }) => {
  return (
    <LoginAuthenticationContext.Provider>
      {children}
    </LoginAuthenticationContext.Provider>
  );
};

export default LoginAuthenticationProvider;
