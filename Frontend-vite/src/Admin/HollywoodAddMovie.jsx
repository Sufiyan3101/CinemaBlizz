import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import "../Css/MiddleContent.css";
import BlurText from "../ReactBitz/BlurText";

const HollywoodAddMovie = () => {
  const [title, setTitle] = useState("");
  const [thumbnail, setThumbnail] = useState("");
  const [videoUrl, setVideoUrl] = useState("");
  const [description, setDescription] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newMovie = { title, thumbnail, videoUrl, description };

    try {
      const response = await fetch("http://localhost:8000/hollywood/movies", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(newMovie),
      });

      if (response.ok) {
        setMessage("Movie added successfully!");
        setTitle("");
        setThumbnail("");
        setVideoUrl("");
        setDescription("");
      }
    } catch (error) {
      console.error("Error Adding Movie:", error);
      setMessage("Error Adding Movie");
    }
  };

  return (
    <div className="admindashboard">
            <BlurText delay={150} animateBy="words" direction="top">
      <div className="content">
        <div className="flex justify-center items-center flex-col">
          <p className="text-2xl mb-10 text-white">Hollywood Add Movie Page</p>
          <form onSubmit={handleSubmit}>
            <input
              className="bg-[#000B1F] text-white border rounded-lg mr-5 text-center p-1 w-40"
              type="text"
              placeholder="Title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              required
            />

            <input
              className="bg-[#000B1F] text-white border rounded-lg mr-5 text-center p-1 w-40"
              type="text"
              placeholder="Thumbnail URL"
              value={thumbnail}
              onChange={(e) => setThumbnail(e.target.value)}
              required
            />

            <input
              className="bg-[#000B1F] text-white border rounded-lg mr-5 text-center p-1 w-40"
              type="text"
              placeholder="Video URL"
              value={videoUrl}
              onChange={(e) => setVideoUrl(e.target.value)}
              required
            />

            <input
              className="bg-[#000B1F] text-white border rounded-lg mr-5 text-center p-1 w-40"
              placeholder="Description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              required
            />

            <button
              className="bg-[#000B1F] text-white hover:bg-green-700 transition duration-700 border rounded-lg mr-5 text-center py-1 px-3 w-40"
              type="submit"
            >
              Add Movie
            </button>
          </form>
          {message && (
            <strong className="flex justify-center mt-10 text-xl text-white">
              {message}
            </strong>
          )}

          <br />
          <Link
            to="/admin"
            className="bg-[#000B1F] text-white border rounded-lg text-center p-1 w-40 hover:bg-gray-500 hover:text-white"
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

export default HollywoodAddMovie;
