import React, { useState } from "react";
import { IoMdArrowDropdown } from "react-icons/io";
import FilterComponent from "./FilterComponent";

const categories = [
  { id: 1, title: "Science" },
  { id: 1, title: "Novel" },
  { id: 1, title: "Poem" },
  { id: 1, title: "Arts" },
];
const authors = [
  { id: 1, title: "Author1" },
  { id: 1, title: "Author2" },
  { id: 1, title: "Author3" },
  { id: 1, title: "Author4" },
];

const publishers = [
  { id: 1, title: "publisher1" },
  { id: 1, title: "publisher2" },
  { id: 1, title: "publisher3" },
  { id: 1, title: "publisher4" },
];

const Sidebar = () => {
  const [showCatergoryList, setShowCategoryList] = useState(false);
  const [showAuthorList, setShowAuthorList] = useState(false);
  const [showPublisherList, setShowPublisherList] = useState(false);
  return (
    <div className="hidden md:block w-1/5 m-5 min-h-screen">
      {/* Filters */}
      <div className="bg-white rounded-md shadow-md">
        <h1 className="text-xl font-semibold p-3">Filters</h1>
        <hr />
        <div className="cursor-pointer">
          <div
            className={`flex items-center justify-between p-3 hover:bg-gray-100 ${
              showCatergoryList ? "bg-gray-100" : ""
            }`}
            onClick={() => setShowCategoryList(!showCatergoryList)}
          >
            <h1>Categories</h1>
            <IoMdArrowDropdown size={20} />
          </div>

          {showCatergoryList && <FilterComponent items={categories} />}

          <hr />

          <div
            className={`flex items-center justify-between p-3 hover:bg-gray-100 ${
              showAuthorList ? "bg-gray-100" : ""
            }`}
            onClick={() => setShowAuthorList(!showAuthorList)}
          >
            <h1>Authors</h1>
            <IoMdArrowDropdown size={20} />
          </div>

          {showAuthorList && <FilterComponent items={authors} />}

          <hr />
          <div
            className={`flex items-center justify-between p-3 hover:bg-gray-100 ${
              showPublisherList ? "bg-gray-100" : ""
            }`}
            onClick={() => setShowPublisherList(!showPublisherList)}
          >
            <h1>Publishers</h1>
            <IoMdArrowDropdown size={20} />
          </div>
          {showPublisherList && <FilterComponent items={publishers} />}
        </div>
      </div>

      {/* Sort */}
      <div className="bg-white rounded-md shadow-md mt-5">
        <h1 className="text-xl font-semibold p-3">Sort</h1>
        <hr />
        <div className="flex flex-col p-3 gap-2">
          <div className="flex gap-2 items-center">
            <input type="radio" />
            <h1>Best Seller</h1>
          </div>
          <div className="flex gap-2 items-center">
            <input type="radio" />
            <h1>Price Low to High</h1>
          </div>
          <div className="flex gap-2 items-center">
            <input type="radio" />
            <h1>Price High to Low</h1>
          </div>
        </div>
      </div>

      {/* In Stock */}
      <div className="bg-white rounded-md shadow-md mt-5">
        <div className="flex gap-2 items-center p-3">
          <input type="checkbox" />
          <h1 className="text-xl font-semibold">In Stock</h1>
        </div>
      </div>

      {/* Shop by price */}
      <div className="bg-white rounded-md shadow-md mt-5">
        <h1 className="text-xl font-semibold p-3">Shop by Price</h1>
        <hr />
      </div>
    </div>
  );
};

export default Sidebar;
