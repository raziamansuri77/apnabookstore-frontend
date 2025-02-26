import React from "react";
import { FaSearch } from "react-icons/fa";
import { FaRegUserCircle } from "react-icons/fa";
import { IoIosArrowForward } from "react-icons/io";
import { FaUserCircle } from "react-icons/fa";
import { FaRegHeart } from "react-icons/fa";
import { MdArrowDropDown } from "react-icons/md";
import { Link } from "react-router-dom";

export default function Search() {
  return (
    <div>
      <div className="p-2 lg:flex justify-between xl:text-[17px]  lg:text-[10px] pr-6 hidden">
        <div className="flex items-center">
          <Link to="/book">
            {" "}
            <div className="py-1 px-4 hover:text-[#E42B26] font-semibold   flex items-center cursor-pointer  duration-150 ">
              <div className=" "> Book</div>
              <MdArrowDropDown className="text-[25px]" />
              <div className="w-[1px] h-[20px] bg-red-500"></div>
            </div>
          </Link>
          <Link to="/newarrivals">
            <div className=" py-1 px-4   cursor-pointer  hover:text-[#E42B26] font-semibold  duration-150 ">
              New Arrivals
            </div>
          </Link>
          <div className="w-[1px] h-[20px] bg-red-500"></div>

          <div className="py-1 px-4  cursor-pointer hover:text-[#E42B26] font-semibold duration-150">
            Box Sets
          </div>
          <div className="w-[1px] h-[20px] bg-red-500"></div>

          <div className="py-1 px-4  cursor-pointer hover:text-[#E42B26] font-semibold duration-150 ">
            Best Sellers
          </div>
          <div className="w-[1px] h-[20px] bg-red-500"></div>

          <div className="py-1 px-4  cursor-pointer hover:text-[#E42B26] font-semibold duration-150 ">
            Fiction Books
          </div>
          <div className="w-[1px] h-[20px] bg-red-500"></div>

          <div className="py-1 px-4  cursor-pointer  hover:text-[#E42B26] font-semibold duration-150">
            Award Winners
          </div>
          <div className="w-[1px] h-[20px] bg-red-500"></div>

          <div className="py-1 px-4  cursor-pointer  hover:text-[#E42B26] font-semibold duration-150 ">
            Featured Authors
          </div>
          <div className="w-[1px] h-[20px] bg-red-500"></div>

          <div className="py-1 px-4    cursor-pointer hover:text-[#E42B26] font-semibold  duration-150">
            Today's Deal
          </div>
          <div className="w-[1px] h-[20px] bg-red-500"></div>
          <div className="py-1 px-4     cursor-pointer  hover:text-[#E42B26] font-semibold  duration-150">
            Request Book
          </div>
        </div>
        <div className="relative">
          <div className="absolute xl:top-[1px] xl:right-[10px] lg:top-[7px] lg:right-3">
            0
          </div>
          <div className="text-[30px] text-[#E42B26]">
            <FaRegHeart />
          </div>
        </div>
      </div>
    </div>
  );
}
