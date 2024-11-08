export const validateLoginForm = (formData) => {
  const errors = {};
  if (!formData.email) errors.email = "Please enter email";
  if (!formData.password) errors.password = "Please enter password";
  return errors;
};

export const validateSignUpForm = (formData) => {
  const errors = {};
  if (!formData.name) errors.name = "Name is required";
  if (!formData.email) errors.email = "Email is required";
  if (!formData.password) errors.password = "Password is required";
  if (formData.password !== formData.confirmPassword) {
    errors.confirmPassword = "Passwords do not match";
  }
  return errors;
};

export const validateForgetPasswordForm = (formData) => {
  const errors = {};
  if (!formData.email) errors.email = "Please enter email";
  return errors;
};

export const validateNewPasswordForm = (formData) => { 
  const errors = {};
  if (!formData.password) errors.password = "Please is required";
  if (formData.password !== formData.confirmPassword) { 
    errors.confirmPassword = "Passwords do not match"
  }
  return errors;
};
