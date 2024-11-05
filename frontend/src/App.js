import React, { useState } from "react";
import "./App.css";
import Navbar from "./Components/Navbar/Navbar";
import { useEffect } from "react";
import SlideShow from "./Components/SlideShow";
import CategoryContainer from "./Components/CategoryContainer/CategoryContainer";

const App = () => {
  const [theme, setTheme] = useState(() => {
    return localStorage.getItem("theme") || "light";
  });

  useEffect(() => {
    localStorage.setItem("theme", theme);
  }, [theme]);

  return (
    <div className={`${theme === "light" ? "bg-white" : "bg-black"}`}>
      <Navbar theme={theme} setTheme={setTheme} />
      <div className={`${theme === "light" ? "bg-gray-100" : "bg-black"}`}>
        <SlideShow />
        <CategoryContainer/>
      </div>
    </div>
  );
};

export default App;
