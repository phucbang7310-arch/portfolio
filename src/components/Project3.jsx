import React from 'react';
import { Cpu, Maximize2, Layers, Sun } from 'lucide-react';

const Project3 = () => {
  return (
    <section id="project-03" className="project3-section">
      <div className="project3-hud-grid">
        <div className="hud-line vertical hl-left"></div>
        <div className="hud-line vertical hl-right"></div>
        <div className="hud-line horizontal hl-top"></div>
        <div className="hud-line horizontal hl-bottom"></div>

        <div className="project3-banner">
          <div className="project3-number">03</div>
          <div className="project3-header">
            <div className="project3-tag neon-shine">CINEMATIC & ART EXPERIMENTAL</div>
            <h2 className="project3-title">CYBERPUNK NEON GLOW</h2>
          </div>
        </div>

        <div className="project3-widescreen-showcase">
          <div className="widescreen-frame">
            <img src="/project3.png" alt="Cyberpunk Neon Portrait Artwork" />
            <div className="widescreen-overlay-grid"></div>
            
            {/* Tech stats on top of the image */}
            <div className="tech-hud-stats">
              <div className="stat-node">
                <span className="node-label">SYS_STATUS</span>
                <span className="node-val neon-green">ONLINE</span>
              </div>
              <div className="stat-node">
                <span className="node-label">EXPOSURE</span>
                <span className="node-val">F/1.8 · 1/160S</span>
              </div>
              <div className="stat-node">
                <span className="node-label">ISO_VALUE</span>
                <span className="node-val">400</span>
              </div>
            </div>
          </div>
        </div>

        <div className="project3-meta-columns">
          <div className="project3-details-col">
            <h3>THE CONCEPT</h3>
            <p>
              Dự án mang đậm chất cinematic và cyberpunk huyền ảo. Ánh sáng neon xanh lơ và đỏ kết hợp để tạo ra chiều sâu không gian tương lai đầy mê hoặc.
              Chúng tôi thử nghiệm với sự tương phản cao độ giữa các bóng đổ thô ráp và độ rực rỡ của các bước sóng ánh sáng.
            </p>
          </div>
          <div className="project3-specs-col">
            <h3>SPECIFICATIONS</h3>
            <ul className="spec-list">
              <li>
                <Cpu size={16} className="neon-cyan" />
                <span>Render Engine: Octane / Cinema 4D</span>
              </li>
              <li>
                <Layers size={16} className="neon-pink" />
                <span>Color Grading: ACES Workflow</span>
              </li>
              <li>
                <Sun size={16} className="neon-yellow" />
                <span>Post-Processing: Adobe Photoshop</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Project3;
