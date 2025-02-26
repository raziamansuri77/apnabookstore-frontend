import React from "react";
import BeforeNavbar from "../home/Before-Navbar";
import SearchNavbar from "../home/Search-Navbar";
import Navbar from "../home/Navbar";
import Footer from "../home/Footer";
import {
  ShieldCheck,
  CreditCard,
  Lock,
  Key,
  Fingerprint,
  Server,
  RefreshCcw,
  CheckCircle,
} from "lucide-react";

export default function SecureShopping() {
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

      <div className="md:mt-[260px] mt-[300px] pb-16">
        <div className="container mx-auto px-4 max-w-4xl">
          {/* Header Section */}
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg p-8 mb-8 text-white">
            <h1 className="text-3xl font-bold mb-2">Secure Shopping</h1>
            <p className="text-lg">Your Security is Our Top Priority</p>
            <div className="flex items-center gap-2 mt-4">
              <ShieldCheck className="w-6 h-6" />
              <span>100% Secure Transaction Guarantee</span>
            </div>
          </div>

          {/* Payment Security Section */}
          <div className="grid md:grid-cols-2 gap-8 mb-8">
            <section className="bg-white rounded-lg shadow-lg p-8 hover:shadow-xl transition-shadow">
              <div className="flex items-center gap-3 mb-6">
                <CreditCard className="w-8 h-8 text-green-600" />
                <h2 className="text-2xl font-semibold">Payment Security</h2>
              </div>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-green-500" />
                  <span>SSL Encrypted Transactions</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-green-500" />
                  <span>PCI DSS Compliant</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-green-500" />
                  <span>Secure Payment Gateways</span>
                </li>
              </ul>
            </section>

            <section className="bg-white rounded-lg shadow-lg p-8 hover:shadow-xl transition-shadow">
              <div className="flex items-center gap-3 mb-6">
                <Key className="w-8 h-8 text-blue-600" />
                <h2 className="text-2xl font-semibold">Data Protection</h2>
              </div>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-blue-500" />
                  <span>End-to-End Encryption</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-blue-500" />
                  <span>Secure Data Storage</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-blue-500" />
                  <span>Regular Security Audits</span>
                </li>
              </ul>
            </section>
          </div>

          {/* Authentication Section */}
          <section className="bg-white rounded-lg shadow-lg p-8 mb-8 hover:shadow-xl transition-shadow">
            <div className="flex items-center gap-3 mb-6">
              <Fingerprint className="w-8 h-8 text-purple-600" />
              <h2 className="text-2xl font-semibold">Secure Authentication</h2>
            </div>
            <div className="grid md:grid-cols-3 gap-6 text-gray-700">
              <div className="bg-gray-50 p-4 rounded-lg">
                <h3 className="font-semibold mb-2">Two-Factor Auth</h3>
                <p>Additional layer of account security</p>
              </div>
              <div className="bg-gray-50 p-4 rounded-lg">
                <h3 className="font-semibold mb-2">OTP Verification</h3>
                <p>Secure transaction verification</p>
              </div>
              <div className="bg-gray-50 p-4 rounded-lg">
                <h3 className="font-semibold mb-2">Fraud Detection</h3>
                <p>Advanced security monitoring</p>
              </div>
            </div>
          </section>

          {/* Server Security Section */}
          <section className="bg-white rounded-lg shadow-lg p-8 mb-8 hover:shadow-xl transition-shadow">
            <div className="flex items-center gap-3 mb-6">
              <Server className="w-8 h-8 text-red-600" />
              <h2 className="text-2xl font-semibold">
                Infrastructure Security
              </h2>
            </div>
            <div className="text-gray-700 space-y-4">
              <p>Our secure infrastructure includes:</p>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h3 className="font-semibold mb-2">DDoS Protection</h3>
                  <p>24/7 monitoring and mitigation</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h3 className="font-semibold mb-2">Backup Systems</h3>
                  <p>Regular data backups and recovery</p>
                </div>
              </div>
            </div>
          </section>

          {/* Trust Badges Section */}
          <section className="bg-gradient-to-r from-blue-100 to-purple-100 rounded-lg p-8 text-center">
            <div className="flex items-center justify-center gap-3 mb-6">
              <RefreshCcw className="w-8 h-8 text-blue-600" />
              <h2 className="text-2xl font-semibold">Our Security Partners</h2>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {/* Add security certification badges here */}
              <div className="bg-white p-4 rounded-lg shadow">
                Norton Secured
              </div>
              <div className="bg-white p-4 rounded-lg shadow">
                McAfee Secure
              </div>
              <div className="bg-white p-4 rounded-lg shadow">
                SSL Certified
              </div>
              <div className="bg-white p-4 rounded-lg shadow">
                PCI Compliant
              </div>
            </div>
          </section>
        </div>
      </div>

      <Footer />
    </div>
  );
}
