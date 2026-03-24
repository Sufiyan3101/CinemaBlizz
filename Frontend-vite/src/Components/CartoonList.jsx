import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import LoadingPage from "./LoadingPage";

const CartoonList = () => {
  const [cartoonsList, setCartoonsList] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    fetch("http://localhost:8000/cartoons")
      .then((response) => response.json())
      .then((data) => setCartoonsList(data))
      .catch((err) => console.log(err));
  }, []);

  const filteredCartoons = cartoonsList.filter((cartoon) =>
    cartoon.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="flex flex-col items-center">
      {/* Search Input */}
      <input
        type="text"
        placeholder="Search cartoons..."
        className="w-2/4 h-11 bg-[#000B1F] border border-white rounded-2xl mt-5 mb-5 text-white px-5 text-md"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-4 w-full">
        {filteredCartoons.length > 0 ? (
          filteredCartoons.map((cartoon) => (
            <div
              key={cartoon._id}
              className="cartoon-card relative text-center rounded-2xl bg-slate-400 shadow-md overflow-hidden"
            >
              <div className="card relative group h-full">
                {/* Cartoon Thumbnail */}
                <img
                  src={cartoon.thumbnail}
                  alt={cartoon.title}
                  className="w-full h-80 object-cover rounded-2xl transition-transform duration-500 group-hover:scale-110"
                />

                <div className="overlay absolute inset-0 flex items-end bg-gradient-to-t from-black via-transparent to-transparent rounded-2xl p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <div className="text-content text-white w-full text-center">
                    <h3 className="text-lg font-bold mb-2">{cartoon.title || "No Title"}</h3>
                    <p className="text-sm font-semibold mb-4">
                      {cartoon.description || "No Description Available"}
                    </p>
                    <Link
                      to={`/cartoons/${encodeURIComponent(cartoon.title)}`}
                      className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition"
                    >
                      View Details
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          ))
        ) : (
          <p className="text-white text-lg text-center col-span-full row-span-full mt-64">
          <LoadingPage />
        </p>
        )}
      </div>
    </div>
  );
};

export default CartoonList;
