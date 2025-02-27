import React from "react";
import Navbar from "./Navbar";
import BeforeNavbar from "./Before-Navbar";
import SearchNavbar from "./Search-Navbar";
import Slider from "./Slider";
import Trending from "./Trending";
import Comics from "./Comics";
import IconSlider from "./Icon-Slider";
import Seller from "./Seller";
import Arrivals from "./Arrivals";
import BestSeller from "./Best-Seller";
import Author from "./Author";
import Winners from "./Winners";
import TopBooks from "./Top-Books";
import DiscountBooks from "./Discount-Books";
import Footer from "./Footer";
import Slider2 from "./Slider2";
import ExamBooks from "./Exam-Books";

export default function Home() {
  return (
    <div>
      <div className="fixed top-0 left-0 right-0 z-50 bg-white w-full">
        <BeforeNavbar />
        <div className="pt-[30px]">
          <SearchNavbar />
        </div>
        <Navbar />
      </div>
      <div className="md:mt-[192px] mt-[180px]">
        <Comics />
        <Slider />
        <IconSlider />
        <Trending />
        <Seller />
        <Arrivals />
        <BestSeller />
        <Winners />
        <TopBooks />
        {/* <ExamBooks /> */}
        <DiscountBooks />
        {/* <Author /> */}
        <Footer />
      </div>
    </div>
  );
}
