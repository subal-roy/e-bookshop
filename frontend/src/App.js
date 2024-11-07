import React, { useState } from "react";
import "./App.css";
import Navbar from "./Components/Navbar/Navbar";
import { useEffect } from "react";
import SlideShow from "./Components/SlideShow";
import CategoryContainer from "./Components/CategoryContainer/CategoryContainer";
import {Routes, BrowserRouter as Router, Route} from 'react-router-dom';
import SignUp from "./Components/Auth/SignUp";
import Login from "./Components/Auth/Login";

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
          <Route exect path="/login" Component={Login}/>
          <Route exect path="/register" Component={SignUp}/>
        </Routes>
      <Navbar theme={theme} setTheme={setTheme} />
      <div className={`${theme === "light" ? "bg-gray-100" : "bg-black"}`}>
        <SlideShow />
        <CategoryContainer/>
      </div>
      </Router>
    </div>
  );
};

export default App;
