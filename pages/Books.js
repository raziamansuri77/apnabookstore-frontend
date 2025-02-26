import React from "react";
import BookList from "../components/BookList";
import "../styles/BookList.css";

const BooksPage = () => {
  return (
    <div>
      <h1>Our Books Collection</h1>
      <BookList />
    </div>
  );
};

export default BooksPage;
