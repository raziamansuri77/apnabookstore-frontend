import React, { useRef, useState, useEffect } from "react";
import { FaLessThan } from "react-icons/fa6";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { MdOutlineKeyboardArrowLeft } from "react-icons/md";
export default function Author() {
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
    <div className="pt-4 pb-12 border-b-2 border-gray-300">
      <div className="bg-[#ECECEC] ">
        <div className="text-[30px] font-bold text-center py-4">
          New Arrivals
        </div>

        <div className="relative  pb-4    c  items-center">
          <button
            onClick={scrollPrev}
            className="absolute top-12 left-4 h-[50px]    text-black p-3 rounded-full"
          >
            <MdOutlineKeyboardArrowLeft className="text-[70px] cursor-pointer" />
          </button>
          <div
            className="flex overflow-x-hidden   gap-4 scroll-smooth max-w-7xl h-[200px] mx-auto      " // Hides scrollbar while enabling smooth scroll
            ref={scrollContainer}
          >
            {/* Card 1 */}
            <div
              ref={cardRef}
              className="flex-shrink-0     text-black m-4 rounded-lg"
            >
              <div className="text-center flex  flex-col gap-2 items-center cursor-pointer">
                <div className="w-[140px] h-[140px]  bg-cover bg-[url('./public/auth1.jpg')] rounded-full"></div>
                <p>Arundhti Roy</p>
              </div>
            </div>
            {/* Card 2 */}
            <div className="flex-shrink-0    text-black m-4 rounded-lg">
              <div className="text-center flex  flex-col gap-2 items-center cursor-pointer">
                <div className="w-[140px] h-[140px] bg-cover bg-[url('./public/auth2.jpg')] rounded-full"></div>
                <p>Stephen Coonts</p>
              </div>
            </div>
            {/* Card 3 */}
            <div className="flex-shrink-0    text-black m-4 rounded-lg">
              <div className="text-center flex  flex-col gap-2 items-center cursor-pointer">
                <div className="w-[140px] h-[140px] bg-cover bg-[url('./public/auth3.jpg')] rounded-full"></div>
                <p>William Words...</p>
              </div>
            </div>
            {/* Card 4 */}
            <div className="flex-shrink-0    text-black m-4 rounded-lg">
              <div className="text-center flex  flex-col gap-2 items-center cursor-pointer">
                <div className="w-[140px] h-[140px] bg-cover bg-[url('./public/auth4.jpg')] rounded-full"></div>
                <p>Best Seller</p>
              </div>
            </div>{" "}
            {/* Card 5 */}
            <div className="flex-shrink-0   text-black m-4 rounded-lg">
              <div className="text-center flex  flex-col gap-2 items-center cursor-pointer">
                <div className="w-[140px] h-[140px] bg-cover bg-[url('./public/auth5.jpg')]  rounded-full"></div>
                <p>Stephen King</p>
              </div>
            </div>{" "}
            {/* Card 6 */}
            <div className="flex-shrink-0   text-black m-4 rounded-lg">
              <div className="text-center flex  flex-col gap-2 items-center cursor-pointer">
                <div className="w-[140px] h-[140px] bg-cover bg-[url('./public/auth6.jpg')]  rounded-full"></div>
                <p>John Green</p>
              </div>
            </div>{" "}
            {/* Card 7 */}
            <div className="flex-shrink-0   text-black m-4 rounded-lg">
              <div className="text-center flex  flex-col gap-2 items-center cursor-pointer">
                <div className="w-[140px] h-[140px] bg-cover bg-[url('./public/auth7.jpg')]  rounded-full"></div>
                <p>Gillian Flynn</p>
              </div>
            </div>{" "}
            {/* Card 8 */}
            <div className="flex-shrink-0 h-[100px]    text-black m-4 rounded-lg">
              <div className="text-center flex  flex-col gap-2 items-center cursor-pointer">
                <div className="w-[140px] h-[140px] bg-cover bg-[url('./public/auth8.jpg')]  rounded-full"></div>
                <p>Gayle Forman</p>
              </div>
            </div>
            {/* Card 9 */}
            <div className="flex-shrink-0 h-[100px]    text-black m-4 rounded-lg">
              <div className="text-center flex  flex-col gap-2 items-center cursor-pointer">
                <div className="w-[140px] h-[140px] bg-cover bg-[url('./public/auth9.jpg')]  rounded-full"></div>
                <p>Erich Segal</p>
              </div>
            </div>{" "}
            {/* Card 10 */}
            <div className="flex-shrink-0 h-[100px]    text-black m-4 rounded-lg">
              <div className="text-center flex  flex-col gap-2 items-center cursor-pointer">
                <div className="w-[140px] h-[140px] bg-cover bg-[url('./public/auth10.jpg')]  rounded-full"></div>
                <p>Sylvia Plath</p>
              </div>
            </div>
            {/* Card 10 */}
            <div className="flex-shrink-0 h-[100px]    text-black m-4 rounded-lg">
              <div className="text-center flex  flex-col gap-2 items-center cursor-pointer">
                <div className="w-[140px] h-[140px] bg-cover bg-[url('./public/auth11.jpg')]  rounded-full"></div>
                <p>Shashi Tharoor</p>
              </div>
            </div>
          </div>

          {/* Previous Button */}

          {/* Next Button */}
          <button
            onClick={scrollNext}
            className="absolute top-12 right-4   text-black p-3 rounded-full"
          >
            <MdOutlineKeyboardArrowRight className="text-[70px] cursor-pointer" />
          </button>
        </div>
      </div>
    </div>
  );
}
