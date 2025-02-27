import React from "react";

export default function ExamBooks() {
  return (
    <div className="max-w-[85%] mx-auto px-4 sm:px-6 lg:px-8">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 md:gap-6 text-[16px] sm:text-[18px] md:text-[20px] font-bold">
        <div className="">
          <div className="py-2 sm:py-3 md:py-4">Indian Language</div>
          <img
            src="/regionallanguage.jpg"
            alt=""
            className="cursor-pointer w-full h-auto"
          />
        </div>
        <div className="">
          <div className="py-2 sm:py-3 md:py-4"> Exclusive Editions</div>
          <img
            src="/healthparenting.jpg"
            alt=""
            className="cursor-pointer w-full h-auto"
          />
        </div>
      </div>
      <div className="py-3 sm:py-4 md:py-6">
        <img
          src="\public\Exambooks.jpg"
          alt=""
          className="cursor-pointer w-full h-auto"
        />
      </div>
    </div>
  );
}
