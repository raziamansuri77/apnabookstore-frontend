import React, { useRef, useState, useEffect } from "react";
import { FaLessThan } from "react-icons/fa6";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { MdOutlineKeyboardArrowLeft } from "react-icons/md";
export default function IconSlider() {
  const scrollContainer = useRef(null);
  const cardRef = useRef(null);
  const [cardWidth, setCardWidth] = useState(0);

  // Set the card width once the component is mounted or resized
  useEffect(() => {
    if (cardRef.current) {
      setCardWidth(cardRef.current.clientWidth);
    }

    const handleResize = () => {
      if (cardRef.current) {
        setCardWidth(cardRef.current.clientWidth);
      }
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const scrollNext = () => {
    if (scrollContainer.current) {
      const container = scrollContainer.current;
      const totalScrollWidth = container.scrollWidth;
      const currentScroll = container.scrollLeft;

      // If we're at the end, jump back to the start
      if (currentScroll + container.clientWidth >= totalScrollWidth) {
        container.scrollTo({ left: 0, behavior: "smooth" });
      } else {
        container.scrollBy({ left: cardWidth, behavior: "smooth" });
      }
    }
  };

  const scrollPrev = () => {
    if (scrollContainer.current) {
      const container = scrollContainer.current;
      const currentScroll = container.scrollLeft;

      // If we're at the start, jump to the last card
      if (currentScroll <= 0) {
        const totalScrollWidth = container.scrollWidth;
        container.scrollTo({
          left: totalScrollWidth - container.clientWidth,
          behavior: "smooth",
        });
      } else {
        container.scrollBy({ left: -cardWidth, behavior: "smooth" });
      }
    }
  };

  return (
    <div>
      <div className="relative  pb-4  border-t-2 border-b-2  border-gray-300 items-center">
        <button
          onClick={scrollPrev}
          className="absolute top-6 left-4 h-[50px]    text-black p-3 rounded-full"
        >
          <MdOutlineKeyboardArrowLeft className="text-[70px] cursor-pointer" />
        </button>
        <div
          className="flex overflow-x-hidden  gap-16 scroll-smooth max-w-7xl h-[150px] mx-auto      " // Hides scrollbar while enabling smooth scroll
          ref={scrollContainer}
        >
          {/* Card 1 */}
          <div
            ref={cardRef}
            className="flex-shrink-0     text-black m-4 rounded-lg"
          >
            <div className="text-center flex  flex-col items-center cursor-pointer">
              <img
                src="https://www.bookswagon.com/Images/staticimages/icon1.png"
                alt=""
                // className="w-[80px] "
              />
              <p>Best Seller</p>
            </div>
          </div>
          {/* Card 2 */}
          <div className="flex-shrink-0    text-black m-4 rounded-lg">
            <div className="text-center flex  flex-col items-center cursor-pointer">
              <img
                src="https://www.bookswagon.com/Images/staticimages/icon8.png"
                alt=""
                // className="w-[80px] "
              />
              <p>Award Winners</p>
            </div>
          </div>
          {/* Card 3 */}
          <div className="flex-shrink-0    text-black m-4 rounded-lg">
            <div className="text-center flex  flex-col items-center cursor-pointer">
              <img
                src="https://www.bookswagon.com/Images/staticimages/TodaysDeal.png"
                alt=""
                className="w-[80px] "
              />
              <p>Best Seller</p>
            </div>
          </div>
          {/* Card 4 */}
          <div className="flex-shrink-0    text-black m-4 rounded-lg">
            <div className="text-center flex  flex-col items-center cursor-pointer">
              <img
                src="https://www.bookswagon.com/Images/staticimages/icon4.png"
                alt=""
                className="w-[80px] "
              />
              <p>Box Sets</p>
            </div>
          </div>{" "}
          {/* Card 5 */}
          <div className="flex-shrink-0   text-black m-4 rounded-lg">
            <div className="text-center flex  flex-col items-center cursor-pointer">
              <img
                src="https://www.bookswagon.com/Images/staticimages/icon7.png"
                alt=""
                className="w-[80px] "
              />
              <p>International Best Seller</p>
            </div>
          </div>{" "}
          {/* Card 6 */}
          <div className="flex-shrink-0   text-black m-4 rounded-lg">
            <div className="text-center flex  flex-col items-center cursor-pointer">
              <img
                src="https://www.bookswagon.com/Images/staticimages/icon2.png"
                alt=""
                className="w-[80px] "
              />
              <p>New Arrivals</p>
            </div>
          </div>{" "}
          {/* Card 7 */}
          <div className="flex-shrink-0   text-black m-4 rounded-lg">
            <div className="text-center flex  flex-col items-center cursor-pointer">
              <img
                src="https://www.bookswagon.com/Images/staticimages/icon5.png"
                alt=""
                className="w-[80px] "
              />
              <p>Fiction Books</p>
            </div>
          </div>{" "}
          {/* Card 8 */}
          <div className="flex-shrink-0 h-[100px]    text-black m-4 rounded-lg">
            <div className="text-center flex  flex-col items-center cursor-pointer">
              <img
                src="https://www.bookswagon.com/Images/staticimages/tarot.png"
                alt=""
                // className="w-[80px] "
              />
              <p>Tarot Cards</p>
            </div>
          </div>
        </div>

        {/* Previous Button */}

        {/* Next Button */}
        <button
          onClick={scrollNext}
          className="absolute top-6 right-4   text-black p-3 rounded-full"
        >
          <MdOutlineKeyboardArrowRight className="text-[70px] cursor-pointer" />
        </button>
      </div>
    </div>
  );
}
