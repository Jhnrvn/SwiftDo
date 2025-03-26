import { useState } from "react";

// i: import Sign In & Sign Up form components
import SignInForm from "../components/forms/SignInForm";
import SignInRedirect from "../components/forms/SignInRedirect";
import SignUpForm from "../components/forms/SignUpForm";
import SignUpRedirect from "../components/forms/SignUpRedirect";

const LoginPage = () => {
  const [register, setRegister] = useState(false);
  return (
    <div className="grid min-h-screen w-full place-content-center">
      <div className="0 m-auto flex h-full w-full flex-wrap overflow-hidden rounded-lg bg-white shadow-lg md:h-130 md:w-200">
        {/* i: render sign in or sign up form */}
        <div className="w-full md:w-1/2">
          {register ? <SignUpForm setRegister={setRegister} /> : <SignInForm />}
        </div>
        {/* i: render sign in or sign up redirect */}
        <div className="min-h-100 w-full bg-gradient-to-tr from-blue-500 via-blue-500 to-violet-500 p-5 md:w-1/2 dark:from-violet-600 dark:via-violet-600 dark:to-blue-500">
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
