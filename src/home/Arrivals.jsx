import React, { useRef, useState, useEffect } from "react";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { MdOutlineKeyboardArrowLeft } from "react-icons/md";
import { Link } from "react-router-dom";
export default function Arrivals() {
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
    <div className="  border-b-2">
      <div className="text-[30px] font-bold text-center py-4">New Arrivals</div>
      <div className="relative">
        <button
          onClick={scrollPrev}
          className="absolute top-1/2 left-4 h-[50px]    text-black p-3 rounded-full"
        >
          <MdOutlineKeyboardArrowLeft className="text-[70px] cursor-pointer" />
        </button>
        <div
          className="flex overflow-x-hidden scroll-smooth max-w-7xl mx-auto  h-[430px]  " // Hides scrollbar while enabling smooth scroll
          ref={scrollContainer}
        >
          {/* Card 1 */}
          <div
            ref={cardRef}
            className="flex-shrink-0 w-40 h-80   text-black m-4 rounded-lg"
          >
            <div className="px-2    hover:shadow-lg rounded-lg  xl:h-[400px] ">
              <div className=" relative   xl:h-[400px]   rounded-lg flex flex-col items-center gap-2 justify-center  h-[450px]">
                <div className="w-[40px] flex items-center justify-center  h-[40px] bg-[#FF0000] rounded-full absolute  top-2 -right-[5px] text-white">
                  30%
                </div>
                <div className="">
                  <img
                    src="public/s1.jpg"
                    className="cursor-pointer shadow-md "
                  />
                </div>

                <div className="text-center w-full px-2 py-2">
                  <p className="text-gray-500 font-semibold">
                    Percy Jackson and the Olympians
                  </p>
                  <p className=" ">Rick Riordan</p>
                  <div className="flex justify-center gap-2 items-center ">
                    <p className="text-[#E42B26] text-[20px] font-semibold">
                      ₹ 251
                    </p>
                    <p className="line-through">₹ 322</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* Card 2 */}
          <div className="flex-shrink-0 w-40 h-80  text-black m-4 rounded-lg">
            <div className="px-2    hover:shadow-lg rounded-lg  xl:h-[400px] ">
              <div className=" relative   xl:h-[400px]   rounded-lg flex flex-col items-center gap-2 justify-center  h-[450px]">
                <div className="w-[40px] flex items-center justify-center  h-[40px] bg-[#FF0000] rounded-full absolute  top-2 -right-[5px] text-white">
                  30%
                </div>
                <div className="">
                  <img
                    src="public/s2.jpg"
                    className="cursor-pointer shadow-md "
                  />
                </div>

                <div className="text-center w-full px-2 py-2">
                  <p className="text-gray-500 font-semibold">The Golden Road</p>
                  <p className=" ">William Dalry..</p>
                  <div className="flex justify-center gap-2 items-center ">
                    <p className="text-[#E42B26] text-[20px] font-semibold">
                      ₹ 639
                    </p>
                    <p className="line-through">₹ 999</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* Card 3 */}
          <div className="flex-shrink-0 w-40 h-80  text-black m-4 rounded-lg">
            <div className="px-2    hover:shadow-lg rounded-lg  xl:h-[400px] ">
              <div className=" relative   xl:h-[400px]   rounded-lg flex flex-col items-center gap-2 justify-center  h-[450px]">
                <div className="w-[40px] flex items-center justify-center  h-[40px] bg-[#FF0000] rounded-full absolute  top-2 -right-[5px] text-white">
                  30%
                </div>
                <div className="">
                  <img
                    src="public/s3.jpg"
                    className="cursor-pointer shadow-md "
                  />
                </div>

                <div className="text-center w-full px-2 py-2">
                  <p className="text-gray-500 font-semibold">Nexus</p>
                  <p className=" ">Yuval Noah H....</p>
                  <div className="flex justify-center gap-2 items-center ">
                    <p className="text-[#E42B26] text-[20px] font-semibold">
                      ₹ 758
                    </p>
                    <p className="line-through">₹ 1099</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* Card 4 */}
          <div className="flex-shrink-0 w-40 h-80   text-black m-4 rounded-lg">
            <div className="px-2    hover:shadow-lg rounded-lg  xl:h-[400px] ">
              <div className=" relative   xl:h-[400px]   rounded-lg flex flex-col items-center gap-2 justify-center  h-[450px]">
                <div className="w-[40px] flex items-center justify-center  h-[40px] bg-[#FF0000] rounded-full absolute  top-2 -right-[5px] text-white">
                  30%
                </div>
                <div className="">
                  <img
                    src="public/s4.jpg"
                    className="cursor-pointer shadow-md "
                  />
                </div>

                <div className="text-center w-full px-2 py-2">
                  <p className="text-gray-500 font-semibold">
                    Satvic Revolution
                  </p>
                  <p className=" ">Subah Saraf</p>
                  <div className="flex justify-center gap-2 items-center ">
                    <p className="text-[#E42B26] text-[20px] font-semibold">
                      ₹ 364
                    </p>
                    <p className="line-through">₹ 499</p>
                  </div>
                </div>
              </div>
            </div>
          </div>{" "}
          {/* Card 5 */}
          <div className="flex-shrink-0 w-40 h-80  text-black m-4 rounded-lg">
            <div className="px-2    hover:shadow-lg rounded-lg  xl:h-[400px] ">
              <div className=" relative   xl:h-[400px]   rounded-lg flex flex-col items-center gap-2 justify-center  h-[450px]">
                <div className="w-[40px] flex items-center justify-center  h-[40px] bg-[#FF0000] rounded-full absolute  top-2 -right-[5px] text-white">
                  30%
                </div>
                <div className="">
                  <img
                    src="public/s5.jpg"
                    className="cursor-pointer shadow-md "
                  />
                </div>

                <div className="text-center w-full px-2 py-2">
                  <p className="text-gray-500 font-semibold">
                    An Eye for an Eye
                  </p>
                  <p className=" ">Jeffrey Archer</p>
                  <div className="flex justify-center gap-2 items-center ">
                    <p className="text-[#E42B26] text-[20px] font-semibold">
                      ₹ 324
                    </p>
                    <p className="line-through">₹ 499</p>
                  </div>
                </div>
              </div>
            </div>
          </div>{" "}
          {/* Card 6 */}
          <div className="flex-shrink-0 w-40 h-80  text-black m-4 rounded-lg">
            <div className="px-2    hover:shadow-lg rounded-lg  xl:h-[400px] ">
              <div className=" relative   xl:h-[400px]   rounded-lg flex flex-col items-center gap-2 justify-center  h-[450px]">
                <div className="w-[40px] flex items-center justify-center  h-[40px] bg-[#FF0000] rounded-full absolute  top-2 -right-[5px] text-white">
                  30%
                </div>
                <div className="">
                  <img
                    src="public/s6.jpg"
                    className="cursor-pointer shadow-md "
                  />
                </div>

                <div className="text-center w-full px-2 py-2">
                  <p className="text-gray-500 font-semibold">Warmth</p>
                  <p className=" ">Rithvik Singh</p>
                  <div className="flex justify-center gap-2 items-center ">
                    <p className="text-[#E42B26] text-[20px] font-semibold">
                      ₹ 239
                    </p>
                    <p className="line-through">₹ 299</p>
                  </div>
                </div>
              </div>
            </div>
          </div>{" "}
          {/* Card 7 */}
          <div className="flex-shrink-0 w-40 h-80  text-black m-4 rounded-lg">
            <div className="px-2    hover:shadow-lg rounded-lg  xl:h-[400px] ">
              <div className=" relative   xl:h-[400px]   rounded-lg flex flex-col items-center gap-2 justify-center  h-[450px]">
                <div className="w-[40px] flex items-center justify-center  h-[40px] bg-[#FF0000] rounded-full absolute  top-2 -right-[5px] text-white">
                  30%
                </div>
                <div className="">
                  <img
                    src="public/s7.jpg"
                    className="cursor-pointer shadow-md "
                  />
                </div>

                <div className="text-center w-full px-2 py-2">
                  <p className="text-gray-500 font-semibold">
                    Mastering the Date Paradox
                  </p>
                  <p className=" ">Nitin Seth</p>
                  <div className="flex justify-center gap-2 items-center ">
                    <p className="text-[#E42B26] text-[20px] font-semibold">
                      ₹ 551
                    </p>
                    <p className="line-through">₹ 799</p>
                  </div>
                </div>
              </div>
            </div>
          </div>{" "}
          {/* Card 8 */}
          <div className="flex-shrink-0 w-40 h-80  text-black m-4 rounded-lg">
            <div className="px-2    hover:shadow-lg rounded-lg  xl:h-[400px] ">
              <div className=" relative   xl:h-[400px]   rounded-lg flex flex-col items-center gap-2 justify-center  h-[450px]">
                <div className="w-[40px] flex items-center justify-center  h-[40px] bg-[#FF0000] rounded-full absolute  top-2 -right-[5px] text-white">
                  30%
                </div>
                <div className="">
                  <img
                    src="public/s8.jpg"
                    className="cursor-pointer shadow-md "
                  />
                </div>

                <div className="text-center w-full px-2 py-2">
                  <p className="text-gray-500 font-semibold">
                    Greatest Short Stories of....
                  </p>
                  <p className=" ">Fyodor Dosto...</p>
                  <div className="flex justify-center gap-2 items-center ">
                    <p className="text-[#E42B26] text-[20px] font-semibold">
                      ₹ 1,388
                    </p>
                    <p className="line-through">₹ 2,169</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* Card 9 */}
          <div className="flex-shrink-0 w-40 h-80  text-black m-4 rounded-lg">
            <div className="px-2    hover:shadow-lg rounded-lg  xl:h-[400px] ">
              <div className=" relative   xl:h-[400px]   rounded-lg flex flex-col items-center gap-2 justify-center  h-[450px]">
                <div className="w-[40px] flex items-center justify-center  h-[40px] bg-[#FF0000] rounded-full absolute  top-2 -right-[5px] text-white">
                  30%
                </div>
                <div className="">
                  <img
                    src="public/s9.jpg"
                    className="cursor-pointer shadow-md "
                  />
                </div>

                <div className="text-center w-full px-2 py-2">
                  <p className="text-gray-500 font-semibold">
                    Courage To Be Disliked
                  </p>
                  <p className=" ">Ichiro Kishimi</p>
                  <div className="flex justify-center gap-2 items-center ">
                    <p className="text-[#E42B26] text-[20px] font-semibold">
                      ₹ 396
                    </p>
                    <p className="line-through">₹ 550</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Previous Button */}

        {/* Next Button */}
        <button
          onClick={scrollNext}
          className="absolute top-1/2 right-4   text-black p-3 rounded-full"
        >
          <MdOutlineKeyboardArrowRight className="text-[70px] cursor-pointer" />
        </button>
      </div>
      <Link to="/newArrivals">
        <div className="text-center text-[#E42B26] font-semibold underline cursor-pointer py-4">
          Show All
        </div>
      </Link>
    </div>
  );
}
