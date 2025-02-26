import React, { useState } from "react";
import { Link } from "react-router-dom";
// import axios from "axios";

export default function ForgotPage() {
  const [email, setEmail] = useState("");
  const [showOtpInput, setShowOtpInput] = useState(false);
  const [otp, setOtp] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");

  const handleRequestOTP = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("/api/v1/forgot-password", { email });
      setMessage(response.data.message);
      setError("");
      setShowOtpInput(true);
    } catch (err) {
      setError(err.response?.data?.error || "Failed to request OTP");
      setMessage("");
      console.error("Error sending OTP:", err);
    }
  };

  const handleResetPassword = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("/api/v1/reset-password", {
        email,
        otp,
        newPassword,
      });
      setMessage(response.data.message);
      setError("");
      // Redirect to login page after successful password reset
      window.location.href = "/login";
    } catch (err) {
      setError(err.response?.data?.error || "Failed to reset password");
      setMessage("");
      console.error("Error resetting password:", err);
    }
  };

  return (
    <div className="flex justify-center h-[600px] items-center pb-12 border-b-2 bg-[url('public/loginbg.jpg')] bg-cover py-8">
      <div className="w-[500px] h-[430px] shadow-sm pb-6 bg-white relative">
        <div className="text-[#E42B26] font-bold flex justify-between h-[120px]">
          <div className="text-[28px] p-4">
            India's Largest Online Book Store
          </div>
          <img src="./public/cart-lady.jpg" alt="" className="w-[150px]" />
        </div>
        <form
          onSubmit={showOtpInput ? handleResetPassword : handleRequestOTP}
          className="text-center py-3 px-12 flex flex-col gap-12"
        >
          {message && <div className="text-green-500">{message}</div>}
          {error && <div className="text-red-500">{error}</div>}
          <div className="space-y-4">
            <div className="font-semibold">Password Assistant</div>
            <input
              type="email"
              placeholder="Mobile/Email"
              className="w-full px-2 py-1 outline-none bg-[#F2F2F2]"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            {showOtpInput && (
              <>
                <input
                  type="text"
                  placeholder="Enter OTP"
                  className="w-full px-2 py-1 outline-none bg-[#F2F2F2]"
                  value={otp}
                  onChange={(e) => setOtp(e.target.value)}
                  required
                />
                <input
                  type="password"
                  placeholder="New Password"
                  className="w-full px-2 py-1 outline-none bg-[#F2F2F2]"
                  value={newPassword}
                  onChange={(e) => setNewPassword(e.target.value)}
                  required
                />
              </>
            )}
          </div>
          <div className="flex flex-col gap-12">
            <button className="font-semibold border-2 border-[#E42B26] w-full p-1 text-[#E42B26] hover:text-black text-[12px] duration-300">
              {showOtpInput ? "Reset Password" : "Request OTP"}
            </button>

            <div className="space-y-4">
              <Link to="/signup">
                <div className="text-[13px] font-semibold text-[#E42B26] cursor-pointer hover:text-black duration-300">
                  New to Bookswagon? Sign up
                </div>
              </Link>
              <div className="text-[13px] font-semibold cursor-pointer hover:text-black duration-300">
                By continuing, I agree to the{" "}
                <span className="text-[#E42B26]">
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
