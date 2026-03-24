import React, { createContext, useContext, useState, useEffect } from "react";

const WatchlistContext = createContext();

export const WatchlistProvider = ({ children }) => {
  const [watchlist, setWatchlist] = useState([]);

  useEffect(() => {
    const savedWatchlist = localStorage.getItem("watchlist");
    if (savedWatchlist) {
      setWatchlist(JSON.parse(savedWatchlist));
    }
  }, []);

  // for localStorage
  useEffect(() => {
    localStorage.setItem("watchlist", JSON.stringify(watchlist));
  }, [watchlist]);

  const addToWatchlist = (movie) => {
    setWatchlist((prev) => {
      if (prev.some((m) => m.title === movie.title)) {
        return prev; // Prevent duplicate movies
      }
      return [...prev, movie]; 
    });
  };

  const removeFromWatchlist = (title) => {
    setWatchlist((prev) => prev.filter((movie) => movie.title !== title));
  };

  const isInWatchlist = (title) => {
    return watchlist.some((movie) => movie.title === title);
  };

  return (
    <WatchlistContext.Provider
      value={{ watchlist, addToWatchlist, removeFromWatchlist, isInWatchlist }}
    >
      {children}
    </WatchlistContext.Provider>
  );
};

export const useWatchlist = () => useContext(WatchlistContext);
