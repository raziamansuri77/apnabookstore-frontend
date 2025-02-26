import React from "react";
import Navbar from "../home/Navbar";
import BeforeNavbar from "../home/Before-Navbar";
import SearchNavbar from "../home/Search-Navbar";
import Footer from "../home/Footer";
import Parent from "../components/Parent";

export default function TodaysDeal() {
  return (
    <div>
      <div className="fixed top-0 left-0 right-0 z-50 bg-white w-full">
        <BeforeNavbar />
        <div className="mt-[35px]">
          <SearchNavbar />
        </div>
        <Navbar />
      </div>
      <div className="mt-[170px]">
        <div className="text-center mt-[260px] text-xl md:text-2xl lg:text-[30px] font-bold py-4 md:py-5 lg:py-6  md:mt-[200px] lg:mt-[200px]">
          Deal Of The Day
        </div>
        <Parent />
        <Footer />
      </div>
    </div>
  );
}
