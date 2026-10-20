import StoryboardGallery from '../common/StoryboardGallery';

const mgStoryboardImages = [
  { id: 1, src: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=1200", title: "Storyboard 1", alt: "Storyboard Frame 1" },
  { id: 2, src: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=1200", title: "Storyboard 2", alt: "Storyboard Frame 2" },
  { id: 3, src: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=1200", title: "Storyboard 3", alt: "Storyboard Frame 3" },
  { id: 4, src: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=1200", title: "Storyboard 4", alt: "Storyboard Frame 4" },
  { id: 5, src: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=1200", title: "Storyboard 5", alt: "Storyboard Frame 5" },
  { id: 6, src: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=1200", title: "Storyboard 6", alt: "Storyboard Frame 6" },
  { id: 7, src: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=1200", title: "Storyboard 7", alt: "Storyboard Frame 7" },
  { id: 8, src: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=1200", title: "Storyboard 8", alt: "Storyboard Frame 8" },
];

const mgDesignImages = [
  { id: 1, src: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?q=80&w=1200", title: "Design 1", alt: "Design Asset 1" },
  { id: 2, src: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?q=80&w=1200", title: "Design 2", alt: "Design Asset 2" },
  { id: 3, src: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?q=80&w=1200", title: "Design 3", alt: "Design Asset 3" },
  { id: 4, src: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?q=80&w=1200", title: "Design 4", alt: "Design Asset 4" },
  { id: 5, src: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?q=80&w=1200", title: "Design 5", alt: "Design Asset 5" },
  { id: 6, src: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?q=80&w=1200", title: "Design 6", alt: "Design Asset 6" },
  { id: 7, src: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?q=80&w=1200", title: "Design 7", alt: "Design Asset 7" },
  { id: 8, src: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?q=80&w=1200", title: "Design 8", alt: "Design Asset 8" },
];

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

        {/* 3. Phân đoạn Storyboard (Thanh trượt 5 ảnh đại diện, hover zoom, xem trọn bộ qua modal) */}
        <div className="mg-section-block">
          <StoryboardGallery 
            images={mgStoryboardImages} 
            title="Storyboard"
            visibleCount={5}
          />
        </div>

        {/* 4. Phân đoạn Design (Thanh trượt 5 ảnh đại diện, hover zoom, xem trọn bộ qua modal) */}
        <div className="mg-section-block">
          <StoryboardGallery 
            images={mgDesignImages} 
            title="Design"
            visibleCount={5}
          />
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