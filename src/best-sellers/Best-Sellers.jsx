import React from "react";
import Navbar from "../home/Navbar";
import BeforeNavbar from "../home/Before-Navbar";
import SearchNavbar from "../home/Search-Navbar";
import Footer from "../home/Footer";
import BestSellersBase from "./Best-Sellers-Base";
import Parent from "../components/Parent";

export default function BestSellers() {
  return (
    <div>
      <div className="fixed top-0 left-0 right-0 z-50 bg-white w-full">
        <BeforeNavbar />
        <div className="mt-[35px]">
          <SearchNavbar />
        </div>
        <Navbar />
      </div>
      <div className="mt-[270px] sm:mt-[220px]">
        <div className="text-[30px] font-bold text-center py-2">
          Best Sellers
        </div>
        <Parent />
        <Footer />
      </div>
    </div>
  );
}
