import React from "react";
import { Link } from "react-router-dom";
export default function YourAccount() {
  return (
    <div className="max-w-6xl mx-auto py-6 px-4 sm:px-6">
      <div className="text-[20px] sm:text-[25px] italic font-serif">
        My Account
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 py-4">
        <Link to="/personalsetting">
          <div className="border-2 p-2 rounded-lg flex flex-col justify-center items-center cursor-pointer h-[100px] sm:h-[110px] lg:h-[120px]">
            <img
              src="./personalsetttingicon.jpg"
              alt=""
              className="w-8 sm:w-10 lg:w-12"
            />
            <div className="font-bold text-[12px] sm:text-[13px] lg:text-[14px]">
              Personal Setting
            </div>
          </div>
        </Link>
        <Link to="/yourorder">
          <div className="border-2 p-2 rounded-lg flex flex-col justify-center items-center cursor-pointer h-[100px] sm:h-[110px] lg:h-[120px]">
            <img
              src="./myordericon.jpg"
              alt=""
              className="w-8 sm:w-10 lg:w-12"
            />
            <div className="font-bold text-[12px] sm:text-[13px] lg:text-[14px]">
              My Order
            </div>
          </div>
        </Link>
        <Link to="/wishlist">
          <div className="border-2 p-2 rounded-lg flex flex-col justify-center items-center cursor-pointer h-[100px] sm:h-[110px] lg:h-[120px]">
            <img
              src="./wishlisticon.jpg"
              alt=""
              className="w-8 sm:w-10 lg:w-12"
            />
            <div className="font-bold text-[12px] sm:text-[13px] lg:text-[14px]">
              My Wishlist
            </div>
          </div>
        </Link>
        <Link to="/certificates">
          <div className="border-2 p-2 rounded-lg flex flex-col justify-center items-center cursor-pointer h-[100px] sm:h-[110px] lg:h-[120px]">
            <img
              src="./giftcertificateicon.jpg"
              alt=""
              className="w-8 sm:w-10 lg:w-12"
            />
            <div className="font-bold text-[12px] sm:text-[13px] lg:text-[14px]">
              My Gift Certificates
            </div>
          </div>
        </Link>
        <Link to="/address">
          <div className="border-2 p-2 rounded-lg flex flex-col justify-center items-center cursor-pointer h-[100px] sm:h-[110px] lg:h-[120px]">
            <img
              src="./addressicon.jpg"
              alt=""
              className="w-8 sm:w-10 lg:w-12"
            />
            <div className="font-bold text-[12px] sm:text-[13px] lg:text-[14px]">
              My Address
            </div>
          </div>
        </Link>
        <Link to="/changepassword">
          <div className="border-2 p-2 rounded-lg flex flex-col justify-center items-center cursor-pointer h-[100px] sm:h-[110px] lg:h-[120px]">
            <img
              src="./chagepasswordicon.jpg"
              alt=""
              className="w-8 sm:w-10 lg:w-12"
            />
            <div className="font-bold text-[12px] sm:text-[13px] lg:text-[14px]">
              Change Password
            </div>
          </div>
        </Link>
      </div>
    </div>
  );
}
