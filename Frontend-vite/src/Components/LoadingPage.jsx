import React, { useLayoutEffect } from 'react';
import '../Css/Loading.css';
import gsap from 'gsap';

const LoadingPage = () => {

  useLayoutEffect(() => {
    let tl = gsap.timeline({ repeat: -1, repeatDelay: 1 });
    tl.to(".box", {
      scale: 0,
      y: 60,
      rotate: 400,
      delay: 0.5,
      duration: 1,
      repeat: 1, 
      yoyo: true,
      stagger: {
        amount: 1.5,
        from: "start",
        grid: [3, 3],
      },
    })
    tl.to(".container", {
      rotate: "-405deg",
      scale: 0,
      duration: 1,
    })
  });

  return (
    <div className="wrapper">
      <div className="container">
        {new Array(9).fill().map((_, index) => (
          <div key={index} className="box"></div>
        ))}
      </div>
    </div>
  );
};

export default LoadingPage;
