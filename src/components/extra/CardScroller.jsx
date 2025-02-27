import React, { useRef, useState, useEffect } from "react";
import { FaLessThan } from "react-icons/fa6";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { MdOutlineKeyboardArrowLeft } from "react-icons/md";
export default function CardScroll() {
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
      <div className="text-[30px] font-bold text-center py-4">Now Trending</div>
      <div>
        <div className="relative">
          <button
            onClick={scrollPrev}
            className="absolute top-1/2 left-4 h-[50px]    text-black p-3 rounded-full"
          >
            <MdOutlineKeyboardArrowLeft className="text-[70px] cursor-pointer" />
          </button>
          <div
            className="flex overflow-x-hidden scroll-smooth max-w-7xl mx-auto  h-[480px]" // Hides scrollbar while enabling smooth scroll
            ref={scrollContainer}
          >
            {/* Card 1 */}
            <div
              ref={cardRef}
              className="flex-shrink-0 w-60 h-80   text-black m-4 rounded-lg"
            >
              <div className="px-2   shadow-sm rounded-lg border-1 xl:h-[430px] ">
                <div className="p-4 border-1 xl:h-[430px]   rounded-lg flex flex-col items-center gap-2 justify-center shadow-md h-[450px]">
                  <div className="">
                    <img src="t1.jpg" className="cursor-pointer  " />
                  </div>
                  <div className="text-center w-full px-2 py-2">
                    <p>The Psychology</p>
                    <p>Housel,Morgan</p>
                    <div className="flex justify-center gap-4">
                      <p>251</p>
                      <p>322</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* Card 2 */}
            <div className="flex-shrink-0 w-60 h-80  text-black m-4 rounded-lg">
              <div className="px-2  shadow-sm rounded-lg border-1 xl:h-[430px] ">
                <div className="p-4 border-1 xl:h-[430px]  rounded-lg flex flex-col items-center gap-2 justify-center shadow-md h-[450px]">
                  <div className="">
                    <img src="t2.jpg" className="cursor-pointer  " />
                  </div>
                  <div className="text-center w-full px-2 py-2">
                    <p>Karnal II : Son of Surya</p>
                    <p>Kevin Missal</p>
                    <div className="flex justify-center gap-4">
                      <p>257</p>
                      <p>396</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* Card 3 */}
            <div className="flex-shrink-0 w-60 h-80  text-black m-4 rounded-lg">
              <div className="px-2  shadow-sm rounded-lg border-1 xl:h-[430px] ">
                <div className="p-4 border-1 xl:h-[430px]  rounded-lg flex flex-col items-center gap-2 justify-center shadow-md h-[450px]">
                  <div className="">
                    <img src="t3.jpg" className="cursor-pointer  " />
                  </div>
                  <div className="text-center w-full px-2 py-2">
                    <p>White Nights</p>
                    <p>Ronald Meyer</p>
                    <div className="flex justify-center gap-4">
                      <p>314</p>
                      <p>338</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* Card 4 */}
            <div className="flex-shrink-0 w-60 h-80   text-black m-4 rounded-lg">
              <div className="px-2  shadow-sm rounded-lg border-1 xl:h-[430px] ">
                <div className="p-4 border-1 xl:h-[430px]  rounded-lg flex flex-col items-center gap-2 justify-center shadow-md h-[450px]">
                  <div className="">
                    <img src="t4.jpg" className="cursor-pointer  " />
                  </div>

                  <div className="text-center w-full px-2 py-2">
                    <p>30 Days To Better English</p>
                    <p>Lewis Norman</p>
                    <div className="flex justify-center gap-4">
                      <p>119</p>
                      <p>199</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>{" "}
            {/* Card 5 */}
            <div className="flex-shrink-0 w-60 h-80  text-black m-4 rounded-lg">
              <div className="px-2  shadow-sm rounded-lg border-1 xl:h-[430px] ">
                <div className="p-4 border-1 xl:h-[430px]  rounded-lg flex flex-col items-center gap-2 justify-center shadow-md h-[450px]">
                  <div className="">
                    <img src="t5.jpg" className="cursor-pointer  " />
                  </div>
                  <div className="text-center w-full px-2 py-2">
                    <p>VAgabond (Vizbig Edition),Vol.3</p>
                    <p>Takehiko Inoue</p>
                    <div className="flex justify-center gap-4">
                      <p>1,388</p>
                      <p>32,169</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>{" "}
            {/* Card 6 */}
            <div className="flex-shrink-0 w-60 h-80  text-black m-4 rounded-lg">
              <div className="px-2  shadow-sm rounded-lg border-1 xl:h-[430px] ">
                <div className="p-4 border-1 xl:h-[430px]  rounded-lg flex flex-col items-center gap-2 justify-center shadow-md h-[450px]">
                  <div className="">
                    <img src="t6.jpg" className="cursor-pointer  " />
                  </div>
                  <div className="text-center w-full px-2 py-2">
                    <p>Rooster Fighter,Vol.1</p>
                    <p>Syu Sakuratani</p>
                    <div className="flex justify-center gap-4">
                      <p>309</p>
                      <p>1,105</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>{" "}
            {/* Card 7 */}
            <div className="flex-shrink-0 w-60 h-80  text-black m-4 rounded-lg">
              <div className="px-2  shadow-sm rounded-lg border-1 xl:h-[430px] ">
                <div className="p-4 border-1 xl:h-[430px]  rounded-lg flex flex-col items-center gap-2 justify-center shadow-md h-[450px]">
                  <div className="">
                    <img src="t7.jpg" className="cursor-pointer  " />
                  </div>
                  <div className="text-center w-full px-2 py-2">
                    <p>Vagabond(Vizbig Edition),Vol.2</p>
                    <p>Takehiko Inoue</p>
                    <div className="flex justify-center gap-4">
                      <p>1,714</p>
                      <p>2,169</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>{" "}
            {/* Card 8 */}
            <div className="flex-shrink-0 w-60 h-80  text-black m-4 rounded-lg">
              <div className="px-2  shadow-sm rounded-lg border-1 xl:h-[430px] ">
                <div className="p-4 border-1 xl:h-[430px]  rounded-lg flex flex-col items-center gap-2 justify-center shadow-md h-[450px]">
                  <div className="">
                    <img src="t8.jpg" className="cursor-pointer  " />
                  </div>
                  <div className="text-center w-full px-2 py-2">
                    <p>Fire & Blood</p>
                    <p>Grorge R.R.....</p>
                    <div className="flex justify-center gap-4">
                      <p>536</p>
                      <p>850</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* Card 9 */}
            <div className="flex-shrink-0 w-60 h-80  text-black m-4 rounded-lg">
              <div className="px-2  shadow-sm rounded-lg border-1 xl:h-[430px] ">
                <div className="p-4 border-1 xl:h-[430px]  rounded-lg flex flex-col items-center gap-2 justify-center shadow-md h-[450px]">
                  <div className="">
                    <img src="t9.jpg" className="cursor-pointer  " />
                  </div>
                  <div className="text-center w-full px-2 py-2">
                    <p>Vagabond (Vizbig Edition),Vol.4</p>
                    <p>Housel,Morgan</p>
                    <div className="flex justify-center gap-4">
                      <p>1,410</p>
                      <p>2,169</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>{" "}
            {/* Card 10 */}
            <div className="flex-shrink-0 w-60 h-80  text-black m-4 rounded-lg">
              <div className="px-2  shadow-sm rounded-lg border-1 xl:h-[430px] ">
                <div className="p-4 border-1 xl:h-[430px]  rounded-lg flex flex-col items-center gap-2 justify-center shadow-md h-[450px]">
                  <div className="">
                    <img src="t10.jpg" className="cursor-pointer  " />
                  </div>
                  <div className="text-center w-full px-2 py-2">
                    <p>Conceptual Physics | Twelfth Edition | By Pearson</p>
                    <p>Paul G. Hewitt</p>
                    <div className="flex justify-center gap-4">
                      <p>824</p>
                      <p>1070</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>{" "}
            {/* Card 11 */}
            <div className="flex-shrink-0 w-60 h-80  text-black m-4 rounded-lg">
              <div className="px-2  shadow-sm rounded-lg border-1 xl:h-[430px] ">
                <div className="p-4 border-1 xl:h-[430px]  rounded-lg flex flex-col items-center gap-2 justify-center shadow-md h-[450px]">
                  <div className="">
                    <img src="t11.jpg" className="cursor-pointer  " />
                  </div>
                  <div className="text-center w-full px-2 py-2">
                    <p>20th Century Boys:The Perfect Edition,Vol.1</p>
                    <p>Naoki Urasawa</p>
                    <div className="flex justify-center gap-4">
                      <p>1,237</p>
                      <p>2,061</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>{" "}
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
      </div>
    </div>
  );
}
