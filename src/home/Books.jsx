import React from "react";
import BooksCard from "./Books-Card";
import BookDetails from "./Book-Details.json";

export default function Books(prop) {
  return (
    <div className="">
      <div className="pt-[90px] px-4 font-bold text-[30px] text-center">
        Best Seller Books
      </div>
      <div className=" grid grid-cols-5 gap-4 p-4 max-w-6xl mx-auto">
        {BookDetails.map((detail) => {
          return <div className="box bg-red-500">{detail.bookname}</div>;
        })}
        {/* <BooksCard
          img="
        https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTUCIleEWfO4WAJV6zc1GjPi--ODEl78PUxWg&s"
          bookname="Book1"
          mrp="120"
        />
        <BooksCard bookname="Book2" mrp="200" />
        <BooksCard bookname="Book3" mrp="300" />
        <BooksCard bookname="Book4" mrp="250" />
        <BooksCard bookname="Book5" mrp="1200" />
        <BooksCard />
        <BooksCard />
        <BooksCard />
        <BooksCard /> */}
      </div>
    </div>
  );
}
