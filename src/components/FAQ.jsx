import React, { useState } from "react";
import BeforeNavbar from "../home/Before-Navbar";
import SearchNavbar from "../home/Search-Navbar";
import Navbar from "../home/Navbar";
import Footer from "../home/Footer";
import {
  HelpCircle,
  ChevronDown,
  ChevronUp,
  Book,
  Truck,
  CreditCard,
  RotateCcw,
  UserCircle,
  Gift,
  MessageSquare,
} from "lucide-react";

export default function FAQ() {
  const [openSection, setOpenSection] = useState(null);

  const faqSections = [
    {
      id: "ordering",
      icon: <Book className="w-6 h-6 text-blue-600" />,
      title: "Ordering Books",
      questions: [
        {
          q: "How do I place an order?",
          a: "Select your books, add them to cart, and proceed to checkout. Follow the simple steps to complete your purchase.",
        },
        {
          q: "Can I order multiple books?",
          a: "Yes, you can add multiple books to your cart and order them together.",
        },
        {
          q: "Are there bulk order discounts?",
          a: "Yes, we offer special discounts for bulk orders above 10 books.",
        },
      ],
    },
    {
      id: "shipping",
      icon: <Truck className="w-6 h-6 text-green-600" />,
      title: "Shipping & Delivery",
      questions: [
        {
          q: "What are the shipping charges?",
          a: "Shipping is free for orders above ₹499. Standard shipping charges apply for orders below this amount.",
        },
        {
          q: "How long will delivery take?",
          a: "Standard delivery takes 3-5 business days. Express delivery options are available.",
        },
      ],
    },
    {
      id: "payment",
      icon: <CreditCard className="w-6 h-6 text-purple-600" />,
      title: "Payment & Pricing",
      questions: [
        {
          q: "What payment methods do you accept?",
          a: "We accept credit/debit cards, UPI, net banking, and mobile wallets.",
        },
        {
          q: "Are prices inclusive of taxes?",
          a: "All prices shown include GST and applicable taxes.",
        },
      ],
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

      <div className="mt-[300px] md:mt-[250px] pb-16">
        <div className="container mx-auto px-4 max-w-4xl">
          {/* Header Section */}
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg p-8 mb-8 text-white relative overflow-hidden">
            <div className="absolute inset-0 opacity-20">
              {/* <img
                src="https://st.depositphotos.com/4428871/53719/v/450/depositphotos_537196004-stock-illustration-faq-frequently-asked-questions-acronym.jpg"
                alt="FAQ Banner"
                className="w-full h-full object-cover "
              /> */}
            </div>
            <div className="relative z-10 text-center">
              <h1 className="text-4xl font-bold mb-4">
                Frequently Asked Questions
              </h1>
              <p className="text-lg">
                Find answers to common questions about Apna Book Store
              </p>
            </div>
          </div>

          {/* Quick Links */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
            {["Orders", "Shipping", "Returns", "Support"].map((item, index) => (
              <div
                key={index}
                className="bg-white rounded-lg shadow p-4 text-center hover:shadow-lg transition-shadow cursor-pointer"
              >
                <span className="text-blue-600 font-medium">{item}</span>
              </div>
            ))}
          </div>

          {/* FAQ Sections */}
          <div className="space-y-6">
            {faqSections.map((section) => (
              <div
                key={section.id}
                className="bg-white rounded-lg shadow-lg overflow-hidden"
              >
                <div className="p-6 border-b">
                  <div className="flex items-center gap-3">
                    {section.icon}
                    <h2 className="text-2xl font-semibold">{section.title}</h2>
                  </div>
                </div>
                <div className="p-6 space-y-4">
                  {section.questions.map((item, index) => (
                    <div
                      key={index}
                      className="border-b last:border-0 pb-4 last:pb-0"
                    >
                      <button
                        onClick={() =>
                          setOpenSection(
                            openSection === `${section.id}-${index}`
                              ? null
                              : `${section.id}-${index}`
                          )
                        }
                        className="w-full flex items-center justify-between text-left"
                      >
                        <span className="font-medium text-gray-800">
                          {item.q}
                        </span>
                        {openSection === `${section.id}-${index}` ? (
                          <ChevronUp className="w-5 h-5 text-blue-600" />
                        ) : (
                          <ChevronDown className="w-5 h-5 text-blue-600" />
                        )}
                      </button>
                      {openSection === `${section.id}-${index}` && (
                        <p className="mt-2 text-gray-600">{item.a}</p>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Contact Support Section */}
          <div className="mt-12 bg-gradient-to-r from-blue-100 to-purple-100 rounded-lg p-8 text-center">
            <MessageSquare className="w-12 h-12 text-blue-600 mx-auto mb-4" />
            <h2 className="text-2xl font-semibold mb-4">
              Still have questions?
            </h2>
            <p className="text-gray-600 mb-6">
              Our support team is here to help you
            </p>
            <button className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors">
              Contact Support
            </button>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
