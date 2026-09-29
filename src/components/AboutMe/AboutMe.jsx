import React from 'react';
import './AboutMe.css';

function AboutMe() {
  return (
    <section className="about-section">
      <div className="about-container">
        
        {/* Khối bên trái: Ảnh đại diện / About me */}
        <div className="about-left">
          <img 
            src="/about_me.png"
            alt="Anh Thơ - About Me" 
            className="mockup-image"
          />
        </div>

        {/* Khối bên phải: Nội dung Text & Icons */}
        <div className="about-right">
          <h1 className="greeting-text">Xin chào!</h1>
          
          <div className="bio-text">
            <p>
              Tôi là <strong>Anh Thơ</strong>, <strong>Creative Media Freelancer</strong>, tập trung vào truyền thông sáng tạo và đặc biệt là truyền thông hình ảnh. Tôi từng có cơ hội làm việc tại các công ty và agency chuyên cung cấp dịch vụ sáng tạo, qua đó được tiếp cận với nhiều dự án, khách hàng và môi trường làm việc khác nhau.
            </p>
            <p>
              Xuất phát điểm từ lĩnh vực <strong>Graphic Design</strong>, tôi luôn duy trì tinh thần chủ động học hỏi và sẵn sàng mở rộng phạm vi chuyên môn. Khả năng thích ứng nhanh giúp tôi có cơ hội trải nghiệm nhiều vai trò khác nhau trong lĩnh vực truyền thông và sản xuất nội dung, từ <strong>Photographer</strong>, <strong>Designer</strong>, <strong>TikTok Editor</strong> đến quản lý và phát triển nội dung trên các nền tảng mạng xã hội như TikTok và Facebook.
            </p>
            <p>
              Trong hơn một năm gần đây, tôi tập trung làm việc trong môi trường <strong>Production House</strong>, có cơ hội tham gia sâu hơn vào quy trình sản xuất và phát triển ý tưởng. Hiện tại, với vai trò <strong>Freelancer</strong>, tôi tham gia ở nhiều vị trí như <strong>Photographer</strong>, <strong>Director Assistant</strong>, <strong>Production Assistant</strong> và <strong>Creative Concept</strong>, tùy theo yêu cầu và đặc thù của từng dự án.
            </p>
            <p>
              Với nền tảng đa lĩnh vực cùng khả năng thích nghi và kết nối các khâu trong quá trình sáng tạo, tôi hướng đến việc tạo ra những sản phẩm hình ảnh vừa có tính thẩm mỹ, vừa truyền tải rõ ràng tinh thần và câu chuyện của dự án.
            </p>
          </div>

          <hr className="divider-line" />

          {/* Hàng chứa các công cụ phần mềm / Skill */}
          <div className="tools-grid">
            <div className="tool-column">
              <h3>Skill:</h3>
              <div className="icon-group">
                <span className="tool-icon">Ps</span>
                <span className="tool-icon">Ai</span>
                <span className="tool-icon">Pr</span>
                <span className="tool-icon">Ae</span>
                <span className="tool-icon">Capcut</span>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}

export default AboutMe;