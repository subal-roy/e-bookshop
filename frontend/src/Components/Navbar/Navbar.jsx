import React, { useEffect, useState } from "react";
import "../../App.css";
import logo_light from "../../assets/logo-black.png";
import logo_dark from "../../assets/logo-white.png";
import search_icon_light from "../../assets/search-b.png";
import toogle_icon_light from "../../assets/night.png";
import toogle_icon_dark from "../../assets/day.png";
import menu_open from "../../assets/menu_icon.png";
import menu_close from "../../assets/menu_close_icon.png";

const Navbar = ({ theme, setTheme }) => {
  const [menu, setMenu] = useState(() => {
    return localStorage.getItem('menu') || false;
  });

  useEffect(() => {
    localStorage.setItem('menu', menu);
  }, [menu]);

  const toggle_mode = () => {
    theme === "light" ? setTheme("dark") : setTheme("light");
  };

  return (
    <div
      className={`flex items-center justify-between px-2 md:px-10 py-2 lg:px-20 py-4 border-b-2 border-black ${
        theme === "light" ? "bg-white" : "bg-black"
      }`}
    >
      <img
        src={theme === "light" ? logo_light : logo_dark}
        alt="logo"
        className="w-[100px] sm:w-[120px] md:w-[150px] cursor-pointer"
      />

      <div className="hidden md:flex items-center justify-between">
        <input
          type="text"
          placeholder="search"
          className="w-[150px] sm:w-[250px] lg:w-[300px] p-2 border bg-gray-100 border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
        />

        <img
          src={search_icon_light}
          alt=""
          className="w-5 h-5 cursor-pointer mx-[-25px]"
        />
      </div>

      <ul
        className={`${
          theme === "light" ? "text-black" : "text-white"
        } hidden lg:flex items-center text-base lg:text-xl`}
      >
        <li className="mx-6 cursor-pointer">Home</li>
        <li className="mx-6 cursor-pointer">Categories</li>
        <li className="mx-6 cursor-pointer">Writers</li>
        <li className="mx-6 cursor-pointer">Publishers</li>
        <li className="mx-6 cursor-pointer">e-Books</li>
        <li className="mx-6 cursor-pointer">Subal Roy</li>
      </ul>

      <img
        onClick={() => {
          toggle_mode();
        }}
        src={theme === "light" ? toogle_icon_light : toogle_icon_dark}
        alt=""
        className="hidden sm:block md:w-[30px] cursor-pointer"
      />


        <img onClick={() => setMenu(!menu)} src={menu === true ? menu_close : menu_open} alt="" className="block w-6 h-6 lg:hidden" />

      {/* Mobile Dropdown Menu */}
      {menu && (
        <div
          className={`absolute top-11 left-0 w-full bg-gray-200 ${
            theme === "light" ? "text-black" : "text-white"
          } flex flex-col items-center lg:hidden py-4 space-y-4`}
        >
          <p className="cursor-pointer">
            Home
          </p>
          <p className="cursor-pointer">
            Categories
          </p>
          <p className="cursor-pointer">
            Writers
          </p>
          <p className="cursor-pointer">
            Publishers
          </p>
          <p className="cursor-pointer">
            e-Books
          </p>
          <p className="cursor-pointer">
            Subal Roy
          </p>
        </div>
      )}
    </div>
  );
};

export default Navbar;
