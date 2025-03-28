import React from "react";
import { useState } from "react";
import data from "/src/components/arrivals/data.json";

export default function ArrivalsHero() {
  const [value, setValue] = useState(50);
  const handleChange = (event) => {
    setValue(event.target.value);
  };

  return (
    <div>
      <div className="text-center text-[30px] font-bold">New Arrivals</div>
      <div
        className="flex
      gap-4 w-[90%] mx-auto"
      >
        <div className="bg-red-100 w-[40%] space-y-4">
          <div>Refine your Search</div>
          <div className="space-y-4">
            <div>
              Price range:
              <span className="text-[#FF0000]">
                {" "}
                ₹{value} - ₹{value}
              </span>
            </div>
            <input
              type="range"
              min="0"
              max="100"
              value={value}
              onChange={handleChange}
              className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
            />{" "}
            <div>
              Discount Range:{" "}
              <span className="text-[#FF0000]">
                {" "}
                {value}% - {value}%
              </span>
            </div>
          </div>
          <div>
            <div>
              <div>Binding </div>
            </div>
          </div>
        </div>
        <div className=" w-full bg-red-100">
          <div className="flex justify-between">
            <div className="text-[18px] font-semibold">5441 results found</div>
            <div className="space-x-2">
              <label htmlFor="sort">Sort By: </label>
              <select name="" id="" className="bg-[#E9E9ED]">
                <option value="relevance"> Relevance</option>
                <option value="prize-low-high">Price-Low to High</option>
                <option value="prize-high-low">Price-High to Low</option>
                <option value="discount">Discount</option>
              </select>
            </div>
          </div>
          <div className="grid grid-cols-4">
            {data.map((data) => {
              return (
                <div>
                  <div>{data.name}</div>
                  <div>{data.writer}</div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
