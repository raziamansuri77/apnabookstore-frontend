import React from "react";

export default function BeforeNavbar() {
  return (
    <div className="lg:w-full w-[425px] sm:w-full p-2 bg-[#E42B26] fixed z-50">
      <marquee behavior="" direction="" scrollamount="8">
        <div className=" text-white flex gap-[100px]">
          <div>Grab Bestselling Books upto 50% off!</div>
          <div>
            FLAT 10% Off (Maximum Discount Rs. 50) Use Code-BWSPECIAL 10
          </div>
          <div>Grab Bestselling Books upto 50% off!</div>
          <div>
            FLAT 10% Off (Maximum Discount Rs. 50) Use Code-BWSPECIAL 10
          </div>
        </div>
      </marquee>
    </div>
  );
}
