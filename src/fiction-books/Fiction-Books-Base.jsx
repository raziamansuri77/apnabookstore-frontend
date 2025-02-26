import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import useBooks from "../../hooks/useBooks";

export default function Parent(props) {
  const { books, loading, error } = useBooks();
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
      const shuffledBooks = [...books].sort(() => Math.random() - 0.5);
      setDisplayedBooks(shuffledBooks.slice(0, 12));
    }
  }, [books]);

  const handleShowMore = () => {
    const nextBooks = books.slice(currentIndex, currentIndex + 10);
    setDisplayedBooks([...displayedBooks, ...nextBooks]);
    setCurrentIndex(currentIndex + 12);
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div className="w-full ">
      <div className="text-center text-[30px] md:text-[35px] lg:text-[40px] font-bold pt-4">
        Fiction Books
      </div>
      <img
        src="/bestsellerheading.jpg"
        alt=""
        className="text-center mx-auto w-[250px]"
      />
      <div className="w-[95%] md:w-[90%]  xl:max-w-6xl mx-auto">
        <div className="w-full">
          <div className="flex justify-end"></div>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 md:gap-6 lg:gap-8 py-4">
            {displayedBooks.map((book) => (
              <div
                className="shadow-inner bg-[#FBFBFB] cursor-pointer p-2 md:p-4 relative group"
                onMouseEnter={() => setHoveredBook(book._id)}
                onMouseLeave={() => setHoveredBook(null)}
                onClick={() => handleBookClick(book)}
              >
                <div className="bg-[#FD0000] rounded-full w-[30px] h-[30px] md:w-[40px] md:h-[40px] text-white text-[10px] md:text-[12px] absolute -top-4 -right-2 md:-top-6 md:-right-4 flex items-center justify-center text-center">
                  {book.discountAmount}
                </div>
                <div className="flex flex-col items-center">
                  <img
                    src={book.img}
                    alt={book.name}
                    className="w-full h-[120px] sm:h-[150px] md:h-[180px] lg:h-[200px] object-cover"
                  />
                  {hoveredBook === book._id && (
                    <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
                      <span className="text-white font-semibold text-sm md:text-lg">
                        Quick View
                      </span>
                    </div>
                  )}
                  <div className="text-gray-600 text-center font-bold text-sm md:text-base line-clamp-1">
                    {book.name}
                  </div>
                  <div className="text-sm md:text-base">{book.author}</div>
                  <div className="flex justify-between gap-2 md:gap-6 text-sm md:text-base">
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
              className="text-center hover:text-[#B01A16] duration-500 py-4 hover:underline cursor-pointer text-sm md:text-base"
            >
              Load more books
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
