import React from "react";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <div className="pt-12 pb-4 bg-[#FCFCFC]">
      <div className="max-w-7xl mx-auto px-4 md:flex grid grid-cols-2  md:flex-row justify-between gap-8 md:gap-4 font-sans text-[16px]">
        <div className="text-center md:text-left">
          <div className="font-semibold text-[#E42B26] italic mb-3">
            {" "}
            Company
          </div>
          <Link to="/AboutUS">
            <div className="mb-2">About Us</div>
          </Link>
          <Link to="/Career">
            <div className="mb-2">Career</div>
          </Link>
          <Link to="/Blog">
            <div className="mb-2">Blog</div>
          </Link>
          <Link to="/ContactUs">
            <div className="mb-2">Contact Us</div>
          </Link>
        </div>
        <div className="text-center md:text-left">
          <div className="font-semibold text-[#E42B26] italic mb-3">
            Policies
          </div>
          <Link to="/PrivacyPolicy">
            <div className="mb-2">Privacy Policies</div>
          </Link>
          <Link to="/TermsOfUse">
            <div className="mb-2">Terms of Use</div>
          </Link>
          <Link to="/SecureShopping">
            <div className="mb-2">Secure Shopping</div>
          </Link>
        </div>
        <div className="text-center md:text-left">
          <div className="font-semibold text-[#E42B26] italic mb-3">Help</div>
          <div className="mb-2">Payment</div>
          <div className="mb-2">Shipping</div>
          <div className="mb-2">Return</div>
          <Link to="/FAQ">
            <div className="mb-2">FAQ</div>
          </Link>
        </div>
        <div className="text-center md:text-left">
          <div className="font-semibold text-[#E42B26] italic mb-3">Misc</div>
          <div className="mb-2">Affiliate</div>
          <div className="mb-2">Sitemap</div>
          <div className="font-semibold text-[#E42B26] italic mt-4">
            Download Our App
          </div>
        </div>
      </div>
      <div className="flex justify-center flex-col items-center mt-8">
        <div className="flex flex-wrap justify-center gap-3 py-4">
          <img
            src="/fb.png"
            alt=""
            className="cursor-pointer w-[30px] h-[30px] sm:w-[35px] sm:h-[35px]"
          />
          <img
            src="/instagram.png"
            alt=""
            className="cursor-pointer w-[30px] h-[30px] sm:w-[35px] sm:h-[35px]"
          />
          <img
            src="/linkedin.png"
            alt=""
            className="cursor-pointer w-[30px] h-[30px] sm:w-[35px] sm:h-[35px]"
          />
          <img
            src="/pinterest.png"
            alt=""
            className="cursor-pointer w-[30px] h-[30px] sm:w-[35px] sm:h-[35px]"
          />
          <img
            src="/youtube.png"
            alt=""
            className="cursor-pointer w-[30px] h-[30px] sm:w-[35px] sm:h-[35px]"
          />
        </div>
        <div className="text-center text-sm sm:text-base px-4 flex flex-col md:flex-row ">
          <div>Copyright © 2025 . Apnabookstore.com.</div>
          <div>All Rights Reserved</div>
        </div>
      </div>
    </div>
  );
}
