import React, { createContext, useState, useContext } from "react";
import { showToast } from "./toastUtils"; // Import showToast

const GlobalContext = createContext();

export const GlobalContextProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);
  const [wishlistItems, setWishlistItems] = useState([]);

  // Cart functions
  const addToCart = (book) => {
    // Check if book already exists in cart or wishlist
    const isInCart = cartItems.some((item) => item._id === book._id);
    const isInWishlist = wishlistItems.some((item) => item._id === book._id);

    if (isInCart) {
      showToast("Book already in cart!", "warning");
      return false;
    }

    if (isInWishlist) {
      // Remove from wishlist if it exists there
      removeFromWishlist(book._id);
    }

    const newCartItem = {
      ...book,
      quantity: 1,
      cartItemId: Date.now() + Math.random(),
    };
    setCartItems([...cartItems, newCartItem]);
    showToast("Book added to cart successfully!");
    return true;
  };

  const addToWishlist = (book) => {
    const isInWishlist = wishlistItems.some((item) => item._id === book._id);
    const isInCart = cartItems.some((item) => item._id === book._id);

    if (isInWishlist) {
      showToast("Book already in wishlist!", "warning");
      return false;
    }

    if (isInCart) {
      showToast("Book already in cart!", "warning");
      return false;
    }

    setWishlistItems([...wishlistItems, book]);
    showToast("Book added to wishlist successfully!");
    return true;
  };

  const removeFromCart = (cartItemId) => {
    // Remove an item from the cart based on its cartItemId
    setCartItems(cartItems.filter((item) => item.cartItemId !== cartItemId));
  };

  const increaseQuantity = (cartItemId) => {
    // Increase the quantity of an item in the cart
    setCartItems(
      cartItems.map((item) =>
        item.cartItemId === cartItemId
          ? { ...item, quantity: item.quantity + 1 }
          : item
      )
    );
  };

  const decreaseQuantity = (cartItemId) => {
    // Decrease the quantity of an item in the cart
    setCartItems(
      cartItems
        .map((item) =>
          item.cartItemId === cartItemId
            ? { ...item, quantity: Math.max(item.quantity - 1, 0) }
            : item
        )
        .filter((item) => item.quantity > 0) // Remove the item if the quantity becomes 0
    );
  };

  const removeFromWishlist = (_id) => {
    setWishlistItems(wishlistItems.filter((item) => item._id !== _id));
  };

  const isInCart = (bookId) => {
    return cartItems.some((item) => item.id === bookId);
  };

  const contextValue = {
    cartItems,
    wishlistItems,
    addToCart,
    removeFromCart,
    addToWishlist,
    removeFromWishlist,
    increaseQuantity,
    decreaseQuantity,
    isInCart,
  };

  return (
    <GlobalContext.Provider value={contextValue}>
      {children}
    </GlobalContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(GlobalContext);
};
