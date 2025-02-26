import React from "react";
import Navbar from "../home/Navbar";
import BeforeNavbar from "../home/Before-Navbar";
import SearchNavbar from "../home/Search-Navbar";
import SignupPage from "./Signup-Page";
import Footer from "../home/Footer";

export default function Signup() {
  return (
    <div>
      <div className="fixed top-0 left-0 right-0 z-50 bg-white w-full">
        <BeforeNavbar />
        <div className="pt-8 sm:pt-6 md:pt-8">
          <SearchNavbar />
        </div>
        <Navbar />
      </div>
      <div className="mt-[260px] sm:mt-[160px] md:mt-[195px]">
        <SignupPage />
      </div>

      <Footer />
    </div>
  );
}
