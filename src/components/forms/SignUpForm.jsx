import { useState } from "react";

// i: import icons
import { BsFillEyeFill } from "react-icons/bs";
import { BsFillEyeSlashFill } from "react-icons/bs";

const SignUpForm = () => {
  // i: form input
  const formInput = {
    email: "",
    password: "",
    confirmPassword: "",
  };

  // i: state of form input
  const [form, setForm] = useState(formInput);

  // i: handle form Input Change
  const handleInputChange = (e) => {
    e.preventDefault();
    const { id, value } = e.target;
    setForm({ ...form, [id]: value });
  };

  // i: toggle password
  const togglePassword = {
    password: false,
    confirmPassword: false,
  };
  const [showPassword, setShowPassword] = useState(togglePassword);

  return (
    <form className="p-5" onSubmit={(e) => handleInputChange(e)}>
      <h2 className="my-5 text-center text-3xl font-semibold">
        Create Account
      </h2>
      {/* email login input */}
      <label className="font-semibold" htmlFor="email">
        Email
      </label>
      <input
        className="mb-3 h-10 w-full rounded-sm bg-slate-100 px-2 ring-1 ring-slate-300"
        type="email"
        id="email"
        value={form.email}
      />
      <label className="font-semibold" htmlFor="password">
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
            className="absolute top-2 right-3 size-6 cursor-pointer"
            onClick={() =>
              setShowPassword({
                ...showPassword,
                password: !showPassword.password,
              })
            }
          />
        ) : (
          <BsFillEyeSlashFill
            className="absolute top-2 right-3 size-6 cursor-pointer"
            onClick={() =>
              setShowPassword({
                ...showPassword,
                password: !showPassword.password,
              })
            }
          />
        )}
      </div>
      <label className="font-semibold" htmlFor="confirmPassword">
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
            className="absolute top-2 right-3 size-6 cursor-pointer"
            onClick={() =>
              setShowPassword({
                ...showPassword,
                confirmPassword: !showPassword.confirmPassword,
              })
            }
          />
        ) : (
          <BsFillEyeSlashFill
            className="absolute top-2 right-3 size-6 cursor-pointer"
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
        <input
          className="size-3 cursor-pointer accent-emerald-600"
          type="checkbox"
          name=""
          id=""
        />
        <p className="text-sm">I agree to the terms and conditions</p>
      </div>
      <button className="h-10 w-full cursor-pointer rounded-sm bg-violet-500 py-1 text-white transition duration-200 ease-in hover:bg-violet-600">
        SIGN UP
      </button>
    </form>
  );
};

export default SignUpForm;
