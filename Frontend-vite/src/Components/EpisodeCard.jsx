import React from "react";

const EpisodeCard = ({ episode }) => {

  return (
    <div className="">
   <div className="episode-card relative h-80 text-center rounded-2xl bg-slate-400 shadow-md overflow-hidden">
        <div className="card relative group h-full">
          {/* Episode Thumbnail */}
          <img
            src={episode.episodeThumbnail}
            alt={episode.title}
            className="w-full h-80 object-fill rounded-2xl transition-transform duration-500 group-hover:scale-110"
          />

          {/* Overlay */}
          <div className="overlay absolute inset-0 flex items-end bg-gradient-to-t from-black via-transparent to-transparent rounded-2xl p-6 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
            <div className="text-content text-white w-full text-center">
              <h3 className="text-lg font-bold mb-2 text-center">
                {episode.title} 
              </h3>
              <p className="text-sm font-semibold mb-4">
                {episode.episodeDescription}
              </p>
              <button
                className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition"
                onClick={() => window.open(episode.videoUrl, "_blank")}
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
