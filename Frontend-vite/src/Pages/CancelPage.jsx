import React from 'react';
import { Link } from 'react-router-dom';
import { XCircle } from 'lucide-react'; // You can use any icon library

const CancelPage = () => {
  return (
    <div className="min-h-screen bg-[#000B1F] flex flex-col justify-center items-center px-4">
      <div className="bg-white p-8 rounded-xl shadow-lg w-full max-w-md text-center">
        <XCircle className="text-red-500 w-16 h-16 mx-auto mb-4 animate-pulse" />
        <h1 className="text-2xl font-bold text-red-600 mb-2">Payment Cancelled</h1>
        <p className="text-gray-600 mb-6">Your payment was not completed. You can try again or go back to the homepage.</p>

        <div className="bg-gray-50 p-4 rounded-lg shadow-inner text-left mb-6">
          <h2 className="text-lg font-semibold mb-2">Order Status</h2>
          <div className="flex justify-between text-sm mb-1">
            <span>Status</span>
            <span className="text-red-500 font-medium">Cancelled</span>
          </div>
          <div className="flex justify-between text-sm mb-1">
            <span>Amount</span>
            <span>₹2000.00</span>
          </div>
        </div>

        <Link
          to="/"
          className="inline-block w-full py-2 px-4 bg-red-600 text-white rounded hover:bg-red-700 transition"
        >
          Go to Home
        </Link>
      </div>
    </div>
  );
};

export default CancelPage;
