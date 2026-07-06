import React from 'react';
import { Phone, Mail, Facebook, Briefcase, Users } from 'lucide-react';

const About = () => {
  return (
    <div className="about-section">
      <div className="section-header about-hdr">
        <h2>ABOUT ME</h2>
      </div>
      
      <div className="about-red-block">
        <img src="/about.png" alt="Quirky Collage Portrait" className="about-image" />
      </div>

      <div className="about-content">
        <h3 style={{ marginBottom: '15px', color: '#1D1D1B' }}>HI! I'M NGUYỄN THỊ ANH THƠ</h3>
        <p>
          Tôi là một Creative Media với niềm đam mê sâu sắc dành cho nghệ thuật thị giác và nhiếp ảnh. 
          Phong cách của tôi là sự pha trộn giữa hiện đại, tối giản và những điểm nhấn màu sắc mạnh mẽ. 
          Tôi luôn tìm kiếm những góc nhìn mới lạ để kể những câu chuyện độc đáo qua từng bức ảnh.
        </p>
        
        <div className="contact-info">
          <div className="contact-item">
            <Phone size={20} color="#C92026" />
            <a href="tel:0983967621">0983 967 621</a>
          </div>
          <div className="contact-item">
            <Mail size={20} color="#C92026" />
            <a href="mailto:nguyenthianhtho@gmail.com">nguyenthianhtho@gmail.com</a>
          </div>
          <div className="contact-item">
            <Facebook size={20} color="#C92026" />
            <a href="#" target="_blank" rel="noopener noreferrer">Facebook Profile</a>
          </div>
        </div>

        <div className="stats">
          <div className="stat-item">
            <h3>2+</h3>
            <p>Năm Kinh Nghiệm</p>
          </div>
          <div className="stat-item">
            <h3>20+</h3>
            <p>Dự Án Hoàn Thành</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
