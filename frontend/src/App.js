import React, { useState } from "react";
import "./App.css";
import Navbar from "./Components/Navbar/Navbar";
import { useEffect } from "react";
import SlideShow from "./Components/SlideShow";
import CategoryContainer from "./Components/CategoryContainer/CategoryContainer";
import { Routes, BrowserRouter as Router, Route } from "react-router-dom";
import SignUp from "./Components/Auth/SignUp";
import Login from "./Components/Auth/Login";
import ForgetPassord from "./Components/Auth/ForgetPassord";
import ResetPassword from "./Components/Auth/ResetPassword";

const App = () => {
  const [theme, setTheme] = useState(() => {
    return localStorage.getItem("theme") || "light";
  });

  useEffect(() => {
    localStorage.setItem("theme", theme);
  }, [theme]);

  return (
    <div className={`${theme === "light" ? "bg-white" : "bg-black"}`}>
      <Router>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<SignUp />} />
          <Route path="/forget-password" element={<ForgetPassord />} />
          <Route path="/reset-password" element={<ResetPassword />}/>
          <Route
            path="/"
            element={
              <>
                <Navbar theme={theme} setTheme={setTheme} />
                <div
                  className={`${
                    theme === "light" ? "bg-gray-100" : "bg-black"
                  }`}
                >
                  <SlideShow />
                  <CategoryContainer />
                </div>
              </>
            }
          />
        </Routes>
      </Router>
    </div>
  );
};

export default App;
