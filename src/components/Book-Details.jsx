import { useLocation } from "react-router-dom";

export default function BookDetails() {
  const { state } = useLocation();
  const book = state.bookData;

  return (
    <div className="w-[90%] mx-auto py-8">
      <div className="flex gap-8">
        <div className="w-1/3">
          <img src={book.img} alt={book.name} className="w-full" />
        </div>
        <div className="w-2/3 space-y-4">
          <h1 className="text-3xl font-bold">{book.name}</h1>
          <p className="text-xl">by {book.author}</p>
          <div className="flex gap-4 items-center">
            <span className="text-2xl font-bold">{book.prize}</span>
            <span className="line-through text-gray-500">{book.discount}</span>
            <span className="text-red-600">{book.discountAmount} OFF</span>
          </div>
          <p>Review: {book.review}</p>
        </div>
      </div>
    </div>
  );
}
