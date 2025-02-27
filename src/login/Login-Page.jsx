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
  console.log("LoginPage rendering");
  const navigate = useNavigate();
  // Function to generate random CAPTCHA - without event parameter
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

  // For button click handler - with event parameter
  const handleCaptchaRefresh = (e) => {
    e.preventDefault();
    generateCaptcha();
  };

  // Function to play CAPTCHA as sound
  const playCaptchaSound = (e) => {
    e.preventDefault(); // Prevent form submission
    if ("speechSynthesis" in window) {
      const utterance = new SpeechSynthesisUtterance(captchaText);
      utterance.rate = 0.8;
      utterance.pitch = 1.2;
      window.speechSynthesis.speak(utterance);
    }
  };

  // Handle input change
  const handleChange = (e) => {
    setUserInput(e.target.value);
  };

  // Validate CAPTCHA
  const validateCaptcha = () => {
    setIsValid(userInput === captchaText);
  };

  // Initialize CAPTCHA on mount
  useEffect(() => {
    generateCaptcha();
  }, []);

  const handleLogin = async (e) => {
    e.preventDefault();

    // Validate all required fields
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

    // Validate CAPTCHA first
    if (userInput !== captchaText) {
      alert("Please enter the correct CAPTCHA");
      return;
    }

    // If all validations pass, proceed with login
    try {
      const response = await login({ email, password });
      // Store auth data in sessionStorage
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
    <div className="flex justify-center items-center  pb-12 border-b-2 bg-[url('/')] bg-cover py-8">
      <div className="w-[500px] h-[550px] shadow-sm pb-6 bg-white  relative">
        <div className=" text-[#E42B26] font-bold flex justify-between h-[120px]">
          <div className="text-[28px] p-4 ">
            India's Largest Online Book Store
          </div>
          <img src="/cart-lady.jpg" alt="" className="w-[150px]" />
        </div>
        <form
          className="text-center py-3 px-12 space-y-4"
          onSubmit={handleLogin}
        >
          <div className="font-semibold">Log in</div>
          <input
            type="email"
            placeholder="Email"
            className="w-full px-2 py-1 outline-none bg-[#F2F2F2]    "
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <img src="" alt="" />
          <input
            type="password"
            placeholder="Password"
            required
            className="w-full px-2 outline-none bg-[#F2F2F2]   py-1  "
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />{" "}
          <div className="flex items-center justify-between w-full  ">
            <div className="border px-2 w-full  py-1">{captchaText}</div>
            <div className="flex   py-1 px-2 gap-2">
              <button onClick={playCaptchaSound}>🔊</button>
              <button onClick={generateCaptcha}>🔄</button>
            </div>
            <div>
              <input
                type="text"
                placeholder="Enter CAPTCHA"
                value={userInput}
                onChange={handleChange}
                className="px-2 py-1 outline-none border"
              />
            </div>
          </div>
          <Link to="/forgot">
            <div className="text-right px-2   font-semibold text-[#E42B26] cursor-pointer  hover:text-black duration-300">
              Forgot your Password?
            </div>
          </Link>
          <div className="space-y-2">
            <button
              type="submit"
              onClick={validateCaptcha}
              className="bg-[#E42B26] w-full p-1 text-white   "
            >
              Login
            </button>
          </div>
          <Link to="/signup">
            <div className="pt-4 text-[13px] font-semibold text-[#E42B26] cursor-pointer  hover:text-black duration-300">
              New to Apna Book store? Sign up
            </div>
          </Link>
          <div className=" text-[13px] font-semibold cursor-pointer  hover:text-black duration-300">
            By continuing, I agree to the{" "}
            <span className="text-[#E42B26] ">
              Terms of Use & Privacy Policy
            </span>
          </div>
        </form>
      </div>
    </div>
  );
}
