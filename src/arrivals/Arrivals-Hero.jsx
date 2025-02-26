import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import randomBook from "/src/components/Random-Book.json";

export default function ArrivalsHero() {
  const [value, setValue] = useState(50);
  const handleChange = (event) => {
    setValue(event.target.value);
  };
  // books visible or not
  const [visibleBooks, setVisibleBooks] = useState(10);
  const showMoreBooks = () => {
    setVisibleBooks(visibleBooks + 10);
  };
  const navigate = useNavigate();
  const handleBookClick = (book) => {
    navigate(`/book/${book.id}`, { state: { bookData: book } });
  };
  return (
    <div>
      <div className="text-center text-[30px] font-bold">New Arrivals</div>
      <div
        className="flex
      gap-3 w-[90%] mx-auto"
      >
        <div className="bg-red-100 w-[25%] space-y-4">
          <div>Refine your Search</div>
          <div className="space-y-4">
            <div>
              Price range:
              <span className="text-[#FF0000]">
                {" "}
                ₹{value} - ₹{value}
              </span>
            </div>
            <input
              type="range"
              min="0"
              max="100"
              value={value}
              onChange={handleChange}
              className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
            />{" "}
            <div>
              Discount Range:{" "}
              <span className="text-[#FF0000]">
                {" "}
                {value}% - {value}%
              </span>
            </div>
          </div>
          <div>
            <div>
              <div>Binding </div>
            </div>
          </div>
        </div>
        <div className=" w-full ">
          <div className="flex justify-between">
            {/* <div className="text-[18px] font-semibold">5441 results found</div> */}
            <div className="space-x-2">
              <label htmlFor="sort">Sort By: </label>
              <select name="" id="" className="bg-[#E9E9ED]">
                <option value="relevance"> Relevance</option>
                <option value="prize-low-high">Price-Low to High</option>
                <option value="prize-high-low">Price-High to Low</option>
                <option value="discount">Discount</option>
              </select>
            </div>
          </div>
          <div>
            <div className="grid grid-cols-5 gap-3 py-4">
              {randomBook.slice(0, visibleBooks).map((book) => {
                return (
                  <div
                    key={book.id}
                    className="  shadow-inner bg-[#FBFBFB]  cursor-pointer p-4 relative "
                    onClick={() => handleBookClick(book)}
                  >
                    <div className="  bg-[#FD0000] text-white text-[12px] px-4 py-[1px]  absolute -top-2 -left-2 flex items-center justify-center text-center">
                      {book.discountAmount}
                    </div>
                    <div className="flex flex-col items-center">
                      <img src={book.img} alt="" className="w-full h-[200px]" />
                      <div className="text-gray-600 text-center">
                        {book.name}
                      </div>
                      <div className="flex gap-2 items-center">
                        <div>{book.prize}</div>
                        <div className="line-through">{book.discount}</div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
            {visibleBooks < booksData.length && (
              <button
                onClick={showMoreBooks}
                className="mt-4 px-4 py-2 bg-blue-500 text-white rounded"
              >
                Show More Books
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
