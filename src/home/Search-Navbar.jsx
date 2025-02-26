import React, { useState } from "react";
import { FaSearch, FaUserCircle } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import { useGlobalContext } from "../context/GlobalContext";
import { useNavigate } from "react-router-dom";
import { useBooks } from "../context/BookContext";

export default function SearchNavbar() {
  const [isOpen, setIsOpen] = useState(false);
  const { user, logout } = useAuth();
  const { cartItems } = useGlobalContext();
  const navigate = useNavigate();
  const { searchBooks } = useBooks();
  const [searchQuery, setSearchQuery] = useState("");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleSearch = async (e) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      await searchBooks(searchQuery);
      navigate("/search-results");
    }
  };

  const handleLogout = () => {
    logout();
    setIsOpen(false);
  };

  return (
    <div className="px-2 md:px-10  flex flex-col md:flex-row justify-between items-center pt-4 md:pt-14 pb-2">
      <div className="flex flex-col md:flex-row items-center w-full md:w-auto md:gap-8 lg:gap-20">
        <div className="flex items-center justify-between w-full md:w-auto mb-4 md:mb-0">
          <img
            src="/logo.png"
            alt=""
            className="w-[80px] h-[40px] md:w-[90px] md:h-[50px] lg:w-[95px] lg:h-[60px]"
          />
          <button
            className="md:hidden text-[#E42B26]"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d={
                  isMobileMenuOpen
                    ? "M6 18L18 6M6 6l12 12"
                    : "M4 6h16M4 12h16M4 18h16"
                }
              />
            </svg>
          </button>
        </div>

        <div className="relative w-full md:w-auto mb-4 md:mb-0">
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search By Title,Author,Publisher Or ISBN"
            className="w-full md:w-[400px] lg:w-[500px] p-2 md:p-3 text-sm md:text-base border border-[#E42B26] rounded"
          />
          <div
            onClick={handleSearch}
            className="absolute top-0 right-0 bg-[#E42B26] text-white h-full px-4 flex items-center cursor-pointer rounded-r"
          >
            <FaSearch className="text-lg" />
          </div>
        </div>
      </div>

      <div
        className={`${
          isMobileMenuOpen ? "flex" : "hidden"
        } md:flex flex-col md:flex-row items-center w-full md:w-auto gap-4 md:gap-6`}
      >
        <div className="relative w-full md:w-auto border-b md:border-r md:border-b-0 border-[#E42B26] pb-4 md:pb-0 md:px-4">
          <div
            className="flex items-center justify-center md:justify-start gap-2 cursor-pointer"
            onMouseEnter={() => setIsOpen(true)}
            onMouseLeave={() => setIsOpen(false)}
          >
            <FaUserCircle className="text-[#E42B26] text-xl" />
            <div className="text-sm md:text-base">
              {user ? user.email : "My Account"}
            </div>

            {isOpen && (
              <div className="absolute p-2 right-0 md:-right-4 top-6 w-full md:w-56 bg-white border border-gray-200 divide-y divide-gray-100 rounded-md shadow-lg z-50">
                <div className="py-1" role="none">
                  {user ? (
                    <>
                      <button
                        onClick={handleLogout}
                        className="block w-full px-4 bg-[#E42B26] text-[15px] font-semibold text-center py-2 text-white"
                      >
                        Logout
                      </button>
                      <Link to="/account">
                        <div className="block px-4 py-2 text-sm text-gray-700 hover:underline text-center">
                          Your Account
                        </div>
                      </Link>
                      <Link to="/personalsetting">
                        <div className="block px-4 py-2 text-sm text-gray-700 hover:underline text-center">
                          Personal Setting
                        </div>
                      </Link>
                      <Link to="/yourorder">
                        <div className="block px-4 py-2 text-sm text-gray-700 hover:underline text-center">
                          Your Orders
                        </div>
                      </Link>
                      <Link to="/wishlist">
                        <div className="block px-4 py-2 text-sm text-gray-700 hover:underline text-center">
                          Your Wishlist
                        </div>
                      </Link>
                    </>
                  ) : (
                    <>
                      <Link to="/login">
                        <div className="block px-4 bg-[#E42B26] text-[15px] font-semibold text-center py-2 text-white">
                          Login
                        </div>
                      </Link>
                      <Link to="/signup">
                        <div className="block px-4 py-2 text-sm text-[#E42B26] hover:underline text-center">
                          New to ApnaBook Store? Sign up
                        </div>
                      </Link>
                    </>
                  )}
                </div>
              </div>
            )}
          </div>
        </div>
        <div
          className="relative cursor-pointer flex items-center justify-center"
          onClick={() => navigate("/cart")}
        >
          <img
            src="https://d2g9wbak88g7ch.cloudfront.net/staticimages/cart_white.svg"
            alt=""
            className="w-[30px] md:w-[40px]"
          />
          <div className="absolute -top-2 -right-2 bg-[#E42B26] text-white rounded-full w-5 h-5 flex items-center justify-center text-xs">
            {cartItems.length}
          </div>
        </div>
      </div>
    </div>
  );
}
