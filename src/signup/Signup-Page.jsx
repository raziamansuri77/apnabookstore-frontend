import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Howl } from "howler";
import { useAuth } from "../context/AuthContext";

export default function SignupPage() {
  const [captchaText, setCaptchaText] = useState("");
  const [userInput, setUserInput] = useState("");
  const [isValid, setIsValid] = useState(null);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { register } = useAuth();
  const navigate = useNavigate();

  // Update the generateCaptcha function for better randomization
  const generateCaptcha = () => {
    const characters =
      "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    let result = "";
    const length = 6;

    for (let i = 0; i < length; i++) {
      const randomIndex = Math.floor(Math.random() * characters.length);
      result += characters.charAt(randomIndex);
    }
    setCaptchaText(result);
    setUserInput(""); // Clear user input when generating new CAPTCHA
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

  // Add immediate validation on input change
  const handleChange = (e) => {
    const input = e.target.value;
    setUserInput(input);
    if (input.length === captchaText.length) {
      setIsValid(input === captchaText);
    }
  };

  // Add a separate validation function for form submission
  const validateCaptcha = () => {
    const isValidCaptcha = userInput === captchaText;
    setIsValid(isValidCaptcha);
    return isValidCaptcha;
  };

  // Initialize CAPTCHA on mount
  useEffect(() => {
    generateCaptcha();
  }, []);

  // Update handleSignup to use the new validation
  const handleSignup = async (e) => {
    e.preventDefault();

    if (!validateCaptcha()) {
      alert("Please enter the correct CAPTCHA");
      return;
    }

    try {
      await register({ email, password });
      navigate("/");
    } catch (error) {
      console.error("Signup error:", error);
      alert("Signup failed. Please try again.");
    }
  };

  return (
    <div className="flex justify-center items-center  pb-12 border-b-2 bg-[url('loginbg.jpg')] bg-cover py-8">
      <div className="w-[500px] h-[550px] shadow-sm pb-6 bg-white  relative">
        <div className="   text-[#E42B26] font-bold flex justify-between h-[120px]">
          <div className="text-[28px] p-4 ">
            India's Largest Online Book Store
          </div>
          <img src="./cart-lady.jpg" alt="" className="w-[150px]" />
        </div>
        <form
          className="text-center py-3 px-12 space-y-4"
          onSubmit={handleSignup}
        >
          <div className="font-semibold">Sign Up</div>
          <input
            type="email"
            placeholder="Enter your email"
            className="w-full px-2 py-1 outline-none bg-[#F2F2F2]    "
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />{" "}
          <input
            type="password"
            placeholder="Enter your password"
            className="w-full px-2 py-1 outline-none bg-[#F2F2F2]    "
            value={password}
            onChange={(e) => setPassword(e.target.value)}
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
          <div className="space-y-4 ">
            <button
              type="submit"
              className="bg-[#E42B26] w-full p-1 text-white"
              onClick={handleSignup}
            >
              Sign Up
            </button>
            <button className="bg-[#E42B26] w-full p-1 text-white   ">
              <Link to="/login">Existing User? Log in</Link>
            </button>
          </div>
          {/* <div className="flex justify-center ">
            <img src="google.png" alt="" className="w-[30px] h-[30px]" />
          </div> */}
          <div className=" text-[13px] font-semibold text-[#E42B26] cursor-pointer  hover:text-black duration-300">
            New to Apna Book Store? Sign up
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
