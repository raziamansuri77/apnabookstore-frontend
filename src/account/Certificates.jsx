import React from "react";
import Navbar from "../home/Navbar";
import BeforeNavbar from "../home/Before-Navbar";
import SearchNavbar from "../home/Search-Navbar";
import Footer from "../home/Footer";

export default function Certificates() {
  return (
    <div>
      <BeforeNavbar />
      <SearchNavbar />
      <Navbar />
      <div className="w-[85%] space-y-4   mx-auto py-16">
        <div className="text-[20px] font-semibold font-serif">
          My Gift Certificates
        </div>
      </div>
      <Footer />
    </div>
  );
}
