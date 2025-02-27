import React, { useState, useEffect } from "react";
// import "./App.css"; // Import TailwindCSS styles

export default function Slider() {
  const slides = ["1.jpg", "2.jpg", "3.jpg", "4.jpg", "5.jpg"];

  const [currentIndex, setCurrentIndex] = useState(0);

  // Function to go to the next slide
  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
  };

  // Function to go to the previous slide
  const prevSlide = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + slides.length) % slides.length
    );
  };

  // Function to go to a specific slide
  const goToSlide = (index) => {
    setCurrentIndex(index);
  };

  // Automatically run the slider every 3 seconds
  useEffect(() => {
    const interval = setInterval(nextSlide, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full h-[200px] sm:h-[240px] xl:h-[440px] mx-auto overflow-hidden">
      {/* Slides */}
      <div
        className="flex transition-transform duration-500 "
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {slides.map((slide, index) => (
          <img
            key={index}
            src={slide}
            alt={`Slide ${index + 1}`}
            className="w-full h-[170px] sm:h-[200px] xl:h-[400px] flex-shrink-0 cursor-pointer"
          />
        ))}
      </div>

      {/* Previous Button */}
      <button
        onClick={prevSlide}
        className="absolute left-16  top-1/2 transform -translate-y-1/2 hover:bg-[#E42B26] text-white p-2 rounded-full bg-[#6B3D3A] "
      >
        &#9664;
      </button>

      {/* Next Button */}
      <button
        onClick={nextSlide}
        className="absolute right-16 top-1/2 transform -translate-y-1/2 hover:bg-[#E42B26] text-white p-2 rounded-full bg-[#6B3D3A]"
      >
        &#9654;
      </button>

      {/* Dots */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-3 h-3 rounded-full ${
              index === currentIndex ? "bg-gray-800" : "bg-gray-400"
            }`}
          ></button>
        ))}
      </div>
    </div>
  );
}
