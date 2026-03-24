import React, { useState } from "react";
import "../Css/Sidebar.css";
import { Link } from "react-router-dom";
import { FaHome } from "react-icons/fa";
import { GiHamburgerMenu } from "react-icons/gi";
import { useWatchlist } from "../Components/WatchListContext";
import { FaBookmark } from "react-icons/fa";

const WatcchList = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { watchlist, removeFromWatchlist } = useWatchlist();

  return (
    <div className="flex bg-[#000B1F]">
      <aside className="sidebar">
        <p className="sidebar-title text-3xl hover:text-red-400 mt-5">
          <Link to="/">
            <FaHome />
          </Link>
        </p>
        <ul className="sidebar-links mt-10 text-2xl  flex content-center items-center flex-col gap-2">
          <li className="rounded-md border-red-400 px-2 py-1 hover:border">
            <Link to="/bollywood">Bollywood</Link>
          </li>
          <li className="rounded-md border-red-400 px-2 py-1 hover:border">
            <Link to="/hollywood">Hollywood</Link>
          </li>
          <li className="rounded-md border-red-400 px-2 py-1 hover:border">
            <Link to="/web-series">Web Series</Link>
          </li>
        </ul>
      </aside>

      <div className="middle">
        <div
          className="absolute right-5 top-5"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <GiHamburgerMenu className="text-xl sm:text-3xl cursor-pointer sm:mr-10 mt-2 z-10 sm:hidden text-white" />
        </div>
        {isMenuOpen && (
          <div className="absolute top-16 left-0 w-full bg-white shadow-lg p-4 flex flex-col z-20">
            <Link to="/" className="py-2 w-full text-center hover:bg-gray-100">
              Home
            </Link>
            <Link
              to="/bollywood"
              className="py-2 w-full text-center hover:bg-gray-100"
            >
              Bollywood
            </Link>
            <Link
              to="/hollywood"
              className="py-2 w-full text-center hover:bg-gray-100"
            >
              Hollywood
            </Link>
            <Link
              to="/web-series"
              className="py-2 w-full text-center hover:bg-gray-100"
            >
              Web Series
            </Link>
          </div>
        )}

               {/* Watchlist Grid - Fixed Alignment */}
               <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 sm:p-4">
          {watchlist.length === 0 ? (
            <p className="text-white sm:text-4xl text-xl w-96">
              Your watchlist is empty
            </p>
          ) : (
            watchlist.map((movie) => (
              <div className="episode-card relative h-96 text-center rounded-2xl bg-slate-400 shadow-md overflow-hidden">
                <div className="card relative group h-full">
                  {/* Movie Thumbnail */}
                  <img
                    src={movie.thumbnail}
                    alt={movie.title}
                    className="w-full h-96 object-fill rounded-2xl transition-transform duration-500 group-hover:scale-110"
                  />

                  {/* Bookmark Toggle */}
                  <div>
                    <FaBookmark
                      className="absolute top-4 right-4 w-6 h-6 z-10 text-white cursor-pointer hover:text-blue-500 transition"
                      onClick={() => removeFromWatchlist(movie.title)}
                    />
                  </div>

                  {/* Overlay */}
                  <div className="overlay absolute inset-0 flex items-end bg-linear-to-t from-black via-transparent to-transparent rounded-2xl p-6 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    <div className="text-content text-white w-full text-center">
                      <h3 className="text-lg font-bold mb-2 text-center">
                        {movie.title}
                      </h3>
                      <p className="text-sm font-semibold mb-4">
                        {movie.description}
                      </p>
                      <button
                        className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition"
                        onClick={() => window.open(movie.videoUrl, "_blank")}
                      >
                        Click to Watch
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
};

export default WatcchList;
