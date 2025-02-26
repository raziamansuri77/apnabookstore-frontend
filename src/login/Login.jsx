import React from "react";
import { Link } from "react-router-dom";
import Navbar from "../home/Navbar";
import BeforeNavbar from "../home/Before-Navbar";
import SearchNavbar from "../home/Search-Navbar";
import LoginPage from "./Login-Page";
import Footer from "../home/Footer";

export default function Login() {
  return (
    <div>
      <div className="fixed top-0 left-0 right-0 z-50 bg-white w-full">
        <BeforeNavbar />
        <div className=" mt-[35px]">
          <SearchNavbar />
        </div>
        <Navbar />
      </div>
      <div className="mt-[260px] sm:mt-[160px] md:mt-[200px]">
        <LoginPage />
      </div>
      <div className="pt-10 pb-3">
        <Footer />
      </div>
    </div>
  );
}
