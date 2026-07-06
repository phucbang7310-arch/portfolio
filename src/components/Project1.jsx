import React from 'react';

const Project1 = () => {
  return (
    <div className="project1">
      <div style={{ height: '40px' }}></div>
      <div className="section-header">
        <h2>PROJECT 1</h2>
      </div>
      
      <div className="project1-img-wrap">
        <img src="/project1.png" alt="Fashion Photography" />
      </div>
      
      <div className="project1-desc">
        <p>
          Dự án chụp ảnh thời trang nghệ thuật với phong cách brutalist. 
          Sự tương phản giữa màu đỏ rực rỡ của trang phục và sự lạnh lẽo của những bức tường bê tông tạo nên một tác phẩm đầy ấn tượng và hiện đại.
        </p>
      </div>
    </div>
  );
};

export default Project1;
