import React, { useRef, useState, useEffect } from "react";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { MdOutlineKeyboardArrowLeft } from "react-icons/md";
import { Link } from "react-router-dom";
export default function IconSlider() {
  const scrollContainer = useRef(null);
  const cardRef = useRef(null);
  const [cardWidth, setCardWidth] = useState(0);

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
    <div className="w-full">
      <div className="relative pb-4 border-t-2   pt-8 border-b-2 border-gray-300 items-center">
        <button
          onClick={scrollPrev}
          className="absolute  top-[75px] transform -translate-y-1/2 left-0 md:left-4 h-[30px] md:h-[50px] text-black p-2 md:p-3 rounded-full z-10"
        >
          <MdOutlineKeyboardArrowLeft className="text-[40px] md:text-[70px] cursor-pointer" />
        </button>
        <div
          className="flex overflow-x-hidden gap-4 md:gap-8 lg:gap-16 scroll-smooth max-w-full md:max-w-3xl lg:max-w-7xl h-[100px] md:h-[120px] lg:h-[150px] mx-auto px-8 md:px-12"
          ref={scrollContainer}
        >
          {/* Card 1 */}
          <div
            ref={cardRef}
            className="flex-shrink-0 text-black my-2 md:m-4 rounded-lg"
          >
            <Link to="/bestseller">
              <div className="text-center flex flex-col items-center cursor-pointer">
                <img
                  src="https://www.bookswagon.com/Images/staticimages/icon1.png"
                  alt=""
                  className="w-[40px] md:w-[60px] lg:w-[80px]"
                />
                <p className="text-xs md:text-sm lg:text-base">Best Seller</p>
              </div>
            </Link>
          </div>
          {/* Card 2 */}
          <div className="flex-shrink-0 text-black my-2 md:m-4 rounded-lg">
            <Link to="/awardWinners">
              <div className="text-center flex flex-col items-center cursor-pointer">
                <img
                  src="https://www.bookswagon.com/Images/staticimages/icon8.png"
                  alt=""
                  className="w-[40px] md:w-[60px] lg:w-[80px]"
                />
                <p className="text-xs md:text-sm lg:text-base">Award Winners</p>
              </div>
            </Link>
          </div>
          {/* Card 4 */}
          <div className="flex-shrink-0 text-black my-2 md:m-4 rounded-lg">
            <Link to="/boxset">
              <div className="text-center flex flex-col items-center cursor-pointer">
                <img
                  src="https://www.bookswagon.com/Images/staticimages/icon4.png"
                  alt=""
                  className="w-[40px] md:w-[60px] lg:w-[80px]"
                />
                <p className="text-xs md:text-sm lg:text-base">Box Sets</p>
              </div>
            </Link>
          </div>
          {/* Card 5 */}
          <div className="flex-shrink-0 text-black my-2 md:m-4 rounded-lg">
            <Link to="/internationalBestSeller">
              <div className="text-center flex flex-col items-center cursor-pointer">
                <img
                  src="https://www.bookswagon.com/Images/staticimages/icon7.png"
                  alt=""
                  className="w-[40px] md:w-[60px] lg:w-[80px]"
                />
                <p className="text-xs md:text-sm lg:text-base">
                  International Best Seller
                </p>
              </div>
            </Link>
          </div>
          {/* Card 6 */}
          <div className="flex-shrink-0 text-black my-2 md:m-4 rounded-lg">
            <Link to="/newArrivals">
              <div className="text-center flex flex-col items-center cursor-pointer">
                <img
                  src="https://www.bookswagon.com/Images/staticimages/icon2.png"
                  alt=""
                  className="w-[40px] md:w-[60px] lg:w-[80px]"
                />
                <p className="text-xs md:text-sm lg:text-base">New Arrivals</p>
              </div>
            </Link>
          </div>
          {/* Card 7 */}
          <div className="flex-shrink-0 text-black my-2 md:m-4 rounded-lg">
            <Link to="/fictionBooks">
              <div className="text-center flex flex-col items-center cursor-pointer">
                <img
                  src="https://www.bookswagon.com/Images/staticimages/icon5.png"
                  alt=""
                  className="w-[40px] md:w-[60px] lg:w-[80px]"
                />
                <p className="text-xs md:text-sm lg:text-base">Fiction Books</p>
              </div>
            </Link>
          </div>
          {/* Card 8 */}
          <div className="flex-shrink-0 text-black my-2 md:m-4 rounded-lg">
            <div className="text-center flex flex-col items-center cursor-pointer">
              <img
                src="https://www.bookswagon.com/Images/staticimages/tarot.png"
                alt=""
                className="w-[40px] md:w-[60px] lg:w-[80px]"
              />
              <p className="text-xs md:text-sm lg:text-base">Tarot Cards</p>
            </div>
          </div>
        </div>

        <button
          onClick={scrollNext}
          className="absolute top-[75px] transform -translate-y-1/2 right-0 md:right-4 h-[30px] md:h-[50px] text-black p-2 md:p-3 rounded-full z-10"
        >
          <MdOutlineKeyboardArrowRight className="text-[40px] md:text-[70px] cursor-pointer" />
        </button>
      </div>
    </div>
  );
}
