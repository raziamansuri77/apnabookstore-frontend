import React, { useRef, useState, useEffect } from "react";
import { FaLessThan } from "react-icons/fa6";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { MdOutlineKeyboardArrowLeft } from "react-icons/md";
export default function Author() {
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
    <div className="pt-4 pb-12 border-b-2 border-gray-300">
      <div className="bg-[#ECECEC]">
        <div className="text-[20px] sm:text-[24px] md:text-[30px] font-bold text-center py-2 sm:py-4">
          New Arrivals
        </div>

        <div className="relative pb-4 items-center px-2 sm:px-4 md:px-6">
          <button
            onClick={scrollPrev}
            className="absolute top-12 left-0 sm:left-2 md:left-4 h-[30px] sm:h-[40px] md:h-[50px] text-black p-2 sm:p-3 rounded-full"
          >
            <MdOutlineKeyboardArrowLeft className="text-[40px] sm:text-[50px] md:text-[70px] cursor-pointer" />
          </button>
          <div
            className="flex overflow-x-hidden gap-2 sm:gap-3 md:gap-4 scroll-smooth max-w-full sm:max-w-2xl md:max-w-4xl lg:max-w-7xl h-[150px] sm:h-[175px] md:h-[200px] mx-auto"
            ref={scrollContainer}
          >
            {/* Card 1 */}
            <div
              ref={cardRef}
              className="flex-shrink-0 text-black m-2 sm:m-3 md:m-4 rounded-lg"
            >
              <div className="text-center flex flex-col gap-1 sm:gap-2 items-center cursor-pointer">
                <div className="w-[100px] h-[100px] sm:w-[120px] sm:h-[120px] md:w-[140px] md:h-[140px] bg-cover bg-[url('auth1.jpg')] rounded-full"></div>
                <p className="text-sm sm:text-base">Arundhti Roy</p>
              </div>
            </div>
            {/* Card 2 */}
            <div className="flex-shrink-0 text-black m-2 sm:m-3 md:m-4 rounded-lg">
              <div className="text-center flex flex-col gap-1 sm:gap-2 items-center cursor-pointer">
                <div className="w-[100px] h-[100px] sm:w-[120px] sm:h-[120px] md:w-[140px] md:h-[140px] bg-cover bg-[url('auth2.jpg')] rounded-full"></div>
                <p className="text-sm sm:text-base">Stephen Coonts</p>
              </div>
            </div>
            {/* Card 3 */}
            <div className="flex-shrink-0 text-black m-2 sm:m-3 md:m-4 rounded-lg">
              <div className="text-center flex flex-col gap-1 sm:gap-2 items-center cursor-pointer">
                <div className="w-[100px] h-[100px] sm:w-[120px] sm:h-[120px] md:w-[140px] md:h-[140px] bg-cover bg-[url('auth3.jpg')] rounded-full"></div>
                <p className="text-sm sm:text-base">William Words...</p>
              </div>
            </div>
            {/* Card 4 */}
            <div className="flex-shrink-0 text-black m-2 sm:m-3 md:m-4 rounded-lg">
              <div className="text-center flex flex-col gap-1 sm:gap-2 items-center cursor-pointer">
                <div className="w-[100px] h-[100px] sm:w-[120px] sm:h-[120px] md:w-[140px] md:h-[140px] bg-cover bg-[url('auth4.jpg')] rounded-full"></div>
                <p className="text-sm sm:text-base">Best Seller</p>
              </div>
            </div>
            {/* Card 5 */}
            <div className="flex-shrink-0 text-black m-2 sm:m-3 md:m-4 rounded-lg">
              <div className="text-center flex flex-col gap-1 sm:gap-2 items-center cursor-pointer">
                <div className="w-[100px] h-[100px] sm:w-[120px] sm:h-[120px] md:w-[140px] md:h-[140px] bg-cover bg-[url('auth5.jpg')] rounded-full"></div>
                <p className="text-sm sm:text-base">Stephen King</p>
              </div>
            </div>
            {/* Card 6 */}
            <div className="flex-shrink-0 text-black m-2 sm:m-3 md:m-4 rounded-lg">
              <div className="text-center flex flex-col gap-1 sm:gap-2 items-center cursor-pointer">
                <div className="w-[100px] h-[100px] sm:w-[120px] sm:h-[120px] md:w-[140px] md:h-[140px] bg-cover bg-[url('auth6.jpg')] rounded-full"></div>
                <p className="text-sm sm:text-base">John Green</p>
              </div>
            </div>
            {/* Card 7 */}
            <div className="flex-shrink-0 text-black m-2 sm:m-3 md:m-4 rounded-lg">
              <div className="text-center flex flex-col gap-1 sm:gap-2 items-center cursor-pointer">
                <div className="w-[100px] h-[100px] sm:w-[120px] sm:h-[120px] md:w-[140px] md:h-[140px] bg-cover bg-[url('auth7.jpg')] rounded-full"></div>
                <p className="text-sm sm:text-base">Gillian Flynn</p>
              </div>
            </div>
            {/* Card 8 */}
            <div className="flex-shrink-0 text-black m-2 sm:m-3 md:m-4 rounded-lg">
              <div className="text-center flex flex-col gap-1 sm:gap-2 items-center cursor-pointer">
                <div className="w-[100px] h-[100px] sm:w-[120px] sm:h-[120px] md:w-[140px] md:h-[140px] bg-cover bg-[url('auth8.jpg')] rounded-full"></div>
                <p className="text-sm sm:text-base">Gayle Forman</p>
              </div>
            </div>
            {/* Card 9 */}
            <div className="flex-shrink-0 text-black m-2 sm:m-3 md:m-4 rounded-lg">
              <div className="text-center flex flex-col gap-1 sm:gap-2 items-center cursor-pointer">
                <div className="w-[100px] h-[100px] sm:w-[120px] sm:h-[120px] md:w-[140px] md:h-[140px] bg-cover bg-[url('auth9.jpg')] rounded-full"></div>
                <p className="text-sm sm:text-base">Erich Segal</p>
              </div>
            </div>
            {/* Card 10 */}
            <div className="flex-shrink-0 text-black m-2 sm:m-3 md:m-4 rounded-lg">
              <div className="text-center flex flex-col gap-1 sm:gap-2 items-center cursor-pointer">
                <div className="w-[100px] h-[100px] sm:w-[120px] sm:h-[120px] md:w-[140px] md:h-[140px] bg-cover bg-[url('auth10.jpg')] rounded-full"></div>
                <p className="text-sm sm:text-base">Sylvia Plath</p>
              </div>
            </div>
          </div>

          <button
            onClick={scrollNext}
            className="absolute top-12 right-0 sm:right-2 md:right-4 h-[30px] sm:h-[40px] md:h-[50px] text-black p-2 sm:p-3 rounded-full"
          >
            <MdOutlineKeyboardArrowRight className="text-[40px] sm:text-[50px] md:text-[70px] cursor-pointer" />
          </button>
        </div>
      </div>
    </div>
  );
}
