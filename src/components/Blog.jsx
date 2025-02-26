import React, { useState } from "react";
import BeforeNavbar from "../home/Before-Navbar";
import SearchNavbar from "../home/Search-Navbar";
import Navbar from "../home/Navbar";
import Footer from "../home/Footer";
import {
  BookOpen,
  Star,
  Clock,
  ChevronDown,
  ChevronUp,
  BookmarkPlus,
  Share2,
} from "lucide-react";

export default function Blog() {
  const [expandedBooks, setExpandedBooks] = useState({});

  const toggleBookDetails = (bookId) => {
    setExpandedBooks((prev) => ({
      ...prev,
      [bookId]: !prev[bookId],
    }));
  };

  const books = [
    {
      id: 1,
      title: "Data Structures and Algorithms",
      author: "Thomas H. Cormen",
      image:
        "https://m.media-amazon.com/images/I/41-RWwEls6L._SX218_BO1,204,203,200_QL40_FMwebp_.jpg",
      shortDesc:
        "A comprehensive guide to understanding data structures and algorithms",
      longDesc:
        "This book provides detailed explanations of fundamental data structures and algorithms. Perfect for computer science students and coding enthusiasts. Includes practical examples and exercises to reinforce learning.",
      rating: 4.8,
      readTime: "15 min read",
      category: "Computer Science",
    },
    {
      id: 2,
      title: "Clean Code",
      author: "Robert C. Martin",
      image:
        "https://m.media-amazon.com/images/I/41xShlnTZTL._SX218_BO1,204,203,200_QL40_FMwebp_.jpg",
      shortDesc: "Learn principles of writing maintainable and efficient code",
      longDesc:
        "A must-read for every software developer, this book teaches you how to write code that's easy to understand and maintain. Packed with practical advice and real-world examples.",
      rating: 4.9,
      readTime: "12 min read",
      category: "Programming",
    },
    {
      id: 3,
      title: "Python Crash Course",
      author: "Eric Matthes",
      image:
        "https://m.media-amazon.com/images/I/51OOCVBfCQL._SX379_BO1,204,203,200_.jpg",
      shortDesc: "A hands-on, project-based introduction to programming",
      longDesc:
        "Perfect for beginners, this book takes you through the basics of Python programming with practical projects including data visualization, web applications, and game development. Contains updated content for Python 3.",
      rating: 4.7,
      readTime: "10 min read",
      category: "Programming",
    },
    {
      id: 4,
      title: "The Art of Computer Programming",
      author: "Donald E. Knuth",
      image:
        "https://m.media-amazon.com/images/I/410vJZbAZGL._SX218_BO1,204,203,200_QL40_FMwebp_.jpg",
      shortDesc: "Fundamental algorithms and programming techniques",
      longDesc:
        "A comprehensive compilation of essential computer programming concepts. This classic text covers fundamental algorithms, seminumerical algorithms, and combinatorial algorithms with detailed explanations.",
      rating: 4.9,
      readTime: "20 min read",
      category: "Computer Science",
    },
    {
      id: 5,
      title: "JavaScript: The Good Parts",
      author: "Douglas Crockford",
      image:
        "https://m.media-amazon.com/images/I/51H-31ivMTL._SX218_BO1,204,203,200_QL40_FMwebp_.jpg",
      shortDesc: "Discover the best features of JavaScript",
      longDesc:
        "This book focuses on the core language features that really matter, helping developers create efficient and maintainable code. Learn about JavaScript patterns and best practices.",
      rating: 4.6,
      readTime: "8 min read",
      category: "Web Development",
    },
    {
      id: 6,
      title: "Design Patterns",
      author: "Erich Gamma et al.",
      image:
        "https://m.media-amazon.com/images/I/51szD9HC9pL._SX395_BO1,204,203,200_.jpg",
      shortDesc: "Elements of Reusable Object-Oriented Software",
      longDesc:
        "The classic book on design patterns. Learn about recurring solutions to common problems in software design. Essential reading for software architects and developers.",
      rating: 4.8,
      readTime: "15 min read",
      category: "Software Design",
    },
    {
      id: 7,
      title: "Machine Learning for Beginners",
      author: "Jennifer Rodgers",
      image:
        "https://m.media-amazon.com/images/I/41-+zWX-4vL._SX218_BO1,204,203,200_QL40_FMwebp_.jpg",
      shortDesc: "A comprehensive guide to AI and ML",
      longDesc:
        "Start your journey into artificial intelligence and machine learning. Covers fundamental concepts, algorithms, and practical applications with Python implementations.",
      rating: 4.5,
      readTime: "12 min read",
      category: "Artificial Intelligence",
    },
    {
      id: 8,
      title: "Database System Concepts",
      author: "Abraham Silberschatz",
      image:
        "https://m.media-amazon.com/images/I/51cSStvNYVL._SX218_BO1,204,203,200_QL40_FMwebp_.jpg",
      shortDesc: "Complete guide to database management",
      longDesc:
        "Explore database design, implementation, and management. Covers SQL, transaction management, and database architecture with real-world examples.",
      rating: 4.7,
      readTime: "18 min read",
      category: "Databases",
    },
    {
      id: 9,
      title: "React.js Essentials",
      author: "Artemij Fedosejev",
      image:
        "https://m.media-amazon.com/images/I/41-TkpkNtZL._SX218_BO1,204,203,200_QL40_FMwebp_.jpg",
      shortDesc: "Modern web development with React",
      longDesc:
        "Master React.js through practical examples and projects. Learn about components, hooks, state management, and building responsive user interfaces.",
      rating: 4.6,
      readTime: "10 min read",
      category: "Web Development",
    },
    {
      id: 10,
      title: "Cloud Computing Basics",
      author: "Michael J. Cloud",
      image:
        "https://m.media-amazon.com/images/I/41NwnkCbyoL._SX218_BO1,204,203,200_QL40_FMwebp_.jpg",
      shortDesc: "Introduction to cloud technologies",
      longDesc:
        "Understanding cloud computing fundamentals, services, and deployment models. Covers AWS, Azure, and Google Cloud with practical examples.",
      rating: 4.4,
      readTime: "14 min read",
      category: "Cloud Computing",
    },
    {
      id: 11,
      title: "Cybersecurity Fundamentals",
      author: "Thomas Reed",
      image:
        "https://m.media-amazon.com/images/I/51A+tzK-yAL._SX218_BO1,204,203,200_QL40_FMwebp_.jpg",
      shortDesc: "Essential security concepts and practices",
      longDesc:
        "Learn about network security, cryptography, and threat detection. Includes hands-on exercises and real-world case studies in cybersecurity.",
      rating: 4.7,
      readTime: "16 min read",
      category: "Security",
    },
    {
      id: 12,
      title: "DevOps Handbook",
      author: "Gene Kim",
      image:
        "https://m.media-amazon.com/images/I/51-J+Njbd1L._SX218_BO1,204,203,200_QL40_FMwebp_.jpg",
      shortDesc: "Guide to DevOps practices and culture",
      longDesc:
        "Comprehensive guide to implementing DevOps in your organization. Covers continuous integration, delivery, and deployment with practical strategies.",
      rating: 4.8,
      readTime: "15 min read",
      category: "DevOps",
    },
  ];

  return (
    <div>
      <div className="fixed top-0 left-0 right-0 z-50 bg-white w-full">
        <BeforeNavbar />
        <div className="mt-[35px]">
          <SearchNavbar />
        </div>
        <Navbar />
      </div>

      <div className="pt-32 pb-16 md:max-w-7xl mx-auto mt-[180px] md:mt-[120px]">
        <div className="container mx-auto px-4">
          {/* Header Section */}
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-gray-800 mb-4">
              Apna Book Store Blog
            </h1>
            <p className="text-xl text-gray-600">
              Discover Knowledge Through Our Curated Collection
            </p>
          </div>

          {/* Books Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {books.map((book) => (
              <div
                key={book.id}
                className="bg-white rounded-xl shadow-lg overflow-hidden transform hover:scale-105 transition-transform duration-300"
              >
                {/* Book Logo Header */}
                <div className="bg-gradient-to-r from-blue-600 to-purple-600 p-2">
                  <div className="flex items-center justify-between">
                    <img
                      src="/logo.png"
                      alt="Apna Book Store"
                      className="h-8"
                    />
                    <div className="flex gap-2">
                      <BookmarkPlus className="w-5 h-5 text-white cursor-pointer" />
                      <Share2 className="w-5 h-5 text-white cursor-pointer" />
                    </div>
                  </div>
                </div>

                {/* Book Content */}
                <div className="p-6">
                  <div className="flex justify-center mb-4">
                    <img
                      src={book.image}
                      alt={book.title}
                      className="h-48 object-cover rounded-md"
                    />
                  </div>

                  <h2 className="text-xl font-bold text-gray-800 mb-2">
                    {book.title}
                  </h2>

                  <div className="flex items-center gap-2 mb-2 text-gray-600">
                    <BookOpen className="w-4 h-4" />
                    <span>{book.author}</span>
                  </div>

                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-1">
                      <Star className="w-4 h-4 text-yellow-500" />
                      <span>{book.rating}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Clock className="w-4 h-4 text-gray-500" />
                      <span>{book.readTime}</span>
                    </div>
                  </div>

                  <p className="text-gray-600 mb-4">
                    {expandedBooks[book.id] ? book.longDesc : book.shortDesc}
                  </p>

                  <button
                    onClick={() => toggleBookDetails(book.id)}
                    className="flex items-center gap-2 text-blue-600 hover:text-blue-800"
                  >
                    {expandedBooks[book.id] ? (
                      <>
                        Read Less <ChevronUp className="w-4 h-4" />
                      </>
                    ) : (
                      <>
                        Read More <ChevronDown className="w-4 h-4" />
                      </>
                    )}
                  </button>
                </div>

                {/* Category Tag */}
                <div className="px-6 pb-4">
                  <span className="inline-block bg-blue-100 text-blue-800 rounded-full px-3 py-1 text-sm font-semibold">
                    {book.category}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
