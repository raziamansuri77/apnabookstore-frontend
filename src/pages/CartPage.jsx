import React from "react";
import { useGlobalContext } from "../context/GlobalContext";
import BeforeNavbar from "../home/Before-Navbar";
import SearchNavbar from "../home/Search-Navbar";
import Navbar from "../home/Navbar";
import { useNavigate } from "react-router-dom";
import Footer from "../home/Footer";

export default function CartPage() {
  const navigate = useNavigate();
  const {
    cartItems,
    removeFromCart,
    increaseQuantity,
    decreaseQuantity,
    addToWishlist,
    processDirectCheckout,
  } = useGlobalContext();

  // Calculate total price
  const totalPrice = cartItems.reduce((total, item) => {
    const price = Number(String(item.prize).replace(/[^0-9.]/g, "")) || 0;
    const quantity = Number(item.quantity) || 1;
    return total + price * quantity;
  }, 0);

  const handleMoveToWishlist = (item) => {
    addToWishlist(item);
    removeFromCart(item.cartItemId);
  };

  const handleBuyNow = () => {
    processDirectCheckout(cartItems);
    navigate("/checkout");
  };

  return (
    <div>
      <div className="fixed top-0 left-0 right-0 z-50 bg-white w-full">
        <BeforeNavbar />
        <div className="pt-8 sm:pt-6 md:pt-8">
          <SearchNavbar />
        </div>
        <Navbar />
      </div>
      <div className="p-4 md:p-8 lg:p-16 mt-[280px] md:mt-[220px] pb-8">
        <h1 className="text-[18px] md:text-[20px] font-bold">
          My Shopping Cart
        </h1>
        {cartItems.length === 0 ? (
          <p>Your cart is empty.</p>
        ) : (
          <ul className="mt-6 md:mt-12 border-2 p-4 md:p-8 lg:p-12 rounded-lg bg-[#F8F8F8] w-full">
            {cartItems.map((item) => (
              <li
                key={item.cartItemId}
                className="flex flex-col md:flex-row justify-between gap-4 md:gap-6 items-start md:items-center py-4 border-b w-full"
              >
                <div className="flex flex-col sm:flex-row gap-4 w-full md:w-auto">
                  <div className="flex justify-center">
                    <img
                      src={item.img}
                      alt={item.name}
                      className="w-[120px] md:w-[150px] h-[160px] md:h-[200px] shadow-lg"
                    />
                  </div>
                  <div className="flex flex-col gap-2 items-center">
                    <div className="text-[16px] md:text-[20px] font-bold">
                      {item.name}
                    </div>
                    <div className="text-[#2c73a3]">
                      <span className="text-[#E42B26]">By: </span>
                      {item.author}
                    </div>
                    <div className="text-[16px] md:text-[20px] font-semibold">
                      Price: ₹{item.prize}
                    </div>
                    {/* Quantity controls */}
                    <div className="flex items-center mt-2">
                      <button
                        onClick={() => decreaseQuantity(item.cartItemId)}
                        className="px-2 py-1 bg-gray-200 rounded"
                      >
                        -
                      </button>
                      <span className="mx-2 px-2 py-1 bg-gray-200 rounded">
                        {item.quantity}
                      </span>
                      <button
                        onClick={() => increaseQuantity(item.cartItemId)}
                        className="px-2 py-1 bg-gray-200 rounded"
                      >
                        +
                      </button>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col sm:flex-row gap-2 w-full md:w-auto">
                  <button
                    onClick={() => removeFromCart(item.cartItemId)}
                    className="w-full md:w-auto px-4 py-2 bg-red-500 text-white rounded hover:bg-red-700"
                  >
                    Remove
                  </button>
                  {/* <button
                    onClick={() => handleMoveToWishlist(item)}
                    className="w-full md:w-auto py-2 px-4 rounded-md border-2 shadow-sm border-[#EF4444] text-[#EF4444]"
                  >
                    Move to wishlist
                  </button> */}
                </div>
              </li>
            ))}
            {/* Display total price */}
            <div className="mt-6 text-xl md:text-2xl font-bold">
              Total: ₹{totalPrice.toFixed(2)}
            </div>
            <button
              onClick={handleBuyNow}
              className="w-full md:w-auto px-4 py-2 mt-4 rounded-full bg-[#C86800] text-white mr-2"
            >
              Buy Now
            </button>
          </ul>
        )}
      </div>
      <Footer />
    </div>
  );
}
