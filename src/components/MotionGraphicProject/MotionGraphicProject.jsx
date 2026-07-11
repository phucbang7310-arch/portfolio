import React from 'react';
import './MotionGraphicProject.css';

function MotionGraphicProject() {
  return (
    <section className="mg-project-section">
      {/* 1. Tiêu đề Motion Graphic chữ nghệ thuật uốn lượn căn giữa */}
      <div className="mg-banner-text-wrapper">
        <h1 className="mg-text-title-script">Motion Graphic</h1>
      </div>

      <div className="mg-content-container">
        {/* 2. Khối thông tin chung (Intro) */}
        <div className="mg-intro-block">
          <div className="mg-intro-left">
            {/* Khối chứa logo Bánh Mì Ơi màu đỏ/vàng đặc trưng */}
            <div className="mg-brand-logo-wrapper">
              <img 
                src="https://images.unsplash.com/photo-1509440159596-0249088772ff?q=80&w=600" /* Thay bằng ảnh logo BANH MI OI thật của bạn */
                alt="Bánh Mì Ơi Logo" 
                className="mg-brand-logo-img" 
              />
            </div>
          </div>
          <div className="mg-intro-right">
            <span className="mg-category">2D Motion Graphics</span>
            <h1 className="mg-project-title">| BÁNH MÌ ƠI’S VIDEO ADS</h1>
            
            <div className="mg-tags">
              <span className="mg-tag">Storyboard</span>
              <span className="mg-tag">2D Motion Graphics</span>
            </div>

            <div className="mg-description">
              <p><strong>“Bánh Mì Ơi”</strong>, a popular banh mi brand in Ho Chi Minh City. “Bánh Mì Ơi” has a modern and fresh brand identity. Its unique banh mi, made from special ingredients, offers an exceptional culinary experience. The creativity behind both the brand identity and flavors has successfully attracted the affection of many customers.</p>
            </div>
          </div>
        </div>

        {/* 3. Phân đoạn Storyboard (Lưới 4 cột ảnh phác thảo phác thảo sketch trắng đen) */}
        <div className="mg-section-block">
          <h2 className="mg-sub-title">Storyboard</h2>
          <div className="mg-storyboard-grid">
            <div className="mg-sb-item"><img src="https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=400" alt="Storyboard 1" /></div>
            <div className="mg-sb-item"><img src="https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=400" alt="Storyboard 2" /></div>
            <div className="mg-sb-item"><img src="https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=400" alt="Storyboard 3" /></div>
            <div className="mg-sb-item"><img src="https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=400" alt="Storyboard 4" /></div>
            <div className="mg-sb-item"><img src="https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=400" alt="Storyboard 5" /></div>
            <div className="mg-sb-item"><img src="https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=400" alt="Storyboard 6" /></div>
            <div className="mg-sb-item"><img src="https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=400" alt="Storyboard 7" /></div>
            <div className="mg-sb-item"><img src="https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=400" alt="Storyboard 8" /></div>
          </div>
        </div>

        {/* 4. Phân đoạn Design (Lưới 4 cột ảnh màu sắc hoàn thiện) */}
        <div className="mg-section-block">
          <h2 className="mg-sub-title">Design</h2>
          <div className="mg-design-grid">
            <div className="mg-ds-item"><img src="https://images.unsplash.com/photo-1504674900247-0877df9cc836?q=80&w=400" alt="Design 1" /></div>
            <div className="mg-ds-item"><img src="https://images.unsplash.com/photo-1504674900247-0877df9cc836?q=80&w=400" alt="Design 2" /></div>
            <div className="mg-ds-item"><img src="https://images.unsplash.com/photo-1504674900247-0877df9cc836?q=80&w=400" alt="Design 3" /></div>
            <div className="mg-ds-item"><img src="https://images.unsplash.com/photo-1504674900247-0877df9cc836?q=80&w=400" alt="Design 4" /></div>
            <div className="mg-ds-item"><img src="https://images.unsplash.com/photo-1504674900247-0877df9cc836?q=80&w=400" alt="Design 5" /></div>
            <div className="mg-ds-item"><img src="https://images.unsplash.com/photo-1504674900247-0877df9cc836?q=80&w=400" alt="Design 6" /></div>
            <div className="mg-ds-item"><img src="https://images.unsplash.com/photo-1504674900247-0877df9cc836?q=80&w=400" alt="Design 7" /></div>
            <div className="mg-ds-item"><img src="https://images.unsplash.com/photo-1504674900247-0877df9cc836?q=80&w=400" alt="Design 8" /></div>
          </div>
        </div>

        {/* 5. Phân đoạn Mockup Laptop (3 máy xếp hàng ngang, máy giữa to hơn) */}
        <div className="mg-section-block">
          <h2 className="mg-sub-title">Advertisement Motion Graphic</h2>
          <div className="mg-laptop-mockup-row">
            <div className="laptop-item side"><img src="https://images.unsplash.com/photo-1531297484001-80022131f5a1?q=80&w=500" alt="Laptop Left" /></div>
            <div className="laptop-item center"><img src="https://images.unsplash.com/photo-1531297484001-80022131f5a1?q=80&w=600" alt="Laptop Center" /></div>
            <div className="laptop-item side"><img src="https://images.unsplash.com/photo-1531297484001-80022131f5a1?q=80&w=500" alt="Laptop Right" /></div>
          </div>
        </div>

        {/* 6. Phần Phát Video Ads trực tiếp từ Youtube */}
        <div className="mg-section-block">
          <h2 className="mg-sub-title">Watch Motion Video</h2>
          <div className="mg-video-responsive-container">
            <iframe
              src="https://www.youtube.com/embed/dQw4w9WgXcQ" 
              title="Bánh Mì Ơi Motion Graphic Video Ads"
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

export default MotionGraphicProject;