import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import EpisodeCard from "./EpisodeCard";
import LoadingPage from "./LoadingPage";

const CartoonDetail = () => {
  const { title } = useParams();
  const [series, setSeries] = useState(null);
  const [activeSeason, setActiveSeason] = useState(null);

  useEffect(() => {
    const fetchSeries = async () => {
      try {
        const response = await fetch(
          `http://localhost:8000/cartoons/${title}/seasons`
        );
        const data = await response.json(); // Add await here
        console.log("Fetched Data", data);
        if (data.seasons && data.seasons.length > 0) {
          setSeries(data);
        } else {
          setSeries(null);
        }
      } catch (error) {
        console.log("Error Fetching", error);
        setSeries(null); 
      }
    };
    fetchSeries();
  }, [title]);

  const toggleSeason = (seasonId) => {
    setActiveSeason((prevSeason) =>
      prevSeason === seasonId ? null : seasonId
    );
  };

  if (!series) {
    return <LoadingPage />;
  }

  return (
    <div className="web-series-detail middlecontent bg-[#000B1F] p-4">
  {series.seasons && series.seasons.length > 0 ? (
    <div className="flex w-full flex-wrap">
      {series.seasons.map((season) => (
        <div
          key={season._id}
          className="season p-4 w-full"
        >
          <div
            className="season-card cursor-pointer ml-14 hover:font-bold"
            onClick={() => toggleSeason(season._id)}
          >
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            {`Season ${season.seasonNumber}`}
          </div>
          {activeSeason === season._id && (
          <div className="mt-5 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-4 gap-5 p-5">
              {season.episodes.map((episode) => (
                <EpisodeCard key={episode.id} episode={episode} />
              ))}
            </div>
          )}
        </div>
      ))}
    </div>
  ) : (
    <p className="text-center text-gray-500">No seasons available for this series.</p>
  )}
</div>
  );
};

export default CartoonDetail;
