import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import LoadingPage from "./LoadingPage";

const WebSeriesList = () => {
  const [seriesList, setSeriesList] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [loading, setLoading] = useState(true);

  const navigate = useNavigate();

  // ✅ Detect touch device
  const isTouchDevice =
    typeof window !== "undefined" &&
    ("ontouchstart" in window || navigator.maxTouchPoints > 0);

  useEffect(() => {
    fetch("https://cinemablizzbackend.onrender.com/webseries")
      .then((response) => response.json())
      .then((data) => {
        setSeriesList(data);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
        setLoading(false);
      });
  }, []);

  const filteredSeries = seriesList.filter((series) =>
    series.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // ✅ Handle full card click (mobile)
  const handleCardClick = (title) => {
    if (isTouchDevice) {
      navigate(`/web-series/${encodeURIComponent(title)}`);
    }
  };

  return (
    <div className="flex flex-col items-center">
      {/* Search Input */}
      <input
        type="text"
        placeholder="Search by title..."
        className="w-2/4 h-11 bg-[#000B1F] border border-white rounded-2xl mt-5 mb-5 text-white px-5 text-md"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />

      {/* Loading */}
      {loading ? (
        <LoadingPage />
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-4 w-full">
          {filteredSeries.length > 0 ? (
            filteredSeries.map((series) => (
              <div
                key={series._id}
                className="series-card relative text-center rounded-2xl bg-slate-400 shadow-md overflow-hidden cursor-pointer"
                onClick={() => handleCardClick(series.title)}
              >
                <div className="card relative group h-full">
                  {/* Thumbnail */}
                  <img
                    src={series.thumbnail}
                    alt={series.title}
                    className="w-full h-80 object-fill rounded-2xl transition-transform duration-500 group-hover:scale-110"
                  />

                  {/* Overlay */}
                  <div
                    className={`overlay absolute inset-0 flex items-end bg-linear-to-t from-black via-transparent to-transparent rounded-2xl p-4 transition-opacity duration-500 ${
                      isTouchDevice
                        ? "opacity-100"
                        : "opacity-0 group-hover:opacity-100"
                    }`}
                  >
                    <div className="text-content text-white w-full text-center">
                      <h3 className="text-lg font-bold mb-2">
                        {series.title}
                      </h3>
                      <p className="text-sm font-semibold mb-4">
                        {series.description}
                      </p>

                      <Link
                        to={`/web-series/${encodeURIComponent(series.title)}`}
                        className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition"
                        onClick={(e) => e.stopPropagation()} // prevent double click
                      >
                        View Details
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <p className="text-white text-lg text-center col-span-full mt-20">
              No series found
            </p>
          )}
        </div>
      )}
    </div>
  );
};

export default WebSeriesList;