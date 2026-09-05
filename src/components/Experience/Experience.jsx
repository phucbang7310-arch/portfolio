import React from 'react';
import './Experience.css';

function Experience() {
  return (
    <section className="exp-section">
      <div className="exp-container">
        
        {/* Tiêu đề chính */}
        <h1 className="exp-title">Work experience</h1>

        {/* Khối Timeline: Khuyên bạn cắt phần đồ họa timeline này ra thành file ảnh riêng */}
        <div className="timeline-wrapper">
          <img 
            src="/timeline.png" /* Thay đường dẫn ảnh timeline bạn đã cắt ở đây */
            alt="Experience Timeline" 
            className="timeline-graphics"
            onError={(e) => { e.currentTarget.style.display = 'none'; }}
          />
        </div>

        {/* Khối nội dung chia làm 2 cột */}
        <div className="exp-grid">
          
          {/* CỘT TRÁI */}
          <div className="exp-column">
            
            {/* Công việc 1: Freelancer */}
            <div className="exp-item">
              <span className="exp-date">(06/2024 - Nay)</span>
              <h2 className="exp-company">Freelancer</h2>
              <ul className="exp-bullets">
                <li>Videographer và editor cho 1 số thương hiệu như: Hapas, Mate Made, Uyển Vũ, Quán Cóc,...</li>
                <li>Photographer và Assistant cho 1 số campaign</li>
                <li>Làm Assistant Director và Assistant Production cho các dự án TVC và video quảng cáo,...</li>
                <li>Lên ý tưởng và setup các bộ ảnh private cá nhân</li>
                <li>Trợ lý KOLs</li>
              </ul>
            </div>

            {/* Công việc 2: Filmciti Production House */}
            <div className="exp-item">
              <span className="exp-date">(05/2024 - 01/2025)</span>
              <h2 className="exp-company">Filmciti Production House</h2>
              <ul className="exp-bullets">
                <li>Biên tập viên tiktok</li>
                <li>Project Manager cho 1 số dự án tiktok cá nhân</li>
                <li>Assistant Production cho một vài dự án TVC và video</li>
              </ul>
            </div>

            {/* Công việc 3: Công ty Cổ phần DCCR */}
            <div className="exp-item">
              <span className="exp-date">(02/2023 - 08/2023)</span>
              <h2 className="exp-company">Công ty Cổ phần DCCR</h2>
              <ul className="exp-bullets">
                <li>Thiết kế sản phẩm truyền thông, marketing,...</li>
                <li>Quay và edit video tiktok</li>
              </ul>
            </div>

          </div>

          {/* CỘT PHẢI */}
          <div className="exp-column">
            
            {/* Công việc 4: Multimedia */}
            <div className="exp-item">
              <span className="exp-date">(08/2022 - 01/2023)</span>
              <h2 className="exp-company">Multimedia</h2>
              <ul className="exp-bullets">
                <li>Hỗ trợ đón tiếp, điều phối và chăm sóc khách mời, đối tác trong suốt quá trình diễn ra sự kiện Aquafina Vietnam International Fashion Week từ năm 2022 - 2025</li>
                <li>Biên tập video highlight và nội dung truyền thông</li>
              </ul>
            </div>

            {/* Công việc 5: Công ty TNHH TM&DV Wing Group */}
            <div className="exp-item">
              <span className="exp-date">(04/2022 - 08/2022)</span>
              <h2 className="exp-company">Công ty TNHH TM&DV Wing Group</h2>
              <ul className="exp-bullets">
                <li>Thiết kế banner, ấn phẩm cho các cửa hàng trên sàn thương mại điện tử như: Lazada, Shopee,...</li>
              </ul>
            </div>

            {/* Công việc 6: Kel Agency */}
            <div className="exp-item">
              <span className="exp-date">(01/2022 - 03/2022)</span>
              <h2 className="exp-company">Kel Agency</h2>
              <ul className="exp-bullets">
                <li>Thiết kế ấn phẩm truyền thông, poster, banner,...</li>
              </ul>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}

export default Experience;