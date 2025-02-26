import React from "react";

export default function BeforeNavbar() {
  return (
    <div className="w-full p-2 bg-[#E42B26] fixed z-50">
      <marquee behavior="" direction="" scrollamount="8">
        <div className="text-white flex flex-row gap-6  sm:flex-row items-center justify-center space-y-2 sm:space-y-0 sm:space-x-4 md:space-x-8 lg:space-x-16">
          <div className="text-sm sm:text-base">
            Grab Bestselling Books upto 50% off!
          </div>
          <div className="text-sm sm:text-base">
            FLAT 10% Off (Maximum Discount Rs. 50) Use Code-BWSPECIAL 10
          </div>
          <div className="text-sm sm:text-base hidden md:block">
            Grab Bestselling Books upto 50% off!
          </div>
          <div className="text-sm sm:text-base hidden md:block">
            FLAT 10% Off (Maximum Discount Rs. 50) Use Code-BWSPECIAL 10
          </div>
        </div>
      </marquee>
    </div>
  );
}
