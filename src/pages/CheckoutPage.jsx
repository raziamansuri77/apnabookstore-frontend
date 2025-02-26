import React from "react";
import { useGlobalContext } from "../context/GlobalContext";
import BeforeNavbar from "../home/Before-Navbar";
import SearchNavbar from "../home/Search-Navbar";
import Navbar from "../home/Navbar";

export default function CheckoutPage() {
  const { cartItems, wishlistItems, increaseQuantity, decreaseQuantity } =
    useGlobalContext();

  // Combine cart and wishlist items with proper quantity handling
  const allItems = [
    ...cartItems,
    ...wishlistItems.map((item) => ({
      ...item,
      quantity: 1,
      cartItemId: `wishlist-${item.id}`,
    })),
  ];

  // Calculate total price with proper type conversion

  // Fix for total price calculation
  const totalPrice = allItems.reduce((total, item) => {
    const price = Number(String(item.prize).replace(/[^0-9.]/g, "")) || 0;
    const quantity = Number(item.quantity) || 1;
    return total + price * quantity;
  }, 0);

  const handlePayment = () => {
    alert("Payment successful!");
  };

  return (
    <div>
      <BeforeNavbar />
      <div className="pt-[35px]">
        <SearchNavbar />
      </div>
      <Navbar />
      <div className="container mx-auto mt-8 p-8 bg-gray-100 rounded-lg shadow-md md:max-w-7xl">
        <h1 className="text-2xl font-bold mb-6 text-gray-800">Checkout</h1>
        <div className="flex flex-col md:flex-row gap-8">
          {/* Items List */}
          <div className="md:w-1/2">
            {allItems.length === 0 ? (
              <p className="text-gray-600">No items to checkout.</p>
            ) : (
              <ul className="divide-y divide-gray-200">
                {allItems.map((item) => (
                  <li
                    key={item.cartItemId || item.id}
                    className="flex items-center py-4 space-x-4"
                  >
                    <img
                      src={item.img}
                      alt={item.name}
                      className="w-20 h-24 rounded object-cover"
                    />
                    <div className="flex-grow">
                      <div className="font-semibold text-gray-700">
                        {item.name}
                      </div>
                      <div className="text-gray-600">Price: ${item.prize}</div>
                      {/* Quantity controls */}
                      <div className="flex items-center mt-2 space-x-2">
                        <button
                          onClick={() => decreaseQuantity(item.cartItemId)}
                          className="px-2 py-1 bg-gray-200 rounded hover:bg-gray-300"
                        >
                          -
                        </button>
                        <span className="px-4 py-1 bg-white rounded">
                          {item.quantity || 1}
                        </span>
                        <button
                          onClick={() => increaseQuantity(item.cartItemId)}
                          className="px-2 py-1 bg-gray-200 rounded hover:bg-gray-300"
                        >
                          +
                        </button>
                      </div>
                      {/* // Fix for subtotal calculation */}
                      <div className="text-gray-700 mt-1">
                        Subtotal: $
                        {(
                          Number(String(item.prize).replace(/[^0-9.]/g, "")) *
                          (Number(item.quantity) || 1)
                        ).toFixed(2)}
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
            )}
          </div>

          {/* Payment Summary */}
          <div className="md:w-1/2">
            <div className="bg-white rounded-lg p-6 shadow-md">
              <h2 className="text-xl font-semibold mb-4 text-gray-800">
                Payment Summary
              </h2>
              <div className="flex justify-between mb-2 text-gray-700">
                <span>Total Items:</span>
                <span>{allItems.length}</span>
              </div>
              <div className="flex justify-between mb-4 text-gray-700 font-bold">
                <span>Total Amount:</span>
                <span>{totalPrice.toFixed(2)}</span>
              </div>
              <button
                onClick={handlePayment}
                className="w-full bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              >
                Pay Now
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
