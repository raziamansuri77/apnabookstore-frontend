import React from "react";
import { FiRefreshCcw } from "react-icons/fi";

export default function Captcha11() {
  return (
    <div className="flex gap-4 items-center">
      <div className="border py-1 w-[170px]">text</div>
      <div className="flex gap-4 items-center">
        <FiRefreshCcw />
        <input type="text" className="border py-1" />
      </div>
    </div>
  );
}
