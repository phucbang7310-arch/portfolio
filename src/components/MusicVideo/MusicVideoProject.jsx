import React from 'react';
import StoryboardGallery from '../common/StoryboardGallery';
import { notTraStoryboardImages } from '../../data/notTraStoryboardData';
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

        {/* 3. Phần Photographer (Thanh trượt đại diện 5 ảnh, hover zoom, xem trọn bộ qua lightbox) */}
        <div className="mv-section-block">
          <StoryboardGallery 
            images={notTraStoryboardImages} 
            title="Photographer"
            visibleCount={5}
          />
        </div>

        {/* Khối thông tin dự án (Intro phía trên Photoshoot) */}
        <div className="mv-intro-block">
          <div className="mv-intro-left">
            <img 
              src="https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?q=80&w=600" 
              alt="Project Cover" 
              className="mv-cover-img" 
            />
          </div>
          <div className="mv-intro-right">
            <h1 className="mv-project-title">| MUSIC VIDEO</h1>
            
            <div className="mv-tags">
              <span className="mv-tag">VIDEOGRAPHER</span>
            </div>
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