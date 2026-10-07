import React from 'react';
import './MusicVideoProject.css';

function MusicVideoProject() {
  return (
    <section className="mv-project-section">
      {/* 1. Ảnh banner tiêu đề ở trên cùng */}
      <div className="mv-banner">
        <img 
          src="/photographer-banner.png" 
          alt="Photographer" 
          className="mv-banner-img"
        />
      </div>

      <div className="mv-content-container">
        {/* 2. Khối thông tin chung (Intro) */}
        <div className="mv-intro-block">
          <div className="mv-intro-left">
            <img src="/not-tra-banner.png" alt="Main project cover" className="mv-cover-img" />
          </div>
          <div className="mv-intro-right">
            <h1 className="mv-project-title">| NỐT TRÀ - NỐT HƯƠNG ĐẬM VỊ</h1>
            
            <div className="mv-tags">
              <span className="mv-tag">PHOTOGRAPHER</span>
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