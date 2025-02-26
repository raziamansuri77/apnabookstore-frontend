import React, { useState } from "react";
// import { FaSearch } from "react-icons/fa";
// import { FaRegUserCircle } from "react-icons/fa";
// import { IoIosArrowForward } from "react-icons/io";
// import { FaUserCircle } from "react-icons/fa";
import { FaRegHeart } from "react-icons/fa";
// import { MdArrowDropDown } from "react-icons/md";
import { Link } from "react-router-dom";
import { useGlobalContext } from "../context/GlobalContext";
import { useNavigate } from "react-router-dom";
import { HiMenu } from "react-icons/hi";

export default function Search() {
  const { wishlistItems } = useGlobalContext();
  const navigate = useNavigate();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="border-b-[1px]   border-[#E42B26] relative w-full">
      {/* Mobile Menu Button */}
      <div className="block lg:hidden p-4">
        <button onClick={toggleMenu} className="text-xl sm:text-2xl">
          <HiMenu />
        </button>
      </div>

      {/* Mobile/Tablet Menu */}
      <div
        className={`lg:hidden ${
          isMenuOpen ? "block" : "hidden"
        } bg-white absolute w-full z-50`}
        style={{ maxHeight: "calc(100vh - 60px)", overflowY: "auto" }}
      >
        <div className="flex flex-col w-full">
          <Link to="/">
            <div className="py-2 sm:py-3 px-4 sm:px-6 border-b hover:text-[#E42B26] hover:bg-gray-50 font-semibold duration-150 text-sm sm:text-base">
              Home
            </div>
          </Link>
          <Link to="/newarrivals">
            <div className="py-2 sm:py-3 px-4 sm:px-6 border-b hover:text-[#E42B26] hover:bg-gray-50 font-semibold duration-150 text-sm sm:text-base">
              New Arrivals
            </div>
          </Link>
          <Link to="/boxset">
            <div className="py-2 sm:py-3 px-4 sm:px-6 border-b hover:text-[#E42B26] hover:bg-gray-50 font-semibold duration-150 text-sm sm:text-base">
              Box Sets
            </div>
          </Link>
          <Link to="/bestSeller">
            <div className="py-2 sm:py-3 px-4 sm:px-6 border-b hover:text-[#E42B26] hover:bg-gray-50 font-semibold duration-150 text-sm sm:text-base">
              Best Sellers
            </div>
          </Link>
          <Link to="/fictionBooks">
            <div className="py-2 sm:py-3 px-4 sm:px-6 border-b hover:text-[#E42B26] hover:bg-gray-50 font-semibold duration-150 text-sm sm:text-base">
              Fiction Books
            </div>
          </Link>
          <Link to="/awardWinners">
            <div className="py-2 sm:py-3 px-4 sm:px-6 border-b hover:text-[#E42B26] hover:bg-gray-50 font-semibold duration-150 text-sm sm:text-base">
              Award Winners
            </div>
          </Link>
          <Link to="/authors">
            <div className="py-2 sm:py-3 px-4 sm:px-6 border-b hover:text-[#E42B26] hover:bg-gray-50 font-semibold duration-150 text-sm sm:text-base">
              Featured Authors
            </div>
          </Link>
          <Link to="/todaysDeal">
            <div className="py-2 sm:py-3 px-4 sm:px-6 border-b hover:text-[#E42B26] hover:bg-gray-50 font-semibold duration-150 text-sm sm:text-base">
              Today's Deal
            </div>
          </Link>
          <Link to="/requestBook">
            <div className="py-2 sm:py-3 px-4 sm:px-6 border-b hover:text-[#E42B26] hover:bg-gray-50 font-semibold duration-150 text-sm sm:text-base">
              Request Book
            </div>
          </Link>
        </div>
      </div>

      {/* Desktop Menu */}
      <div className="hidden lg:flex justify-between items-center px-2 md:px-4 py-2">
        <div className="flex items-center flex-wrap gap-x-1 md:gap-x-2 gap-y-2">
          <Link to="/">
            <div className="py-1 px-2 xl:px-4 cursor-pointer hover:text-[#E42B26] font-semibold duration-150 text-xs md:text-sm xl:text-base">
              Home
            </div>
          </Link>
          <div className="w-[1px] h-[20px] bg-red-500"></div>

          <Link to="/newarrivals">
            <div className="py-1 px-2 xl:px-4 cursor-pointer hover:text-[#E42B26] font-semibold duration-150 text-xs md:text-sm xl:text-base">
              New Arrivals
            </div>
          </Link>
          <div className="w-[1px] h-[20px] bg-red-500"></div>

          <Link to="/boxset">
            <div className="py-1 px-2 xl:px-4 cursor-pointer hover:text-[#E42B26] font-semibold duration-150 text-xs md:text-sm xl:text-base">
              Box Sets
            </div>
          </Link>
          <div className="w-[1px] h-[20px] bg-red-500"></div>
          <Link to="/bestSeller">
            <div className="py-1 px-2 xl:px-4 cursor-pointer hover:text-[#E42B26] font-semibold duration-150 text-xs md:text-sm xl:text-base">
              Best Sellers
            </div>
          </Link>
          <div className="w-[1px] h-[20px] bg-red-500"></div>
          <Link to="/fictionBooks">
            <div className="py-1 px-2 xl:px-4 cursor-pointer hover:text-[#E42B26] font-semibold duration-150 text-xs md:text-sm xl:text-base">
              Fiction Books
            </div>
          </Link>
          <div className="w-[1px] h-[20px] bg-red-500"></div>
          <Link to="/awardWinners">
            <div className="py-1 px-2 xl:px-4 cursor-pointer hover:text-[#E42B26] font-semibold duration-150 text-xs md:text-sm xl:text-base">
              Award Winners
            </div>
          </Link>
          <div className="w-[1px] h-[20px] bg-red-500"></div>
          <Link to="/authors">
            <div className="py-1 px-2 xl:px-4 cursor-pointer hover:text-[#E42B26] font-semibold duration-150 text-xs md:text-sm xl:text-base">
              Featured Authors
            </div>
          </Link>
          <div className="w-[1px] h-[20px] bg-red-500"></div>

          <Link to="/todaysDeal">
            <div className="py-1 px-2 xl:px-4 cursor-pointer hover:text-[#E42B26] font-semibold duration-150 text-xs md:text-sm xl:text-base">
              Today's Deal
            </div>
          </Link>
          <div className="w-[1px] h-[20px] bg-red-500"></div>
          <Link to="/requestBook">
            <div className="py-1 px-2 xl:px-4 cursor-pointer hover:text-[#E42B26] font-semibold duration-150 text-xs md:text-sm xl:text-base">
              Request Book
            </div>
          </Link>
        </div>
        <div
          className="relative cursor-pointer"
          onClick={() => navigate("/wishlist")}
        >
          <div className="absolute -top-1 -right-1 bg-[#E42B26] text-white rounded-full w-4 md:w-5 h-4 md:h-5 flex items-center justify-center text-[10px] md:text-xs">
            {wishlistItems.length}
          </div>
          <div className="text-xl md:text-2xl xl:text-3xl text-[#E42B26]">
            <FaRegHeart />
          </div>
        </div>
      </div>

      {/* Mobile/Tablet Wishlist */}
      <div
        className="lg:hidden fixed bottom-4 right-4 bg-white rounded-full p-2 sm:p-3 shadow-lg cursor-pointer z-50"
        onClick={() => navigate("/wishlist")}
      >
        <div className="relative">
          <div className="absolute -top-2 -right-2 bg-[#E42B26] text-white rounded-full w-4 sm:w-5 h-4 sm:h-5 flex items-center justify-center text-[10px] sm:text-xs">
            {wishlistItems.length}
          </div>
          <div className="text-xl sm:text-2xl text-[#E42B26]">
            <FaRegHeart />
          </div>
        </div>
      </div>
    </div>
  );
}
