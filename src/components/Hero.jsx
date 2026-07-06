import React from 'react';

const Hero = () => {
  return (
    <div className="magazine-page">
      <div className="hero">
        <div className="hero-header">
          <h2>NAME<br/>SURNAME</h2>
          <p>WORKS<br/>2019-2021</p>
        </div>
        
        <div className="hero-main">
          <div className="hero-bg-black-bars"></div>
          <div className="hero-bg-red"></div>
          
          <div className="hero-image-wrapper">
            <img src="/hero.png" alt="Creative Portrait" />
            
            {/* Teal Squares overlapping as per design */}
            <div className="teal-square sq-1"></div>
            <div className="teal-square sq-2"></div>
            <div className="teal-square sq-3"></div>
            <div className="teal-square sq-4"></div>
            <div className="teal-square sq-5"></div>
            <div className="teal-square sq-6"></div>
            <div className="teal-square sq-7"></div>
          </div>
        </div>

        <div className="hero-footer">
          <h1>PORTFOLIO</h1>
          <p>CREATIVE • PHOTOGRAPHY</p>
        </div>
      </div>
    </div>
  );
};

export default Hero;
