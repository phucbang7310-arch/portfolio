import React from 'react';
import './PrintingProject.css';

function PrintingProject() {
  return (
    <section className="print-project-section">
      {/* 1. Tiêu đề Printing chữ nghệ thuật uốn lượn căn giữa */}
      <div className="print-banner-text-wrapper">
        <h1 className="print-text-title-script">Printing</h1>
      </div>

      <div className="print-content-container">
        {/* 2. Khối thông tin chung (Intro) */}
        <div className="print-intro-block">
          <div className="print-intro-left">
            {/* Khối logo thương hiệu màu xanh neon đặc trưng của Muzify */}
            <div className="print-brand-logo-wrapper">
              <img 
                src="https://images.unsplash.com/photo-1614680376593-902f74fa0d41?q=80&w=600" /* Thay bằng ảnh logo MUZIFY màu xanh lục/vàng chanh của bạn */
                alt="Muzify Logo" 
                className="print-brand-logo-img" 
              />
            </div>
          </div>
          <div className="print-intro-right">
            <span className="print-category">Music Magazine</span>
            <h1 className="print-project-title">| MAGAZINE BY SPOTIFY</h1>
            
            <div className="print-tags">
              <span className="print-tag">Layout</span>
              <span className="print-tag">Magazine</span>
            </div>

            <div className="print-description">
              <p><strong>MUZIFY (Music Magazine by Spotify)</strong> is a music magazine sponsored by the online music streaming platform Spotify. The magazine's graphic system is inspired by the design look of Spotify. Thanks, 2018. It's Basic, Select Campaign's Film Design specifically in the campaign use a daring duotone effect. A collaboration between two artists representing a brand new personality.</p>
            </div>
          </div>
        </div>

        {/* 3. Phần trưng bày ấn phẩm Magazine Layout */}
        <div className="print-section-block">
          <h2 className="print-sub-title">Magazine</h2>
          
          <div className="magazine-display-grid">
            {/* Ảnh lớn 1: Cầm quyển tạp chí trên tay */}
            <div className="mag-row-full">
              <img src="https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?q=80&w=1200" alt="Muzify Magazine Cover Handheld" />
            </div>

            {/* Ảnh lớn 2: Các trang nội dung trải đều trên nền xanh lục */}
            <div className="mag-row-full">
              <img src="https://images.unsplash.com/photo-1532155294679-26811f1f4865?q=80&w=1200" alt="Muzify Pages Topdown View" />
            </div>

            {/* Lưới 3 ảnh chi tiết ở dưới cùng (1 dọc bên trái, 2 vuông chồng lên nhau bên phải) */}
            <div className="mag-bottom-mix-grid">
              <div className="mag-mix-left">
                <img src="https://images.unsplash.com/photo-1589829085413-56de8ae18c73?q=80&w=500" alt="MONO Poster Layout" />
              </div>
              <div className="mag-mix-right">
                <img src="https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=600" alt="Content Page Detail" />
                <img src="https://images.unsplash.com/photo-1618005198143-e5283b019a7f?q=80&w=600" alt="Grid Pages Detail" />
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}

export default PrintingProject;