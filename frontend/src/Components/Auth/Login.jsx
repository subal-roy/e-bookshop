import React, { useState } from "react";
import { FcGoogle } from "react-icons/fc";
import { Link, useNavigate } from "react-router-dom";
import { login } from "../../api/auth";
import { validateLoginForm } from "../../utils/validation";
import { useUser } from "../../contexts/UserContext";


const Login = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [errors, setErrors] = useState({});
  const navigate = useNavigate();
  const {signin} = useUser();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formErrors = validateLoginForm(formData);
    setErrors(formErrors);

    if (Object.keys(formErrors).length === 0) {
      const response = await login(formData);
      if (response.success) {
        console.log(response.data.data.user);
        signin(response.data.data.user);
        navigate("/");
      } else {
        setErrors(response.errors);
      }
    }
  };

  return (
    <div className="bg-gray-100 h-screen flex items-center justify-center">
      <div className="bg-white p-6 rounded-md shadow-md w-full max-w-md">
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
          <Link to="/forget-password" className="text-blue-500">Forget Password?</Link>
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
