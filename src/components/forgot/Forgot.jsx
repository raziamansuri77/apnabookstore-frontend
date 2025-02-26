import React from "react";
import BeforeNavbar from "../home/Before-Navbar";
import SearchNavbar from "../home/Search-Navbar";
import Navbar from "../home/Navbar";
import ForgotPage from "./Forgot-Page";
import Footer from "../home/Footer";

export default function Forgot() {
  return (
    <div>
      <BeforeNavbar />
      <SearchNavbar />
      <Navbar />
      <ForgotPage />
      <Footer />
    </div>
  );
}
