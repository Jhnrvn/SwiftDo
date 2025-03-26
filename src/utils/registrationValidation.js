const registrationValidation = (form) => {
  const accounts = JSON.parse(localStorage.getItem("account")) || [];

  const { email, password, confirmPassword, terms } = form;
  const emailExists = accounts.some((account) => account.email === form.email);

  // i: checks if user email already exist
  if (emailExists) {
    return { isValid: false, message: "Email already exists." };
  }

  // i: checks if all fields are filled and user inputs are all valid
  if (email === "" || password === "" || confirmPassword === "") {
    return { isValid: false, message: "All fields are required." };
  } else if (password !== confirmPassword) {
    return { isValid: false, message: "Passwords do not match." };
  } else if (password.length < 8) {
    return {
      isValid: false,
      message: "Password must be at least 8 characters.",
    };
  } else if (!terms) {
    return {
      isValid: false,
      message: "You must agree to the terms and conditions.",
    };
  } else {
    return { isValid: true, message: "Successfully registered!" };
  }
};

export default registrationValidation;
