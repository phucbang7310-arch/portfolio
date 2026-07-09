import React, { useState } from 'react';
import { Heart, ThumbsUp, MessageSquare, Share2 } from 'lucide-react';

const Project2 = () => {
  const [likes, setLikes] = useState(128);
  const [hearts, setHearts] = useState(94);
  const [liked, setLiked] = useState(false);
  const [hearted, setHearted] = useState(false);

  return (
    <section id="project-02" className="project2-section">
      <div className="project2-banner">
        <div className="project2-number">02</div>
        <div className="project2-header">
          <div className="project2-tag">BRAND INTEGRATED CAMPAIGN</div>
          <h2 className="project2-title">ĐƯỜNG BIÊN HÒA TẾT 2026</h2>
          <p className="project2-accent-phrase">cho tết thêm <span className="cursive-text">ngọt lành</span></p>
        </div>
      </div>

      <div className="project2-grid">
        {/* Left Column: Details */}
        <div className="project2-info">
          <div className="project-meta-table">
            <div className="meta-row">
              <span className="meta-label">ROLE:</span>
              <span className="meta-value">Lead Graphic Designer</span>
            </div>
            <div className="meta-row">
              <span className="meta-label">CLIENT:</span>
              <span className="meta-value">Agris Biên Hòa Sugar</span>
            </div>
            <div className="meta-row">
              <span className="meta-label">DELIVERABLES:</span>
              <span className="meta-value">Key Visual, Microsite, Social Content Kit</span>
            </div>
          </div>

          <p className="project2-desc">
            Chiến dịch Tết 2026 mang thông điệp ấm áp gắn kết gia đình. Lấy cảm hứng từ những khoảnh khắc ngọt ngào của ngày Tết Việt Nam, 
            thiết kế sử dụng tông màu ấm đầy sức sống để tạo nên các trải nghiệm kỹ thuật số (Microsite) kết hợp với các bài đăng truyền thông xã hội.
          </p>

          <div className="project2-features">
            <div className="feat-item">
              <h4>Microsite Landing Page</h4>
              <p>Giao diện trang web trực quan cho phép người dùng gửi lời chúc mừng Tết trực tuyến và chơi minigame may mắn.</p>
            </div>
            <div className="feat-item">
              <h4>Social Adaptations</h4>
              <p>Tối ưu hóa hình ảnh cho định dạng story 9:16 và bài viết chuẩn 1:1, phân phối đa kênh Facebook, TikTok và Zalo.</p>
            </div>
          </div>
        </div>

        {/* Right Column: Dynamic Visual Presentation */}
        <div className="project2-visuals">
          <div className="campaign-mockup-container">
            {/* Background elements */}
            <div className="canvas-dots"></div>
            
            {/* Primary Overlapping Images */}
            <div className="polaroid-frame polaroid-1">
              <img src="/project2.png" alt="Agris Bien Hoa Tet Key Visual" />
              <div className="polaroid-caption">Campaign Key Visual 2026</div>
            </div>
            
            <div className="polaroid-frame polaroid-2">
              <img src="/about.png" alt="Microsite Interactive User Flow" />
              <div className="polaroid-caption">Microsite Design Showcase</div>
            </div>

            {/* Interactive Floating Reactions mimicking social campaigns */}
            <button 
              className={`floating-reaction react-like ${liked ? 'active' : ''}`}
              onClick={() => {
                setLikes(liked ? likes - 1 : likes + 1);
                setLiked(!liked);
              }}
            >
              <ThumbsUp size={16} fill={liked ? "#1877F2" : "none"} color={liked ? "#1877F2" : "#555"} />
              <span>{likes}</span>
            </button>

            <button 
              className={`floating-reaction react-heart ${hearted ? 'active' : ''}`}
              onClick={() => {
                setHearts(hearted ? hearts - 1 : hearts + 1);
                setHearted(!hearted);
              }}
            >
              <Heart size={16} fill={hearted ? "#F02849" : "none"} color={hearted ? "#F02849" : "#555"} />
              <span>{hearts}</span>
            </button>

            {/* Decorative items */}
            <div className="deco-blob blob-gold"></div>
            <div className="deco-blob blob-green"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Project2;
