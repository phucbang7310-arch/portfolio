import React from 'react';
import './Hero.css';

function Hero() {
  return (
    <section className="hero-section">
      {/* 1. Ảnh nền bao phủ toàn màn hình */}
      <img src="/hero_bg.png" className="hero-bg-img" alt="Hero Background" />

      {/* 2. Lớp bọc nội dung đè lên ảnh (Absolute) */}
      <div className="hero-content-overlay">
        
        {/* Hàng thông tin nhỏ phía trên */}
        <div className="hero-top-info">
          <span className="hero-badge">Welcome to</span>
        </div>

      </div>
    </section>
  );
}

export default Hero;