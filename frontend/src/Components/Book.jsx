import React from "react";

const Book = ({ book }) => {
  return (
    <div className="relative group p-2">
      <img
        src={book.image}
        alt={book.title}
        className="rounded-md w-full h-[280px] group-hover:opacity-30"
      />
      <div className="text-center group-hover:opacity-30">
        <h1>{book.title}</h1>
        <h1>Writer's Name</h1>
        <h1 className="font-semibold">100 tk.</h1>
      </div>
      <div className="absolute inset-0 flex flex-col justify-between items-center group-hover:border pt-1/2">
        <button className="bg-blue-500 text-white p-2 w-3/4 absolute top-1/2 rounded-sm opacity-0 hover:bg-blue-400 group-hover:opacity-100">
          Add to cart
        </button>
        <button className="text-blue-500 font-semibold bg-gray-100 p-2 w-full absolute bottom-0 opacity-0 hover:bg-gray-50 group-hover:opacity-100">
          View details
        </button>
      </div>
    </div>
  );
};

export default Book;
