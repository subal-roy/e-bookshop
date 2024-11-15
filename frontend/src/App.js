import React, { useState } from "react";
import "./App.css";
import { useEffect } from "react";
import SlideShow from "./Components/SlideShow";
import CategoryContainer from "./Components/CategoryContainer/CategoryContainer";
import { Routes, BrowserRouter as Router, Route } from "react-router-dom";
import SignUp from "./Components/Auth/SignUp";
import Login from "./Components/Auth/Login";
import ForgetPassord from "./Components/Auth/ForgetPassord";
import ResetPassword from "./Components/Auth/ResetPassword";
import TrendingBooks from "./Components/TrendingBooks";
import Search from "./Components/Search/Search";
import MainLayout from "./Components/Layout/MainLayout";

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
          <Route path="/reset-password" element={<ResetPassword />} />
          <Route
            path="/"
            element={
              <MainLayout theme={theme} setTheme={setTheme}>
                <SlideShow />
                <CategoryContainer />
                <TrendingBooks />
              </MainLayout>
            }
          />
          <Route
            path="/search"
            element={
              <MainLayout theme={theme} setTheme={setTheme}>
                <Search />
              </MainLayout>
            }
          />
        </Routes>
      </Router>
    </div>
  );
};

export default App;
