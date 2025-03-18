const SignInForm = () => {
  return (
    <form className="p-5">
      <h2 className="my-5 text-center text-3xl">Welcome Back!</h2>

      {/* email login input */}
      <label className="font-semibold" htmlFor="email">
        Email
      </label>
      <input
        className="mb-3 h-10 w-full rounded-sm bg-slate-100 px-2 ring-1 ring-slate-300"
        type="text"
        id="email"
      />

      {/* password login input */}
      <label className="font-semibold" htmlFor="password">
        Password
      </label>
      <input
        className="mb-3 h-10 w-full rounded-sm bg-slate-100 px-2 ring-1 ring-slate-300"
        type="password"
        id="password"
      />
      {/* remember me & forgot password container */}
      <div className="mb-10 flex justify-between">
        <div className="flex items-center gap-2">
          <input
            className="size-3 cursor-pointer accent-emerald-600"
            type="checkbox"
            name=""
            id="remember"
          />
          <label htmlFor="remember" className="cursor-pointer text-sm">
            Remember me
          </label>
        </div>
        <div>
          <p className="text-sm text-blue-500 underline underline-offset-2">
            Forgot Password
          </p>
        </div>
      </div>
      <button className="h-10 w-full cursor-pointer rounded-sm bg-violet-500 py-1 text-white transition duration-200 ease-in hover:bg-violet-600">
        Sign In
      </button>
    </form>
  );
};

export default SignInForm;
