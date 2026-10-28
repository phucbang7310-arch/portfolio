import React from 'react';
import StoryboardGallery from '../common/StoryboardGallery';
import { notTraStoryboardImages } from '../../data/notTraStoryboardData';
import { danLatStoryboardImages } from '../../data/danLatStoryboardData';
import { ngay2010StoryboardImages } from '../../data/ngay2010StoryboardData';
import { dailyStoryboardImages } from '../../data/dailyStoryboardData';
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
            <img src="/not-tra-banner.png" alt="Nốt Trà - Nốt Hương Đậm Vị" className="mv-cover-img" />
          </div>
          <div className="mv-intro-right">
            <h1 className="mv-project-title">| NỐT TRÀ - NỐT HƯƠNG ĐẬM VỊ</h1>
            
            <div className="mv-tags">
              <span className="mv-tag">PHOTOGRAPHER</span>
            </div>
          </div>
        </div>

        {/* 3. Phần Trung Thu */}
        <div className="mv-section-block">
          <StoryboardGallery 
            images={notTraStoryboardImages} 
            title="Trung Thu"
            visibleCount={5}
          />
        </div>

        {/* 3b. Mục Ngày 20/10 - Nốt Trà */}
        <div className="mv-section-block">
          <StoryboardGallery
            images={ngay2010StoryboardImages}
            title="Ngày 20/10"
            visibleCount={5}
          />
        </div>

        {/* 3c. Mục Daily - Nốt Trà (Bố cục Bento Spotlight) */}
        <div className="mv-section-block">
          <StoryboardGallery
            images={dailyStoryboardImages}
            title="Daily"
            bentoVariant="spotlight"
            visibleCount={5}
          />
        </div>

        {/* Khối thông tin dự án (Intro phía trên Photoshoot) */}
        <div className="mv-intro-block">
          <div className="mv-intro-left">
            <img 
              src="/dan-lat-banner.png" 
              alt="Đan Lát Café - Thu Đầy Giỏ" 
              className="mv-cover-img mv-cover-img--wide" 
            />
          </div>
          <div className="mv-intro-right">
            <h1 className="mv-project-title">| ĐAN LÁT CAFÉ</h1>
            
            <div className="mv-tags">
              <span className="mv-tag">VIDEOGRAPHER</span>
              <span className="mv-tag">PHOTOGRAPHER</span>
            </div>
          </div>
        </div>

        {/* 4. Phần Photographer - Đan Lát Café */}
        <div className="mv-section-block">
          <StoryboardGallery
            images={notTraStoryboardImages}
            title="Photographer"
            visibleCount={5}
          />
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