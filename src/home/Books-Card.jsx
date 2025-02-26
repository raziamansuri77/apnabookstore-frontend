import React from "react";
import { FaCartShopping } from "react-icons/fa6";

export default function BooksCard(props) {
  return (
    <div className="shadow-sm    h rounded-lg p-4 space-y-3 ">
      <div className="overflow-hidden">
        <img
          src={props.img}
          alt=""
          className="w-full h-[180px] cursor-pointer transition-all duration-[0.5] hover:scale-110"
        />
      </div>

      <div className="font-bold cursor-pointer hover:underline">
        {props.bookname}
      </div>
      <div className="flex items-center justify-between">
        <div>₹{props.mrp} </div>
        <div className="bg-[#7CB209] py-2 px-4 rounded-full text-white cursor-pointer">
          <FaCartShopping />
        </div>
      </div>
    </div>
  );
}
