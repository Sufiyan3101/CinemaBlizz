import React, { useEffect, useState } from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { useNavigate, Link } from "react-router-dom";
import "../Css/UserProfile.css";
import { loadStripe } from "@stripe/stripe-js";

// ✅ Outside component — loads once
const stripePromise = loadStripe(import.meta.env.VITE_STRIPE_PUBLISHABLE_KEY);

const UserProfile = () => {
  const { user, isLoading } = useAuth0();
  const navigate = useNavigate();
  const adminEmails = ["khansufiyan4512@gmail.com"];

  const [paymentSuccess, setPaymentSuccess] = useState(false);

  useEffect(() => {
    const status = localStorage.getItem("paymentSuccess");
    if (status === "true") {
      setPaymentSuccess(true);
    }
  }, []);

  const handleClick = async () => {
    try {
      const res = await fetch("https://cinemablizzbackend.onrender.com/api/create-checkout-session", {
        method: "POST",
      });
      const data = await res.json();
      window.location.href = data.url;
    } catch (err) {
      console.error("Checkout failed:", err);
    }
  };

  const handleAdminRedirect = () => {
    navigate("/admin");
  };

  // ✅ Wait for auth to load before rendering
  if (isLoading || !user) {
    return (
      <div className="flex justify-center items-center h-[80vh]">
        <p className="text-white text-lg">Loading...</p>
      </div>
    );
  }

  return (
    <div className="profile-container">
      <div className="profile-header">
        <img src={user.picture} alt={user.name} className="profile-img" />
        <h2 className="profile-title">Profile</h2>
      </div>

      <div className="profile-details">
        <p><strong>Name: </strong> {user.name}</p>
        <p><strong>Email: </strong> {user.email}</p>
      </div>

      {adminEmails.includes(user.email) && (
        <button className="admin-button transition duration-1000" onClick={handleAdminRedirect}>
          Go to Admin Dashboard
        </button>
      )}

      {!paymentSuccess ? (
        <button
          onClick={handleClick}
          className="border flex justify-center items-center mt-5 rounded-md w-52 h-10 px-3 py-2 font-bold transition duration-1000 hover:text-black hover:cursor-pointer hover:bg-white"
        >
          Go For Subscription
        </button>
      ) : (
        <Link
          to="/cartoons"
          className="bg-green-600 text-white font-semibold rounded-md mt-5 w-52 h-10 flex items-center justify-center hover:bg-green-700 transition"
        >
          Access Subscription
        </Link>
      )}
    </div>
  );
};

export default UserProfile;