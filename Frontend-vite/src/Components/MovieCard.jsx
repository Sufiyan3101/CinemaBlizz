import React from "react";
import { IoBookmarkOutline } from "react-icons/io5";
import { FaBookmark } from "react-icons/fa6";
import { useWatchlist } from "./WatchListContext";

const MovieCard = ({ movie }) => {
  const { addToWatchlist, isInWatchlist } = useWatchlist();

  const watchlist = isInWatchlist(movie.title);

  // ✅ Detect touch devices (mobile/tablet)
  const isTouchDevice =
    typeof window !== "undefined" &&
    ("ontouchstart" in window || navigator.maxTouchPoints > 0);

  // ✅ Handle full card click (mobile only)
  const handleCardClick = () => {
    if (isTouchDevice) {
      window.open(movie.videoUrl, "_blank");
    }
  };

  // ✅ Watchlist click
  const handleWatchlistClick = (e) => {
    e.stopPropagation(); // prevent triggering card click
    if (!watchlist) {
      addToWatchlist(movie);
    }
  };

  return (
    <div
      className="movie-card relative w-96 h-96 mx-auto text-center rounded-2xl bg-slate-400 shadow-md cursor-pointer"
      onClick={handleCardClick}
    >
      <div className="card relative group h-full">
        {/* Movie Thumbnail */}
        <img
          src={movie.thumbnail}
          alt={movie.title}
          className="w-full h-96 object-fill rounded-2xl transition-transform duration-500 group-hover:scale-110"
        />

        {/* Watchlist Icon */}
        <div className="absolute top-4 right-4 z-50">
          {watchlist ? (
            <FaBookmark
              className="w-6 h-6 text-white cursor-pointer hover:text-blue-500 transition"
              onClick={handleWatchlistClick}
            />
          ) : (
            <IoBookmarkOutline
              className="w-6 h-6 text-white cursor-pointer hover:text-blue-500 transition"
              onClick={handleWatchlistClick}
            />
          )}
        </div>

        {/* Overlay */}
        <div
          className={`overlay absolute inset-0 flex items-end bg-linear-to-t from-black via-transparent to-transparent rounded-2xl p-6 transition-opacity duration-500 ${
            isTouchDevice ? "opacity-100" : "opacity-0 group-hover:opacity-100"
          }`}
        >
          <div className="text-content text-white w-full text-center">
            <h3 className="text-lg font-bold mb-2">{movie.title}</h3>
            <p className="text-sm font-semibold mb-4">
              {movie.description}
            </p>

            <button
              className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition"
              onClick={(e) => {
                e.stopPropagation(); 
                window.open(movie.videoUrl, "_blank");
              }}
            >
              Click to Watch
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MovieCard;