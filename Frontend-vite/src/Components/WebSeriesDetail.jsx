import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import "../Css/WebSeriesDetail.css";
import EpisodeCard from './EpisodeCard'
import '../Css/MiddleContent.css'
import LoadingPage from "./LoadingPage";

const WebSeriesDetail = () => {
  const { title } = useParams();
  const [series, setSeries] = useState(null);
  const [activeSeason, setActiveSeason] = useState(null);

  useEffect(() => {
    const fetchSeries = async () => {
      try {
        const response = await fetch(`https://cinemablizzbackend.onrender.com/webseries/${title}/seasons`);
        const data = await response.json();
        console.log("Fetched series data:", data);
  
        if (data.seasons && data.seasons.length > 0) {
          setSeries(data);
        } else {
          setSeries(null);
        }
      } catch (error) {
        console.error("Error fetching series:", error);
      }
    };
    fetchSeries();
  }, [title]);
  
  
  const toggleSeason = (seasonId) => {
    setActiveSeason((prevSeason) => (prevSeason === seasonId ? null : seasonId));
  };

  if (!series){
    return <LoadingPage className="w-full h-full flex justify-center items-center" />;
  } 

return (
  <div className="web-series-detail middlecontent bg-[#000B1F] p-4">
  {series.seasons && series.seasons.length > 0 ? (
    <div className="flex w-full flex-wrap">
      {series.seasons.map((season) => (
        <div key={season._id} className="season p-4 w-full">
          <div
            className="season-card cursor-pointer ml-14 sm:ml-5 hover:font-bold"
            onClick={() => toggleSeason(season._id)}
          >
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            {`Season ${season.seasonNumber}`}
          </div>
          {activeSeason === season._id && (
           <div className="episodes mt-5 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-5 p-5">
              {season.episodes.map((episode) => (
                <EpisodeCard key={episode.id} episode={episode} />
              ))}
            </div>
          )}
        </div>
      ))}
    </div>
  ) : (
    <p className="text-center text-gray-500">
      No seasons available for this series.
    </p>
  )}
</div>



);

};

export default WebSeriesDetail;
