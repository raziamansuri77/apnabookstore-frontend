import React from "react";
import { useParams } from "react-router-dom";
import randomBook from "./Random-Book.json";

export const BookDetailView = () => {
  const { id } = useParams();
  const book = randomBook.find((book) => book.id === parseInt(id));

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4">
        <div className="bg-white rounded-lg shadow-lg p-6 md:p-8 flex flex-col md:flex-row gap-8">
          {/* Left: Image Section */}
          <div className="md:w-1/3">
            <div className="sticky top-8">
              <img
                src={book.img}
                alt={book.name}
                className="w-full h-auto rounded-lg shadow-md hover:scale-105 transition-transform"
              />
            </div>
          </div>

          {/* Right: Book Details Section */}
          <div className="md:w-2/3 space-y-6">
            <h1 className="text-3xl font-bold text-gray-900">{book.name}</h1>
            <p className="text-xl text-gray-600">by {book.author}</p>

            <div className="flex items-center gap-4">
              <span className="text-3xl font-bold text-green-600">
                {book.prize}
              </span>
              <span className="text-lg text-gray-500 line-through">
                {book.discount}
              </span>
              <span className="bg-red-100 text-red-600 px-3 py-1 rounded-full text-sm font-semibold">
                {book.discountAmount} OFF
              </span>
            </div>

            <div className="flex items-center gap-2">
              <div className="flex items-center">
                {[...Array(5)].map((_, index) => (
                  <svg
                    key={index}
                    className="w-5 h-5 text-yellow-400"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <span className="text-gray-600">{book.review}</span>
            </div>

            <div className="space-y-4">
              <button className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition-colors">
                Add to Cart
              </button>
              <button className="w-full bg-orange-500 text-white py-3 rounded-lg hover:bg-orange-600 transition-colors">
                Buy Now
              </button>
            </div>

            <div className="border-t pt-6 mt-6">
              <h3 className="text-xl font-semibold mb-4">Product Details</h3>
              <div className="grid grid-cols-2 gap-4 text-sm">
                <div className="space-y-2">
                  <p>
                    <span className="font-medium">Format:</span> Hardcover
                  </p>
                  <p>
                    <span className="font-medium">Language:</span> English
                  </p>
                  <p>
                    <span className="font-medium">Pages:</span> 400
                  </p>
                </div>
                <div className="space-y-2">
                  <p>
                    <span className="font-medium">Publisher:</span> Publishing
                    House
                  </p>
                  <p>
                    <span className="font-medium">ISBN:</span> 978-XXXXXXXXXX
                  </p>
                  <p>
                    <span className="font-medium">Release Date:</span> 2023
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
