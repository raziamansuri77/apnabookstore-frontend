import React from "react";
import { FaInfoCircle } from "react-icons/fa";
export default function RequestBookMain() {
  return (
    <div className="py-10 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="border-2 relative p-4 sm:p-6 lg:p-10">
          <div className="text-[20px] sm:text-[24px] lg:text-[28px] bg-white w-[180px] sm:w-[200px] absolute -top-[20px] sm:-top-[25px] left-4 sm:left-6">
            Request A Book
          </div>
          <div className="space-y-4">
            <div className="text-sm sm:text-base">
              Please fill up the form below to Request a Book. We will inform
              you as soon as the book is available.
            </div>
            <form action="verify" className="space-y-6">
              <div className="flex flex-col lg:flex-row gap-6 lg:gap-10">
                <div className="w-full flex flex-col gap-4">
                  <div className="space-y-2">
                    <div className="flex items-center gap-2">
                      <label htmlFor="isbn13" className="text-sm sm:text-base">
                        ISBN13:
                      </label>
                      <FaInfoCircle className="text-sm sm:text-base" />
                    </div>
                    <input
                      type="text"
                      className="border-2 w-full py-1 px-2 outline-none rounded-sm"
                      min="10"
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="author" className="text-sm sm:text-base">
                      Author:
                    </label>
                    <input
                      type="text"
                      className="border-2 w-full py-1 px-2 outline-none rounded-sm"
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="email" className="text-sm sm:text-base">
                      Email id:
                    </label>
                    <div className="flex gap-2 items-center">
                      <input
                        type="email"
                        className="border-2 w-full py-1 px-2 outline-none rounded-sm"
                      />
                      <img
                        src="/public/check.png"
                        alt=""
                        className="w-[20px] h-[20px] sm:w-[25px] sm:h-[25px] cursor-pointer"
                      />
                      <img
                        src="/public/edit.png"
                        alt=""
                        className="w-[16px] h-[20px] sm:w-[20px] sm:h-[25px] cursor-pointer"
                      />
                    </div>
                  </div>
                </div>
                <div className="w-full flex flex-col gap-4">
                  <div className="space-y-2">
                    <div className="flex items-center gap-2">
                      <label htmlFor="title" className="text-sm sm:text-base">
                        Book Title:
                      </label>
                      <FaInfoCircle className="text-sm sm:text-base" />
                    </div>
                    <input
                      type="text"
                      className="border-2 w-full py-1 px-2 outline-none rounded-sm"
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="author" className="text-sm sm:text-base">
                      Quantity:
                    </label>
                    <input
                      type="text"
                      className="border-2 w-full py-1 px-2 outline-none rounded-sm"
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="email" className="text-sm sm:text-base">
                      Phone/Mobile:
                    </label>
                    <div>
                      <input
                        type="text"
                        className="border-2 w-full py-1 px-2 outline-none rounded-sm"
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex justify-end">
                <button className="font-semibold text-white bg-[#B01A16] py-1 px-4 text-[16px] sm:text-[18px] rounded hover:bg-[#901511] transition-colors">
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
