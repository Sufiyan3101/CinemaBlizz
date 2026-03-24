import React, { useState } from "react";
import "../Css/Navbar.css";
import { useAuth0 } from "@auth0/auth0-react";
import { GiHamburgerMenu } from "react-icons/gi";
import { Link } from "react-router-dom";
import "../Css/MiddleContent.css";

const Navbar = () => {
  const { isAuthenticated, logout, loginWithPopup } = useAuth0();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleLogin = () => {
    loginWithPopup()
      .then(() => {})
      .catch((err) => {
        console.error("Error logging in:", err);
      });
  };

  return (
    <nav className="main w-full bg-[#000B1F] flex items-center justify-between px-4 py-8 sticky top-0 z-20 ">
      {/* LOGO & NAME */}
      <div className="logoname flex items-center w-36 md:ml-5 ml-4 text-sm md:text-lg gap-1">
        <div className="logo">
          <img
            src="https://marketplace.canva.com/EAFKy7ErRNs/1/0/1600w/canva-elegant-beige-black-film-maker-cinematography-business-logo-iYisTK0Xghw.jpg"
            className="w-10 h-8"
            alt="CinemaBlizz Logo"
          />
        </div>
        <div className="name flex items-center justify-center">
          <p className="w-24 ml-3 h-8 flex items-center justify-center text-xl text-white text-center pacifico-regular">
            CinemaBlizz
          </p>
        </div>
      </div>

      {/* MIDDLE CONTENT */}
      <div className="middlecontent grow items-center justify-center h-8 hidden md:flex md:ml-28 md:mr-28">
        <div className="adjust flex justify-evenly items-center w-full max-w-xl">
          <Link
            to="/"
            className="btn border-b-2 border-transparent hover:border-white transition duration-400 ease-in-out"
          >
            Home
          </Link>
          <Link
            to="/about"
            className="btn atag border-b-2 border-transparent hover:border-white transition duration-400 ease-in-out"
          >
            About
          </Link>
          <Link
            to="/contact-us"
            className="btn atag border-b-2 border-transparent hover:border-white transition duration-400 ease-in-out"
          >
            Contact Us
          </Link>
        </div>
      </div>

      {/* WELCOME USER CONTENT */}
      {isAuthenticated && (
        <div className="dispuser rounded-md border border-white md:block mr-1  hidden hover:bg-slate-800">
          <Link to="/user-profile" className="px-2 py-1 btn">
            Profile
          </Link>
        </div>
      )}

      {/* LOGIN & LOGOUT BUTTONS */}
      <div className="hidden md:flex md:mr-0 md:w-20 items-center mr-1 h-8 w-32 justify-center">
        {isAuthenticated ? (
          <button
            className="btn atag bg-red-500 hover:bg-red-600 rounded-md border border-white ml-5 h-7 py-1 px-2 flex items-center"
            onClick={() =>
              logout({ logoutParams: { returnTo: window.location.origin } })
            }
          >
            Logout
          </button>
        ) : (
          <button
            className="btn atag hover:bg-slate-800 hover:cursor-pointer rounded-md border border-white h-7 py-1 ml-5 px-2 flex items-center"
            onClick={handleLogin}
          >
            Login
          </button>
        )}
      </div>

      {/* RESPONSIVE MENU BUTTON */}
      <div className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
        <GiHamburgerMenu className="text-lg cursor-pointer mr-3 text-white z-10" />
      </div>

      {/* DROPDOWN MENU FOR SMALL SCREENS */}
      {isMenuOpen && (
        <div className="absolute top-20 left-0 w-full bg-white shadow-lg p-4 flex flex-col z-10">
          <Link
            to="/"
            className="py-2 w-full text-center hover:bg-gray-100"
            onClick={() => setIsMenuOpen(false)} 
          >
            Home
          </Link>
          <Link
            to="/about"
            className="py-2 w-full text-center hover:bg-gray-100"
            onClick={() => setIsMenuOpen(false)} 
          >
            About
          </Link>
          <Link
            to="/contact-us"
            className="py-2 w-full text-center hover:bg-gray-100"
            onClick={() => setIsMenuOpen(false)} 
          >
            Contact Us
          </Link>
          {isAuthenticated && (
            <Link
              to="/user-profile"
              className="py-2 w-full text-center hover:bg-gray-100"
              onClick={() => setIsMenuOpen(false)}
            >
              Profile
            </Link>
          )}
          {isAuthenticated ? (
            <button
              className="text-black w-full py-2 text-center hover:bg-gray-100"
              onClick={() => {
                setIsMenuOpen(false);
                logout({ logoutParams: { returnTo: window.location.origin } });
              }}
            >
              Logout
            </button>
          ) : (
            <button
              className="text-black w-full py-2 text-center hover:bg-gray-100"
              onClick={() => {
                setIsMenuOpen(false);
                handleLogin();
              }}
            >
              Login
            </button>
          )}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
