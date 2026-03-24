import React, { useState, useEffect } from "react";
import { FaBookmark } from "react-icons/fa";
import { IoBookmarkOutline } from "react-icons/io5";
import LoadingPage from "./LoadingPage";
import { useWatchlist } from "./WatchListContext";

const HollywoodMovieList = () => {
  const [hollywoodmovies, setHollywoodMovies] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const { addToWatchlist, isInWatchlist } = useWatchlist();

  useEffect(() => {
    fetch("http://localhost:8000/hollywood/movies")
      .then((response) => response.json())
      .then((data) => setHollywoodMovies(data))
      .catch((error) => console.error("Error fetching movies:", error));
  }, []);

  const filteredMovies = hollywoodmovies.filter((movie) =>
    movie.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="flex flex-col items-center px-4">
    {/* Search Input */}
    <input
      type="text"
      placeholder="Search by title..."
      className="w-full sm:w-3/4 md:w-2/4 h-11 bg-[#000B1F] border border-white rounded-2xl mt-5 mb-5 text-white px-5 text-md focus:outline-none"
      value={searchTerm}
      onChange={(e) => setSearchTerm(e.target.value)}
    />

    {/* Movies Grid */}
    <div className="movies-list w-full mt-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-4">
      {filteredMovies.length > 0 ? (
        filteredMovies.map((movie) => {
          const isMovieInWatchlist = isInWatchlist(movie.title); 

          return (
            <div
              key={movie._id}
              className="movie-card relative text-center rounded-2xl bg-slate-400 shadow-md overflow-hidden"
            >
              <div className="card relative group h-full">
                {/* Movie Thumbnail */}
                <img
                  src={movie.thumbnail}
                  alt={movie.title}
                  className="w-full h-80 object-fill rounded-2xl transition-transform duration-500 group-hover:scale-110"
                />

                {/* Watchlist Icon - Fixed */}
                <div className="absolute top-4 right-4 z-50">
                  {isMovieInWatchlist ? (
                    <FaBookmark
                      className="w-6 h-6 text-white cursor-pointer hover:text-blue-500 transition"
                      onClick={() => addToWatchlist(movie)}
                    />
                  ) : (
                    <IoBookmarkOutline
                      className="w-6 h-6 text-white cursor-pointer hover:text-blue-500 transition"
                      onClick={() => addToWatchlist(movie)}
                    />
                  )}
                </div>

                {/* Overlay */}
                <div className="overlay absolute inset-0 flex items-end bg-gradient-to-t from-black via-transparent to-transparent rounded-2xl p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <div className="text-content text-white w-full text-center">
                    <h3 className="text-lg font-bold mb-2">
                      {movie.title || "No Title"}
                    </h3>
                    <p className="text-sm font-semibold mb-4">
                      {movie.description || "No Description Available"}
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
          );
        })
      ) : (
        <p className="text-white text-lg text-center col-span-full row-span-full mt-64">
          <LoadingPage />
        </p>
      )}
    </div>
  </div>
  );
};

export default HollywoodMovieList;
