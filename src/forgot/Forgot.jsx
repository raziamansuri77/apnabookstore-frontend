import React from "react";
import Navbar from "../home/Navbar";
import BeforeNavbar from "../home/Before-Navbar";
import SearchNavbar from "../home/Search-Navbar";
import Footer from "../home/Footer";
import ForgotPage from "./Forgot-Page";

export default function Forgot() {
  return (
    <div>
      <div className="fixed top-0 left-0 right-0 z-50 bg-white w-full">
        <BeforeNavbar />
        <div className=" mt-[35px]">
          <SearchNavbar />
        </div>
        <Navbar />
      </div>
      <div className="mt-[240px] sm:mt-[160px] md:mt-[190px]">
        <ForgotPage />
      </div>
      <Footer />
    </div>
  );
}
