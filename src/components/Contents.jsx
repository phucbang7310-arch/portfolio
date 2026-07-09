import React from 'react';

const Contents = () => {
  const handleScroll = (e, id) => {
    e.preventDefault();
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const sections = [
    { num: '01', title: 'Music Video', hasAnchor: true, targetId: 'project-01', desc: 'GIỮ SỰC KHỎE EM ƠI' },
    { num: '02', title: 'Campaign', hasAnchor: true, targetId: 'project-02', desc: 'ĐƯỜNG BIÊN HÒA TẾT 2026' },
    { num: '03', title: 'Cinematic & Art', hasAnchor: true, targetId: 'project-03', desc: 'CYBERPUNK NEON GLOW' },
    { num: '04', title: 'Social Assets', hasAnchor: false, desc: 'Facebook & TikTok Post Ads' },
    { num: '05', title: 'Printing & Layout', hasAnchor: false, desc: 'Editorial & Event Tickets' },
    { num: '06', title: 'Motion Graphic', hasAnchor: false, desc: 'TVC Reels & Storyboards' },
  ];

  return (
    <section id="contents" className="contents-section">
      <div className="contents-wrapper">
        <div className="contents-title-area">
          <h2 className="contents-outline-title">INDEX</h2>
          <h1 className="contents-main-title">CONTENTS</h1>
        </div>

        <div className="contents-grid">
          {sections.map((sec, idx) => (
            <div key={idx} className={`contents-card ${sec.hasAnchor ? 'contents-card--clickable' : ''}`}>
              {sec.hasAnchor ? (
                <a href={`#${sec.targetId}`} onClick={(e) => handleScroll(e, sec.targetId)} className="contents-card-link">
                  <div className="card-top">
                    <span className="card-num">{sec.num}</span>
                    <span className="card-indicator">→ VIEW CASE</span>
                  </div>
                  <h3 className="card-title">{sec.title}</h3>
                  <p className="card-desc">{sec.desc}</p>
                </a>
              ) : (
                <div className="contents-card-static">
                  <div className="card-top">
                    <span className="card-num">{sec.num}</span>
                    <span className="card-indicator static-ind">• PREVIEW OUTLINE</span>
                  </div>
                  <h3 className="card-title">{sec.title}</h3>
                  <p className="card-desc">{sec.desc}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Contents;
