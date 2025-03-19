import { useState } from "react";

// i: import icons
import { BsFillEyeFill } from "react-icons/bs";
import { BsFillEyeSlashFill } from "react-icons/bs";

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
    <form className="p-5" onSubmit={(e) => handleFormSubmit(e)}>
      <h2 className="my-5 text-center text-3xl font-semibold">Welcome Back!</h2>

      {/* email login input */}
      <label className="font-semibold" htmlFor="email">
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
      <label className="font-semibold" htmlFor="password">
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
            className="absolute top-2 right-3 size-6 cursor-pointer"
            onClick={() => setShowPassword((prev) => !prev)}
          />
        ) : (
          <BsFillEyeSlashFill
            className="absolute top-2 right-3 size-6 cursor-pointer"
            onClick={() => setShowPassword((prev) => !prev)}
          />
        )}
      </div>

      {/* remember me & forgot password container */}
      <div className="mb-10 flex justify-between">
        {/* remember me */}
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

        {/* forgot password  */}
        <div>
          <p className="cursor-pointer text-sm text-blue-500 underline underline-offset-2 transition duration-200 ease-in hover:text-blue-800">
            Forgot Password
          </p>
        </div>
      </div>
      <button className="h-10 w-full cursor-pointer rounded-sm bg-violet-500 py-1 text-white transition duration-200 ease-in hover:bg-violet-600">
        SIGN IN
      </button>
    </form>
  );
};

export default SignInForm;
