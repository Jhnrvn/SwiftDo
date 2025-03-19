const SignInRedirect = ({ setRegister }) => {
  return (
    <>
      <h3 className="mt-20 text-center text-5xl font-semibold text-white">
        Already have an account?
      </h3>
      <p className="text-md mt-12 text-center text-white">
        Sign in with your email & password
      </p>
      <div className="mt-5 flex justify-center">
        <button
          className="ver:text-black mt-5 h-10 w-30 cursor-pointer rounded-3xl border text-white transition-all duration-150 ease-in hover:scale-105 hover:border-0 hover:bg-white hover:text-black"
          onClick={() => setRegister((prev) => !prev)}
        >
          SIGN IN
        </button>
      </div>
    </>
  );
};

export default SignInRedirect;
