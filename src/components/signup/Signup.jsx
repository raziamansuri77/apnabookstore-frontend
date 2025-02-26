import React from "react";
import SearchNavbar from "../home/Search-Navbar";
import Navbar from "../home/Navbar";
import BeforeNavbar from "../home/Before-Navbar";
import SignupPage from "./Signup-Page";
import Footer from "../home/Footer";
export default function Signup() {
  return (
    <div>
      <BeforeNavbar />
      <SearchNavbar />
      <Navbar />
      <SignupPage />
      <Footer />
    </div>
  );
}
