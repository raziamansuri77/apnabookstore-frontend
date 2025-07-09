import { useState, useEffect } from "react";
import axios from "axios";

const useBooks = () => {
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const fetchBooks = async () => {
    try {
      // const response = await axios.get("/api/v1/books");
      const response = await axios.get(
        "https://apnabookstore-backend.onrender.com/books/api/books"
      );

      setBooks(response.data);
      setLoading(false);
    } catch (err) {
      setError(err.message);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchBooks();
  }, []);

  return { books, loading, error };
};

export default useBooks;
