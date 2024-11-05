import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Navigation, Pagination } from "swiper/modules";
import book from "../../assets/book1.jpg";

const CategoryContainer = () => {
  // Sample data with categories and books
  const categories = [
    {
      name: "Category 1",
      books: [
        { id: 1, title: "Book 1", cover: book },
        { id: 2, title: "Book 2", cover: book },
        { id: 3, title: "Book 3", cover: book },
        { id: 4, title: "Book 4", cover: book },
      ],
    },
    {
      name: "Category 2",
      books: [
        { id: 5, title: "Book 5", cover: book },
        { id: 6, title: "Book 6", cover: book },
        { id: 7, title: "Book 7", cover: book },
        { id: 8, title: "Book 8", cover: book },
      ],
    },
    {
      name: "Category 3",
      books: [
        { id: 9, title: "Book 9", cover: book },
        { id: 10, title: "Book 10", cover: book },
        { id: 11, title: "Book 11", cover: book },
        { id: 12, title: "Book 12", cover: book },
      ],
    },
    {
      name: "Category 4",
      books: [
        { id: 1, title: "Book 1", cover: book },
        { id: 2, title: "Book 2", cover: book },
        { id: 3, title: "Book 3", cover: book },
        { id: 4, title: "Book 4", cover: book },
      ],
    },
    {
      name: "Category 4",
      books: [
        { id: 5, title: "Book 5", cover: book },
        { id: 6, title: "Book 6", cover: book },
        { id: 7, title: "Book 7", cover: book },
        { id: 8, title: "Book 8", cover: book },
      ],
    },
    {
      name: "Category 6",
      books: [
        { id: 9, title: "Book 9", cover: "https://via.placeholder.com/150" },
        { id: 10, title: "Book 10", cover: "https://via.placeholder.com/150" },
        { id: 11, title: "Book 11", cover: "https://via.placeholder.com/150" },
        { id: 12, title: "Book 12", cover: "https://via.placeholder.com/150" },
      ],
    },
  ];

  return (
    <div className="m-auto w-3/4 py-5">
      <Swiper
        modules={[Pagination, Navigation]}
        navigation
        loop={true}
      >
        {/* Divide categories into chunks of 3 for each slide */}
        {Array.from({ length: Math.ceil(categories.length / 4) }).map(
          (_, i) => (
            <SwiperSlide key={i}>
              <div className="grid grid-cols-4 gap-5">
                {/* For each slide, display four categories */}
                {categories.slice(i * 4, i * 4 + 4).map((category) => (
                  <div
                    key={category.name}
                    className="border p-4 rounded-md shadow-md bg-white"
                  >
                    <h2 className="text-lg font-bold mb-3">{category.name}</h2>
                    <div className="grid grid-cols-2 gap-3">
                      {category.books.map((book) => (
                        <div className="m-auto bg-gray-100 px-5 py-2">
                          <div key={book.id} className="flex flex-col">
                            <img
                              src={book.cover}
                              alt={book.title}
                              className="w-20 h-30 rounded-md"
                            />
                            <p className="mt-2 text-sm font-medium text-center">
                              {book.title}
                            </p>
                          </div>
                        </div>
                      ))}
                    </div>
                    <a href="/categories" className="text-blue-400 text-right">See more..</a>
                  </div>
                ))}
              </div>
            </SwiperSlide>
          )
        )}
      </Swiper>
    </div>
  );
};

export default CategoryContainer;
