import { useState } from "react";

// i: import icons
import { BsFillEyeFill, BsFillEyeSlashFill } from "react-icons/bs";

const SignUpForm = () => {
  // i: form input
  const formInput = {
    email: "",
    password: "",
    confirmPassword: "",
    terms: false,
  };

  // i: state of form input
  const [form, setForm] = useState(formInput);

  // i: handle form Input Change
  const handleInputChange = (e) => {
    e.preventDefault();
    const { id, value } = e.target;
    setForm({ ...form, [id]: value });
  };

  const handleTerms = (e) => {
    const { name, checked } = e.target;
    setForm({ ...form, [name]: checked });
    console.log(form);
  };
  // i: toggle password
  const togglePassword = {
    password: false,
    confirmPassword: false,
  };
  const [showPassword, setShowPassword] = useState(togglePassword);

  return (
    <form
      className="h-full p-5 dark:bg-slate-500"
      onSubmit={(e) => handleInputChange(e)}
    >
      <h2 className="my-5 text-center text-3xl font-semibold dark:text-white">
        Create Account
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
      <label className="font-semibold dark:text-white" htmlFor="password">
        Password
      </label>
      <div className="relative">
        <input
          className="mb-3 h-10 w-full rounded-sm bg-slate-100 px-2 ring-1 ring-slate-300"
          type={showPassword.password ? "text" : "password"}
          id="password"
          value={form.password}
          onChange={(e) => handleInputChange(e)}
        />
        {showPassword.password ? (
          <BsFillEyeFill
            className="absolute top-2.5 right-3 size-5 cursor-pointer text-slate-600"
            onClick={() =>
              setShowPassword({
                ...showPassword,
                password: !showPassword.password,
              })
            }
          />
        ) : (
          <BsFillEyeSlashFill
            className="absolute top-2.5 right-3 size-5 cursor-pointer text-slate-600"
            onClick={() =>
              setShowPassword({
                ...showPassword,
                password: !showPassword.password,
              })
            }
          />
        )}
      </div>
      <label
        className="font-semibold dark:text-white"
        htmlFor="confirmPassword"
      >
        Confirm Password
      </label>
      <div className="relative">
        <input
          className="mb-3 h-10 w-full rounded-sm bg-slate-100 px-2 ring-1 ring-slate-300"
          type={showPassword.confirmPassword ? "text" : "password"}
          id="confirmPassword"
          value={form.confirmPassword}
          onChange={(e) => handleInputChange(e)}
        />
        {showPassword.confirmPassword ? (
          <BsFillEyeFill
            className="absolute top-2.5 right-3 size-5 cursor-pointer text-slate-600"
            onClick={() =>
              setShowPassword({
                ...showPassword,
                confirmPassword: !showPassword.confirmPassword,
              })
            }
          />
        ) : (
          <BsFillEyeSlashFill
            className="absolute top-2.5 right-3 size-5 cursor-pointer text-slate-600"
            onClick={() =>
              setShowPassword({
                ...showPassword,
                confirmPassword: !showPassword.confirmPassword,
              })
            }
          />
        )}
      </div>
      <div className="mb-5 flex items-center gap-2">
        {/* checkbox button for terms & condition */}
        <input
          className="size-3 cursor-pointer accent-emerald-600 dark:accent-violet-500"
          type="checkbox"
          name="terms"
          id="terms"
          checked={form.terms}
          onChange={(e) => handleTerms(e)}
        />
        <p className="text-sm dark:text-white">
          I agree to the{" "}
          <span className="cursor-pointer font-semibold text-blue-500 transition duration-200 ease-in hover:text-blue-700 dark:text-black">
            Terms
          </span>{" "}
          and{" "}
          <span className="cursor-pointer font-semibold text-blue-500 transition duration-200 ease-in hover:text-blue-700 dark:text-black">
            Conditions
          </span>
        </p>
      </div>
      <button className="h-10 w-full cursor-pointer rounded-sm bg-violet-500 py-1 text-white transition duration-200 ease-in hover:bg-violet-600 dark:bg-slate-700 dark:hover:bg-slate-800">
        SIGN UP
      </button>
    </form>
  );
};

export default SignUpForm;
