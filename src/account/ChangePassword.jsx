import React from "react";
import Navbar from "../home/Navbar";
import BeforeNavbar from "../home/Before-Navbar";
import SearchNavbar from "../home/Search-Navbar";
import Footer from "../home/Footer";

export default function ChangePassword() {
  return (
    <div>
      <BeforeNavbar />
      <SearchNavbar /> <Navbar />
      <form action="" className="w-[420px] mx-auto py-12  space-y-6">
        <div className="text-[20px] font-serif font-semibold">
          Change Password
        </div>
        <div className="flex gap-1">
          <div>Email Address:</div>
          <div className="font-bold">Example</div>
        </div>
        <div className="relative">
          <input
            type="text"
            className="border-2 outline-none w-full px-2 py-1"
            placeholder="Enter your first name"
          />
          <div className="bg-white text-[14px] font-semibold   text-center absolute -top-3 left-6">
            First Name
          </div>
        </div>
        <div className="relative">
          <input
            type="text"
            className="border-2 outline-none w-full px-2 py-1"
            placeholder="Enter your last name"
          />
          <div className="bg-white text-[14px] font-semibold  text-center absolute -top-3 left-6">
            Last Name
          </div>
        </div>{" "}
        <div className="relative">
          <input
            type="text"
            className="border-2 outline-none w-full px-2 py-1"
            placeholder="Enter your email"
          />
          <div className="bg-white text-[14px] font-semibold text-center absolute -top-3 left-6">
            Email
          </div>
          <p>
            Note: If you change email id then this will be your default login
            email id.
          </p>
        </div>{" "}
        <div className="relative">
          <input
            type="text"
            className="border-2 outline-none w-full px-2 py-1"
            placeholder="Enter your first name"
          />
          <div className="bg-white text-[14px] font-semibold   text-center absolute -top-3 left-6">
            Fax
          </div>
        </div>
        <div className="relative">
          <input
            type="text"
            className="border-2 outline-none w-full px-2 py-1"
            placeholder="Enter your first name"
          />
          <div className="bg-white text-[14px] font-semibold   text-center absolute -top-3 left-6">
            Profile Name:
          </div>
        </div>{" "}
        <div className="relative">
          <select name="" id="" className="w-full border-2 py-1">
            <option value="no">No</option>
            <option value="no">Yes</option>
          </select>
          <div className="bg-white text-[14px] font-semibold   text-center absolute -top-3 left-6">
            Is Public Wishlist
          </div>
        </div>{" "}
        <div className="relative">
          <select name="" id="" className="w-full border-2 py-1">
            <option value="no">No</option>
            <option value="no">Yes</option>
          </select>
          <div className="bg-white text-[14px] font-semibold   text-center absolute -top-3 left-6">
            Newsletter Subscription
          </div>
        </div>{" "}
        <div className="relative">
          <select name="" id="" className="w-full border-2 py-1">
            <option value="no">No</option>
            <option value="no">Yes</option>
          </select>
          <div className=" text-[14px] font-semibold   bg-white text-center absolute -top-3 left-6">
            Trans Mail Unsubscribe
          </div>
        </div>
        <div className="relative">
          <div className="bg-white text-[14px] font-semibold   text-center absolute -top-3 left-6">
            Promo Mail Unsubscribe
          </div>
          <select name="" id="" className="w-full border-2 py-1">
            <option value="no">No</option>
            <option value="no">Yes</option>
          </select>
        </div>
        <div className="relative">
          <div className="w-full h-[70px] border-2"></div>
          <div className="absolute -top-3 left-6 bg-white">
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
            className="bg-white text-[14px] font-semibold   text-center absolute -top-3 left-6"
            required
          >
            Mobile Number <span className="text-red-600">*</span>
          </div>
        </div>{" "}
        <div className="flex gap-1 ">
          <div className="bg-[#D51912] text-[16px] text-white p-1 w-[80px] text-center cursor-pointer">
            Update
          </div>
          <div className="border-[#D51912] border-2 text-[16px] text-[#D51912]  p-1 w-[80px] text-center cursor-pointer">
            Update
          </div>
        </div>
      </form>
      <Footer />
    </div>
  );
}
