import React,{useEffect} from 'react';
import { Link } from 'react-router-dom';
import { CheckCircle } from 'lucide-react'; 

const SuccessPage = () => {

  useEffect(() => {
    localStorage.setItem("paymentSuccess", "true");
  }, []);

  return (
    <div className="h-[80vh] bg-[#000B1F] flex flex-col justify-center items-center px-4">
      <div className="bg-white p-8 rounded-xl shadow-lg w-full max-w-md text-center">
        <CheckCircle className="text-green-500 w-16 h-16 mx-auto mb-4 animate-bounce" />
        <h1 className="text-2xl font-bold text-green-600 mb-2">Payment Successful</h1>
        <p className="text-gray-600 mb-6">Thank you to take subscription. Your payment was processed successfully.</p>
        
        <div className="bg-gray-50 p-4 rounded-lg shadow-inner text-left mb-6">
          <h2 className="text-lg font-semibold mb-2">Order Summary</h2>
          <div className="flex justify-between text-sm mb-1">
            <span>Category</span>
            <span>Subscription</span>
          </div>
          <div className="flex justify-between text-sm mb-1">
            <span>Allowance</span>
            <span>Premium Content</span>
          </div>
          <div className="flex justify-between text-sm font-semibold">
            <span>Total</span>
            <span>₹2000.00</span>
          </div>
        </div>

        <Link
          to="/"
          className="inline-block w-full py-2 px-4 bg-green-600 text-white rounded hover:bg-green-700 transition"
        >
          Go to Home
        </Link>
      </div>
    </div>
  );
};

export default SuccessPage;
