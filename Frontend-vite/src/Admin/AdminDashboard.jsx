import React from "react";
import "../Css/AdminBGAnimation.css";
import { Link } from "react-router-dom";
import BlurText from "../ReactBitz/BlurText";

const AdminDashboard = () => {
  return (
    <div className="admindashboard">
      <BlurText
        delay={150}
        animateBy="words"
        direction="top"
      >
        <div className="content">
          <Link
            to="add-movie"
            className="border rounded-md px-3 py-1 mr-5 border-gray-800 hover:bg-gray-800 text-white hover:text-white text-xl"
          >
            Add Movie
          </Link>
          <Link
            to="delete-movie"
            className="border rounded-md px-3 py-1 ml-3 border-gray-800 hover:bg-gray-800 text-white hover:text-white text-xl"
          >
            Delete Movie
          </Link>
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

export default AdminDashboard;
