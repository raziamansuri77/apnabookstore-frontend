import React, { useState, useEffect } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import useBooks from "../../hooks/useBooks";
import LoadingAnimation from "./LoadingAnimation"; // Add this import

export default function Parent(props) {
  const { category } = useParams();
  const { books, loading, error } = useBooks(category);
  const [value, setValue] = useState(50);
  const [displayedBooks, setDisplayedBooks] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(10);
  const [hoveredBook, setHoveredBook] = useState(null);
  const navigate = useNavigate();

  const handleBookClick = (book) => {
    navigate(`/quickview/${book._id}`, { state: { bookData: book } });
  };

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  useEffect(() => {
    if (books.length > 0) {
      setDisplayedBooks([]); // Reset displayed books when category changes
      const filteredBooks = category
        ? books.filter((book) => book.category === category)
        : books;
      const shuffledBooks = [...filteredBooks].sort(() => Math.random() - 0.5);
      setDisplayedBooks(shuffledBooks.slice(0, 10));
      setCurrentIndex(10);
    }
  }, [books, category]);

  const handleShowMore = () => {
    const nextBooks = books.slice(currentIndex, currentIndex + 10);
    setDisplayedBooks([...displayedBooks, ...nextBooks]);
    setCurrentIndex(currentIndex + 10);
  };

  // if (loading) {
  //   return <div>Loading...</div>;
  // }
  if (loading) {
    return <LoadingAnimation />;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div className="w-full px-4">
      <div className="text-center text-[30px] font-bold"></div>
      <div className="flex gap-3 w-full max-w-[1200px] mx-auto">
        <div className="w-full">
          <div className="flex justify-end"></div>
          <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 py-4">
            {displayedBooks.map((book) => (
              <div
                key={book._id}
                className="shadow-inner bg-[#FBFBFB] cursor-pointer p-4 relative group"
                onMouseEnter={() => setHoveredBook(book._id)}
                onMouseLeave={() => setHoveredBook(null)}
                onClick={() => handleBookClick(book)}
              >
                <div className="bg-[#FD0000] text-white text-[12px] px-4 py-[1px] absolute -top-2 -left-2 flex items-center justify-center text-center">
                  {book.discountAmount}
                </div>
                <div className="flex flex-col items-center">
                  <img
                    src={book.img}
                    alt={book.name}
                    className="w-full h-[150px] sm:h-[180px] md:h-[200px] object-cover"
                  />
                  {hoveredBook === book._id && (
                    <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
                      <span className="text-white font-semibold text-base sm:text-lg">
                        Quick View
                      </span>
                    </div>
                  )}
                  <div className="text-gray-600 text-center font-bold line-clamp-1 text-sm sm:text-base">
                    {book.name}
                  </div>
                  <div className="text-sm sm:text-base">{book.author}</div>
                  <div className="flex justify-between gap-4 sm:gap-6 text-sm sm:text-base">
                    <div>₹ {book.prize}</div>
                    <div className="line-through">₹ {book.discount}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          {books.length > 0 && currentIndex < books.length && (
            <div
              onClick={handleShowMore}
              className="text-center hover:text-[#B01A16] duration-500 py-4 hover:underline cursor-pointer text-sm sm:text-base"
            >
              Load more books
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
