import React from "react";
import { FaShoppingCart, FaHeart } from "react-icons/fa";

const BookCard = ({ book }) => {
  return (
    <div className="flex-shrink-0 w-60 h-80 text-black m-4 rounded-lg transition-transform hover:scale-105 duration-300">
      <div className="px-2 shadow-sm rounded-lg border-1 xl:h-[400px] relative">
        {/* Discount Badge */}
        <div className="absolute -top-[14px] -right-4 w-[40px] h-[40px] flex items-center justify-center text-white bg-[#FF0000] rounded-full">
          {book.discount}
        </div>

        <div className="p-4 border-1 xl:h-[400px] rounded-lg flex flex-col items-center gap-2 justify-center shadow-md h-[450px]">
          {/* Image Section */}
          <div className="overflow-hidden">
            <div className="hover:scale-110 duration-500 transition-transform">
              <img
                src={book.image}
                alt={book.title}
                className="cursor-pointer w-[170px] h-[240px] object-cover"
              />
            </div>
          </div>

          {/* Book Details */}
          <div className="text-center w-full px-2 py-2">
            <h3 className="font-semibold text-gray-800 truncate">
              {book.title}
            </h3>
            <p className="text-gray-600 text-sm">{book.author}</p>

            {/* Price Section */}
            <div className="flex justify-center gap-4 my-2">
              <span className="text-[#E42B26] font-bold">₹{book.price}</span>
              <span className="text-gray-500 line-through">
                ₹{book.originalPrice}
              </span>
            </div>

            {/* Action Buttons */}
            <div className="flex justify-between gap-2 mt-3">
              <button className="flex items-center gap-2 bg-[#E42B26] text-white px-3 py-1.5 rounded-md hover:bg-[#c42520] transition-colors">
                <FaShoppingCart />
                <span className="text-sm">Add to Cart</span>
              </button>
              <button className="flex items-center justify-center bg-gray-100 p-2 rounded-md hover:bg-gray-200 transition-colors">
                <FaHeart className="text-[#E42B26]" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookCard;
