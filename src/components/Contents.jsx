import React from 'react';

const items = [
  { num: '01', label: 'Music Video' },
  { num: '02', label: 'Campaign' },
  { num: '03', label: 'Event' },
  { num: '04', label: 'Social Assets' },
  { num: '05', label: 'Printing' },
  { num: '06', label: 'Motion Graphic' },
];

const Contents = () => (
  <section id="contents" className="contents-section">
    <div className="contents-heading-row">
      <h2 className="contents-big-title">CONTENTS</h2>
      <div className="contents-cursor-wrap">
        <svg viewBox="0 0 24 28" width="52" height="52" fill="white">
          <path d="M3 1 L3 22 L8 16 L11.5 24.5 L14.5 23.2 L11 14.8 L18 14.8 Z" />
        </svg>
      </div>
    </div>
    <div className="contents-grid">
      {items.map(item => (
        <div key={item.num} className="contents-cell">
          <span className="contents-cell-num">{item.num}</span>
          <span className="contents-cell-label">{item.label}</span>
        </div>
      ))}
    </div>
  </section>
);

export default Contents;
