import React from 'react';
import './MusicVideoProject.css';

function MusicVideoProject() {
  return (
    <section className="mv-project-section">
      {/* 1. Ảnh banner tiêu đề ở trên cùng */}
      {/* <div className="mv-banner">
        <img 
          src="/music-video-banner.png" 
          alt="Music Video Title Banner" 
          className="mv-banner-img"
        />
      </div> */}

      <div className="mv-banner-text-wrapper">
        <h1 className="mv-text-title-script">Music Video</h1>
      </div>

      <div className="mv-content-container">
        {/* 2. Khối thông tin chung (Intro) */}
        <div className="mv-intro-block">
          <div className="mv-intro-left">
            <img src="https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?q=80&w=600" alt="Main project cover" className="mv-cover-img" />
          </div>
          <div className="mv-intro-right">
            <span className="mv-category">Marketing Music Video</span>
            <h1 className="mv-project-title">| GIỮ SỨC KHỎE EM ƠI</h1>
            
            <div className="mv-tags">
              <span className="mv-tag">Music Video</span>
              <span className="mv-tag">Photoshoot</span>
              <span className="mv-tag">Storyboard Supervisor</span>
            </div>

            <div className="mv-description">
              <p><strong>"GIỮ SỨC KHỎE EM ƠI"</strong> is a marketing music video produced for GSK. The main objective was to raise awareness of the dangers of pneumococcal bacteria through a charming storyline combined with a catchy, replayable melody that appeals to both parents and children.</p>
              <p>In this project, I collaborated directly with the Art Director to ensure photos aligned with the storyboard, guiding posing and visual mood with the photographer, and proposing creative solutions for approval to achieve the intended direction.</p>
            </div>

            <div className="mv-clients">
              <span className="client-label">Clients:</span>
              <span className="client-tag outline-orange">GSK</span>
              <span className="client-tag">MSL</span>
            </div>
          </div>
        </div>

        {/* 3. Phần Storyboard (Lưới 4 cột) */}
        <div className="mv-section-block">
          <h2 className="mv-sub-title">Storyboard</h2>
          <div className="storyboard-grid">
            {/* Bạn thay src bằng ảnh thật từ F10A đến F15A */}
            <div className="sb-item"><img src="https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=400" alt="F10A" /></div>
            <div className="sb-item"><img src="https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=400" alt="F10B" /></div>
            <div className="sb-item"><img src="https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=400" alt="F11" /></div>
            <div className="sb-item"><img src="https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=400" alt="F12A" /></div>
            <div className="sb-item"><img src="https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=400" alt="F12B" /></div>
            <div className="sb-item"><img src="https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=400" alt="F13" /></div>
            <div className="sb-item"><img src="https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=400" alt="F14" /></div>
            <div className="sb-item"><img src="https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=400" alt="F15A" /></div>
          </div>
        </div>

        {/* 4. Phần Photoshoot (Ảnh giữa to nổi bật) */}
        <div className="mv-section-block">
          <h2 className="mv-sub-title">Photoshoot</h2>
          <div className="photoshoot-flex">
            <div className="ps-item side"><img src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=400" alt="Photoshoot 1" /></div>
            <div className="ps-item side"><img src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=400" alt="Photoshoot 2" /></div>
            <div className="ps-item center"><img src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=500" alt="Photoshoot Center" /></div>
            <div className="ps-item side"><img src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=400" alt="Photoshoot 3" /></div>
            <div className="ps-item side"><img src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=400" alt="Photoshoot 4" /></div>
          </div>
        </div>

        <div className="mv-section-block">
          <h2 className="mv-sub-title">Watch Video</h2>
          <div className="video-responsive-container">
            <iframe
              src="https://www.youtube.com/embed/dQw4w9WgXcQ" /* Đường dẫn dạng /embed/ để xem trực tiếp */
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            ></iframe>
          </div>
        </div>

      </div>
    </section>
  );
}

export default MusicVideoProject;