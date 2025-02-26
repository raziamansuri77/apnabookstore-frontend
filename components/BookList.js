import React from "react";
import useBooks from "../hooks/useBooks";

const BookList = () => {
  const { books, loading, error } = useBooks();

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div className="book-list">
      {books.map((book) => (
        <div key={book._id} className="book-card">
          <h3>{book.title}</h3>
          <p>{book.author}</p>
          <p>{book.description}</p>
          <p>Price: ${book.price}</p>
        </div>
      ))}
    </div>
  );
};

export default BookList;
