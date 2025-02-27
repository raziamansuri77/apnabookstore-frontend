import React from "react";
import { Link } from "react-router-dom";

export default function ForgotPage() {
  return (
    <div className="flex justify-center h-[600px] items-center  pb-12 border-b-2 bg-[url('/')] bg-cover py-8">
      <div className="w-[500px] h-[430px] shadow-sm pb-6 bg-white  relative">
        <div className="   text-[#E42B26] font-bold flex justify-between h-[120px]">
          <div className="text-[28px] p-4 ">
            India's Largest Online Book Store
          </div>
          <img src="cart-lady.jpg" alt="" className="w-[150px]" />
        </div>
        <form className="text-center py-3 px-12 flex flex-col gap-12 ">
          <div className="space-y-4">
            <div className="font-semibold">Password Assistant</div>
            <input
              type="email"
              placeholder="Mobile/Email"
              className="w-full px-2 py-1 outline-none bg-[#F2F2F2]    "
              required
            />
          </div>
          <div className="flex flex-col gap-12">
            <button className="font-semibold border-2 border-[#E42B26] w-full p-1 text-[#E42B26] hover:text-black text-[12px] duration-300 ">
              Request OTP
            </button>

            <div className="space-y-4">
              <Link to="/signup">
                <div className=" text-[13px] font-semibold text-[#E42B26] cursor-pointer  hover:text-black duration-300">
                  New to Bookswagon? Sign up
                </div>
              </Link>
              <div className=" text-[13px] font-semibold cursor-pointer  hover:text-black duration-300">
                By continuing, I agree to the{" "}
                <span className="text-[#E42B26] ">
                  Terms of Use & Privacy Policy
                </span>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
