import React from "react";
import '../Css/Navbar.css';

const Footer = () => {
    return (
      <div className="footer flex flex-col sm:flex-row justify-center items-center bg-[#000B1F] text-white py-4 px-4 sticky top-0 z-10">
      <p>© 2026 CinemaBlizz. All rights reserved.</p>
      <div className="flex flex-row">
        <a href="hello" className="text-white hover:underline md:ml-3.5">Privacy Policy</a>
        <a href="hello" className="text-white hover:underline ml-3.5">Terms of Service</a>
      </div>
    </div>
    );
  };
export default Footer  ;