import React from "react";
//import { useParams } from "react-router-dom";
import book from "../../assets/book1.jpg";
import { MdOutlineGroup } from "react-icons/md";
import { IoInformationCircleOutline } from "react-icons/io5";
import { FaCheckCircle } from "react-icons/fa";
import { SiPowerpages } from "react-icons/si";
import { FaPenToSquare } from "react-icons/fa6";
import { FaBookOpen } from "react-icons/fa";
import { IoQrCode } from "react-icons/io5";
import { FaCloudArrowDown } from "react-icons/fa6";
import { FaHandHoldingUsd } from "react-icons/fa";
import { GiReturnArrow } from "react-icons/gi";
import { FaHeart } from "react-icons/fa6";
import { IoShareSocialSharp } from "react-icons/io5";

const BookDetails = () => {
  //const {bookId} = useParams();
  return (
    <div className="w-3/4 m-auto p-5">
      <div className="flex border shadow-md rounded-md">
        <div className="w-3/4 m-auto bg-white p-5 flex gap-10">
          <div className="w-1/3 border p-5 rounded-sm">
            <img src={book} alt="#" />
          </div>
          <div className="2/3">
            <h1 className="text-2xl font-semibold">
              Book Title <span className="text-sm">(format)</span>
            </h1>
            <p>This is short description for the book</p>
            <p className="flex gap-2">
              by <span className="text-blue-500">Writer Name</span>
            </p>
            <div className="pt-3">
              <span className="text-sm font-semibold pr-2">Category:</span>
              <span className="text-blue-500">Category Name</span>
            </div>
            <div className="flex gap-2 pt-3">
              <span>***** Ratings | </span>
              <span>100 Reviews</span>
            </div>
            <div className="flex items-center gap-2 pt-3">
              <MdOutlineGroup size={20} />
              <span> 1000 customers want this</span>
              <IoInformationCircleOutline
                size={20}
                className="text-blue-500 cursor-pointer"
              />
            </div>
            <div className="flex items-center gap-2 pt-3 ">
              <span className="line-through text-gray-500 text-xl">
                Tk. 200
              </span>
              <span className="font-semibold text-xl">Tk. 150</span>
              <span className="text-green-500">You can save Tk. 50(25%)</span>
            </div>
            <div className="flex justify-between bg-gray-100 border p-3 mt-3 items-center">
              <img src={book} alt="#" className="h-12 w-8" />
              <div className="flex flex-col">
                <span className="text-gray-600">Get eBook Version</span>
                <span>Tk. 50</span>
              </div>
              <button className="flex items-center gap-2 h-7 border border-blue-500 text-sm text-blue-500 px-4 rounded-sm hover:bg-blue-500 hover:text-white">
                <FaCloudArrowDown size={20} />
                <span>Buy to read</span>
              </button>
            </div>
            <div className="flex mt-5 items-center gap-2">
              <FaCheckCircle className="text-green-500" size={20} />
              <span>In Stock (50 copies available)</span>
            </div>
            <div className="mt-5 flex gap-5">
              <div className="flex flex-col items-center gap-1">
                <span>Book Length</span>
                <SiPowerpages size={30} color="gray" />
                <span className="font-semibold">200 pages</span>
              </div>
              <div className="flex flex-col items-center gap-1">
                <span>Edition</span>
                <FaPenToSquare size={30} color="gray" />
                <span className="font-semibold">2nd Edition</span>
              </div>
              <div className="flex flex-col items-center gap-1">
                <span>Publication</span>
                <FaBookOpen size={30} color="gray" />
                <span className="font-semibold">ABC publication</span>
              </div>
              <div className="flex flex-col items-center gap-1">
                <span>ISBN</span>
                <IoQrCode size={30} color="gray" />
                <span className="font-semibold">12345678989</span>
              </div>
            </div>
            <div className="mt-5 flex gap-10">
              <div className="flex items-center gap-2">
                <FaHandHoldingUsd />
                <span>Cash On Delivery</span>
              </div>
              <div className="flex items-center gap-2">
                <GiReturnArrow />
                <span>7 Days Happy Return</span>
              </div>
            </div>
            <div className="mt-5 flex gap-5">
              <button className="p-3 text-blue-500 border border-blue-500 rounded-sm hover:text-white hover:bg-blue-500">
                Read a part
              </button>
              <button className="py-3 px-7 bg-blue-500 text-white rounded-sm hover:bg-blue-400">
                Add to Cart
              </button>
            </div>
            <div className="mt-5 flex gap-10">
              <div className="flex items-center gap-2">
                <FaHeart size={20} color="gray" />
                <span>Add to wishlist</span>
              </div>
              <div className="flex items-center gap-2">
                <IoShareSocialSharp size={20} color="gray" />
                <span>Share this book</span>
              </div>
            </div>
          </div>
        </div>
        <div className="w-1/4 m-auto p-2">related books</div>
      </div>
    </div>
  );
};

export default BookDetails;
