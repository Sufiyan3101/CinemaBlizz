import React, { useState } from "react";
import "../Css/Sidebar.css";
import MoviesList from "../Components/MoviesList";
import { Link } from "react-router-dom";
import { FaHome } from "react-icons/fa";
import { GiHamburgerMenu } from "react-icons/gi";


const Bollywood = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="flex bg-[#000B1F]">
      <aside className="sidebar">
        <p className="sidebar-title text-3xl hover:text-red-400 mt-5"><Link to="/"><FaHome/></Link></p>
        <ul className="sidebar-links mt-10 text-2xl flex content-center items-center flex-col gap-2">
          <li className="rounded-md border-red-400 px-2 py-1 hover:border"><Link to="/hollywood">Hollywood</Link></li>
          <li className="rounded-md border-red-400 px-2 py-1 hover:border"><Link to="/web-series">Web Series</Link></li>
          <li className="rounded-md border-red-400 px-2 py-1 hover:border"><Link to="/watchlist">WatchList</Link></li>
        </ul>
      </aside>

      <div className="middle">
      <strong className="text-sm sm:text-2xl flex justify-center relative text-white">You Are On Bollywood Movie Page</strong>
        <div className="absolute right-5 top-5" onClick={() => setIsMenuOpen(!isMenuOpen)}>
          <GiHamburgerMenu className="text-xl sm:text-3xl cursor-pointer sm:mr-10 z-10 sm:hidden text-white" />
        </div>
        {isMenuOpen && (
          <div className="absolute top-16 left-0 w-full bg-white shadow-lg p-4 flex flex-col z-20">
            <Link to="/" className="py-2 w-full text-center hover:bg-gray-100">Home</Link>
            <Link to="/hollywood" className="py-2 w-full text-center hover:bg-gray-100">Hollywood</Link>
            <Link to="/web-series" className="py-2 w-full text-center hover:bg-gray-100">Web Series</Link>
            <Link to="/watchlist" className="py-2 w-full text-center hover:bg-gray-100">WatchList</Link>
          </div>
        )}
        <div>
            <MoviesList/>
        </div>
      </div>
      
    </div>
  );
};

export default Bollywood;