import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function PaymentGateway() {
  const navigate = useNavigate();
  const [paymentMethod, setPaymentMethod] = useState("card");

  const handlePayment = (e) => {
    e.preventDefault();
    // Simulate payment processing
    setTimeout(() => {
      alert("Payment successful!");
      navigate("/order-confirmation");
    }, 2000);
  };

  return (
    <div className="max-w-md mx-auto mt-10 p-6 bg-white rounded-lg shadow-lg">
      <h2 className="text-2xl font-bold mb-6">Payment Gateway</h2>
      <form onSubmit={handlePayment}>
        {/* Payment method selection */}
        <div className="mb-4">
          <label className="block mb-2">Select Payment Method</label>
          <select
            value={paymentMethod}
            onChange={(e) => setPaymentMethod(e.target.value)}
            className="w-full p-2 border rounded"
          >
            <option value="card">Credit/Debit Card</option>
            <option value="upi">UPI</option>
            <option value="netbanking">Net Banking</option>
          </select>
        </div>

        {/* Card details form */}
        {paymentMethod === "card" && (
          <>
            <div className="mb-4">
              <input
                type="text"
                placeholder="Card Number"
                className="w-full p-2 border rounded"
                required
              />
            </div>
            <div className="grid grid-cols-2 gap-4 mb-4">
              <input
                type="text"
                placeholder="MM/YY"
                className="p-2 border rounded"
                required
              />
              <input
                type="text"
                placeholder="CVV"
                className="p-2 border rounded"
                required
              />
            </div>
          </>
        )}

        <button
          type="submit"
          className="w-full bg-green-500 text-white py-2 rounded hover:bg-green-600"
        >
          Pay Now
        </button>
      </form>
    </div>
  );
}
