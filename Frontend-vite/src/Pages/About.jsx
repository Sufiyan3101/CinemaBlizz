import React, { useState, useEffect } from "react";
import "../Css/MiddleContent.css";
import "../Css/MainPageBody.css";
import "../Css/AboutAndContactAnimation.css";
import AnimatedContent from "../ReactBitz/AboutContact";

const About = () => {
  const [open, setIsOpen] = useState(window.innerWidth > 1300);

  useEffect(() => {
    const handleResize = () => {
      setIsOpen(window.innerWidth > 1300);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const FloatingSquares = () => (
    <div className="wrapper">
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
    </div>
  );

  return (
    <div>
      {open ? (
        <div className="about_contact">
          <FloatingSquares />
          <div className="banner">
            <div className="content">
              <AnimatedContent
                distance={150}
                direction="vertical"
                reverse={false}
                config={{ tension: 80, friction: 20 }}
                initialOpacity={0.2}
                animateOpacity
                scale={1.1}
                threshold={0.2}
              >
                <div className="about">
                  <p className="name">CinemaBlizz</p>
                  <p className="info mt-5">
                    CinemaBlizz is your go-to platform for streaming the latest
                    movies, web series, and cartoons. Our mission is to bring
                    entertainment to your fingertips, accessible from anywhere
                    at any time. Whether you're in the mood for Bollywood
                    dramas, Hollywood blockbusters, or animated adventures,
                    CinemaBlizz has it all. Join us and dive into a world of
                    endless entertainment!
                  </p>
                </div>
              </AnimatedContent>
            </div>
          </div>
        </div>
      ) : (
        <div className="middlecontent bg-[#000B1F] flex justify-center h-[80vh] items-center relative sm:p-0 p-5">
          {/* ✅ Take it completely out of flex flow */}
          <div
            style={{
              position: "fixed",
              top: 0,
              left: 0,
              width: "100%",
              height: "100%",
              zIndex: 0,
              pointerEvents: "none",
            }}
          >
            <FloatingSquares />
          </div>

          <div
            className="about flex justify-center flex-col items-center text-center max-w-md  px-4 py-4 rounded-xl"
            style={{
              background: "rgba(255, 255, 255, 0.1)",
              backdropFilter: "blur(10px)",
              position: "relative",
              zIndex: 10,
            }}
          >
            <p className="name text-white text-3xl">CinemaBlizz</p>
            <p className="para mt-5">
              CinemaBlizz is your go-to platform for streaming the latest
              movies, web series, and cartoons. Our mission is to bring
              entertainment to your fingertips, accessible from anywhere at any
              time. Whether you're in the mood for Bollywood dramas, Hollywood
              blockbusters, or animated adventures, CinemaBlizz has it all. Join
              us and dive into a world of endless entertainment!
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

export default About;
