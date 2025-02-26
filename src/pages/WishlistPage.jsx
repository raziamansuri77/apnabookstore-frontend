import React from "react";
import { useGlobalContext } from "../context/GlobalContext";
import BeforeNavbar from "../home/Before-Navbar";
import SearchNavbar from "../home/Search-Navbar";
import Navbar from "../home/Navbar";

/**
 * @typedef {import('../context/GlobalContext').Book} Book
 */

export default function CartPage() {
  const { wishlistItems, removeFromWishlist, addToCart, isInCart } =
    useGlobalContext();

  // Calculate total value of items in wishlist (using prize as value)
  const totalValue = wishlistItems.reduce(
    (total, item) => total + item.prize,
    0
  );

  return (
    <div>
      <BeforeNavbar />
      <div className="pt-[35px]">
        <SearchNavbar />
      </div>
      <Navbar />
      <div className="p-16">
        <h1 className="text-[20px] font-bold">My Wishlist</h1>
        {wishlistItems.length === 0 ? (
          <p>Your wishlist is empty.</p>
        ) : (
          <ul className="mt-12 border-2 p-12 rounded-lg bg-[#F8F8F8]">
            {wishlistItems.map((item) => (
              <li
                key={item._id} // ADD THIS LINE
                className="flex gap-6 items-center py-4 border-b"
              >
                <div className=" ">
                  <img
                    src={item.img}
                    alt={item.name}
                    className="w-[150px] h-[200px] shadow-lg"
                  />
                </div>
                <div>
                  <div className="text-[20px] font-bold">{item.name}</div>
                  <div className="text-[#2c73a3]">
                    <span className="text-[#E42B26]">By: </span>
                    {item.author}
                  </div>
                  <div className="text-[20px] font-semibold">
                    Price: {item.prize}
                  </div>
                  <button
                    onClick={() => removeFromWishlist(item._id)}
                    className="mt-4 px-4 py-2 bg-red-500 text-white rounded hover:bg-red-700"
                  >
                    Remove
                  </button>
                </div>
              </li>
            ))}
            {/* Display total value of wishlist items */}
            <div className="mt-6 text-2xl font-bold">
              Total Value: ₹ {totalValue}
            </div>
          </ul>
        )}
      </div>
    </div>
  );
}
