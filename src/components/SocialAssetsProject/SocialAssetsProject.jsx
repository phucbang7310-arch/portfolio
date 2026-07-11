import React from 'react';
import './SocialAssetsProject.css';

function SocialAssetsProject() {
  return (
    <section className="sa-project-section">
      {/* 1. Tiêu đề Social Assets chữ nghệ thuật uốn lượn căn giữa */}
      <div className="sa-banner-text-wrapper">
        <h1 className="sa-text-title-script">Social Assets</h1>
      </div>

      <div className="sa-content-container">
        {/* 2. Khối thông tin chung (Intro) */}
        <div className="sa-intro-block">
          <div className="sa-intro-left">
            {/* Logo hoặc Thumbnail thương hiệu dạng khối màu đặc trưng */}
            <div className="sa-brand-logo-wrapper">
              <img 
                src="https://images.unsplash.com/photo-1531403009284-440f080d1e12?q=80&w=600" /* Bạn thay bằng ảnh logo màu xanh lục của Biên Hòa */
                alt="Đường Biên Hòa Logo" 
                className="sa-brand-logo-img" 
              />
            </div>
          </div>
          <div className="sa-intro-right">
            <span className="sa-category">Social Post</span>
            <h1 className="sa-project-title">| ĐƯỜNG BIÊN HÒA</h1>
            
            <div className="sa-tags">
              <span className="sa-tag">Generate AI</span>
              <span className="sa-tag">Social Post</span>
              <span className="sa-tag">Graphic Design</span>
            </div>

            <div className="sa-description">
              <p><strong>Đường Biên Hòa</strong> is a trusted food brand with over 50 years of establishment and development, founded in 1969. Across generations, Biên Hòa has remained steadfast in its commitment to delivering safe, high-quality, and nutritious food products for Vietnamese families. Đường Biên Hòa continues to support everyday family meals by combining traditional flavors with modern food safety standards.</p>
            </div>
          </div>
        </div>

        {/* 3. Phần lưới hiển thị các bài viết Social Post (2 cột tỉ lệ 1x1 chuẩn bài đăng) */}
        <div className="sa-section-block">
          <h2 className="sa-sub-title">Social Post</h2>
          <div className="sa-posts-grid">
            <div className="sa-post-item">
              <img 
                src="https://images.unsplash.com/photo-1542838132-92c53300491e?q=80&w=600" /* Thay bằng ảnh Social Post 1 (Tự hào 3 năm...) */
                alt="Social Post Hàng Việt Nam Chất Lượng Cao" 
              />
            </div>
            <div className="sa-post-item">
              <img 
                src="https://images.unsplash.com/photo-1506368249639-73a05d6f6488?q=80&w=600" /* Thay bằng ảnh Social Post 2 (Đường Organic...) */
                alt="Social Post Đường Organic" 
              />
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}

export default SocialAssetsProject;