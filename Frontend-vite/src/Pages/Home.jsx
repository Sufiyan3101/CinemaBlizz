import React, { useState } from "react";
import "../Css/MainPageBody.css";
import "../Css/MiddleContent.css";
import { Link, useNavigate } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";
import Home3D from "../Components/Home3D";
import "../Css/Home.css";

const Home = () => {
  const { isAuthenticated } = useAuth0();
  const [message, setMessage] = useState("");
  const navigate = useNavigate();

  const handleLinkClick = (e, path) => {
    if (!isAuthenticated) {
      e.preventDefault();
      setMessage("Please log in to access the content.");
      setTimeout(() => setMessage(""), 3000);
    } else {
      navigate(path);
    }
  };

  return (
    <div className="flex bg-[#000B1F] text-white flex-col xl:flex-row flex-1 items-center justify-center xl:justify-start py-6">

      {/* LEFT CONTENT */}
      <div className="middlecontent relative flex flex-col justify-center items-center xl:items-start w-full xl:w-2/5 h-full px-4">

        {/* Title */}
        <div className="text-center xl:text-left xl:ml-20">
          <p className="text-4xl xl:text-6xl font-bold">
            CinemaBlizz
          </p>

          <p className="mt-2 text-sm xl:text-lg">
            Your ultimate destination for movies and series!
          </p>
        </div>

        {/* Buttons */}
        <div className="mt-6 w-full max-w-md">
          <div className="grid grid-cols-1 xl:grid-cols-2 gap-4 xl:ml-20">

            <Link
              to="/bollywood"
              className="text-white border border-white rounded-3xl px-3 py-2 text-center hover:bg-slate-800"
              onClick={(e) => handleLinkClick(e, "/bollywood")}
            >
              Bollywood Movies
            </Link>

            <Link
              to="/web-series"
              className="text-white border border-white rounded-3xl px-3 py-2 text-center hover:bg-slate-800"
              onClick={(e) => handleLinkClick(e, "/web-series")}
            >
              Web Series
            </Link>

            <Link
              to="/hollywood"
              className="text-white border border-white rounded-3xl px-3 py-2 text-center hover:bg-slate-800"
              onClick={(e) => handleLinkClick(e, "/hollywood")}
            >
              Hollywood Movies
            </Link>

            <Link
              to="/watchlist"
              className="text-white border border-white rounded-3xl px-3 py-2 text-center hover:bg-slate-800"
              onClick={(e) => handleLinkClick(e, "/watchlist")}
            >
              Watchlist
            </Link>

          </div>
        </div>

        {/* Message */}
        {message && (
          <div className="absolute bottom-5 left-1/2 -translate-x-1/2 xl:left-auto xl:right-16 border rounded-lg p-2 w-72 text-center bg-red-500 text-black font-bold shadow-lg">
            {message}
          </div>
        )}
      </div>

      {/* 3D COMPONENT */}
      <div className="hidden xl:flex w-1/2 ml-10 justify-center">
        <Home3D />
      </div>

    </div>
  );
};

export default Home;