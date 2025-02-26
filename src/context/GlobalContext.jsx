import React, { createContext, useState, useContext } from "react";

const GlobalContext = createContext();

export const GlobalContextProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);
  const [wishlistItems, setWishlistItems] = useState([]);

  // Cart functions
  const addToCart = (book) => {
    // Check if the book is already in the cart
    // If the book is already in the cart, create a new cart item
    const newCartItem = {
      ...book,
      quantity: 1,
      cartItemId: Date.now() + Math.random(), // Generate a unique cart item ID
    };
    // Update the cart items state with the new item
    setCartItems([...cartItems, newCartItem]);
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

  // Wishlist functions
  const addToWishlist = (book) => {
    // Always add a new item to the wishlist, even if it already exists
    const newWishlistItem = {
      ...book,
      wishlistItemId: Date.now() + Math.random(), // Generate a unique wishlist item ID
    };
    setWishlistItems([...wishlistItems, newWishlistItem]);
  };

  // const removeFromWishlist = (wishlistItemId) => {
  //   // Remove an item from the wishlist based on its bookId
  //   setWishlistItems(
  //     wishlistItems.filter((item) => item.wishlistItemId !== wishlistItemId)
  //   );
  // };
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
