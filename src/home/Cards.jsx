import React from "react";
import BookDetails from "./Book-Details.json";
export default function Cards() {
  const data = [
    { name: "razi", age: 24, review: "abc" },
    { name: "razi11", age: 24, review: "abc11" },
    { name: "razi22", age: 24, review: "abc22" },
    { name: "razi33", age: 24, review: "abc33" },
  ];
  return (
    <div className="w-[300px] m-auto ">
      <div className=" flex gap-4">
        {BookDetails.map((d) => {
          return (
            <div className="">
              <div className="flex flex-col text-center ">
                <div>{d.bookname}</div>
                <div>
                  <img src={d.img} alt="" className="h-[100px] w-[200px]" />
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
