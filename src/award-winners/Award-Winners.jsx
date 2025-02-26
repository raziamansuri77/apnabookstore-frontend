import React from "react";
import Navbar from "../home/Navbar";
import BeforeNavbar from "../home/Before-Navbar";
import SearchNavbar from "../home/Search-Navbar";
import Parent from "../components/Parent";
import Footer from "../home/Footer";

export default function AwardWinners() {
  return (
    <div>
      <div className="fixed top-0 left-0 right-0 z-50 bg-white w-full">
        <BeforeNavbar />
        <div className="mt-[35px]">
          <SearchNavbar />
        </div>
        <Navbar />
      </div>
      <div className="mt-[270px] md:mt-[220px]">
        <div className="text-[30px] font-bold text-center py-2">
          Award Winners
        </div>

        <Parent test={"Box Set"} />
        <Footer />
      </div>
    </div>
  );
}
