import React from "react";
import { FaRegUserCircle } from "react-icons/fa";
import { IoCartOutline } from "react-icons/io5";
import { MdKeyboardArrowDown } from "react-icons/md";
import { IoSearchOutline } from "react-icons/io5";
import { PiDotsThreeVerticalBold } from "react-icons/pi";
import { Link } from "react-router-dom";
import { IoIosArrowDown } from "react-icons/io";

export default function Navbar() {
  return (
    <div className="bg-white   w-full shadow-sm">
      <div className="flex w-[1400px] mx-auto items-center justify-between pr-12 py-4 bg-white  ">
        <div className="flex gap-4 items-center font-semibold">
          <div>Logo</div>
          <div className="group relative inline-block cursor-pointer">
            <Link to="/">
              <div href="#" className="text-lg font-semibold">
                HOME
              </div>
            </Link>
            <span className="absolute bottom-0 left-0 right-0 mx-auto h-[2px] w-0  bg-black transition-all duration-300 group-hover:w-full"></span>
          </div>
          <div className="group relative cursor-pointer">
            <div className="text-lg font-semibold flex items-center ">
              USED BOOKS ON SALE
              <IoIosArrowDown className="text-[20px]" />
              <span className="absolute bottom-0 left-0 right-0 mx-auto h-[2px] w-0  bg-black transition-all duration-300 group-hover:w-full"></span>
            </div>
            <div className="absolute left-0 mt-2 hidden w-48 bg-white border border-gray-200 rounded-lg shadow-lg group-hover:block focus-within:block">
              <div className="block px-4 py-2 text-gray-700 hover:bg-gray-100 focus:bg-gray-200">
                Menu 1
              </div>
              <div className="block px-4 py-2 text-gray-700 hover:bg-gray-100 focus:bg-gray-200">
                Menu 2
              </div>
              <div className="block px-4 py-2 text-gray-700 hover:bg-gray-100 focus:bg-gray-200">
                Menu 3
              </div>
            </div>
          </div>
          <div className="group relative cursor-pointer">
            <div className="text-lg font-semibold flex items-center ">
              COMPETATIVE EXAM BOOKS
              <IoIosArrowDown className="text-[20px]" />
              <span className="absolute bottom-0 left-0 right-0 mx-auto h-[2px] w-0  bg-black transition-all duration-300 group-hover:w-full"></span>
            </div>
            <div className="absolute left-0 mt-2 hidden w-48 bg-white border border-gray-200 rounded-lg shadow-lg group-hover:block focus-within:block">
              <div className="block px-4 py-2 text-gray-700 hover:bg-gray-100 focus:bg-gray-200">
                Menu 1
              </div>
              <div className="block px-4 py-2 text-gray-700 hover:bg-gray-100 focus:bg-gray-200">
                Menu 2
              </div>
              <div className="block px-4 py-2 text-gray-700 hover:bg-gray-100 focus:bg-gray-200">
                Menu 3
              </div>
            </div>
          </div>
          <div className="group relative cursor-pointer">
            <div className="text-lg font-semibold flex items-center ">
              NOVELS
              <IoIosArrowDown className="text-[20px]" />
              <span className="absolute bottom-0 left-0 right-0 mx-auto h-[2px] w-0  bg-black transition-all duration-300 group-hover:w-full"></span>
            </div>
            <div className="absolute left-0 mt-2 hidden w-48 bg-white border border-gray-200 rounded-lg shadow-lg group-hover:block focus-within:block">
              <div className="block px-4 py-2 text-gray-700 hover:bg-gray-100 focus:bg-gray-200">
                Menu 1
              </div>
              <div className="block px-4 py-2 text-gray-700 hover:bg-gray-100 focus:bg-gray-200">
                Menu 2
              </div>
              <div className="block px-4 py-2 text-gray-700 hover:bg-gray-100 focus:bg-gray-200">
                Menu 3
              </div>
            </div>
          </div>

          <div
            href="#"
            className="text-lg font-semibold flex items-center cursor-pointer"
          >
            BOOK REVIEWS
          </div>
        </div>
        <div className="flex items-center font-semibold gap-4">
          <div className="no-underline text-black">
            <Link to="/login">
              <div className="flex gap-2 items-center text-[18px] cursor-pointer">
                <FaRegUserCircle />
                <div>Login</div>
                <MdKeyboardArrowDown />
              </div>
            </Link>
          </div>
          <div className="flex gap-2 items-center text-[18px] cursor-pointer">
            <IoCartOutline />
            <div>Cart</div>
          </div>
          <div className="flex gap-2 items-center text-[18px] cursor-pointer">
            <img
              src="https://static-assets-web.flixcart.com/batman-returns/batman-returns/p/images/Store-9eeae2.svg"
              alt=""
            />
            <div>Become a Seller</div>
          </div>
        </div>
      </div>
    </div>
  );
}
