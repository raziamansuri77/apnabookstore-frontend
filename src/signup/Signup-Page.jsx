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
    setUserInput("");
    setIsValid(null);
  };

  const playCaptchaSound = () => {
    const sound = new Howl({
      src: [`data:audio/wav;base64,${btoa(generateCaptchaSound(captchaText))}`],
      format: ["wav"],
    });
    sound.play();
  };

  const generateCaptchaSound = (text) => {
    const utterance = new SpeechSynthesisUtterance(text);
    const synth = window.speechSynthesis;
    synth.speak(utterance);
    return "";
  };

  const handleChange = (e) => {
    const input = e.target.value;
    setUserInput(input);
    if (input.length === captchaText.length) {
      setIsValid(input === captchaText);
    }
  };

  const validateCaptcha = () => {
    const isValidCaptcha = userInput === captchaText;
    setIsValid(isValidCaptcha);
    return isValidCaptcha;
  };

  useEffect(() => {
    generateCaptcha();
  }, []);

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
    <div className="  flex justify-center items-center p-4 sm:p-6 lg:p-8 bg-[url('public/loginbg.jpg')] bg-cover">
      <div className="w-full max-w-[900px] shadow-sm bg-white rounded-lg overflow-hidden">
        <div className="text-[#E42B26] font-bold">
          <div className="text-lg sm:text-xl md:text-2xl lg:text-[30px] p-3 sm:p-4">
            India's Largest Online Book Store
          </div>
        </div>
        <div className="flex flex-col md:flex-row">
          <div className="w-full md:w-1/2 p-4">
            <form
              className="space-y-4 max-w-md mx-auto"
              onSubmit={handleSignup}
            >
              <div className="font-bold text-2xl sm:text-[30px] text-center">
                Sign Up
              </div>
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full px-3 py-2 rounded-md outline-none bg-[#F2F2F2]"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <input
                type="password"
                placeholder="Enter your password"
                className="w-full px-3 py-2 rounded-md outline-none bg-[#F2F2F2]"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <div className="flex flex-col sm:flex-row items-center gap-3">
                <div className="border px-3 py-2 rounded-md w-full sm:w-1/3">
                  {captchaText}
                </div>
                <div className="flex gap-2">
                  <button
                    type="button"
                    onClick={playCaptchaSound}
                    className="p-2 hover:bg-gray-100 rounded-md"
                  >
                    🔊
                  </button>
                  <button
                    type="button"
                    onClick={generateCaptcha}
                    className="p-2 hover:bg-gray-100 rounded-md"
                  >
                    🔄
                  </button>
                </div>
                <div className="w-full sm:w-auto">
                  <input
                    type="text"
                    placeholder="Enter CAPTCHA"
                    value={userInput}
                    onChange={handleChange}
                    className="w-full px-3 py-2 rounded-md outline-none border"
                  />
                </div>
              </div>
              {isValid !== null && (
                <div
                  className={`text-center ${
                    isValid ? "text-green-600" : "text-red-600"
                  }`}
                >
                  {isValid ? "✅ Correct!" : "❌ Incorrect!"}
                </div>
              )}
              <div className="space-y-3">
                <button
                  type="submit"
                  className="w-full py-2 px-4 bg-[#E42B26] text-white rounded-md hover:bg-[#c62520] transition-colors"
                >
                  Sign Up
                </button>
                <Link
                  to="/login"
                  className="block w-full py-2 px-4 bg-[#E42B26] text-white rounded-md hover:bg-[#c62520] transition-colors text-center"
                >
                  Existing User? Log in
                </Link>
              </div>
              <div className="text-sm text-center space-y-2">
                <p className="font-semibold text-[#E42B26] hover:text-black duration-300 cursor-pointer">
                  New to Apna Book Store? Sign up
                </p>
                <p className="font-semibold text-sm">
                  By continuing, I agree to the{" "}
                  <span className="text-[#E42B26] cursor-pointer hover:text-black duration-300">
                    Terms of Use & Privacy Policy
                  </span>
                </p>
              </div>
            </form>
          </div>
          <div className="hidden md:block md:w-1/2 p-4">
            <img
              src="public/banner.png"
              alt=""
              className="w-full h-auto object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
