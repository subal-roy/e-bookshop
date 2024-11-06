import React, { useEffect, useState } from "react";
import { FcGoogle } from "react-icons/fc";
import { Link, useNavigate } from "react-router-dom";

const SignUp = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [errors, setErrors] = useState({});
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const validate = () => {
    const errors = {};
    if (!formData.name) errors.name = "Name is Required";
    if (!formData.email) errors.email = "Email is Required";
    if (!formData.password) errors.password = "Password is Required";
    if (formData.password !== formData.confirmPassword) {
      errors.confirmPassword = "Passwords do not match";
    }
    return errors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formErrors = validate();
    setErrors(formErrors);

    if (Object.keys(formErrors).length === 0) {
      try {
        const response = await fetch("http://127.0.0.1:8000/api/register", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            "Accept": "application/json",
          },
          body: JSON.stringify({
            name: formData.name,
            email: formData.email,
            password: formData.password,
            password_confirmation: formData.confirmPassword,
          }),
        });
        console.log(response);
        const contentType = response.headers.get("content-type");
        
        if (contentType && contentType.includes("application/json")) {
          const responseData = await response.json();
          console.log(responseData);

          if (response.ok) {
            alert("You have registered successfully!! Please login.")
            navigate("/login")
          } else {
            setErrors(
              responseData.errors || {
                general:
                  responseData.message ||
                  "An error occurred. Please try again.",
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
      <div className="bg-white p-6 rounded-md shadow-md w-full max-w-md">
        <p className="text-2xl text-center">Sign Up</p>
        <form onSubmit={handleSubmit} className="space-y-4 mt-5">
          <div>
            <label htmlFor="name" className="block font-semibold">
              Your Name
            </label>
            <input
              type="name"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full border rounded-sm p-2"
              placeholder="Enter your name"
            />
            {errors.name && (
              <p className="text-red-500 text-sm">{errors.name}</p>
            )}
          </div>
          <div>
            <label htmlFor="email" className="block font-semibold">
              Email
            </label>
            <input
              type="email"
              id="email"
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
              id="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              className="w-full border rounded-sm p-2"
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
              className="w-full border rounded-sm p-2"
              placeholder="Confirm password"
            />
            {errors.confirmPassword && (
              <p className="text-red-500 text-sm">{errors.confirmPassword}</p>
            )}
          </div>
          <button
            type="submit"
            className="w-full bg-blue-500 p-2 text-white rounded-md hover:bg-blue-400"
          >
            Sign Up
          </button>
          <div className="flex justify-center">
            <p>Already have an account?</p>
            <Link to="/login" className="text-blue-500 pl-2">
              Login here.
            </Link>
          </div>
          <p className="text-center">OR</p>
          <button
            type="submit"
            className="w-full p-2 border rounded-md hover:bg-gray-100"
          >
            <div className="flex items-center justify-center">
              <FcGoogle size={20} />
              <span className="pl-2">Sign Up with Google</span>
            </div>
          </button>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
