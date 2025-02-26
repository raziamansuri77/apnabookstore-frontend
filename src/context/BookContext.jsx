import React, { createContext, useContext, useState } from "react";
import axios from "axios";

const BookContext = createContext();

export function BookProvider({ children }) {
  const [searchResults, setSearchResults] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const searchBooks = async (query) => {
    try {
      setLoading(true);
      const response = await axios.get(`/api/v1/books/search`, {
        params: { query },
        headers: {
          "Content-Type": "application/json",
        },
      });
      setSearchResults(response.data);
      console.log("search book response frontend", response);
    } catch (err) {
      console.error("Search error:", err);
      setError(err.response?.data?.error || "Failed to fetch books");
    } finally {
      setLoading(false);
    }
  };

  return (
    <BookContext.Provider
      value={{ searchResults, loading, error, searchBooks }}
    >
      {children}
    </BookContext.Provider>
  );
}

export const useBooks = () => useContext(BookContext);
