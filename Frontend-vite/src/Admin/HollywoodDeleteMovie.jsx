import React, { useState } from "react";
import "../Css/MiddleContent.css";
import { Link } from "react-router-dom";
import BlurText from "../ReactBitz/BlurText";

const HollywoodDeleteMovie = () => {
  const [title, setTitle] = useState("");
  const [message, setMessage] = useState("");

  const handleDelete = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch(
        `https://cinemablizzbackend.onrender.com/hollywood/movies/${title}`,
        {
          method: "DELETE",
        }
      );

      if (response.ok) {
        setMessage("Movie deleted successfully!");
        setTitle("");
      } else {
        setMessage("Failed to delete movie. Please try again.");
      }
    } catch (error) {
      console.error("Error deleting movie:", error);
      setMessage("Error occurred while deleting movie.");
    }
  };

  return (
    <div className="admindashboard">
      <BlurText delay={150} animateBy="words" direction="top">
        <div className="content">
          <div className="middlecontent flex justify-center items-center flex-col">
            <form onSubmit={handleDelete}>
              <input
                className="bg-[#000B1F] text-white border rounded-lg mr-5 text-center p-1 w-40"
                type="text"
                placeholder="Title to delete"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                required
              />
              <button
                type="submit"
                className="bg-[#000B1F] transition duration-500 hover:bg-red-600 text-white border rounded-lg py-1 px-3 w-40 mt-2"
              >
                Delete Movie
              </button>
            </form>
            <br />
            {message && <strong className="mt-5 text-white">{message}</strong>}

            <br />
            <Link
              to="/admin"
              className="bg-[#000B1F] border rounded-lg text-white text-center p-1 w-40 transition duration-500 hover:bg-white hover:text-black"
            >
              Back
            </Link>
          </div>
        </div>
      </BlurText>
      <div>
        <span className="AD1"></span>
        <span className="AD2"></span>
        <span className="AD3"></span>
        <span className="AD4"></span>
        <span className="AD5"></span>
      </div>
    </div>
  );
};

export default HollywoodDeleteMovie;
