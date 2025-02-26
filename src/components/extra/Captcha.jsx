import React, { useState, useEffect } from "react";
import { Howl } from "howler";

export default function Captcha() {
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
        {/* <button onClick={validateCaptcha} style={{ marginLeft: "10px" }}>
          Submit
        </button> */}
      </div>
      {isValid === true && (
        <div style={{ color: "green", marginTop: "10px" }}>✅ Correct!</div>
      )}
      {isValid === false && (
        <div style={{ color: "red", marginTop: "10px" }}>❌ Incorrect!</div>
      )}
    </div>
  );
}
