import React, { useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import useBooks from "../hooks/useBooks";

const BookDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { selectedBook, loading, error, fetchBookById } = useBooks();

  useEffect(() => {
    fetchBookById(id);
  }, [id]);

  if (loading)
    return (
      <div className="flex justify-center items-center h-screen">
        Loading...
      </div>
    );
  if (error) return <div className="text-red-500 text-center">{error}</div>;
  if (!selectedBook) return null;

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-lg overflow-hidden">
        <div className="md:flex">
          <div className="md:flex-shrink-0">
            <img
              className="h-48 w-full object-cover md:w-48"
              src={selectedBook.img}
              alt={selectedBook.name}
            />
          </div>
          <div className="p-8">
            <h1 className="text-2xl font-bold text-gray-900 mb-4">
              {selectedBook.name}
            </h1>
            <p className="text-gray-600 mb-2">Author: {selectedBook.author}</p>
            <p className="text-green-600 mb-2">Price: ${selectedBook.prize}</p>
            <p className="text-red-500 mb-4">
              Discount: {selectedBook.discount}%
            </p>
            <p className="text-gray-700 mb-6">{selectedBook.description}</p>
            <button
              onClick={() => navigate(-1)}
              className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
            >
              Back to Books
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookDetails;
