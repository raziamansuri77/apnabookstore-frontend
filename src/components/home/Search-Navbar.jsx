import React from "react";
import { FaSearch } from "react-icons/fa";
import { IoIosArrowForward } from "react-icons/io";
import { FaUserCircle } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useState } from "react";

export default function SearchNavbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="px-2 flex lg:justify-between   items-center pt-14 pb-2  ">
      <div className="flex items-center lg:gap-20">
        <img
          src="logo.png"
          alt=""
          className="lg:w-[95px] lg:h-[60px] w-[100px] h-[50px] sm:w-[80px] sm:h-[50px] "
        />
        <div className="relative sm:text-[10px] lg:text-[20px] ">
          <input
            type="text"
            placeholder="Search By Title,Author,Publisher Or ISBN"
            className="lg:w-[500px] sm:text-[15px] sm:w-[660px] sm:py-2 w-[330px] border-1 lg:p-1 border-[#E42B26]    sm:px-2 "
          />
          <div className="absolute      top-0   sm:text-[15px] sm:w-[40px]  cursor-pointer  w-[30px]  right-0 bg-[#E42B26] text-white h-full   text-[16px]">
            <FaSearch className="absolute top-1 left-2 sm:left-3 sm:top-3" />
          </div>
        </div>
      </div>

      <div className="lg:flex items-center hidden">
        <div className=" h-[30px] px-2 border-r-[1px] border-[#E42B26] flex relative">
          <Link to="/login">
            {" "}
            <div
              className="flex items-center gap-2 "
              onMouseEnter={() => setIsOpen(true)}
              onMouseLeave={() => setIsOpen(false)}
            >
              <FaUserCircle className="text-[#E42B26] text-[20px]" />
              <div>My Account</div>
              {isOpen && (
                <div
                  className="absolute p-2 -right-4 top-4 h-[260px] w-56 mt-2 origin-top-right bg-white border border-gray-200 divide-y divide-gray-100 rounded-md shadow-lg outline-none"
                  role="menu"
                >
                  <div className="py-1 h-[500px]" role="none">
                    <a
                      href="#"
                      className="block px-4 bg-[#E42B26] text-[15px] font-semibold text-center  py-2 text-sm  text-white  "
                      role="menuitem"
                    >
                      Login
                    </a>
                    <Link
                      to="/signup"
                      className="block px-4 py-2 text-sm   text-[#E42B26] hover:underline text-center text-[15px]"
                      role="menuitem"
                    >
                      New to ApnaBook Store? Sign up
                    </Link>
                    <hr />
                    <a
                      href="#"
                      className="block px-4 py-2 text-sm text-gray-700 hover:underline text-center"
                      role="menuitem"
                    >
                      Your Account
                    </a>
                    <a
                      href="#"
                      className="block px-4 py-2 text-sm text-gray-700 hover:underline text-center"
                      role="menuitem"
                    >
                      Personal Setting
                    </a>{" "}
                    <a
                      href="#"
                      className="block px-4 py-2 text-sm text-gray-700 hover:underline text-center"
                      role="menuitem"
                    >
                      Your Orders
                    </a>{" "}
                    <a
                      href="#"
                      className="block px-4 py-2 text-sm text-gray-700 hover:underline text-center"
                      role="menuitem"
                    >
                      Your Wishlist
                    </a>{" "}
                  </div>
                </div>
              )}
              {/* <IoIosArrowForward className="text-[#E42B26] text-[20px]   hover:rotate-90" /> */}
            </div>
          </Link>
        </div>
        <div className="px-2 relative ">
          <img
            src="https://d2g9wbak88g7ch.cloudfront.net/staticimages/cart_white.svg"
            alt=""
            className="w-[40px] "
          />
          <div className="absolute top-[-6px] right-5">0</div>
        </div>
      </div>
    </div>
  );
}
