import React from "react";
import { useState } from "react";

export default function Range() {
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
        <div className="bg-red-100 w-[40%]">
          <div className="flex flex-col items-center p-4">
            {" "}
            <input
              type="range"
              min="0"
              max="100"
              value={value}
              onChange={handleChange}
              className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
            />{" "}
            <div className="mt-4 p-2 bg-blue-100 rounded">
              {" "}
              Current Value: <span className="font-bold">{value}</span>{" "}
            </div>{" "}
          </div>
          <div className="flex flex-col items-center p-4">
            {" "}
            <input
              type="range"
              min="0"
              max="100"
              value={value}
              onChange={handleChange}
              className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer h-10"
            />{" "}
            <div className="mt-4 p-2 bg-blue-100 rounded">
              {" "}
              Current Value: <span className="font-bold">{value}</span>{" "}
            </div>{" "}
          </div>{" "}
          <div className="flex flex-col items-center p-4">
            {" "}
            <input
              type="range"
              min="20"
              max="30"
              value={value}
              onChange={handleChange}
              className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
              style={{ WebkitAppearance: "none", appearance: "none" }}
            />{" "}
            <div className="relative">
              {" "}
              <div
                className="absolute w-5 h-5 bg-blue-500 cursor-pointer"
                style={{ left: `${(value - 20) * 5}%`, top: "-10px" }}
              />{" "}
            </div>{" "}
            <div className="mt-4 p-2 bg-blue-100 rounded">
              {" "}
              Current Value: <span className="font-bold">{value}%</span>{" "}
            </div>{" "}
          </div>
          <div className="flex flex-col items-center p-4">
            {" "}
            <input
              type="range"
              min="20"
              max="40"
              value={value}
              onChange={handleChange}
              className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
              style={{ WebkitAppearance: "none", appearance: "none" }}
            />{" "}
            <div className="relative">
              {" "}
              <div
                className="absolute w-5 h-5 bg-blue-500 cursor-pointer"
                style={{ left: `${(value - 20) * 5}%`, top: "-10px" }}
              />{" "}
            </div>{" "}
            <div className="mt-4 p-2 bg-blue-100 rounded">
              {" "}
              Current Value: <span className="font-bold">{value}%</span>{" "}
            </div>{" "}
          </div>
        </div>
        <div className="bg-red-500 w-full">right-side</div>
      </div>
    </div>
  );
}
