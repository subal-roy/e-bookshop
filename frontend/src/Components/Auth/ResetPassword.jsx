import React, {useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { validateNewPasswordForm } from "../../utils/validation";
import { resetPassword } from "../../api/auth";

const ResetPassword = () => {
  const [formData, setFormData] = useState({
    password: "",
    confirmPassword: "",
    token: "",
    email: ""
  });

  const [errors, setErrors] = useState({});
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const queryParams = new URLSearchParams(location.search);
    const token = queryParams.get("token");
    const email = queryParams.get("email");

    if (token && email) {
      setFormData((prevData) => ({ ...prevData, token, email }));
    } else {
      alert("Invalid reset link");
      navigate("/login"); 
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [location.search]);
  
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {console.log(formData)
    e.preventDefault();
    const formErrors = validateNewPasswordForm(formData);
    setErrors(formErrors);

    if (Object.keys(formErrors).length === 0) {
      const response = await resetPassword(formData);
      if(response.success){
        alert("You have succefully reset your password!!")
        navigate("/login");
      }else{
        setErrors(response.errors);
      }
    }
  };

  return (
    <div className="bg-gray-100 h-screen flex items-center justify-center">
      <div className="bg-white p-6 rounded-md shadow-md w-full max-w-md">
        <p className="text-2xl text-center">Reset Password</p>
        <form onSubmit={handleSubmit} className="space-y-4 mt-5">
          <div>
            <label htmlFor="password" className="block font-semibold">
              Enter a new password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              className="w-full border border-gray-400 rounded-sm p-2"
              placeholder="Enter a password"
            />
            {errors.password && (
              <p className="text-red-500 text-sm">{errors.password}</p>
            )}
          </div>
          <div>
            <label htmlFor="confirmPassword" className="block font-semibold">
              Confirm Password
            </label>
            <input
              type="password"
              id="confirmPassword"
              name="confirmPassword"
              value={formData.confirmPassword}
              onChange={handleChange}
              className="w-full border border-gray-400 rounded-sm p-2"
              placeholder="Confirm password"
            />
            {errors.confirmPassword && (
              <p className="text-red-500 text-sm">{errors.confirmPassword}</p>
            )}
          </div>
          {errors.general && (
              <div className="text-red-500 bg-red-200 p-2 rounded-md text-center  border border-red-300">
                {errors.general}
              </div>
            )}
          <button
            type="submit"
            className="w-full bg-blue-500 p-2 text-white rounded-md hover:bg-blue-400"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default ResetPassword;
