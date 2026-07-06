import React from 'react';

const Project23 = () => {
  return (
    <div className="p2-p3-container">
      <div className="project2">
        <div className="section-header">
          <h2>PROJECT 2</h2>
        </div>
        <div className="image-grid">
          <img src="/project2.png" alt="Project 2 detail" className="grid-img" />
          <img src="/about.png" alt="Project 2 detail" className="grid-img" />
          <div className="teal-square" style={{top: '30%', left: '40%', width: '15%', height: '15%', zIndex: 10}}></div>
          <div className="teal-square" style={{top: '60%', left: '20%', width: '15%', height: '15%', zIndex: 10}}></div>
        </div>
        <p className="project-text">
          Sử dụng các chất liệu độc đáo như vải đỏ, giấy để che khuất một phần khuôn mặt, 
          dự án khám phá những khía cạnh ẩn giấu của cảm xúc con người qua ống kính tối giản nhưng mạnh mẽ.
        </p>
      </div>

      <div className="project3">
        <div className="section-header">
          <h2>PROJECT 3</h2>
        </div>
        <p className="project-text" style={{marginTop: '20px', marginBottom: '20px', color: '#FFF'}}>
          Một dự án mang đậm chất cinematic và cyberpunk. Ánh sáng neon xanh lơ và đỏ được sử dụng để tạo ra một không gian tương lai đầy mê hoặc.
        </p>
        <img src="/project3.png" alt="Neon Project" className="single-img" />
        <div style={{width: '60%', height: '10px', backgroundColor: '#C92026', marginTop: '20px'}}></div>
      </div>
    </div>
  );
};

export default Project23;
