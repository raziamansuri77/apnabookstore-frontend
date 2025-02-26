import React from "react";
import BeforeNavbar from "../home/Before-Navbar";
import SearchNavbar from "../home/Search-Navbar";
import Navbar from "../home/Navbar";
import Footer from "../home/Footer";
import {
  FileText,
  CheckCircle,
  AlertCircle,
  ShoppingCart,
  CreditCard,
  UserCheck,
  Book,
  HelpCircle,
} from "lucide-react";

export default function TermsOfUse() {
  return (
    <div>
      {/* Navigation Bar */}
      <div className="fixed top-0 left-0 right-0 z-50 bg-white w-full">
        <BeforeNavbar />
        <div className="mt-[35px]">
          <SearchNavbar />
        </div>
        <Navbar />
      </div>

      <div className="mt-[300px]   pb-16">
        <div className="container mx-auto px-4 max-w-4xl">
          {/* Header Section */}
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg p-8 mb-8 text-white">
            <h1 className="text-3xl font-bold mb-2">Terms of Use</h1>
            <p className="text-lg">
              Effective Date: {new Date().toLocaleDateString()}
            </p>
            <p className="mt-4">
              Welcome to Apna Book Store. By accessing our services, you agree
              to these terms.
            </p>
          </div>

          <div className="space-y-8">
            {/* Account Terms Section */}
            <section className="bg-white rounded-lg shadow-lg p-8 hover:shadow-xl transition-shadow">
              <div className="flex items-center gap-3 mb-6">
                <UserCheck className="w-8 h-8 text-blue-600" />
                <h2 className="text-2xl font-semibold">Account Terms</h2>
              </div>
              <div className="text-gray-700 space-y-4">
                <p>Your account responsibilities:</p>
                <ul className="list-disc ml-6 space-y-2">
                  <li>Maintain accurate account information</li>
                  <li>Keep your password secure</li>
                  <li>Notify us of any unauthorized access</li>
                  <li>One account per user</li>
                </ul>
              </div>
            </section>

            {/* Purchase and Payment Terms */}
            <section className="bg-white rounded-lg shadow-lg p-8 hover:shadow-xl transition-shadow">
              <div className="flex items-center gap-3 mb-6">
                <ShoppingCart className="w-8 h-8 text-green-600" />
                <h2 className="text-2xl font-semibold">Purchase & Payment</h2>
              </div>
              <div className="grid md:grid-cols-2 gap-6 text-gray-700">
                <div className="space-y-3">
                  <h3 className="font-semibold text-lg">Order Policies</h3>
                  <ul className="list-disc ml-6 space-y-2">
                    <li>Order confirmation process</li>
                    <li>Pricing and availability</li>
                    <li>Shipping policies</li>
                  </ul>
                </div>
                <div className="space-y-3">
                  <h3 className="font-semibold text-lg">Payment Terms</h3>
                  <ul className="list-disc ml-6 space-y-2">
                    <li>Accepted payment methods</li>
                    <li>Secure transaction guarantee</li>
                    <li>Refund policies</li>
                  </ul>
                </div>
              </div>
            </section>

            {/* Product Usage Rights */}
            <section className="bg-white rounded-lg shadow-lg p-8 hover:shadow-xl transition-shadow">
              <div className="flex items-center gap-3 mb-6">
                <Book className="w-8 h-8 text-purple-600" />
                <h2 className="text-2xl font-semibold">Product Usage Rights</h2>
              </div>
              <div className="text-gray-700 space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg mb-4">
                  <h3 className="font-semibold mb-2">Digital Content</h3>
                  <p>
                    Usage rights and restrictions for e-books and digital
                    content
                  </p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h3 className="font-semibold mb-2">Physical Books</h3>
                  <p>Ownership and resale rights for physical purchases</p>
                </div>
              </div>
            </section>

            {/* Prohibited Activities */}
            <section className="bg-white rounded-lg shadow-lg p-8 hover:shadow-xl transition-shadow">
              <div className="flex items-center gap-3 mb-6">
                <AlertCircle className="w-8 h-8 text-red-600" />
                <h2 className="text-2xl font-semibold">
                  Prohibited Activities
                </h2>
              </div>
              <div className="text-gray-700 space-y-4">
                <p>The following activities are strictly prohibited:</p>
                <ul className="list-disc ml-6 space-y-2">
                  <li>Unauthorized content reproduction</li>
                  <li>Account sharing or transfer</li>
                  <li>Fraudulent transactions</li>
                  <li>Misuse of our services</li>
                </ul>
              </div>
            </section>

            {/* Contact Support Section */}
            <section className="bg-gradient-to-r from-blue-100 to-purple-100 rounded-lg p-8">
              <div className="flex items-center gap-3 mb-6">
                <HelpCircle className="w-8 h-8 text-blue-600" />
                <h2 className="text-2xl font-semibold">Need Help?</h2>
              </div>
              <p className="text-gray-700 mb-4">
                For questions about our terms of service, contact our support
                team:
              </p>
              <a
                href="mailto:support@apnabookstore.com"
                className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-800"
              >
                support@apnabookstore.com
                <CheckCircle className="w-4 h-4" />
              </a>
            </section>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
