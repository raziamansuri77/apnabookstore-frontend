import React from "react";
import SearchNavbar from "../home/Search-Navbar";
import BeforeNavbar from "../home/Before-Navbar";
import Navbar from "../home/Navbar";
import Footer from "../home/Footer";
import ArrivalsHero from "./Arrivals-Hero";

export default function NewArrivals() {
  return (
    <div>
      <BeforeNavbar />
      <SearchNavbar />
      <Navbar />
      <ArrivalsHero />
      {/* <Footer /> */}
    </div>
  );
}
