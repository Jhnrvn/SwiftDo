import { useState } from "react";
// i: import icons
import { BsFillEyeFill, BsFillEyeSlashFill } from "react-icons/bs";



const SignInForm = () => {
  // i: form input
  const formInput = {
    email: "",
    password: "",
  };

  // i: state of form input
  const [form, setForm] = useState(formInput);

  // i: handle form input change
  const handleInputChange = (e) => {
    const { id, value } = e.target;
    setForm({ ...form, [id]: value });
    console.log(form);
  };

  // i: handle form submission
  const handleFormSubmit = (e) => {
    e.preventDefault();
  };

  // i: toggle password
  const [showPassword, setShowPassword] = useState(false);

  return (
    <form
      className="h-full w-full p-5 dark:bg-slate-500"
      onSubmit={(e) => handleFormSubmit(e)}
    >
      <h2 className="font-poppins my-5 text-center text-3xl font-semibold dark:text-white">
        Welcome Back!
      </h2>

      {/* email login input */}
      <label className="font-semibold dark:text-white" htmlFor="email">
        Email
      </label>
      <input
        className="mb-3 h-10 w-full rounded-sm bg-slate-100 px-2 ring-1 ring-slate-300"
        type="email"
        id="email"
        value={form.email}
        onChange={(e) => handleInputChange(e)}
      />

      {/* password login input */}
      <label className="font-semibold dark:text-white" htmlFor="password">
        Password
      </label>
      <div className="relative">
        <input
          className="mb-3 h-10 w-full rounded-sm bg-slate-100 px-2 ring-1 ring-slate-300"
          type={showPassword ? "text" : "password"}
          id="password"
          value={form.password}
          onChange={(e) => handleInputChange(e)}
        />
        {showPassword ? (
          <BsFillEyeFill
            className="absolute top-2.5 right-3 size-5 cursor-pointer text-slate-600 dark:text-violet-700"
            onClick={() => setShowPassword((prev) => !prev)}
          />
        ) : (
          <BsFillEyeSlashFill
            className="absolute top-2.5 right-3 size-5 cursor-pointer text-slate-600 dark:text-violet-700"
            onClick={() => setShowPassword((prev) => !prev)}
          />
        )}
      </div>

      {/* remember me & forgot password container */}
      <div className="mb-10 flex justify-between">
        {/* remember me */}
        <div className="flex items-center gap-2">
          <input
            className="size-3 cursor-pointer accent-emerald-600 dark:accent-violet-500"
            type="checkbox"
            name=""
            id="remember"
          />
          <label
            htmlFor="remember"
            className="cursor-pointer text-sm dark:text-white"
          >
            Remember me
          </label>
        </div>

        {/* forgot password  */}
        <div>
          <p className="dark:hover:text-gray-00 cursor-pointer text-sm font-semibold text-blue-500 underline underline-offset-2 transition duration-200 ease-in hover:text-blue-800 dark:text-white">
            Forgot Password
          </p>
        </div>
      </div>
      <button className="h-10 w-full cursor-pointer rounded-sm bg-violet-500 py-1 text-white transition duration-200 ease-in hover:bg-violet-600 dark:bg-slate-700 dark:hover:bg-slate-800">
        SIGN IN
      </button>
    </form>
  );
};

export default SignInForm;
