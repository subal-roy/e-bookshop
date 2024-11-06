import React, { useState } from "react";
import { FcGoogle } from "react-icons/fc";
import { Link, useNavigate } from "react-router-dom";

const Login = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [errors, setErrors] = useState({});
  const navigate = useNavigate();

  const validate = () => {
    const errors = {};
    if (!formData.email) errors.email = "Please enter email";
    if (!formData.password) errors.password = "Please enter passoword";
    return errors;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formErrors = validate();
    setErrors(formErrors);

    if (Object.keys(formErrors).length === 0) {
      try {
        const response = await fetch("http://127.0.0.1:8000/api/login", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
          body: JSON.stringify({
            email: formData.email,
            password: formData.password,
          }),
        });

        console.log(response);
        const contentType = response.headers.get("content-type");

        if (contentType && contentType.includes("application/json")) {
          const responseData = await response.json();
          console.log(responseData);

          if (response.ok) {
            navigate("/");
          } else {
            setErrors(
              responseData.errors || {
                general:
                  responseData.message || "An error occured. Please try again.",
              }
            );
          }
        } else {
          const errorText = await response.text();
          console.error("Expected JSON, received HTML:", errorText);
          setErrors({
            general: "An unexpected error occurred. Please try again.",
          });
        }
      } catch (error) {
        console.error(error);
        setErrors({ general: "Network error, please try again later." });
      }
    }
  };

  return (
    <div className="bg-gray-100 h-screen flex items-center justify-center">
      <div className="bg-white h-[480px] p-6 rounded-md shadow-md w-full max-w-md">
        <p className="text-2xl text-center">Login</p>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="email" className="block font-semibold">
              Email
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
          <div>
            <label htmlFor="password" className="block font-semibold">
              Password
            </label>
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              className="w-full border rounded-sm p-2"
              placeholder="Enter password"
            />
            {errors.password && (
              <p className="text-red-500 text-sm">{errors.password}</p>
            )}
          </div>
          {errors.general && (
            <div className="mt-2 p-3 bg-red-100 border border-red-300 text-red-600 rounded-md text-center">
              {errors.general}
            </div>
          )}
          <button
            type="submit"
            className="w-full bg-blue-500 p-2 text-white rounded-md hover:bg-blue-400"
          >
            Login
          </button>
          <div className="flex justify-center">
            <p>Don't have any account?</p>
            <Link to="/register" className="text-blue-500 pl-2">
              Register here.
            </Link>
          </div>
          <p className="text-center">OR</p>
          <button
            type="submit"
            className="w-full p-2 border rounded-md hover:bg-gray-100"
          >
            <div className="flex items-center justify-center">
              <FcGoogle size={20} />
              <span className="pl-2">Login with Google</span>
            </div>
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
