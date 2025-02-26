import React from "react";
import Navbar from "../home/Navbar";
import BeforeNavbar from "../home/Before-Navbar";
import SearchNavbar from "../home/Search-Navbar";
import Footer from "../home/Footer";

export default function PersonalSetting() {
  return (
    <div>
      <div className="fixed top-0 left-0 right-0 z-50 bg-white w-full">
        <BeforeNavbar />
        <div className=" mt-[35px]">
          <SearchNavbar />
        </div>
        <Navbar />
      </div>
      <div className="mt-[250px]   md:mt-[200px]">
        <form
          action=""
          className="w-full sm:w-[420px] mx-auto py-8 sm:py-12 space-y-4 sm:space-y-6 px-4 sm:px-0"
        >
          <div className="text-[16px] sm:text-[20px] font-serif font-semibold">
            Personal Settings
          </div>
          <div className="relative">
            <input
              type="text"
              className="border-2 outline-none w-full px-2 py-1"
              placeholder="Enter your first name"
            />
            <div className="bg-white text-[12px] sm:text-[14px] font-semibold text-center absolute -top-3 left-6">
              First Name
            </div>
          </div>
          <div className="relative">
            <input
              type="text"
              className="border-2 outline-none w-full px-2 py-1"
              placeholder="Enter your last name"
            />
            <div className="bg-white text-[12px] sm:text-[14px] font-semibold text-center absolute -top-3 left-6">
              Last Name
            </div>
          </div>
          <div className="relative">
            <input
              type="text"
              className="border-2 outline-none w-full px-2 py-1"
              placeholder="Enter your email"
            />
            <div className="bg-white text-[12px] sm:text-[14px] font-semibold text-center absolute -top-3 left-6">
              Email
            </div>
            <p className="text-[12px] sm:text-sm mt-1">
              Note: If you change email id then this will be your default login
              email id.
            </p>
          </div>
          <div className="relative">
            <input
              type="text"
              className="border-2 outline-none w-full px-2 py-1"
              placeholder="Enter your first name"
            />
            <div className="bg-white text-[12px] sm:text-[14px] font-semibold text-center absolute -top-3 left-6">
              Fax
            </div>
          </div>
          <div className="relative">
            <input
              type="text"
              className="border-2 outline-none w-full px-2 py-1"
              placeholder="Enter your first name"
            />
            <div className="bg-white text-[12px] sm:text-[14px] font-semibold text-center absolute -top-3 left-6">
              Profile Name:
            </div>
          </div>
          <div className="relative">
            <select name="" id="" className="w-full border-2 py-1">
              <option value="no">No</option>
              <option value="no">Yes</option>
            </select>
            <div className="bg-white text-[12px] sm:text-[14px] font-semibold text-center absolute -top-3 left-6">
              Is Public Wishlist
            </div>
          </div>
          <div className="relative">
            <select name="" id="" className="w-full border-2 py-1">
              <option value="no">No</option>
              <option value="no">Yes</option>
            </select>
            <div className="bg-white text-[12px] sm:text-[14px] font-semibold text-center absolute -top-3 left-6">
              Newsletter Subscription
            </div>
          </div>
          <div className="relative">
            <select name="" id="" className="w-full border-2 py-1">
              <option value="no">No</option>
              <option value="no">Yes</option>
            </select>
            <div className="text-[12px] sm:text-[14px] font-semibold bg-white text-center absolute -top-3 left-6">
              Trans Mail Unsubscribe
            </div>
          </div>
          <div className="relative">
            <div className="bg-white text-[12px] sm:text-[14px] font-semibold text-center absolute -top-3 left-6">
              Promo Mail Unsubscribe
            </div>
            <select name="" id="" className="w-full border-2 py-1">
              <option value="no">No</option>
              <option value="no">Yes</option>
            </select>
          </div>
          <div className="relative">
            <div className="w-full h-[50px] sm:h-[70px] border-2"></div>
            <div className="absolute -top-3 left-6 bg-white text-[12px] sm:text-[14px]">
              Your Public Wishlist URL
            </div>
          </div>
          <div className="relative">
            <input
              type="text"
              className="border-2 outline-none w-full px-2 py-1"
              placeholder="Enter your mobile number"
            />
            <div
              className="bg-white text-[12px] sm:text-[14px] font-semibold text-center absolute -top-3 left-6"
              required
            >
              Mobile Number <span className="text-red-600">*</span>
            </div>
          </div>
          <div className="flex gap-1">
            <div className="bg-[#D51912] text-[14px] sm:text-[16px] text-white p-1 w-[70px] sm:w-[80px] text-center cursor-pointer">
              Update
            </div>
            <div className="border-[#D51912] border-2 text-[14px] sm:text-[16px] text-[#D51912] p-1 w-[70px] sm:w-[80px] text-center cursor-pointer">
              Update
            </div>
          </div>
        </form>{" "}
      </div>
      <Footer />
    </div>
  );
}
