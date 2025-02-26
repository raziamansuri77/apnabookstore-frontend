import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Howl } from "howler";

export default function SignupPage() {
  const [captchaText, setCaptchaText] = useState("");
  const [userInput, setUserInput] = useState("");
  const [isValid, setIsValid] = useState(null);

  // Function to generate random CAPTCHA
  const generateCaptcha = () => {
    const characters =
      "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    let result = "";
    for (let i = 0; i < 6; i++) {
      result += characters.charAt(
        Math.floor(Math.random() * characters.length)
      );
    }
    setCaptchaText(result);
    setIsValid(null); // Reset validation status
  };

  // Function to play CAPTCHA as sound
  const playCaptchaSound = () => {
    const sound = new Howl({
      src: [`data:audio/wav;base64,${btoa(generateCaptchaSound(captchaText))}`],
      format: ["wav"],
    });
    sound.play();
  };

  // Generate CAPTCHA sound data
  const generateCaptchaSound = (text) => {
    const utterance = new SpeechSynthesisUtterance(text);
    const synth = window.speechSynthesis;
    synth.speak(utterance);
    return "";
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

  return (
    <div className="flex justify-center items-center  pb-12 border-b-2 bg-[url('public/loginbg.jpg')] bg-cover py-8">
      <div className="w-[500px] h-[550px] shadow-sm pb-6 bg-white  relative">
        <div className="   text-[#E42B26] font-bold flex justify-between h-[120px]">
          <div className="text-[28px] p-4 ">
            India's Largest Online Book Store
          </div>
          <img src="./public/cart-lady.jpg" alt="" className="w-[150px]" />
        </div>
        <form className="text-center py-3 px-12 space-y-4">
          <div className="font-semibold">Sign Up</div>
          <input
            type="email"
            placeholder="Enter your email"
            className="w-full px-2 py-1 outline-none bg-[#F2F2F2]    "
          />{" "}
          <input
            type="password"
            placeholder="Enter your password"
            className="w-full px-2 py-1 outline-none bg-[#F2F2F2]    "
          />
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
            {isValid === true && (
              <div style={{ color: "green", marginTop: "10px" }}>
                ✅ Correct!
              </div>
            )}
            {isValid === false && (
              <div style={{ color: "red", marginTop: "10px" }}>
                ❌ Incorrect!"
              </div>
            )}
          </div>
          <div className="space-y-2">
            <button
              onClick={validateCaptcha}
              style={{ marginLeft: "10px" }}
              className=" border-2 border-[#E42B26] w-full p-1 text-[#E42B26] hover:text-black text-[12px] duration-300 "
            >
              Request OTP
            </button>
            <button className="bg-[#E42B26] w-full p-1 text-white   ">
              <Link to="/login">Existing User? Log in</Link>
            </button>
          </div>
          <div className="flex justify-center ">
            <img src="public/google.png" alt="" className="w-[30px] h-[30px]" />
          </div>
          <div className=" text-[13px] font-semibold text-[#E42B26] cursor-pointer  hover:text-black duration-300">
            New to Bookswagon? Sign up
          </div>{" "}
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
