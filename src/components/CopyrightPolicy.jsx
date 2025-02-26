import React from "react";
import BeforeNavbar from "../home/Before-Navbar";
import SearchNavbar from "../home/Search-Navbar";
import Navbar from "../home/Navbar";
import Footer from "../home/Footer";
import {
  Copyright,
  BookOpen,
  AlertTriangle,
  FileText,
  Shield,
  Scale,
  MessageSquare,
  ExternalLink,
} from "lucide-react";

export default function CopyrightPolicy() {
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

      <div className="pt-32 pb-16">
        <div className="container mx-auto px-4 max-w-4xl">
          {/* Header Section with Background Image */}
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg p-8 mb-8 text-white relative overflow-hidden">
            <div className="absolute inset-0 opacity-20">
              <img
                src="/images/copyright-bg.jpg"
                alt="Copyright Background"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="relative z-10">
              <h1 className="text-3xl font-bold mb-2">Copyright Policy</h1>
              <p className="text-lg">Protecting Intellectual Property Rights</p>
            </div>
          </div>

          {/* Introduction Section */}
          <section className="bg-white rounded-lg shadow-lg p-8 mb-8 hover:shadow-xl transition-shadow">
            <div className="flex items-center gap-3 mb-6">
              <Copyright className="w-8 h-8 text-blue-600" />
              <h2 className="text-2xl font-semibold">Copyright Protection</h2>
            </div>
            <div className="md:flex gap-8 items-center">
              <div className="md:w-2/3 text-gray-700 space-y-4">
                <p>
                  All content on Apna Book Store is protected by copyright laws
                  and intellectual property rights.
                </p>
                <p>This includes but is not limited to:</p>
                <ul className="list-disc ml-6 space-y-2">
                  <li>Book covers and descriptions</li>
                  <li>Website content and design</li>
                  <li>Original blog posts and reviews</li>
                </ul>
              </div>
              <div className="md:w-1/3 mt-4 md:mt-0">
                <img
                  src="/images/copyright-shield.png"
                  alt="Copyright Protection"
                  className="rounded-lg shadow-md"
                />
              </div>
            </div>
          </section>

          {/* Usage Rights Grid */}
          <div className="grid md:grid-cols-2 gap-8 mb-8">
            <section className="bg-white rounded-lg shadow-lg p-8 hover:shadow-xl transition-shadow">
              <div className="flex items-center gap-3 mb-6">
                <BookOpen className="w-8 h-8 text-green-600" />
                <h2 className="text-2xl font-semibold">Permitted Use</h2>
              </div>
              <div className="space-y-4 text-gray-700">
                <img
                  src="/images/permitted-use.jpg"
                  alt="Permitted Use"
                  className="w-full h-40 object-cover rounded-lg mb-4"
                />
                <ul className="list-disc ml-6 space-y-2">
                  <li>Personal, non-commercial use</li>
                  <li>Legal book purchases</li>
                  <li>Sharing book reviews</li>
                </ul>
              </div>
            </section>

            <section className="bg-white rounded-lg shadow-lg p-8 hover:shadow-xl transition-shadow">
              <div className="flex items-center gap-3 mb-6">
                <AlertTriangle className="w-8 h-8 text-red-600" />
                <h2 className="text-2xl font-semibold">Prohibited Use</h2>
              </div>
              <div className="space-y-4 text-gray-700">
                <img
                  src="/images/prohibited-use.jpg"
                  alt="Prohibited Use"
                  className="w-full h-40 object-cover rounded-lg mb-4"
                />
                <ul className="list-disc ml-6 space-y-2">
                  <li>Unauthorized reproduction</li>
                  <li>Commercial distribution</li>
                  <li>Content modification</li>
                </ul>
              </div>
            </section>
          </div>

          {/* DMCA Section */}
          <section className="bg-white rounded-lg shadow-lg p-8 mb-8 hover:shadow-xl transition-shadow">
            <div className="flex items-center gap-3 mb-6">
              <Scale className="w-8 h-8 text-purple-600" />
              <h2 className="text-2xl font-semibold">DMCA Compliance</h2>
            </div>
            <div className="md:flex gap-8 items-center">
              <div className="md:w-2/3 text-gray-700 space-y-4">
                <p>
                  We respect intellectual property rights and comply with the
                  Digital Millennium Copyright Act (DMCA).
                </p>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h3 className="font-semibold mb-2">
                    Report Copyright Violation
                  </h3>
                  <p>Send DMCA notices to: dmca@apnabookstore.com</p>
                </div>
              </div>
              <div className="md:w-1/3 mt-4 md:mt-0">
                <img
                  src="/images/dmca-badge.png"
                  alt="DMCA Badge"
                  className="rounded-lg shadow-md"
                />
              </div>
            </div>
          </section>

          {/* Contact Section */}
          <section className="bg-gradient-to-r from-blue-100 to-purple-100 rounded-lg p-8">
            <div className="flex items-center gap-3 mb-6">
              <MessageSquare className="w-8 h-8 text-blue-600" />
              <h2 className="text-2xl font-semibold">Copyright Inquiries</h2>
            </div>
            <div className="text-gray-700">
              <p className="mb-4">
                For copyright-related questions or concerns, contact our legal
                team:
              </p>
              <a
                href="mailto:copyright@apnabookstore.com"
                className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-800"
              >
                copyright@apnabookstore.com
                <ExternalLink className="w-4 h-4" />
              </a>
            </div>
          </section>
        </div>
      </div>

      <Footer />
    </div>
  );
}
