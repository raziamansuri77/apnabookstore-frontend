import React from "react";
import Navbar from "../home/Navbar";
import BeforeNavbar from "../home/Before-Navbar";
import SearchNavbar from "../home/Search-Navbar";
import Parent from "../components/Parent";
import Footer from "../home/Footer";
import CommonFile from "./common-file";

export default function FileBase() {
  return (
    <div>
      <BeforeNavbar />
      <div className="pt-[35px]">
        <SearchNavbar />
      </div>
      <Navbar />

      <CommonFile />
      <Footer />
    </div>
  );
}
