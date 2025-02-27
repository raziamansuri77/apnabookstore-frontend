import React, { useState } from "react";

export default function Slider1() {
  const slides = [
    "1.jpg",
    "2.jpg",
    "3.jpg",
    "4.jpg",
    "5.jpg",
    "6.jpg",
    "a1.jpg",
    "a2.jpg",
    "a3.jpg",
    "a4.jpg",
    "a5.jpg",
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const cardsToShow = 3;

  const handlePrevious = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + slides.length) % slides.length
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
  };

  const getSlideStyles = (index) => {
    const position = index - currentIndex;
    const offset = slides.length;
    const normalizedPosition = (position + offset) % offset;

    if (normalizedPosition < cardsToShow) {
      return {
        transform: `translateX(${normalizedPosition * (100 / cardsToShow)}%)`,
      };
    }
    return { display: "none" };
  };

  return (
    <div className="relative w-full      bg-red-200">
      {/* Slider Container */}
      <div className="flex  w-full rounded-lg bg-blue-500">
        <div className="flex w-full relative bg-pink-400">
          {slides.map((slide, index) => (
            <div
              key={index}
              className=" w-[200px] flex-shrink-0 px-2 box-border transition-transform duration-500"
              style={getSlideStyles(index)}
            >
              <img
                src={slide}
                alt={`Card ${index + 1}`}
                className="w-full h-64 object-cover rounded-lg"
              />
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
      <div className="flex justify-center  mt-4">
        {slides.map((_, index) => (
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
