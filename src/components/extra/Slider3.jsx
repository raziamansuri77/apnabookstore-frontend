import React, { useState } from "react";

export default function Slider3() {
  const books = [
    {
      img: "icon1.png",
      name: "Best Seller",
    },
    {
      img: "icon2.png",

      name: "Award Winners",
    },
    {
      img: "https://www.bookswagon.com/Images/staticimages/TodaysDeal.png",

      name: "Best Seller",
    },
    {
      img: "https://www.bookswagon.com/Images/staticimages/icon4.png",
      name: "Box Sets",
    },
    {
      img: "https://www.bookswagon.com/Images/staticimages/icon7.png",
      name: "International Best Seller",
    },
    {
      img: "https://www.bookswagon.com/Images/staticimages/icon2.png",
      name: "New Arrivals",
    },
    {
      img: "https://www.bookswagon.com/Images/staticimages/icon5.png",
      name: "Fiction Books",
    },
    {
      img: "https://www.bookswagon.com/Images/staticimages/tarot.png",
      name: "Tarot Cards",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const cardsToShow = 3;

  const handlePrevious = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + books.length) % books.length
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % books.length);
  };

  const getSlideStyles = (index) => {
    const position = index - currentIndex;
    const offset = books.length;
    const normalizedPosition = (position + offset) % offset;

    if (normalizedPosition < cardsToShow) {
      return {
        transform: `translateX(${normalizedPosition * (100 / cardsToShow)}%)`,
      };
    }
    return { display: "none" };
  };

  return (
    <div className="relative w-full max-w-4xl mx-auto mt-10">
      <h2 className="text-2xl font-bold mb-4 text-center">Trending Books</h2>
      {/* Slider Container */}
      <div className="flex overflow-hidden rounded-lg">
        <div className="flex w-full relative">
          {books.map((book, index) => (
            <div
              key={index}
              className="w-1/3 flex-shrink-0 px-2 box-border transition-transform duration-500"
              style={getSlideStyles(index)}
            >
              <div className="bg-white rounded-lg shadow-md p-4">
                <img
                  src={book.image}
                  alt={book.title}
                  className="w-full h-64 object-cover rounded-lg"
                />
                <h3 className="text-lg font-semibold mt-2 text-center">
                  {book.title}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Previous Button */}
      <button
        onClick={handlePrevious}
        className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full shadow-lg hover:bg-gray-700"
      >
        &#8592;
      </button>

      {/* Next Button */}
      <button
        onClick={handleNext}
        className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full shadow-lg hover:bg-gray-700"
      >
        &#8594;
      </button>

      {/* Indicators */}
      <div className="flex justify-center space-x-2 mt-4">
        {books.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-3 h-3 rounded-full ${
              index === currentIndex ? "bg-red-500" : "bg-gray-300"
            }`}
          ></button>
        ))}
      </div>
    </div>
  );
}
