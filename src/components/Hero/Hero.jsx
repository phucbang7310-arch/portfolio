import React from 'react';
import './Hero.css';

function Hero() {
  return (
    <section className="hero-section">
      {/* Ảnh nền bao phủ toàn màn hình */}
      <img src="/hero_bg.png" className="hero-bg-img" alt="Portfolio Welcome Background" />
    </section>
  );
}

export default Hero;