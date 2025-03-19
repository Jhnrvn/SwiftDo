import { useState } from "react";

// i: import Sign In & Sign Up form components
import SignInForm from "../components/forms/SignInForm";
import SignInRedirect from "../components/forms/SignInRedirect";
import SignUpForm from "../components/forms/SignUpForm";
import SignUpRedirect from "../components/forms/SignUpRedirect";
const LoginPage = () => {
  const [register, setRegister] = useState(false);
  return (
    <div className="min-h-screen w-full pt-35">
      <div className="0 m-auto flex h-110 w-200 overflow-hidden rounded-lg bg-white shadow-lg">
        {/* i: render sign in or sign up form */}
        <div className="w-1/2">
          {register ? <SignUpForm /> : <SignInForm />}
        </div>
        {/* i: render sign in or sign up redirect */}
        <div className="min-h-100 w-1/2 bg-gradient-to-tr from-blue-500 via-blue-500 to-violet-500 p-5">
          {register ? (
            <SignInRedirect setRegister={setRegister} />
          ) : (
            <SignUpRedirect setRegister={setRegister} />
          )}
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
