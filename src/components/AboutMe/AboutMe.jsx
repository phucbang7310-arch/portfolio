import React from 'react';
import './AboutMe.css';

function AboutMe() {
  return (
    <section className="about-section">
      <div className="about-container">
        
        {/* Khối bên trái: Ảnh Mockup Hộp sữa */}
        <div className="about-left">
          <img 
            src="https://images.unsplash.com/photo-1563227812-0ea4c22e6cc8?q=80&w=1000" /* Bạn thay bằng link ảnh hộp sữa của bạn ở đây */
            alt="Creative Milk Carton Mockup" 
            className="mockup-image"
          />
        </div>

        {/* Khối bên phải: Nội dung Text & Icons */}
        <div className="about-right">
          <h1 className="greeting-text">Xin chào!</h1>
          
          <div className="bio-text">
            <p>
              I am <strong>Trung Hậu, aka Borica</strong>, a Creative Designer with over two years of 
              professional experience as a freelance designer, working with both large 
              and small agencies. Recently, I have been working at Biz-Eyes Agency, 
              which specializes in providing creative services to clients in Vietnam.
            </p>
            <p>
              To me, coming up with ideas is important, but it is equally essential to 
              balance creativity with a structured process. I see myself as a designer 
              who loves telling stories—using visuals not just to decorate, but to 
              communicate meaning and connect with people.
            </p>
          </div>

          <hr className="divider-line" />

          {/* Hàng chứa các công cụ phần mềm */}
          <div className="tools-grid">
            <div className="tool-column">
              <h3>Design Tools:</h3>
              <div className="icon-group">
                {/* Thay thế chữ bằng icon thật hoặc ảnh vuông màu cam nếu cần */}
                <span className="tool-icon">Ps</span>
                <span className="tool-icon">Ai</span>
                <span className="tool-icon">Id</span>
                <span className="tool-icon">Ae</span>
                <span className="tool-icon">Dn</span>
                <span className="tool-icon-round">F</span>
              </div>
            </div>
            
            <div className="tool-column">
              <h3>AI Generator:</h3>
              <div className="icon-group">
                <span className="tool-icon-round">MJ</span>
                <span className="tool-icon-round">F</span>
                <span className="tool-icon-round">~</span>
                <span className="tool-icon-round">✦</span>
                <span className="tool-icon-round">L</span>
                <span className="tool-icon-round">GPT</span>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}

export default AboutMe;