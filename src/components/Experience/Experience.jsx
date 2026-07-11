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
          />
        </div>

        {/* Khối nội dung chia làm 2 cột */}
        <div className="exp-grid">
          
          {/* CỘT TRÁI */}
          <div className="exp-column">
            
            {/* Công việc 1 */}
            <div className="exp-item">
              <span className="exp-date">/11.2025 - Now/</span>
              <h2 className="exp-company">Biz-Eyes Agency — <span className="exp-role">Creative Designer</span></h2>
              <p className="exp-desc">
                Biz-Eyes is an IMC agency in Vietnam, specializing in PR, content, social media, and digital marketing campaigns
              </p>
              <ul className="exp-bullets">
                <li>Collaborate with the concept team to brainstorm ideas and edit copy, ensuring that the visuals align with the message</li>
                <li>Create key visuals and design assets for PR, social media, and digital marketing campaigns</li>
                <li>Execute design adaptations and production-ready assets across multiple channels while maintaining visual consistency</li>
              </ul>
            </div>

            {/* Công việc 2 */}
            <div className="exp-item">
              <span className="exp-date">/01.2025 - 11.2025/</span>
              <h2 className="exp-company">InBold Agency — <span className="exp-role">Mid Level Designer</span></h2>
              <p className="exp-desc">
                InBold Agency is a Denmark-based creative agency
              </p>
              <ul className="exp-bullets">
                <li>Designed advertising content for social media platforms as well as various printed POSM materials</li>
                <li>Create guidelines/tutorials and train team members to use automatic tools (AI, script, action, extension, plugin, etc.)</li>
                <li>Regularly updated new guideline and new QC checklist assigned by superiors</li>
              </ul>
            </div>

          </div>

          {/* CỘT PHẢI */}
          <div className="exp-column">
            
            {/* Công việc 3 */}
            <div className="exp-item">
              <span className="exp-date">/2022 - Now/</span>
              <h2 className="exp-company">Freelancer</h2>
              <p className="exp-desc">
                Freelancer for agencies: Publicis Groupe Vietnam, VNGames, Zee Agency, and large businesses in Vietnam
              </p>
              <ul className="exp-bullets">
                <li>Design the visual identity system and key visuals for events under the supervision of the Art Director from the agency</li>
                <li>Work directly with marketing department heads to design a system of printed materials and communication assets</li>
                <li>Consult, advise, and design logos, printed materials, and brand identity systems for business owners in Vietnam</li>
              </ul>
            </div>

            {/* Công việc 4 */}
            <div className="exp-item">
              <span className="exp-date">/10.2023 - 12.2024/</span>
              <h2 className="exp-company">One Tech Medical — <span className="exp-role">Multimedia Designer</span></h2>
              <p className="exp-desc">
                Exclusive distributor of Neova, md:ceuticals, and Skinfill in Vietnam
              </p>
              <ul className="exp-bullets">
                <li>Create visuals for marketing campaigns such as posters, standees, backdrops, and most other important POSM</li>
                <li>Design advertising content for social media platforms such as Facebook, Instagram, TikTok, and YouTube</li>
                <li>Design motion graphics for advertisements and edit videos for KOLs, including Dermatologists and Aesthetic Surgeons</li>
              </ul>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}

export default Experience;