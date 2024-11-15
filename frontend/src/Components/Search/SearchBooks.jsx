import React from "react";
import alchemist from "../../assets/alchemist.jpg";
import random from "../../assets/random.jpg";
import Book from "../Book";

const books = [
  { id: 1, title: "Book1", image: random },
  { id: 2, title: "Book2", image: alchemist },
  { id: 3, title: "Book3", image: alchemist },
  { id: 4, title: "Book4", image: alchemist },
  { id: 5, title: "Book5", image: random },
  { id: 6, title: "Book6", image: alchemist },
  { id: 7, title: "Book7", image: alchemist },
  { id: 8, title: "Book1", image: alchemist },
  { id: 9, title: "Book2", image: random },
  { id: 10, title: "Book3", image: alchemist },
  { id: 11, title: "Book4", image: alchemist },
  { id: 12, title: "Book5", image: random },
];

const Products = () => {
  return (
    <div className="w-3/4 bg-white m-5 p-2 rounded-md shadow-md">
      <div className="grid grid-cols-1 gap-5 md:grid-cols-3 xl:grid-cols-5">
        {books.map((book) => (
          <Book book={book}/>
        ))}
      </div>
    </div>
  );
};

export default Products;
