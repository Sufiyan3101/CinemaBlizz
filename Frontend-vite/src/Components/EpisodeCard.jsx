import React from "react";

const EpisodeCard = ({ episode }) => {
  // ✅ Detect touch device
  const isTouchDevice =
    typeof window !== "undefined" &&
    ("ontouchstart" in window || navigator.maxTouchPoints > 0);

  // ✅ Handle full card click (mobile)
  const handleCardClick = () => {
    if (isTouchDevice) {
      window.open(episode.videoUrl, "_blank");
    }
  };

  return (
    <div>
      <div
        className="episode-card relative h-80 text-center rounded-2xl bg-slate-400 shadow-md overflow-hidden cursor-pointer"
        onClick={handleCardClick}
      >
        <div className="card relative group h-full">
          {/* Episode Thumbnail */}
          <img
            src={episode.episodeThumbnail}
            alt={episode.title}
            className="w-full h-80 object-fill rounded-2xl transition-transform duration-500 group-hover:scale-110"
          />

          {/* Overlay */}
          <div
            className={`overlay absolute inset-0 flex items-end bg-linear-to-t from-black via-transparent to-transparent rounded-2xl p-6 transition-opacity duration-500 ${
              isTouchDevice
                ? "opacity-100"
                : "opacity-0 group-hover:opacity-100"
            }`}
          >
            <div className="text-content text-white w-full text-center">
              <h3 className="text-lg font-bold mb-2">
                {episode.title}
              </h3>

              <p className="text-sm font-semibold mb-4">
                {episode.episodeDescription}
              </p>

              <button
                className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition"
                onClick={(e) => {
                  e.stopPropagation(); // prevent card click
                  window.open(episode.videoUrl, "_blank");
                }}
              >
                Click to Watch
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EpisodeCard;