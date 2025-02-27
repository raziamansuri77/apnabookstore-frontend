import React from "react";

export default function Footer() {
  return (
    <div className="pt-12 pb-4 bg-[#FCFCFC]">
      <div className="max-w-7xl mx-auto flex justify-between font-sans text-[16px]">
        <div>
          <div className="font-semibold text-[#E42B26]  italic"> Company</div>
          <div>About Us</div>
          <div>Career</div>
          <div>Blog</div>
          <div>Contact Us</div>
        </div>
        <div>
          <div className="font-semibold text-[#E42B26]  italic">Policies</div>
          <div>Privacy Policies</div>
          <div>Terms of Use</div>
          <div>Secure Shopping</div>
          <div>Copyright Policy</div>
        </div>
        <div>
          <div className="font-semibold text-[#E42B26]  italic">Help</div>
          <div>Payment</div>
          <div>Shipping</div>
          <div>Return</div>
          <div>FAQ</div>
        </div>
        <div>
          <div className="font-semibold text-[#E42B26]  italic">Misc</div>
          <div>Affiliate</div>
          <div>Sitemap</div>
          <div className="font-semibold text-[#E42B26]  italic">
            Download Our App
          </div>
        </div>
      </div>
      <div className="flex justify-center flex-col items-center">
        <div className="flex gap-3 py-4">
          <img
            src="fb.png"
            alt=""
            className="cursor-pointer w-[35px] h-[35px]"
          />
          <img
            src="instagram.png"
            alt=""
            className="cursor-pointer w-[35px] h-[35px]"
          />
          <img
            src="linkedin.png"
            alt=""
            className="cursor-pointer w-[35px] h-[35px]"
          />
          <img
            src="pinterest.png"
            alt=""
            className="cursor-pointer w-[35px] h-[35px]"
          />
          <img
            src="youtube.png"
            alt=""
            className="cursor-pointer w-[35px] h-[35px]"
          />
        </div>
        <div>Copyright © 2025 . Apnabookstore.com. All Rights Reserved</div>
      </div>
    </div>
  );
}
