import React from "react";
import Navbar from "../home/Navbar";
import BeforeNavbar from "../home/Before-Navbar";
import SearchNavbar from "../home/Search-Navbar";
import Footer from "../home/Footer";

export default function Address() {
  return (
    <div>
      <BeforeNavbar />
      <SearchNavbar />
      <Navbar />
      <div className="w-[85%] space-y-4   mx-auto py-16">
        <div className="text-[20px] font-semibold font-serif">My Addresses</div>
        <div className="p-2 border-2 text-[#E42B26] font-semibold text-[18px] text-center">
          You do not have any Order(s) placed
        </div>
        <div className="w-[270px] bg-[#F8F8F8] rounded-lg h-[220px] border-2 flex justify-center items-center ">
          <div className="border-2 rounded-full bg-white w-[50px] h-[50px]  text-[40px] flex justify-center items-center">
            +
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
