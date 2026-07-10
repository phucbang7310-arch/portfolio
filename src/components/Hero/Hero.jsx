import React from 'react';
import './Hero.css';

function Hero() {
  return (
    <section className="hero-section">
      {/* 1. Ảnh nền bao phủ toàn màn hình */}
      <img 
        src="https://images.unsplash.com/photo-1501785888041-af3ef285b470?q=80&w=1920" /* Bạn thay bằng file ảnh hero gốc của bạn vào đây */
        alt="Portfolio Hero Background" 
        className="hero-bg-img"
      />

      {/* 2. Lớp bọc nội dung đè lên ảnh (Absolute) */}
      <div className="hero-content-overlay">
        
        {/* Hàng thông tin nhỏ phía trên */}
        <div className="hero-top-info">
          <span className="hero-info-text">BORICA</span>
          <span className="hero-badge">CREATIVE DESIGNER</span>
          <span className="hero-info-text">2026</span>
        </div>

        {/* Chữ Portfolio nghệ thuật siêu to ở giữa */}
        <div className="hero-main-title">
          <h1 className="portfolio-title-script">Portfolio</h1>
        </div>

      </div>
    </section>
  );
}

export default Hero;