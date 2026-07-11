import React from 'react';
import './CampaignProjects.css';

function CampaignProjects() {
  return (
    <section className="camp-project-section">
      {/* 1. Tiêu đề Campaign chữ nghệ thuật căn giữa */}
      <div className="camp-banner-text-wrapper">
        <h1 className="camp-text-title-script">Campaign</h1>
      </div>

      <div className="camp-content-container">
        {/* 2. Khối thông tin chung (Intro) */}
        <div className="camp-intro-block">
          <div className="camp-intro-left">
            <img 
              src="https://images.unsplash.com/photo-1542744094-3a31f103e35f?q=80&w=600" 
              alt="Campaign Banner" 
              className="camp-cover-img" 
            />
          </div>
          <div className="camp-intro-right">
            <span className="camp-category">Đường Biên Hòa IMC</span>
            <h1 className="camp-project-title">| ĐƯỜNG BIÊN HÒA TẾT 2026</h1>
            
            <div className="camp-tags">
              <span className="camp-tag">Generate AI</span>
              <span className="camp-tag">Social Post</span>
              <span className="camp-tag">Adapt Key Visual</span>
              <span className="camp-tag">Graphic Design</span>
            </div>

            <div className="camp-description">
              <p>Tet campaign <strong>“Triệu điều nhỏ xíu mẹ làm cho Tết thêm ngọt lành”</strong> celebrates the small but meaningful actions mothers take to prepare the holiday. Through storytelling content and a short film, it honors mothers’ quiet dedication. </p>
              <p>The campaign was amplified on social media via KOLs, cooking challenges, and user-generated content. <strong>SOW:</strong> Adapt key visuals and develop social media posts for KWC.</p>
            </div>
          </div>
        </div>

        {/* 3. Phần Key Visual & Cover Facebook */}
        <div className="camp-section-block">
          <h2 className="camp-sub-title">Cover Facebook</h2>
          <div className="kv-wrapper">
            <img 
              src="https://images.unsplash.com/photo-1504384308090-c894fdcc538d?q=80&w=1200" 
              alt="Cover Facebook" 
              className="kv-img"
            />
          </div>
        </div>

        {/* 4. Phần Adapt Size 9x16 & 1x1 (2 cột đứng cạnh nhau) */}
        <div className="camp-section-block">
          <h2 className="camp-sub-title">Adapt 9x16 & 1x1</h2>
          <div className="adapt-size-grid">
            <div className="adapt-item ratio-9x16">
              <img src="https://images.unsplash.com/photo-1516035069371-29a1b244cc32?q=80&w=500" alt="Adapt 9x16" />
            </div>
            <div className="adapt-item ratio-1x1">
              <img src="https://images.unsplash.com/photo-1504384308090-c894fdcc538d?q=80&w=700" alt="Adapt 1x1" />
            </div>
          </div>
        </div>

        {/* 5. Phần TVC (Xem trực tiếp trên web) */}
        <div className="camp-section-block">
          <h2 className="camp-sub-title">TVC</h2>
          <div className="camp-video-container">
            <iframe
              src="https://www.youtube.com/embed/dQw4w9WgXcQ" 
              title="TVC Đường Biên Hòa Tết 2026"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            ></iframe>
          </div>
        </div>

        {/* 6. Phần Multi Post - Minigame & Recap (Xếp dọc liền mạch) */}
        <div className="camp-section-block">
          <h2 className="camp-sub-title">Multi Post - Minigame</h2>
          <div className="multipost-wrapper">
            <img src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1200" alt="Minigame Post" className="full-width-post-img" />
          </div>
        </div>

        <div className="camp-section-block">
          <h2 className="camp-sub-title">Multi Post - Recap Minigame</h2>
          <div className="multipost-wrapper">
            <img src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1200" alt="Recap Minigame Post" className="full-width-post-img" />
          </div>
        </div>

        {/* 7. Phần Microsite */}
        <div className="camp-section-block">
          <h2 className="camp-sub-title">Microsite Landing Page</h2>
          <div className="microsite-wrapper">
            <img src="https://images.unsplash.com/photo-1531403009284-440f080d1e12?q=80&w=1200" alt="Microsite Layout" className="kv-img" />
          </div>
        </div>

      </div>
    </section>
  );
}

export default CampaignProjects;