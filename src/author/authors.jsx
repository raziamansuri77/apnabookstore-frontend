import React from "react";
import Navbar from "../home/Navbar";
import BeforeNavbar from "../home/Before-Navbar";
import SearchNavbar from "../home/Search-Navbar";
import Footer from "../home/Footer";
import authorData from "../author/author-data.json";

export default function Authors() {
  return (
    <div>
      <div className="fixed top-0 left-0 right-0 z-50 bg-white w-full">
        <BeforeNavbar />
        <div className="mt-[35px]">
          <SearchNavbar />
        </div>
        <Navbar />
      </div>
      <div className="py-6 px-12 mt-[260px] md:mt-[210px] md:max-w-7xl mx-auto">
        <div className="text-[20px] font-semibold ">Featured Authors</div>

        <div className="grid grid-cols-1 md:grid-cols-1  lg:grid-cols-2 gap-6 md:gap-8 lg:gap-16">
          {authorData.map((author) => {
            return (
              <div className="flex flex-col sm:flex-row gap-4 sm:gap-8 lg:gap-12 border-b-2 py-4">
                <img
                  src={author.img}
                  alt=""
                  className="w-[80px] h-[80px] sm:w-[100px] sm:h-[100px] rounded-full cursor-pointer mx-auto sm:mx-0"
                />
                <div className="text-center sm:text-left">
                  <div className="font-bold text-[16px] sm:text-[18px]">
                    {author.name}
                  </div>
                  <div className="text-[14px] sm:text-[16px]">
                    {author.about}{" "}
                    <span className="text-[#B01A16] hover:underline cursor-pointer">
                      Read More
                    </span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <Footer />
    </div>
  );
}
