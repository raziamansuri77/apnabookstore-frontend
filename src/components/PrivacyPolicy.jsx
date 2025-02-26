import React from "react";
import BeforeNavbar from "../home/Before-Navbar";
import SearchNavbar from "../home/Search-Navbar";
import Navbar from "../home/Navbar";
import Footer from "../home/Footer";
import {
  Shield,
  Lock,
  Eye,
  UserCheck,
  Cookie,
  Bell,
  Share2,
  MessageSquare,
} from "lucide-react";

export default function PrivacyPolicy() {
  return (
    <div>
      {/* Navigation Section */}
      <div className="fixed top-0 left-0 right-0 z-50 bg-white w-full">
        <BeforeNavbar />
        <div className="mt-[35px]">
          <SearchNavbar />
        </div>
        <Navbar />
      </div>

      <div className="md:mt-[250px] mt-[300px] pb-16">
        <div className="container mx-auto px-4 max-w-4xl">
          {/* Header Section */}
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg p-8 mb-8 text-white">
            <h1 className="text-3xl font-bold mb-2">Privacy Policy</h1>
            <p className="text-lg">
              Last Updated: {new Date().toLocaleDateString()}
            </p>
            <p className="mt-4">
              At Apna Book Store, we value your privacy and are committed to
              protecting your personal information.
            </p>
          </div>

          <div className="space-y-8">
            {/* Information Collection Section */}
            <section className="bg-white rounded-lg shadow-lg p-8 hover:shadow-xl transition-shadow">
              <div className="flex items-center gap-3 mb-6">
                <Shield className="w-8 h-8 text-blue-600" />
                <h2 className="text-2xl font-semibold">
                  Information We Collect
                </h2>
              </div>
              <div className="space-y-4 text-gray-700">
                <p className="leading-relaxed">
                  We collect the following types of information:
                </p>
                <ul className="list-disc ml-6 space-y-2">
                  <li>Name, email address, and contact details</li>
                  <li>Shipping and billing addresses</li>
                  <li>Payment information (processed securely)</li>
                  <li>Reading preferences and purchase history</li>
                  <li>Device information and browsing patterns</li>
                </ul>
              </div>
            </section>

            {/* Data Usage Section */}
            <section className="bg-white rounded-lg shadow-lg p-8 hover:shadow-xl transition-shadow">
              <div className="flex items-center gap-3 mb-6">
                <Eye className="w-8 h-8 text-purple-600" />
                <h2 className="text-2xl font-semibold">How We Use Your Data</h2>
              </div>
              <div className="grid md:grid-cols-2 gap-6 text-gray-700">
                <div className="space-y-3">
                  <h3 className="font-semibold text-lg">Primary Uses</h3>
                  <ul className="list-disc ml-6 space-y-2">
                    <li>Processing your orders</li>
                    <li>Account management</li>
                    <li>Customer support</li>
                  </ul>
                </div>
                <div className="space-y-3">
                  <h3 className="font-semibold text-lg">Additional Uses</h3>
                  <ul className="list-disc ml-6 space-y-2">
                    <li>Personalized recommendations</li>
                    <li>Service improvements</li>
                    <li>Marketing communications</li>
                  </ul>
                </div>
              </div>
            </section>

            {/* Cookie Policy Section */}
            <section className="bg-white rounded-lg shadow-lg p-8 hover:shadow-xl transition-shadow">
              <div className="flex items-center gap-3 mb-6">
                <Cookie className="w-8 h-8 text-green-600" />
                <h2 className="text-2xl font-semibold">Cookie Policy</h2>
              </div>
              <div className="text-gray-700 space-y-4">
                <p>We use cookies to enhance your browsing experience:</p>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <h3 className="font-semibold mb-2">Essential Cookies</h3>
                    <p>Required for basic site functionality</p>
                  </div>
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <h3 className="font-semibold mb-2">Analytics Cookies</h3>
                    <p>Help us improve our services</p>
                  </div>
                </div>
              </div>
            </section>

            {/* Data Protection Section */}
            <section className="bg-white rounded-lg shadow-lg p-8 hover:shadow-xl transition-shadow">
              <div className="flex items-center gap-3 mb-6">
                <Lock className="w-8 h-8 text-red-600" />
                <h2 className="text-2xl font-semibold">Data Protection</h2>
              </div>
              <div className="text-gray-700 space-y-4">
                <p>We implement various security measures:</p>
                <ul className="list-disc ml-6 space-y-2">
                  <li>SSL encryption for data transmission</li>
                  <li>Secure payment processing</li>
                  <li>Regular security audits</li>
                  <li>Limited staff access to personal data</li>
                </ul>
              </div>
            </section>

            {/* Contact Section */}
            <section className="bg-gradient-to-r from-blue-100 to-purple-100 rounded-lg p-8">
              <div className="flex items-center gap-3 mb-6">
                <MessageSquare className="w-8 h-8 text-blue-600" />
                <h2 className="text-2xl font-semibold">Privacy Concerns?</h2>
              </div>
              <p className="text-gray-700 mb-4">
                If you have any questions about our privacy policy, please
                contact our privacy team:
              </p>
              <a
                href="mailto:privacy@apnabookstore.com"
                className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-800"
              >
                privacy@apnabookstore.com
                <Share2 className="w-4 h-4" />
              </a>
            </section>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
