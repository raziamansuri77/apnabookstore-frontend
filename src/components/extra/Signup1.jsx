import React from "react";

export default function Signup1() {
  return (
    <div>
      <div className="  w-full   flex justify-center items-center">
        <div className="w-[800px] h-[530px] my-[50px]  bg-white flex shadow-md   ">
          <div className="w-[350px] h-full   px-8 py-12 shadow-sm flex flex-col justify-between">
            <div>
              <div className="text-[30px] ">SignUp</div>
              <div className="text-[20px]">
                Get access to your Orders, Wishlist and Recommendations
              </div>
            </div>
            <img
              src="data:image/png;base64,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"
              //   src="https://static-assets-web.flixcart.com/batman-returns/batman-returns/p/images/login_img-dec4bf.png"
              alt=""
            />
          </div>
          <div className="py-12 px-8 flex flex-col justify-between">
            <form className=" space-y-6">
              <input
                type="email"
                placeholder="Enter Email/Mobile number"
                className="w-full py-2   outline-none border-b-2"
                required
              />{" "}
              {/* <div className="relative ">
              <input
                maxLength="25"
                type="text"
                placeholder="Enter your password"
                className="w-full py-2   outline-none border-b-2"
                required
              />
              <div className="text-[#2874F0] text-[14px] absolute top-3 right-0">
                Terms of Use{" "}
              </div>
            </div> */}
              <div className="text-[14px] text-gray-500">
                By continuing,you agree to Flipkart's{" "}
                <span className="text-[#2874F0] ">Terms of Use </span> and{" "}
                <span className="text-[#2874F0] ">Privacy Policy</span>.{" "}
              </div>
              <button className=" shadow-lg w-full p-2 text-[#2874F0] ">
                Request OTP
              </button>
            </form>
            <div className="text-center text-[#2874F0] text-[14px] ">
              New to <span className="bg-yellow-300">company name</span> ?
              Create an account
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
