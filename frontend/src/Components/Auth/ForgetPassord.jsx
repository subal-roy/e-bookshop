import React, { useState } from "react";
import { sendResetPasswordLink } from "../../api/auth";
import { validateForgetPasswordForm } from "../../utils/validation";

const ForgetPassord = () => {
  const [formData, setFormData] = useState({
    email: "",
  });

  const [success, setSuccess] = useState(false);

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formErrors = validateForgetPasswordForm(formData);
    setErrors(formErrors);

    if (Object.keys(formErrors).length === 0) {
      const response = await sendResetPasswordLink(formData);
      console.log(response);
      if (response.success) {
        setSuccess(true);
      } else {
        setErrors(response.errors);
      }
    }
  };

  return (
    <div className="bg-gray-100 h-screen flex items-center justify-center">
      <div className="bg-white p-6 rounded-md shadow-md w-full max-w-md">
        <p className="text-2xl text-center mb-2">Reset Password</p>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="email" className="block font-semibold">
              Enter Your Email
            </label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full border rounded-sm p-2"
              placeholder="Enter your email"
            />
            {errors.email && (
              <p className="text-red-500 text-sm">{errors.email}</p>
            )}
          </div>
          {success && (
            <div className=" text-blue-500 text-center bg-green-100 p-2 border border-green-300 rounded-md">
              A link is sent to your email.
            </div>
          )}

          <button
            type="submit"
            className="w-full bg-blue-500 p-2 text-white rounded-md hover:bg-blue-400"
          >
            Sent Reset Password Link
          </button>
        </form>
      </div>
    </div>
  );
};

export default ForgetPassord;
