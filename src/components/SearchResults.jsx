import React from "react";
import { useBooks } from "../context/BookContext";
import BeforeNavbar from "../home/Before-Navbar";
import SearchNavbar from "../home/Search-Navbar";
import Navbar from "../home/Navbar";
import Footer from "../home/Footer";
import { useNavigate } from "react-router-dom";

export default function SearchResults() {
  const { searchResults = [], loading, error } = useBooks();
  const navigate = useNavigate();

  // Update the handler to use book._id like in Parent.jsx
  const handleBookClick = (book) => {
    // Pass the complete book data through navigation
    navigate(`/quickview/${book._id}`, {
      state: { bookData: book },
    });
  };
  if (loading) {
    return <div className="container mx-auto p-4">Loading...</div>;
  }

  if (error) {
    return <div className="container mx-auto p-4 text-red-500">{error}</div>;
  }

  return (
    <div>
      <div className="fixed top-0 left-0 right-0 z-50 bg-white w-full">
        <BeforeNavbar />
        <div className="mt-[35px]">
          <SearchNavbar />
        </div>
        <Navbar />
      </div>

      <div className="mt-[300px] md:mt-[250px] pb-16">
        <div className="container mx-auto p-4">
          <h2 className="text-2xl font-bold mb-4">Search Results</h2>
          {searchResults.length === 0 ? (
            <p className="text-gray-600">
              No books found. Try a different search term.
            </p>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {/* {searchResults.map((book) => (
                <div key={book._id} className="border p-4 rounded-lg shadow-md">
                  <img
                    src={book.img}
                    alt={book.name}
                    className="w-full h-48 object-cover mb-4 rounded"
                  />
                  <h3 className="font-semibold text-lg">{book.name}</h3>
                  <p className="text-gray-700">Author: {book.author}</p>
                  <p className="text-green-600">Price: {book.prize}</p>
                  <p className="text-red-500">
                    Original Price: {book.discount}
                  </p>
                  <p className="text-blue-600">
                    Discount: {book.discountAmount}
                  </p>
                  <p className="text-gray-600 mt-2 text-sm line-clamp-2">
                    {book.description}
                  </p>
                </div>
              ))} */}
              {searchResults.map((book) => (
                <div
                  key={book._id}
                  className="border p-4 rounded-lg shadow-md cursor-pointer hover:shadow-lg transition-shadow"
                  onClick={() => handleBookClick(book)}
                >
                  <img
                    src={book.img}
                    alt={book.name}
                    className="w-full h-48 object-cover mb-4 rounded"
                  />
                  <h3 className="font-semibold text-lg">{book.name}</h3>
                  <p className="text-gray-700">Author: {book.author}</p>
                  <p className="text-green-600">Price: {book.prize}</p>
                  <p className="text-red-500">
                    Original Price: {book.discount}
                  </p>
                  <p className="text-blue-600">
                    Discount: {book.discountAmount}
                  </p>
                  <p className="text-gray-600 mt-2 text-sm line-clamp-2">
                    {book.description}
                  </p>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
      <Footer />
    </div>
  );
}
