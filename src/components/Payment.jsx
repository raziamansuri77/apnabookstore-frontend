// import React, { useState } from "react";
// import BeforeNavbar from "../home/Before-Navbar";
// import SearchNavbar from "../home/Search-Navbar";
// import Navbar from "../home/Navbar";
// import Footer from "../home/Footer";
// import {
//   CreditCard,
//   Wallet,
//   Shield,
//   CheckCircle,
//   Clock,
//   Gift,
//   Bank,
//   Smartphone,
// } from "lucide-react";

// export default function Payment() {
//   const [selectedMethod, setSelectedMethod] = useState("card");

//   return (
//     <div>
//       {/* Navigation Section */}
//       <div className="fixed top-0 left-0 right-0 z-50 bg-white w-full">
//         <BeforeNavbar />
//         <div className="mt-[35px]">
//           <SearchNavbar />
//         </div>
//         <Navbar />
//       </div>

//       <div className="pt-32 pb-16">
//         <div className="container mx-auto px-4 max-w-6xl">
//           {/* Header Section with Payment Security Banner */}
//           <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg p-8 mb-8 text-white relative overflow-hidden">
//             <div className="absolute inset-0 opacity-20">
//               <img
//                 src="/images/payment-security.jpg"
//                 alt="Secure Payment"
//                 className="w-full h-full object-cover"
//               />
//             </div>
//             <div className="relative z-10">
//               <h1 className="text-3xl font-bold mb-2">Secure Payment</h1>
//               <p className="text-lg">Choose your preferred payment method</p>
//               <div className="flex items-center gap-2 mt-4">
//                 <Shield className="w-6 h-6" />
//                 <span>256-bit SSL Encrypted Payment</span>
//               </div>
//             </div>
//           </div>

//           <div className="grid md:grid-cols-3 gap-8">
//             {/* Payment Methods Section */}
//             <div className="md:col-span-2 space-y-6">
//               {/* Credit/Debit Card Section */}
//               <section className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow">
//                 <div className="flex items-center gap-3 mb-6">
//                   <CreditCard className="w-8 h-8 text-blue-600" />
//                   <h2 className="text-2xl font-semibold">Card Payment</h2>
//                 </div>
//                 <div className="space-y-4">
//                   <div className="grid grid-cols-2 gap-4">
//                     <img
//                       src="/images/visa.png"
//                       alt="Visa"
//                       className="h-8 object-contain"
//                     />
//                     <img
//                       src="/images/mastercard.png"
//                       alt="Mastercard"
//                       className="h-8 object-contain"
//                     />
//                   </div>
//                   <form className="space-y-4">
//                     <div>
//                       <label className="block text-gray-700 mb-2">
//                         Card Number
//                       </label>
//                       <input
//                         type="text"
//                         className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500"
//                         placeholder="1234 5678 9012 3456"
//                       />
//                     </div>
//                     <div className="grid grid-cols-2 gap-4">
//                       <div>
//                         <label className="block text-gray-700 mb-2">
//                           Expiry Date
//                         </label>
//                         <input
//                           type="text"
//                           className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500"
//                           placeholder="MM/YY"
//                         />
//                       </div>
//                       <div>
//                         <label className="block text-gray-700 mb-2">CVV</label>
//                         <input
//                           type="text"
//                           className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500"
//                           placeholder="123"
//                         />
//                       </div>
//                     </div>
//                   </form>
//                 </div>
//               </section>

//               {/* Other Payment Methods */}
//               <section className="bg-white rounded-lg shadow-lg p-6">
//                 <h2 className="text-xl font-semibold mb-4">
//                   Other Payment Options
//                 </h2>
//                 <div className="grid md:grid-cols-2 gap-4">
//                   <div className="border rounded-lg p-4 cursor-pointer hover:bg-gray-50">
//                     <div className="flex items-center gap-3">
//                       <Bank className="w-6 h-6 text-green-600" />
//                       <span>Net Banking</span>
//                     </div>
//                   </div>
//                   <div className="border rounded-lg p-4 cursor-pointer hover:bg-gray-50">
//                     <div className="flex items-center gap-3">
//                       <Wallet className="w-6 h-6 text-purple-600" />
//                       <span>UPI Payment</span>
//                     </div>
//                   </div>
//                   <div className="border rounded-lg p-4 cursor-pointer hover:bg-gray-50">
//                     <div className="flex items-center gap-3">
//                       <Smartphone className="w-6 h-6 text-blue-600" />
//                       <span>Mobile Wallets</span>
//                     </div>
//                   </div>
//                   <div className="border rounded-lg p-4 cursor-pointer hover:bg-gray-50">
//                     <div className="flex items-center gap-3">
//                       <Gift className="w-6 h-6 text-red-600" />
//                       <span>Gift Card</span>
//                     </div>
//                   </div>
//                 </div>
//               </section>
//             </div>

//             {/* Order Summary Section */}
//             <div className="space-y-6">
//               <section className="bg-white rounded-lg shadow-lg p-6">
//                 <h2 className="text-xl font-semibold mb-4">Order Summary</h2>
//                 <div className="space-y-4">
//                   <div className="flex justify-between text-gray-600">
//                     <span>Subtotal</span>
//                     <span>₹1,299</span>
//                   </div>
//                   <div className="flex justify-between text-gray-600">
//                     <span>Shipping</span>
//                     <span>₹49</span>
//                   </div>
//                   <div className="flex justify-between text-gray-600">
//                     <span>Tax</span>
//                     <span>₹78</span>
//                   </div>
//                   <hr />
//                   <div className="flex justify-between font-semibold text-lg">
//                     <span>Total</span>
//                     <span>₹1,426</span>
//                   </div>
//                 </div>
//               </section>

//               <button className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-4 rounded-lg font-semibold hover:opacity-90 transition-opacity flex items-center justify-center gap-2">
//                 <CheckCircle className="w-5 h-5" />
//                 Pay Now
//               </button>

//               {/* Security Features */}
//               <div className="bg-gray-50 rounded-lg p-4">
//                 <div className="flex items-center gap-2 text-gray-600 text-sm mb-2">
//                   <Shield className="w-4 h-4" />
//                   <span>Secure Payment</span>
//                 </div>
//                 <div className="flex items-center gap-2 text-gray-600 text-sm">
//                   <Clock className="w-4 h-4" />
//                   <span>24/7 Support</span>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>

//       <Footer />
//     </div>
//   );
// }
