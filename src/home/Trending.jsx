import React, { useRef, useState, useEffect } from "react";
import {
  MdOutlineKeyboardArrowRight,
  MdOutlineKeyboardArrowLeft,
} from "react-icons/md";

// Book data array
const trendingBooks = [
  {
    id: 1,
    title: "The Psychology",
    author: "Housel,Morgan",
    price: 251,
    originalPrice: 322,
    image: "public/t1.jpg",
    discount: "30%",
  },
  {
    id: 2,
    title: "Karnal II : Son of Surya",
    author: "Kevin Missal",
    price: 257,
    originalPrice: 396,
    image: "public/t2.jpg",
    discount: "30%",
  },
  {
    id: 3,
    title: "White Nights",
    author: "Ronald Meyer",
    price: 314,
    originalPrice: 338,
    image: "public/t3.jpg",
    discount: "30%",
  },
  {
    id: 4,
    title: "30 Days To Better English",
    author: "Lewis Norman",
    price: 119,
    originalPrice: 199,
    image: "public/t4.jpg",
    discount: "30%",
  },
  {
    id: 5,
    title: "VAgabond (Vizbig Edition),Vol.3",
    author: "Takehiko Inoue",
    price: 1388,
    originalPrice: 32169,
    image: "public/t5.jpg",
    discount: "30%",
  },
  {
    id: 6,
    title: "Rooster Fighter,Vol.1",
    author: "Syu Sakuratani",
    price: 309,
    originalPrice: 1105,
    image: "public/t6.jpg",
    discount: "30%",
  },
  {
    id: 7,
    title: "Vagabond(Vizbig Edition),Vol.2",
    author: "Takehiko Inoue",
    price: 1714,
    originalPrice: 2169,
    image: "public/t7.jpg",
    discount: "30%",
  },
  {
    id: 8,
    title: "Fire & Blood",
    author: "Grorge R.R.....",
    price: 536,
    originalPrice: 850,
    image: "public/t8.jpg",
    discount: "30%",
  },
  {
    id: 9,
    title: "Vagabond (Vizbig Edition),Vol.4",
    author: "Housel,Morgan",
    price: 1410,
    originalPrice: 2169,
    image: "public/t9.jpg",
    discount: "30%",
  },
  {
    id: 10,
    title: "Conceptual Physics | Twelfth Edition | By Pearson",
    author: "Paul G. Hewitt",
    price: 824,
    originalPrice: 1070,
    image: "public/t10.jpg",
    discount: "30%",
  },
  {
    id: 11,
    title: "20th Century Boys:The Perfect Edition,Vol.1",
    author: "Naoki Urasawa",
    price: 1237,
    originalPrice: 2061,
    image: "public/t11.jpg",
    discount: "30%",
  },
];

export default function Trending() {
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
    return () => window.removeEventListener("resize", handleResize);
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
    <div className="w-full px-4 md:px-6 lg:px-8">
      <div className="text-[20px] md:text-[25px] lg:text-[30px] font-bold text-center py-2 md:py-3 lg:py-4">
        Now Trending
      </div>

      <div className="relative">
        <button
          onClick={scrollPrev}
          className="absolute top-1/2 left-0 md:left-2 lg:left-4 h-[30px] md:h-[40px] lg:h-[50px] text-black p-2 md:p-3 rounded-full z-10"
        >
          <MdOutlineKeyboardArrowLeft className="text-[40px] md:text-[50px] lg:text-[70px] cursor-pointer" />
        </button>

        <div
          className="flex overflow-x-hidden scroll-smooth mx-auto h-[350px] md:h-[390px] lg:h-[430px] max-w-full md:max-w-3xl lg:max-w-7xl"
          ref={scrollContainer}
        >
          {trendingBooks.map((book) => (
            <div
              key={book.id}
              ref={book.id === 1 ? cardRef : null}
              className="flex-shrink-0 w-40 md:w-52 lg:w-60 h-[300px] md:h-[350px] lg:h-[400px] text-black m-2 md:m-3 lg:m-4 rounded-lg"
            >
              <div className="px-1 md:px-2 shadow-sm rounded-lg border-1 relative h-full">
                <div className="absolute -top-[10px] md:-top-[12px] lg:-top-[14px] -right-2 md:-right-3 lg:-right-4 w-[30px] md:w-[35px] lg:w-[40px] h-[30px] md:h-[35px] lg:h-[40px] flex items-center justify-center text-white bg-[#FF0000] rounded-full text-xs md:text-sm lg:text-base">
                  {book.discount}
                </div>

                <div className="p-2 md:p-3 lg:p-4 border-1 rounded-lg flex flex-col items-center gap-1 md:gap-1.5 lg:gap-2 justify-center shadow-md h-full">
                  <div className="overflow-hidden">
                    <div className="hover:scale-110 duration-500 transition-transform">
                      <img
                        src={book.image}
                        className="cursor-pointer w-[120px] md:w-[150px] lg:w-[170px] h-[180px] md:h-[210px] lg:h-[240px] object-cover"
                        alt={book.title}
                      />
                    </div>
                  </div>

                  <div className="text-center w-full px-1 md:px-1.5 lg:px-2 py-1 md:py-1.5 lg:py-2">
                    <p className="text-xs md:text-sm lg:text-base truncate">
                      {book.title}
                    </p>
                    <p className="text-xs md:text-sm lg:text-base">
                      {book.author}
                    </p>
                    <div className="flex justify-center gap-2 md:gap-3 lg:gap-4">
                      <p className="text-xs md:text-sm lg:text-base">
                        ₹{book.price}
                      </p>
                      <p className="text-xs md:text-sm lg:text-base line-through text-gray-500">
                        ₹{book.originalPrice}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <button
          onClick={scrollNext}
          className="absolute top-1/2 right-0 md:right-2 lg:right-4 h-[30px] md:h-[40px] lg:h-[50px] text-black p-2 md:p-3 rounded-full z-10"
        >
          <MdOutlineKeyboardArrowRight className="text-[40px] md:text-[50px] lg:text-[70px] cursor-pointer" />
        </button>
      </div>

      <div className="text-center text-[#E42B26] font-semibold underline cursor-pointer py-2 md:py-3 lg:py-4 text-sm md:text-base lg:text-lg">
        Show All
      </div>
    </div>
  );
}
