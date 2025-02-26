import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import useBooks from "../../hooks/useBooks";

export default function TopBooksPage(props) {
  const { books, loading, error } = useBooks();
  const [value, setValue] = useState(50);
  const [displayedBooks, setDisplayedBooks] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(10);
  const [hoveredBook, setHoveredBook] = useState(null);

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
    <div className=" ">
      <div className="text-center text-[30px] font-bold">BW Top 100 Books</div>

      <div
        className="flex
           gap-3 w-[90%] mx-auto"
      >
        <div className=" w-full ">
          <div className="flex justify-end"></div>
          <div className="grid grid-cols-6 gap-3 py-4 ">
            {displayedBooks.map((book) => (
              <Link to="/quickview" key={book._id}>
                <div
                  className="shadow-inner bg-[#FBFBFB] cursor-pointer  p-4 relative group"
                  onMouseEnter={() => setHoveredBook(book._id)}
                  onMouseLeave={() => setHoveredBook(null)}
                >
                  <div className="bg-[#FD0000] text-white text-[12px] px-4 py-[1px] absolute -top-2 -left-2 flex items-center justify-center text-center">
                    {book.discountAmount}
                  </div>
                  <div className="flex flex-col items-center">
                    <img
                      src={book.img}
                      alt={book.name}
                      className="w-full h-[200px] object-cover"
                    />
                    {hoveredBook === book._id && (
                      <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
                        <span className="text-white font-semibold text-lg">
                          Quick View
                        </span>
                      </div>
                    )}
                    <div className="text-gray-600 text-center font-bold line-clamp-1">
                      {book.name}
                    </div>
                    <div>prize: ${book.price}</div>
                  </div>
                </div>
              </Link>
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

// import React, { useState } from "react";
// import randomBook from "/src/components/Random-Book.json";
// import { useEffect } from "react";
// import { Link } from "react-router-dom";
// export default function Parent(props) {
//   const [value, setValue] = useState(50);
//   const handleChange = (event) => {
//     setValue(event.target.value);
//   };
//   // books visible or not
//   const [displayedBooks, setDisplayedBooks] = useState([]);
//   const [currentIndex, setCurrentIndex] = useState(10);

//   useEffect(() => {
//     // Shuffle books array on page load
//     const shuffledBooks = [...randomBook].sort(() => Math.random() - 0.5);
//     setDisplayedBooks(shuffledBooks.slice(0, 10));
//   }, []);

//   const handleShowMore = () => {
//     const nextBooks = randomBook.slice(currentIndex, currentIndex + 10);
//     setDisplayedBooks([...displayedBooks, ...nextBooks]);
//     setCurrentIndex(currentIndex + 10);
//   };
//   // Add this state at the top with other useState declarations
//   const [hoveredBook, setHoveredBook] = useState(null);

//   return (
//     <div className="min-h-screen">
//       <div className="text-center text-[30px] font-bold"></div>
//       <div
//         className="flex
//            gap-3 w-[90%] mx-auto"
//       >
//         {/* <div className="bg-red-100 w-[25%] space-y-4">
//           <div>Refine your Search</div>
//           <div className="space-y-4">
//             <div>
//               Price range:
//               <span className="text-[#FF0000]">
//                 {" "}
//                 ₹{value} - ₹{value}
//               </span>
//             </div>
//             <input
//               type="range"
//               min="0"
//               max="100"
//               value={value}
//               onChange={handleChange}
//               className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
//             />{" "}
//             <div>
//               Discount Range:{" "}
//               <span className="text-[#FF0000]">
//                 {" "}
//                 {value}% - {value}%
//               </span>
//             </div>
//           </div>
//           <div>
//             <div>
//               <div>Binding </div>
//             </div>
//           </div>
//         </div> */}
//         <div className=" w-full ">
//           <div className="flex justify-end">
//             {/* <div className="text-[18px] font-semibold">5441 results found</div> */}
//             {/* <div className="space-x-2">
//               <label htmlFor="sort">Sort By: </label>
//               <select name="" id="" className="bg-[#E9E9ED]">
//                 <option
//                   value="relevance"
//                   // className={sortType === "relevance" ? "active" : ""}
//                   // onClick={() => handleSort("relevance")}
//                 >
//                   {" "}
//                   Relevance
//                 </option>
//                 <option
//                   value="prize-low-high"
//                   // className={sortType === "price-low" ? "active" : ""}
//                   // onClick={() => handleSort("price-low")}
//                 >
//                   Price-Low to High
//                 </option>
//                 <option
//                   value="prize-high-low"
//                   // className={sortType === "price-high" ? "active" : ""}
//                   // onClick={() => handleSort("price-high")}
//                 >
//                   Price-High to Low
//                 </option>
//                 <option
//                   value="discount"
//                   // className={sortType === "discount" ? "active" : ""}
//                   // onClick={() => handleSort("discount")}
//                 >
//                   Discount
//                 </option>
//               </select>
//             </div> */}
//           </div>
//           <div className="grid grid-cols-6 gap-3 py-4 ">
//             {/* {displayedBooks.map((book) => {
//               return (
//                 <Link to="/quickview">
//                   <div
//                     key={book.key}
//                     className="  shadow-inner bg-[#FBFBFB]  cursor-pointer p-4 relative "
//                   >
//                     <div className="  bg-[#FD0000] text-white text-[12px] px-4 py-[1px]  absolute -top-2 -left-2 flex items-center justify-center text-center">
//                       {book.discountAmount}
//                     </div>
//                     <div className="flex flex-col items-center">
//                       <img src={book.img} alt="" className="w-full h-[200px]" />
//                       <div className="text-gray-600 text-center font-bold">
//                         {book.name}
//                       </div>
//                       <div className="text-gray-600 text-center">
//                         {book.author}
//                       </div>
//                       <div className="text-gray-600 text-center">
//                         {book.review}
//                       </div>
//                       <div className="flex gap-2 items-center">
//                         <div>{book.prize}</div>
//                         <div className="line-through">{book.discount}</div>
//                       </div>
//                     </div>
//                   </div>
//                 </Link>
//               );
//             })} */}
//             {displayedBooks.map((book) => {
//               return (
//                 <Link to="/quickview" key={book.key}>
//                   <div
//                     className="shadow-inner bg-[#FBFBFB] cursor-pointer  p-4 relative group"
//                     onMouseEnter={() => setHoveredBook(book.key)}
//                     onMouseLeave={() => setHoveredBook(null)}
//                   >
//                     <div className="bg-[#FD0000] text-white text-[12px] px-4 py-[1px] absolute -top-2 -left-2 flex items-center justify-center text-center">
//                       {book.discountAmount}
//                     </div>
//                     <div className="flex flex-col items-center">
//                       <img src={book.img} alt="" className="w-full h-[200px]" />
//                       {hoveredBook === book.key && (
//                         <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
//                           <span className="text-white font-semibold text-lg">
//                             Quick View
//                           </span>
//                         </div>
//                       )}
//                       <div className="text-gray-600 text-center font-bold line-clamp-1">
//                         {book.name}
//                       </div>
//                       <div>prize:$123</div>
//                       {/* Rest of the book card content remains the same */}
//                     </div>
//                   </div>
//                 </Link>
//               );
//             })}
//           </div>
//           {currentIndex < randomBook.length && (
//             <div
//               onClick={handleShowMore}
//               className="text-center hover:text-[#B01A16] duration-500 py-4 hover:underline cursor-pointer"
//             >
//               Load more books
//             </div>
//           )}
//         </div>
//       </div>
//     </div>
//   );
// }
// // }
