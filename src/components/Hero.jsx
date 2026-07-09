import React from 'react';
import { Calendar, Briefcase, Award } from 'lucide-react';

const Hero = () => {
  return (
    <section id="hero" className="hero-section">
      {/* Intro Header Section */}
      <div className="hero-intro-grid">
        <div className="hero-title-group">
          <h2 className="hero-outline-sub">CREATIVE ARCHIVE</h2>
          <h1 className="hero-main-title">PORTFOLIO</h1>
          <div className="designer-badge">/ NGUYỄN THỊ ANH THƠ /</div>
        </div>

        <div className="hero-greeting-box">
          <div className="greeting-left">
            <h3 className="greeting-heading">
              Xin chào! <span className="cursive-text font-accent">Tôi là Anh Thơ</span>
            </h3>
            <p className="greeting-text">
              Tôi là một Creative Designer & Photographer đam mê định hình bản sắc thương hiệu thông qua ngôn ngữ thị giác hiện đại, 
              táo bạo và tối giản. Portfolio này tập hợp các nghiên cứu điển hình từ MV ca nhạc, chiến dịch marketing tích hợp đến các định hướng nghệ thuật độc bản.
            </p>
            <div className="quick-stats-row">
              <div className="quick-stat">
                <span className="stat-num">2+</span>
                <span className="stat-label">Năm trải nghiệm</span>
              </div>
              <div className="quick-stat">
                <span className="stat-num">20+</span>
                <span className="stat-label">Dự án bàn giao</span>
              </div>
            </div>
          </div>

          <div className="greeting-right">
            <div className="circular-frame-wrapper">
              <div className="frame-ring ring-orange"></div>
              <div className="frame-ring ring-white"></div>
              <div className="portrait-image-holder">
                <img src="/about.png" alt="Nguyễn Thị Anh Thơ Portrait" />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Experience Timeline Section */}
      <div id="experience" className="experience-timeline-block">
        <div className="timeline-title-area">
          <h3 className="timeline-section-title">WORK EXPERIENCE</h3>
          <p className="timeline-subtitle">Hành trình phát triển mỹ thuật từ năm 2018 đến hiện tại</p>
        </div>

        {/* Custom SVG Scribbled Line & Node Map */}
        <div className="timeline-visual-area">
          <svg viewBox="0 0 1000 150" className="timeline-svg">
            <defs>
              <linearGradient id="lineGrad" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="rgba(255, 77, 0, 0.4)" />
                <stop offset="25%" stopColor="rgba(255, 77, 0, 0.8)" />
                <stop offset="60%" stopColor="#FF4D00" />
                <stop offset="100%" stopColor="#FFFFFF" />
              </linearGradient>
            </defs>
            {/* The chaos scribble on the left */}
            <path 
              d="M 20 60 C 50 10, 80 110, 110 50 C 130 10, 150 130, 180 80 C 190 60, 200 20, 220 75 C 240 120, 260 40, 280 80 L 1000 80" 
              fill="none" 
              stroke="url(#lineGrad)" 
              strokeWidth="4" 
              strokeLinecap="round" 
              strokeDasharray="2, 2" 
              className="scribble-path"
            />
            {/* Timeline nodes */}
            <circle cx="550" cy="80" r="10" className="timeline-node node-active" />
            <circle cx="750" cy="80" r="10" className="timeline-node node-active" />
            <circle cx="920" cy="80" r="10" className="timeline-node node-active" />

            {/* Labels on SVG */}
            <text x="50" y="30" className="svg-text svg-chaos">2018 & 2019</text>
            <text x="130" y="130" className="svg-text svg-chaos">2020 & 2021</text>
            <text x="240" y="25" className="svg-text svg-chaos">2022</text>

            <text x="550" y="50" textAnchor="middle" className="svg-text svg-company">One Tech Medical</text>
            <text x="550" y="115" textAnchor="middle" className="svg-text svg-date">10.2023</text>

            <text x="750" y="50" textAnchor="middle" className="svg-text svg-company">InBold Agency</text>
            <text x="750" y="115" textAnchor="middle" className="svg-text svg-date">01.2025</text>

            <text x="920" y="50" textAnchor="middle" className="svg-text svg-company">Biz-Eyes Agency</text>
            <text x="920" y="115" textAnchor="middle" className="svg-text svg-date">11.2025</text>
          </svg>
        </div>

        {/* Timeline Text Grid */}
        <div className="experience-detail-grid">
          {/* Column Left */}
          <div className="exp-column">
            <div className="exp-card">
              <div className="exp-card-header">
                <span className="exp-period">/ 11.2025 - Now /</span>
                <h4 className="exp-role">Creative Designer</h4>
                <h5 className="exp-company">Biz-Eyes Agency (IMC Agency)</h5>
              </div>
              <ul className="exp-bullets">
                <li>Hợp tác chặt chẽ cùng Concept Team để thảo luận ý tưởng, biên tập thông điệp và đảm bảo tính thẩm mỹ của các thiết kế trùng khớp với định hướng chiến dịch.</li>
                <li>Thiết kế hệ thống Key Visual và toàn bộ sản phẩm truyền thông số phục vụ hoạt động PR và Marketing số đa kênh.</li>
                <li>Phát triển các ấn bản thiết kế thích ứng (Design Adaptation), layout kỹ thuật số nhanh chóng, đáp ứng nhịp độ chiến dịch IMC.</li>
              </ul>
            </div>

            <div className="exp-card">
              <div className="exp-card-header">
                <span className="exp-period">/ 01.2025 - 11.2025 /</span>
                <h4 className="exp-role">Graphic Designer</h4>
                <h5 className="exp-company">InBold Agency (Design Boutique)</h5>
              </div>
              <ul className="exp-bullets">
                <li>Thiết kế hệ thống bộ nhận diện thương hiệu toàn diện cho đối tác từ bao bì, logo đến quy chuẩn màu sắc.</li>
                <li>Bố cục các ấn phẩm in ấn sự kiện quảng bá truyền thông và tài liệu thiết kế doanh nghiệp.</li>
              </ul>
            </div>
          </div>

          {/* Column Right */}
          <div className="exp-column">
            <div className="exp-card bg-highlight">
              <div className="exp-card-header">
                <span className="exp-period text-orange">/ 2022 - Now /</span>
                <h4 className="exp-role">Freelance Designer</h4>
                <h5 className="exp-company">Boutiques & Large Agencies</h5>
              </div>
              <ul className="exp-bullets">
                <li>Phục vụ các yêu cầu thiết kế đồ họa sự kiện, visual truyền thông quảng cáo cho thương hiệu qua trung gian các Agency đối tác như Publicis Groupe Vietnam, VNGames, ZEE Agency.</li>
                <li>Tạo các đề xuất ấn phẩm nghệ thuật phong cách cá nhân hóa hoặc brutalist, phù hợp với gu thiết kế độc bản.</li>
              </ul>
            </div>

            <div className="exp-card">
              <div className="exp-card-header">
                <span className="exp-period">/ 10.2023 - 12.2024 /</span>
                <h4 className="exp-role">Graphic Designer</h4>
                <h5 className="exp-company">One Tech Medical (Healthcare Brand)</h5>
              </div>
              <ul className="exp-bullets">
                <li>Phụ trách hình ảnh quảng bá dòng sản phẩm chăm sóc y tế, thiết kế ấn phẩm đồ họa tĩnh và landing page sản phẩm.</li>
                <li>Đồng hành phát triển bộ branding phục vụ hội nghị và sự kiện khoa học thường niên của thương hiệu.</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
