import React from "react";
import Navbar from "../Navbar/Navbar";

const MainLayout = ({ theme, setTheme, children }) => {
  return (
    <div>
      <Navbar theme={theme} setTheme={setTheme} />
      <div
        className={`${
          theme === "light" ? "bg-gray-100" : "bg-black"
        } scrollable-container`}
      >
        {children}
      </div>
    </div>
  );
};

export default MainLayout;
