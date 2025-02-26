import React from "react";
import BeforeNavbar from "../home/Before-Navbar";
import SearchNavbar from "../home/Search-Navbar";
import Navbar from "../home/Navbar";
import Footer from "../home/Footer";

export default function AboutUS() {
  return (
    <div>
      <div className="fixed top-0 left-0 right-0 z-50 bg-white w-full">
        <BeforeNavbar />
        <div className="mt-[35px]">
          <SearchNavbar />
        </div>
        <Navbar />
      </div>

      <div className="container mx-auto pt-32 pb-16 px-4 mt-[150px] md:mt-[100px]">
        <div className="max-w-4xl mx-auto">
          <div className="pb-6">
            <img src="public/about-title.png" alt="" className="mx-auto" />
          </div>
          <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
            <h2 className="text-2xl font-semibold text-gray-700 mb-4">
              Welcome to Your Literary Haven
            </h2>
            <p className="text-gray-600 mb-6 leading-relaxed">
              Apna Book Store is your premier destination for all things
              literary. Founded with a passion for books and reading, we strive
              to bring the joy of reading to everyone.
            </p>

            <div className="grid md:grid-cols-2 gap-8 mt-12">
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-gray-700 mb-3">
                  Our Mission
                </h3>
                <p className="text-gray-600">
                  To provide quality books at affordable prices while creating a
                  community of book lovers and promoting literacy.
                </p>
              </div>

              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-gray-700 mb-3">
                  Our Vision
                </h3>
                <p className="text-gray-600">
                  To become the most trusted and beloved bookstore, making
                  literature accessible to all.
                </p>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-lg p-8">
            <h2 className="text-2xl font-semibold text-gray-700 mb-4">
              What Sets Us Apart
            </h2>
            <ul className="list-disc list-inside text-gray-600 space-y-3">
              <li>Extensive collection of books across all genres</li>
              <li>Competitive prices and regular discounts</li>
              <li>Expert staff recommendations</li>
              <li>Fast and reliable delivery</li>
              <li>Customer-first approach</li>
            </ul>
          </div>
        </div>
      </div>
      <img src="public/about-bottom.png" alt="" className="" />
      <Footer />
    </div>
  );
}
