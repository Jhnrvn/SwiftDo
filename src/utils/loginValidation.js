const loginValidation = (data) => {
  // i: retrieve all accounts
  const account = JSON.parse(localStorage.getItem("account")) || [];

  // i: check if user exists
  const user = account.find(
    (user) => user.email === data.email && user.password === data.password,
  );

  // i: check if user already exists
  if (user) {
    return { isValid: true, message: "Successfully logged in!" };
  }

  if (data.email === "" || data.password === "") {
    return { isValid: false, message: "All fields are required." };
  } else {
    return { isValid: false, message: "Invalid email or password." };
  }
};

export default loginValidation;
