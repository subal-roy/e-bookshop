import React from "react";

const DropdownModal = ({ theme, items }) => {
  return (
    <div
      className={`absolute px-10 w-[50vw] left-1/2 transform -translate-x-1/2 ${
        theme === "light" ? "bg-gray-100 text-black" : "bg-gray-700 text-white"
      } shadow-lg rounded-md z-10`}
    >
      <div className="grid grid-cols-4 text-center pt-5">
        {items&&items.map((item, index) => (
          <p key={index} className="cursor-pointer py-3 hover:text-blue-500">
            {item}
          </p>
        ))}
      </div>
    </div>
  );
};

export default DropdownModal;
