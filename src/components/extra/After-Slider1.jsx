import React from "react";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { MdOutlineKeyboardArrowLeft } from "react-icons/md";

export default function Images() {
  const ImgName = [
    {
      img: "https://www.bookswagon.com/Images/staticimages/icon1.png",
      name: "Best Seller",
    },
    {
      img: "https://www.bookswagon.com/Images/staticimages/icon8.png",
      name: "Award Winners",
    },
    {
      img: "https://www.bookswagon.com/Images/staticimages/TodaysDeal.png",

      name: "Best Seller",
    },
    {
      img: "https://www.bookswagon.com/Images/staticimages/icon4.png",
      name: "Box Sets",
    },
    {
      img: "https://www.bookswagon.com/Images/staticimages/icon7.png",
      name: "International Best Seller",
    },
    {
      img: "https://www.bookswagon.com/Images/staticimages/icon2.png",
      name: "New Arrivals",
    },
    {
      img: "https://www.bookswagon.com/Images/staticimages/icon5.png",
      name: "Fiction Books",
    },
    {
      img: "https://www.bookswagon.com/Images/staticimages/tarot.png",
      name: "Tarot Cards",
    },
  ];
  return (
    <div className="py-12">
      <div className="max-w-7xl mx-auto flex justify-between items-center text-center   py-6 border-t-2 border-b-2 border-gray-300">
        <MdOutlineKeyboardArrowLeft className="text-[70px] cursor-pointer" />
        <div className="flex justify-between w-full">
          {ImgName.map((imgName) => {
            return (
              <div className="text-center flex  flex-col items-center cursor-pointer">
                <img src={imgName.img} alt="" className="w-[80px] " />
                <p>{imgName.name}</p>
              </div>
            );
          })}
        </div>

        <MdOutlineKeyboardArrowRight className="text-[70px] cursor-pointer" />
      </div>
      <div>sdfnsmfgsb</div>
    </div>
  );
}
