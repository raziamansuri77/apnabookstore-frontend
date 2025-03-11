import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Howl } from "howler";
import { useAuth } from "../context/AuthContext";

export default function LoginPage() {
  const [captchaText, setCaptchaText] = useState("");
  const [userInput, setUserInput] = useState("");
  const [isValid, setIsValid] = useState(null);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { login } = useAuth();
  const navigate = useNavigate();

  const generateCaptcha = () => {
    const characters =
      "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    let result = "";
    const length = 6;

    for (let i = 0; i < length; i++) {
      result += characters.charAt(
        Math.floor(Math.random() * characters.length)
      );
    }

    setCaptchaText(result);
    setUserInput("");
    setIsValid(null);
  };

  const handleCaptchaRefresh = (e) => {
    e.preventDefault();
    generateCaptcha();
  };

  const playCaptchaSound = (e) => {
    e.preventDefault();
    if ("speechSynthesis" in window) {
      const utterance = new SpeechSynthesisUtterance(captchaText);
      utterance.rate = 0.8;
      utterance.pitch = 1.2;
      window.speechSynthesis.speak(utterance);
    }
  };

  const handleChange = (e) => {
    setUserInput(e.target.value);
  };

  const validateCaptcha = () => {
    setIsValid(userInput === captchaText);
  };

  useEffect(() => {
    generateCaptcha();
  }, []);

  const handleLogin = async (e) => {
    e.preventDefault();

    if (!email.trim()) {
      alert("Email is required");
      return;
    }

    if (!password.trim()) {
      alert("Password is required");
      return;
    }

    if (!userInput.trim()) {
      alert("Please enter the CAPTCHA");
      return;
    }

    if (userInput !== captchaText) {
      alert("Please enter the correct CAPTCHA");
      return;
    }

    try {
      const response = await login({ email, password });
      sessionStorage.setItem("authToken", response.token);
      sessionStorage.setItem("userId", response.userId);
      sessionStorage.setItem("userEmail", response.email);
      navigate("/");
    } catch (error) {
      console.error("Login failed", error);
      alert("Login failed. Please check your credentials.");
    }
  };

  return (
    <div className="flex justify-center items-center pb-12 border-b-2 bg-[url('/public/loginbg.jpg')] bg-cover py-8 px-4 md:px-8">
      <div className="w-full max-w-[900px] shadow-sm pb-6 bg-white relative">
        <div className="text-[#E42B26] font-bold">
          <div className="text-xl md:text-2xl lg:text-[30px] p-4">
            India's Largest Online Book Store
          </div>
        </div>
        <div className="flex flex-col md:flex-row h-auto md:h-[400px]">
          <div className="hidden md:block md:pt-[30px] md:w-1/2">
            <img src="/Banner.png" alt="" className="w-full h-auto" />
          </div>
          <div className="w-full md:w-1/2">
            <form
              action="login"
              className="text-center  px-4 md:px-8 lg:px-12 space-y-4"
              onSubmit={handleLogin}
            >
              <div className="font-bold text-2xl md:text-[30px]">Log In</div>
              <input
                name="email"
                type="email"
                placeholder="Email"
                className="w-full px-2 py-1 outline-none bg-[#F2F2F2]"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <input
                name="password"
                type="password"
                placeholder="Password"
                required
                className="w-full px-2 outline-none bg-[#F2F2F2] py-1"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-4">
                <div className="border px-2 w-full sm:w-1/3 py-1">
                  {captchaText}
                </div>
                <div className="flex py-1 px-2 gap-2">
                  <button onClick={playCaptchaSound}>🔊</button>
                  <button onClick={generateCaptcha}>🔄</button>
                </div>
                <div className="w-full sm:w-auto">
                  <input
                    type="text"
                    placeholder="Enter CAPTCHA"
                    value={userInput}
                    onChange={handleChange}
                    className="w-full sm:w-auto px-2 py-1 outline-none border"
                  />
                </div>
              </div>
              <Link to="/forgot">
                <div className="text-right px-2 font-semibold text-[#E42B26] cursor-pointer hover:text-black duration-300">
                  Forgot your Password?
                </div>
              </Link>
              <div className="space-y-2">
                <button
                  type="submit"
                  onClick={validateCaptcha}
                  className="bg-[#E42B26] w-full p-1 text-white"
                >
                  Login
                </button>
              </div>
              <Link to="/signup">
                <div className="pt-4 text-[13px] font-semibold text-[#E42B26] cursor-pointer hover:text-black duration-300">
                  New to Apna Book store? Sign up
                </div>
              </Link>
              <div className="text-[13px] font-semibold cursor-pointer hover:text-black duration-300">
                By continuing, I agree to the{" "}
                <span className="text-[#E42B26]">
                  Terms of Use & Privacy Policy
                </span>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
