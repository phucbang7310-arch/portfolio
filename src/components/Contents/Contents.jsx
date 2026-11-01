import React from 'react';
import './Contents.css';

function Contents({ onSelectPhotographer }) {
  const items = [
    { id: '01', title: 'Photographer' },
    { id: '02', title: 'Videographer' },
    { id: '03', title: 'Creative Concept' },
    { id: '04', title: 'Production Assistant' },
    { id: '05', title: 'Editor' },
    { id: '06', title: 'Project Manager' },
  ];

  const handleClickItem = (id) => {
    if (id === '01') {
      if (onSelectPhotographer) {
        onSelectPhotographer();
      } else {
        document.getElementById('photographer-section')?.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <section className="contents-section">
      {/* Tạm thời bọc thẻ img bằng điều kiện hoặc comment lại nếu bạn chưa cắt ảnh */}
      <div className="contents-banner">
        <img 
          src="/contents-banner.png" 
          alt="Contents" 
          className="banner-img"
          onError={(e) => e.target.style.display = 'none'} /* Nếu lỗi ảnh thì ẩn đi, không làm vỡ layout */
        />
      </div>

      <div className="contents-grid-container">
        {/* Đường kẻ ngang chạy phía sau */}
        <div className="bg-lines">
          <div className="line"></div>
          <div className="line"></div>
          <div className="line"></div>
        </div>

        {/* Khối danh mục số */}
        <div className="contents-grid">
          {items.map((item) => (
            <div 
              key={item.id} 
              className={`contents-item ${item.id === '01' ? 'contents-item-clickable' : ''}`}
              onClick={() => handleClickItem(item.id)}
              title={item.id === '01' ? 'Nhấp để cuộn tới mục Photographer' : undefined}
            >
              <div className="item-number">{item.id}</div>
              <div className="item-title">{item.title}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Contents;