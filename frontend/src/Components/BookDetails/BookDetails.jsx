import React from "react";
//import { useParams } from "react-router-dom";
import book from "../../assets/book1.jpg";
import { MdOutlineGroup } from "react-icons/md";
import { IoInformationCircleOutline } from "react-icons/io5";
import { FaCheckCircle } from "react-icons/fa";
import { SiPowerpages } from "react-icons/si";

const BookDetails = () => {
  //const {bookId} = useParams();
  return (
    <div className="w-3/4 m-auto p-5">
      <div className="flex border shadow-md rounded-md">
        <div className="w-2/3 m-auto bg-white p-5 flex gap-10">
          <div className="border p-5 rounded-sm">
            <img src={book} alt="#" />
          </div>
          <div>
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
              <MdOutlineGroup size={20}/>
              <span> 1000 customers want this</span>
              <IoInformationCircleOutline size={20} className="text-blue-500 cursor-pointer"/>
            </div>
            <div className="flex items-center gap-2 pt-3 ">
                <span className="line-through text-gray-500 text-xl">Tk. 200</span>
                <span className="font-semibold text-xl">Tk. 150</span>
                <span className="text-green-500">You can save Tk. 50(25%)</span>
            </div>
            <div className="flex gap-5 bg-gray-100 border p-3 mt-3 items-center">
                <img src={book} alt="#" className="h-12 w-8"/>
                <div className="flex flex-col">
                    <span className="text-gray-600">Get eBook Version</span>
                    <span>Tk. 50</span>
                </div>
                <button className="h-7 border border-blue-500 text-sm text-blue-500 px-4 rounded-sm hover:bg-blue-500 hover:text-white"><span>Buy to read</span></button>
            </div>
            <div className="flex mt-5 items-center gap-2">
                <FaCheckCircle className="text-green-500" size={20}/>
                <span>In Stock (50 copies available)</span>
            </div>
            <div className="mt-5">
                <div>
                    <span>Book Length</span>
                    <SiPowerpages size={30} color="gray"/>
                </div>
                <div></div>
                <div></div>
            </div>
          </div>
        </div>
        <div className="w-1/3 m-auto p-2">related books</div>
      </div>
    </div>
  );
};

export default BookDetails;
