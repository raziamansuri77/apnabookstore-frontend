import React, { useState } from "react";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import BeforeNavbar from "../home/Before-Navbar";
import SearchNavbar from "../home/Search-Navbar";
import Navbar from "../home/Navbar";
import Footer from "../home/Footer";
import { useGlobalContext } from "../context/GlobalContext";
import {
  Truck,
  RefreshCw,
  CreditCard,
  ShieldCheck,
  HeadphonesIcon,
} from "lucide-react";

export default function QuickView() {
  const location = useLocation();
  const { bookData } = location.state || {};
  const { addToCart, addToWishlist } = useGlobalContext();
  const navigate = useNavigate();

  const [quantity, setQuantity] = useState(1);

  // Add quantity control handlers
  const handleIncrement = () => setQuantity((prev) => prev + 1);
  const handleDecrement = () => {
    if (quantity > 1) setQuantity((prev) => prev - 1);
  };

  // Modify handleAddToCart to include quantity
  const handleAddToCart = () => {
    const bookWithQuantity = { ...bookData, quantity };
    addToCart(bookWithQuantity);
  };

  const handleAddToWishlist = () => {
    addToWishlist(bookData);
    console.log("Added to wishlist:", bookData);
  };
  const handleBuyNow = () => {
    addToCart(bookData);
    navigate("/checkout");
  };
  const icons = [
    {
      icon: Truck,
      name: "Free Delivery",
      description:
        "Free shipping on orders over ₹499. Delivery within 5-7 business days.",
    },
    {
      icon: RefreshCw,
      name: "Easy Returns",
      description:
        "Hassle-free returns within 30 days of delivery. No questions asked policy.",
    },
    {
      icon: CreditCard,
      name: "Secure Payment",
      description:
        "Multiple secure payment options including Credit/Debit cards, UPI, and Net Banking.",
    },
    {
      icon: ShieldCheck,
      name: "Quality Check",
      description:
        "All books undergo strict quality checks to ensure pristine condition.",
    },
    {
      icon: HeadphonesIcon,
      name: "24/7 Support",
      description:
        "Round-the-clock customer support available via chat, email, and phone.",
    },
  ];
  const [selectedDescription, setSelectedDescription] = useState(null);

  return (
    <div>
      <div className="fixed top-0 left-0 right-0 z-50 bg-white w-full">
        <BeforeNavbar />
        <div className="mt-[35px]">
          <SearchNavbar />
        </div>
        <Navbar />
      </div>
      <div className="py-12 px-4 sm:px-6 mt-[250px] md:mt-[230px] md:max-w-7xl mx-auto">
        {bookData && (
          <div className="w-full min-h-[400px] px-2 sm:px-8 flex flex-col lg:flex-row gap-8">
            <div className="h-[300px] shadow-lg relative mx-auto lg:mx-0">
              <div className="bg-[#FD0000] text-white text-[12px] px-4 py-[1px] absolute -top-2 -left-2 flex items-center justify-center text-center">
                {bookData.discountAmount}
              </div>
              <div className="flex flex-col items-center">
                <img
                  src={bookData.img}
                  alt={bookData.name}
                  className="w-[200px] sm:w-[270px] h-[300px] object-contain"
                />
              </div>
            </div>
            <div className="flex-1 ">
              <div className="  lg:text-left">
                <div className="text-[25px] sm:text-[35px] font-bold text-[#B01A16]">
                  {bookData.name}
                </div>
                <div className="text-[16px] sm:text-[20px]">
                  {bookData.author}
                </div>
                <div className="text-[16px] sm:text-[20px]">
                  ₹ {bookData.prize}
                </div>
                <div className="line-through text-[#B01A16]">
                  ₹ M.R.P.:{bookData.discount}
                </div>
                <div className="text-[14px] sm:text-[16px]">
                  {bookData.description}
                </div>
              </div>

              <div className="mt-8">
                <div className="flex   justify-center lg:justify-start gap-4 sm:gap-0">
                  {icons.map((icon, index) => (
                    <div
                      key={index}
                      className="flex flex-col items-center text-center w-1/2 sm:w-1/5 space-y-2 mb-4 sm:mb-0"
                      onClick={() => setSelectedDescription(icon.description)}
                    >
                      <div className="cursor-pointer rounded-full bg-[#F9F9F9] p-2 hover:bg-[#E42B26]/10 transition-colors">
                        <icon.icon size={24} className="text-[#E42B26]" />
                      </div>
                      <p className="text-[12px] sm:text-[13px] font-medium">
                        {icon.name}
                      </p>
                    </div>
                  ))}
                </div>

                {selectedDescription && (
                  <div className="mt-6 p-4 bg-[#F9F9F9] rounded-md text-center text-gray-700 text-[14px] sm:text-[16px]">
                    {selectedDescription}
                  </div>
                )}
              </div>
            </div>

            <div className="w-full lg:w-[280px] mt-6 lg:mt-0">
              <div className="border-4 space-y-3 border-gray-300 max-w-sm mx-auto lg:max-w-none p-3 rounded-md">
                <button
                  className="px-4 py-2 w-full rounded-full bg-[#397D58] text-white mr-2 text-[14px] sm:text-[16px]"
                  onClick={handleAddToCart}
                >
                  Add to Cart
                </button>
                <button
                  onClick={handleBuyNow}
                  className="px-4 py-2 w-full rounded-full bg-[#C86800] text-white mr-2 text-[14px] sm:text-[16px]"
                >
                  Buy Now
                </button>
                <button
                  className="px-4 py-2 w-full rounded-full border-2 text-[14px] sm:text-[16px]"
                  onClick={handleAddToWishlist}
                >
                  Add to Wishlist
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
      <Footer />
    </div>
  );
}
