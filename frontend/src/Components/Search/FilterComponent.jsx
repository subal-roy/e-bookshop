import React from "react";

const FilterComponent = ({ items }) => {
  return (
    <div className="p-2">
      <div className="flex justify-center">
        <input
          type="text"
          className="border rounded-3xl bg-gray-100 py-1 px-4"
          placeholder="Search here"
        />
      </div>
      <div className="p-2">
        {items.map((item) => (
          <div className="p-1 flex">
            <input type="checkbox" />
            <h1 className="pl-2">{item.title}</h1>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FilterComponent;
