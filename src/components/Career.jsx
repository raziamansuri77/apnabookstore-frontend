import React from "react";
import BeforeNavbar from "../home/Before-Navbar";
import SearchNavbar from "../home/Search-Navbar";
import Navbar from "../home/Navbar";
import Footer from "../home/Footer";
import {
  BookOpen,
  Users,
  Trophy,
  Heart,
  Brain,
  Rocket,
  Target,
  Coffee,
} from "lucide-react";

export default function Career() {
  return (
    <div>
      <div className="fixed top-0 left-0 right-0 z-50 bg-white w-full">
        <BeforeNavbar />
        <div className="mt-[35px]">
          <SearchNavbar />
        </div>
        <Navbar />
      </div>

      <div className="mt-[200px] md:mt-[150px] md:max-w-7xl mx-auto">
        {/* Hero Section */}
        <div className="pt-32 pb-16">
          <div className="container mx-auto px-4">
            <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl text-white p-12 text-center">
              <h1 className="text-4xl font-bold mb-4">
                Join Our Team at Apna Book Store
              </h1>
              <p className="text-xl">
                Build Your Career Where Stories Come to Life
              </p>
            </div>
          </div>
        </div>

        {/* About Our Company */}
        <div className="container mx-auto px-4 py-12">
          <div className="flex items-center gap-6 mb-8">
            <BookOpen className="w-8 h-8 text-blue-600" />
            <h2 className="text-3xl font-bold text-gray-800">Who We Are</h2>
          </div>
          <p className="text-gray-600 text-lg leading-relaxed">
            Apna Book Store is India's leading online bookstore, dedicated to
            making reading accessible to everyone. We're a team of passionate
            book lovers working to create the best book-buying experience for
            our customers.
          </p>
        </div>

        {/* Growth Opportunities */}
        <div className="bg-gray-50 py-16">
          <div className="container mx-auto px-4">
            <div className="flex items-center gap-6 mb-12">
              <Rocket className="w-8 h-8 text-purple-600" />
              <h2 className="text-3xl font-bold text-gray-800">
                Growth Opportunities
              </h2>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-white p-6 rounded-lg shadow-lg">
                <Brain className="w-6 h-6 text-blue-600 mb-4" />
                <h3 className="text-xl font-semibold mb-3">
                  Learning & Development
                </h3>
                <p className="text-gray-600">
                  Regular training sessions, workshops, and skill development
                  programs
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-lg">
                <Target className="w-6 h-6 text-green-600 mb-4" />
                <h3 className="text-xl font-semibold mb-3">
                  Career Advancement
                </h3>
                <p className="text-gray-600">
                  Clear growth paths and promotion opportunities
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-lg">
                <Trophy className="w-6 h-6 text-yellow-600 mb-4" />
                <h3 className="text-xl font-semibold mb-3">
                  Recognition Programs
                </h3>
                <p className="text-gray-600">
                  Rewards and recognition for outstanding performance
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Workplace Culture */}
        <div className="container mx-auto px-4 py-16">
          <div className="flex items-center gap-6 mb-12">
            <Heart className="w-8 h-8 text-red-600" />
            <h2 className="text-3xl font-bold text-gray-800">Our Culture</h2>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <Users className="w-6 h-6 text-blue-600" />
                <div>
                  <h3 className="text-xl font-semibold mb-2">
                    Collaborative Environment
                  </h3>
                  <p className="text-gray-600">
                    Work with diverse teams who share your passion for books
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <Coffee className="w-6 h-6 text-brown-600" />
                <div>
                  <h3 className="text-xl font-semibold mb-2">
                    Work-Life Balance
                  </h3>
                  <p className="text-gray-600">
                    Flexible working hours and hybrid work model
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-purple-100 to-blue-100 rounded-xl p-8">
              <h3 className="text-2xl font-bold mb-4">Benefits & Perks</h3>
              <ul className="space-y-3 text-gray-700">
                <li>✓ Health Insurance Coverage</li>
                <li>✓ Book Purchase Allowance</li>
                <li>✓ Professional Development Fund</li>
                <li>✓ Regular Team Events</li>
                <li>✓ Mental Health Support</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
