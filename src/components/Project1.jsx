import React, { useState } from 'react';
import { Play, Calendar, Users, Cpu } from 'lucide-react';

const Project1 = () => {
  const [showVideo, setShowVideo] = useState(false);

  return (
    <section id="project-01" className="project1-section">
      {/* Project Banner with Retro Window Styling */}
      <div className="project1-banner-wrapper">
        <div className="p1-title-card">
          <span className="p1-number">01</span>
          <div className="p1-header-details">
            <span className="p1-genre-label">MUSIC VIDEO PROJECT ARTEFACT</span>
            <h2 className="p1-main-title">GIỮ SỨC KHỎE EM ƠI</h2>
            <p className="p1-genre-italic font-accent">Music Video art direction</p>
          </div>
        </div>

        {/* The Frame Mimicking a Train Window Cabin */}
        <div className="train-cabin-frame">
          <div className="train-window-wrapper">
            <div className="train-window-glass">
              <img src="/project1.png" alt="Giữ Sức Khỏe Em Ơi - MV Scene" className="train-main-image" />
            </div>
            
            {/* Overlay train door styling */}
            <div className="train-cabin-overlay">
              <span className="cabin-tag">CABIN 01 - NORTHBOUND</span>
            </div>
          </div>
        </div>
      </div>

      {/* Meta Specs columns */}
      <div className="project1-specs-grid">
        <div className="spec-card">
          <Users size={20} className="spec-icon" />
          <span className="spec-title">ROLE</span>
          <span className="spec-desc">Art Director · Visual Designer</span>
        </div>
        <div className="spec-card">
          <Calendar size={20} className="spec-icon" />
          <span className="spec-title">TIMELINE</span>
          <span className="spec-desc">3 Weeks (Oct 2025)</span>
        </div>
        <div className="spec-card">
          <Cpu size={20} className="spec-icon" />
          <span className="spec-title">TOOLS</span>
          <span className="spec-desc">Photoshop · Illustrator · C4D</span>
        </div>
      </div>

      {/* Description & Storyboard columns */}
      <div className="project1-content-columns">
        <div className="p1-narrative-col">
          <h3>THE NARRATIVE & CONCEPT</h3>
          <p>
            Dự án xây dựng thế giới quan retro-futurism độc đáo cho MV ca nhạc "Giữ Sức Khỏe Em Oy". 
            Bối cảnh chính diễn ra trên chuyến tàu chuyển bánh xuyên không gian, kết hợp giữa đồ nghệ thuật thô mộc brutalist và các sắc đỏ cam bắt mắt.
          </p>
          <p>
            Định hướng nghệ thuật đặt trọng tâm vào màu sắc tương phản mạnh. Sự lạnh lẽo của tàu sắt kết hợp cùng ghế nỉ đỏ nóng bỏng tạo cảm giác vừa hoài cổ vừa viễn tưởng.
          </p>
        </div>

        <div className="p1-storyboard-col">
          <h3>SCENERY SEQUENCE / STORYBOARD</h3>
          <div className="storyboard-grid">
            <div className="sb-card">
              <div className="sb-img-box">
                <img src="/project1.png" alt="Storyboard scene 1" />
              </div>
              <span className="sb-label">Scene #01 - The Platform</span>
            </div>
            <div className="sb-card">
              <div className="sb-img-box">
                <img src="/about.png" alt="Storyboard scene 2" />
              </div>
              <span className="sb-label">Scene #02 - The Cabin Dream</span>
            </div>
            <div className="sb-card">
              <div className="sb-img-box">
                <img src="/project2.png" alt="Storyboard scene 3" />
              </div>
              <span className="sb-label">Scene #03 - The Golden Light</span>
            </div>
            <div className="sb-card font-accent-card">
              {showVideo ? (
                <div className="sb-video-box" style={{ width: '100%', aspectRatio: '1.6', borderRadius: '4px', overflow: 'hidden' }}>
                  <iframe
                    width="100%"
                    height="100%"
                    src="https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1"
                    title="YouTube video player"
                    frameBorder="0"
                    allow="autoplay; encrypted-media; picture-in-picture"
                    allowFullScreen
                    style={{ border: 'none' }}
                  ></iframe>
                </div>
              ) : (
                <div className="sb-play-box" onClick={() => setShowVideo(true)}>
                  <Play size={32} fill="#FF4D00" color="#FF4D00" />
                  <span>PLAY VIDEO</span>
                </div>
              )}
              <span className="sb-label" style={{ display: 'flex', justifyContent: 'space-between', width: '100%' }}>
                <span>Teaser Clip Link</span>
                {showVideo && (
                  <span 
                    onClick={() => setShowVideo(false)} 
                    style={{ color: '#FF4D00', cursor: 'pointer', fontWeight: 'bold' }}
                  >
                    TẮT VIDEO
                  </span>
                )}
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Project1;
