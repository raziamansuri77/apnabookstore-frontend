import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import useBooks from "../../hooks/useBooks";

export default function CommonFile(props) {
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
    <div className="max-w-7xl mx-auto px-4 sm:px-6    ">
      <div className="w-full sm:w-[90%] mx-auto  ">
        <div className="w-full ">
          {/* <div className="flex justify-end"></div> */}
          <div className="grid grid-cols-1   md:grid-cols-2 lg:grid-cols-1 gap-3 py-4">
            {displayedBooks.map((book) => (
              <div
                key={book._id}
                className="flex flex-col  lg:flex-row  items-center  gap-4 sm:gap-10 p-4 group"
              >
                <div className="flex flex-col   lg:px-6 items-center lg:flex-row  py-4  lg:w-[50%] sm:border-r-2  sm:gap-8 lg:gap-4">
                  <div className="relative shadow-inner border-2 border-[#E5E5E5] mx-auto w-[200px] h-[250px] lg:w-[250px]  lg:h-[200px]  sm:w-auto p-2  ">
                    <img
                      src={book.img}
                      alt={book.name}
                      className="w-full  h-[220px] object-cover lg:h-[180px]"
                    />
                  </div>
                  <div className="text-center lg:w-full   lg:items-baseline md:flex md:flex-col md:justify-center md:items-center py-4 sm:text-left">
                    <div className="text-gray-600 font-bold line-clamp-1 lg:items-baseline">
                      {book.name}
                    </div>
                    <div>{book.author}</div>
                    <div className="flex flex-row justify-center sm:justify-start gap-2">
                      <div>{book.prize}</div>
                      <div className="line-through">{book.discount}</div>
                    </div>
                  </div>
                </div>

                <div className="md:w-full    lg:w-[300px]  space-y-2 w-[300px] mx-auto">
                  <div className="text-[#468d66] font-bold"> Available </div>
                  <div>
                    Ships within
                    <span className="text-gray-600 font-bold"> 4-6 Days</span>
                    <span className="text-blue-500 cursor-pointer">
                      {" "}
                      Explain..
                    </span>{" "}
                  </div>
                  <div className="flex flex-col  lg:flex-row    gap-2 sm:gap-4">
                    <Link to="/cart" className="text-blue-500">
                      <button className="w-full   bg-[#397D58] py-2 px-4 rounded-md text-white">
                        Add to cart
                      </button>
                    </Link>
                    <button className="w-full sm:w-auto py-2 px-4 rounded-md border-2 shadow-sm">
                      Add to wishlist
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
          {books.length > 0 && currentIndex < books.length && (
            <div
              onClick={handleShowMore}
              className="text-center hover:text-[#B01A16] duration-500 py-4 hover:underline cursor-pointer"
            >
              Load more books
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
