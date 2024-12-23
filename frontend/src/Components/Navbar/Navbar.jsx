import React, { useEffect, useState } from "react";
import "../../App.css";
import logo_light from "../../assets/logo-black.png";
import logo_dark from "../../assets/logo-white.png";
import search_icon_light from "../../assets/search-b.png";
import toogle_icon_light from "../../assets/night.png";
import toogle_icon_dark from "../../assets/day.png";
import menu_open from "../../assets/menu_icon.png";
import menu_close from "../../assets/menu_close_icon.png";
import DropdownModal from "./DropdownModal";
import { Link, useNavigate } from "react-router-dom";
import { useUser } from "../../contexts/UserContext";
import { IoMdArrowDropdown } from "react-icons/io";
import { getAllBookCategory } from "../../api/bookCategory";

const fetchCategories = async () => {
  try {
    const response = await getAllBookCategory();
    const categoryNames = response.data.map((item) => item.name);
    return categoryNames;
  } catch (error) {
    console.error("Failed to fetch categories:", error);
    return [];
  }
};

const Navbar = ({ theme, setTheme }) => {
  const [menu, setMenu] = useState(() => {
    return localStorage.getItem("menu") || false;
  });

  const [hoveredItem, setHoveredItem] = useState(null);
  const [categories, setCategories] = useState(null);

  const { user, signout } = useUser();
  const [showLogout, setShowLogout] = useState(false);

  const [searchText, setSearchText] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    localStorage.setItem("menu", menu);
  }, [menu]);

  useEffect(() => {
    const loadCategories = async () => {
      const fetchedCategories = await fetchCategories();
      setCategories(fetchedCategories);
    };
    loadCategories();
  }, []);

  const toggle_mode = () => {
    theme === "light" ? setTheme("dark") : setTheme("light");
  };

  const handleSearch = () => {
    if (searchText && searchText.trim()) {
      navigate(`/search?term=${encodeURIComponent(searchText.trim())}`);
    }
  };

  const navItems = [
    { label: "Home", link: "/", hasModal: false },
    {
      label: "Categories",
      link: "/categories",
      hasModal: true,
      modalItems: categories,
    },
    {
      label: "Writers",
      link: "/writers",
      hasModal: true,
      modalItems: ["Author A", "Author B", "Author C"],
    },
    { label: "Publishers", link: "/publishers", hasModal: false },
    { label: "e-Books", link: "/ebooks", hasModal: false },
  ];

  return (
    <div
      className={`w-3/4  m-auto py-1 ${
        theme === "light" ? "text-black" : "text-white"
      }`}
    >
      <div
        className={"flex items-center justify-between md:px-10 py-2 lg:px-20"}
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
            required
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
            className="w-[150px] md:w-[350px] p-2 border bg-gray-100 border-gray-300 rounded-md focus:outline-none focus:border-blue-500 text-gray-700"
          />

          <button
            className="mx-[-25px] cursor-pointer"
            onClick={handleSearch}
            disabled={!(searchText && searchText.trim())}
          >
            <img src={search_icon_light} alt="" className="w-5 h-5" />
          </button>
        </div>
        <div className="flex items-center gap-4">
          {user ? (
            <div className="relative flex flex-col items-center">
              <div className="flex flex-row items-center">
                <p>{user.name}</p>
                <IoMdArrowDropdown
                  onClick={() => setShowLogout(!showLogout)}
                  className="cursor-pointer"
                />
                {showLogout && (
                  <div
                    className={`absolute top-full right-0 bg-white dark:bg-gray-800 z-10 border border-gray-300 dark:border-gray-700 mt-2 flex flex-col shadow-lg`}
                  >
                    <Link to="/profile">
                      <button className="px-4 py-1 w-full text-left text-gray-800 dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">
                        Profile
                      </button>
                    </Link>
                    <hr />
                    <button
                      onClick={signout}
                      className="px-4 py-1 text-left text-gray-800 dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700"
                    >
                      Logout
                    </button>
                  </div>
                )}
              </div>
            </div>
          ) : (
            <Link to="/login">Login</Link>
          )}
          <img
            onClick={() => {
              toggle_mode();
            }}
            src={theme === "light" ? toogle_icon_light : toogle_icon_dark}
            alt=""
            className="hidden sm:block md:w-[30px] cursor-pointer"
          />
        </div>
        <img
          onClick={() => setMenu(!menu)}
          src={menu === true ? menu_close : menu_open}
          alt=""
          className="block w-6 h-6 lg:hidden"
        />
        {/* Mobile Dropdown Menu */}
        {menu && (
          <div
            className={`absolute top-11 left-0 w-full bg-gray-200 ${
              theme === "light" ? "text-black" : "text-white"
            } flex flex-col items-center lg:hidden py-4 space-y-4`}
          >
            <p className="cursor-pointer">Home</p>
            <p className="cursor-pointer">Categories</p>
            <p className="cursor-pointer">Writers</p>
            <p className="cursor-pointer">Publishers</p>
            <p className="cursor-pointer">e-Books</p>
            <p className="cursor-pointer">Subal Roy</p>
          </div>
        )}
      </div>
      <div className="flex justify-center">
        <div className="hidden sm:block pt-2">
          <ul className="flex items-center">
            {navItems.map((item) => (
              <li
                key={item.label}
                className="relative cursor-pointer px-5 text-xl hover:text-blue-500"
                onMouseEnter={() => item.hasModal && setHoveredItem(item.label)}
                onMouseLeave={() => setHoveredItem(null)}
              >
                <a href={item.link}>{item.label}</a>

                {/* Conditionally render the modal on hover */}
                {item.hasModal && hoveredItem === item.label && (
                  <DropdownModal theme={theme} items={item.modalItems} />
                )}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
