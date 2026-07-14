import React from 'react';
import './ThankYou.css';

function ThankYou() {
  return (
    <section className="thanks-section">
      {/* 1. Ảnh nền đồi cỏ và bầu trời xanh tương tự ảnh gốc */}
      <img 
        src="https://images.unsplash.com/photo-1501785888041-af3ef285b470?q=80&w=1920" 
        alt="Thank You Background" 
        className="thanks-bg-img"
      />

      {/* 2. Lớp bọc nội dung văn bản và contact đè lên trên ảnh */}
      <div className="thanks-content-overlay">
        
        {/* Khối chữ Thanks for watching nghệ thuật siêu to */}
        <div className="thanks-title-container">
          <h1 className="thanks-title-script">Thanks for watching</h1>
        </div>

        {/* Khối chứa hàng thông tin liên hệ bo góc ở đáy */}
        <div className="thanks-contact-row">
          <span className="contact-badge">Borica</span>
          <a href="mailto:Huynhhau274@gmail.com" className="contact-badge link">Huynhhau274@gmail.com</a>
          <a href="tel:+84947193407" className="contact-badge link">+84947193407</a>
        </div>

      </div>
    </section>
  );
}

export default ThankYou;