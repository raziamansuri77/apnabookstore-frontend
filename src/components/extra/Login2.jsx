import React from "react";

export default function Login2() {
  return (
    <div>
      <div className="pt-[70px]  w-full   flex justify-center items-center">
        <div className="w-[800px] h-[530px] my-[50px]  bg-white flex shadow-md   ">
          <div className="w-[350px] h-full   px-8 py-12 shadow-sm flex flex-col justify-between">
            <div>
              <Link to="/login" className="text-[30px] ">
                Login
              </Link>
              <div className="text-[20px]">
                Get access to your Orders, Wishlist and Recommendations
              </div>
            </div>
            <img src=" https://bookflow.in/wp-content/uploads/2018/01/flea-market-237461_1280.jpg" />
          </div>
          <div className="py-12 px-8 flex flex-col justify-between">
            <form className=" space-y-6">
              <input
                type="email"
                placeholder="Enter Email/Mobile number"
                className="w-full py-2   outline-none border-b-2"
                required
              />{" "}
              <div className="relative ">
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
              </div>
              <div className="text-[14px] text-gray-500">
                By continuing,you agree to Flipkart's{" "}
                <span className="text-[#2874F0] ">Terms of Use </span> and{" "}
                <span className="text-[#2874F0] ">Privacy Policy</span>.{" "}
              </div>
              <button className="bg-[#FF5800] w-full p-2 ">
                <div className="text-black no-underline">Login</div>
              </button>
              <div className="text-center">or</div>
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
