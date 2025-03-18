import { useState } from "react";

// i: import Sign In & Sign Up form components
import SignInForm from "../components/SignInForm";
import SignUpForm from "../components/SignUpForm";
const LoginPage = () => {
  const [register, setRegister] = useState(false);
  return (
    <div className="min-h-screen w-full pt-35">
      <div className="0 m-auto flex w-200 h-110 rounded-lg bg-white shadow-lg overflow-hidden">
        <div className="w-1/2">
          {register ? (
            <SignUpForm setRegister={setRegister} />
          ) : (
            <SignInForm setRegister={setRegister} />
          )}
        </div>
        <div className="min-h-100 w-1/2  bg-gradient-to-tr from-cyan-500 to-blue-500"></div>
      </div>
    </div>
  );
};

export default LoginPage;
