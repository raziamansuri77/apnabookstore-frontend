// CardSlider.js
import React, { useState } from "react";
// import "./tailwind.output.css"; // Ensure Tailwind CSS is included in your project

export default function CardSlider() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const cards = [
    { title: "Card 1", content: "This is the first card." },
    { title: "Card 2", content: "This is the second card." },
    { title: "Card 3", content: "This is the third card." },
    { title: "Card 4", content: "This is the fourth card." },
    { title: "Card 5", content: "This is the fifth card." },
  ];

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === cards.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? cards.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className="w-full max-w-4xl mx-auto py-8">
      <div className="relative flex items-center justify-center">
        <button
          onClick={prevSlide}
          className="absolute left-0 p-2 bg-gray-300 rounded-full shadow hover:bg-gray-400"
        >
          &lt;
        </button>

        <div className="flex overflow-hidden w-full">
          {cards.map((card, index) => (
            <div
              key={index}
              className={`flex-shrink-0 w-full transition-transform duration-500 transform ${
                index === currentIndex ? "translate-x-0" : "translate-x-full"
              }`}
            >
              <div className="p-6 bg-white shadow-lg rounded-lg">
                <h3 className="text-2xl font-bold text-gray-800">
                  {card.title}
                </h3>
                <p className="mt-4 text-gray-600">{card.content}</p>
              </div>
            </div>
          ))}
        </div>

        <button
          onClick={nextSlide}
          className="absolute right-0 p-2 bg-gray-300 rounded-full shadow hover:bg-gray-400"
        >
          &gt;
        </button>
      </div>
    </div>
  );
}
