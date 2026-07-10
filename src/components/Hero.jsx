import React from 'react';

const Hero = () => (
  <section id="hero" className="hero-section">

    {/* ══ 1. COVER ══ */}
    <div className="hero-cover">
      <img src="/hero.png" alt="Borica — Creative Designer" className="hero-cover-img" />
      <div className="hero-cover-overlay" />

      {/* top bar */}
      <div className="hero-topbar">
        <span className="hero-topbar-name">BORICA</span>
        <span className="hero-topbar-divider" />
        <span className="hero-topbar-role">CREATIVE DESIGNER</span>
        <span className="hero-topbar-divider" />
        <span className="hero-topbar-year">2026</span>
      </div>

      {/* wordmark */}
      <div className="hero-wordmark">
        <h1 className="hero-portfolio-title">Portfolio</h1>
      </div>

      {/* bottom */}
      <div className="hero-bottombar">
        <span className="hero-scroll-hint">SCROLL TO EXPLORE ↓</span>
      </div>
    </div>

    {/* ══ 2. WELCOME STRIP ══ */}
    <div className="welcome-strip">
      <span className="welcome-cursive">Welcome to</span>

      <div className="welcome-icon-wrap">
        <svg viewBox="0 0 24 24" fill="currentColor">
          <path d="M13.5 5.5c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zM9.8 8.9L7 23h2.1l1.8-7.7 2.1 1.9V23h2v-7.5l-2.1-2 .6-3c1.3 1.5 3.3 2.5 5.5 2.5v-2c-1.9 0-3.5-1-4.3-2.4l-1-1.6c-.4-.6-1-1-1.7-1-.3 0-.5.1-.8.2L5 8.3V14h2V9.6l2.8-0.7z"/>
        </svg>
      </div>

      <div className="welcome-line-wrap">
        <span className="welcome-line" />
        <div className="welcome-cactus">
          <svg viewBox="0 0 24 24" fill="currentColor">
            <path d="M14 2v9h1a2 2 0 0 0 2-2V7h2v2a4 4 0 0 1-4 4h-1v2h2v2h-2v5h-2v-5H10v-2h2v-2H11a4 4 0 0 1-4-4V7h2v2a2 2 0 0 0 2 2h1V2h2z"/>
          </svg>
        </div>
        <span className="welcome-line" />
      </div>

      <span className="welcome-bold">my portfolio</span>
    </div>

    {/* ══ 3. XIN CHÀO / ABOUT ══ */}
    <div className="about-section">
      <div className="about-grid">

        {/* left — illustration */}
        <div className="about-img-col">
          <img src="/about.png" alt="Borica — Creative Self Portrait" className="about-img" />
        </div>

        {/* right — text */}
        <div className="about-text-col">
          <h2 className="about-heading">Xin chào!</h2>

          <p className="about-text">
            I am <strong>Trung Hậu, aka Borica</strong>, a Creative Designer with over two
            years of professional experience as a freelance designer, working with both large
            and small agencies. Recently, I have been working at Biz-Eyes Agency, which
            specializes in providing creative services to clients in Vietnam.
          </p>
          <p className="about-text">
            To me, coming up with ideas is important, but it is equally essential to balance
            creativity with a structured process. I see myself as a designer who loves
            telling stories—using visuals not just to decorate, but to communicate meaning
            and connect with people.
          </p>

          <div className="about-divider" />

          <div className="about-tools">
            {/* Design tools */}
            <div className="tools-row">
              <span className="tools-label">Design Tools</span>
              <div className="tools-chips">
                <span className="chip chip-ps">Ps</span>
                <span className="chip chip-ai">Ai</span>
                <span className="chip chip-id">Id</span>
                <span className="chip chip-ae">Ae</span>
                <span className="chip chip-dn">Dn</span>
                <span className="chip chip-figma">
                  <svg viewBox="0 0 38 57" width="20" height="20">
                    <path d="M19 28.5A9.5 9.5 0 1 0 19 9.5a9.5 9.5 0 0 0 0 19z" fill="#1ABCFE"/>
                    <path d="M9.5 47.5A9.5 9.5 0 0 0 19 57V38a9.5 9.5 0 0 0-9.5 9.5z" fill="#0ACF83"/>
                    <path d="M19 38v-19H9.5a9.5 9.5 0 0 0 0 19H19z" fill="#A259FF"/>
                    <path d="M19 0H9.5a9.5 9.5 0 0 0 0 19H19V0z" fill="#F24E1E"/>
                    <path d="M19 0v19h9.5a9.5 9.5 0 0 0 0-19H19z" fill="#FF7262"/>
                  </svg>
                </span>
              </div>
            </div>

            {/* AI tools */}
            <div className="tools-row">
              <span className="tools-label">AI Tools</span>
              <div className="tools-chips">
                {['Ff','Mj','Sd','Gpt','Bn','Co'].map(t => (
                  <span key={t} className="ai-chip">
                    <svg viewBox="0 0 24 24" fill="currentColor" width="16" height="16">
                      <path d="M12 2L2 22h20L12 2zm0 5l6 11H6L12 7z"/>
                    </svg>
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    {/* ══ 4. WORK EXPERIENCE ══ */}
    <div id="experience" className="experience-section">
      <div className="experience-inner">

        <div className="exp-heading-row">
          <h2 className="exp-main-title">
            <span className="exp-main-title-w">W</span>ork experience
          </h2>
        </div>

        {/* SVG Timeline */}
        <div className="exp-timeline-wrap">
          <div className="exp-timeline-inner">
            <svg viewBox="0 0 1000 180" className="exp-svg">
              {/* baseline */}
              <line x1="180" y1="90" x2="980" y2="90" stroke="#fff" strokeWidth="3"/>

              {/* scribble left (2018-2022 freelance chaos) */}
              <g transform="translate(90,90)">
                <path
                  d="M-60,0 C-50,-25,-20,-38,5,-18 C28,2,18,38,-12,28 C-42,18,-28,-22,2,-28 C32,-38,42,8,12,22 C-18,32,-38,8,-26,-12 C-14,-28,12,-26,28,-8 C44,10,18,38,-10,28 C-28,18,-18,-8,2,-14 C16,-18,20,-4,10,6 C0,14,-14,8,-8,-4 C-2,-14,10,-8,12,2 C14,10,4,14,0,8"
                  fill="none" stroke="#fff" strokeWidth="2.5" opacity="0.6"
                />
                <text x="-70" y="-32" fill="#fff" fontSize="12" fontWeight="700" opacity="0.7">2019</text>
                <text x="-80" y="44"  fill="#fff" fontSize="12" fontWeight="700" opacity="0.7">2018</text>
                <text x="-10" y="-54" fill="#fff" fontSize="12" fontWeight="700" opacity="0.7">2021</text>
                <text x="36"  y="-40" fill="#fff" fontSize="12" fontWeight="700" opacity="0.7">2022</text>
                <text x="-42" y="56"  fill="#fff" fontSize="12" fontWeight="700" opacity="0.7">2020</text>
              </g>

              {/* dot 1: One Tech Medical */}
              <circle cx="430" cy="90" r="8" fill="#fff"/>
              <text x="430" y="55"  textAnchor="middle" fill="#fff" fontSize="13" fontWeight="700">One Tech Medical</text>
              <text x="430" y="130" textAnchor="middle" fill="#E8291C" fontSize="13" fontWeight="700">10.2023</text>

              {/* dot 2: InBold Agency */}
              <circle cx="680" cy="90" r="8" fill="#fff"/>
              <text x="680" y="55"  textAnchor="middle" fill="#fff" fontSize="13" fontWeight="700">InBold Agency</text>
              <text x="680" y="130" textAnchor="middle" fill="#E8291C" fontSize="13" fontWeight="700">01.2025</text>

              {/* dot 3: Biz-Eyes */}
              <circle cx="920" cy="90" r="8" fill="#fff"/>
              <text x="920" y="55"  textAnchor="middle" fill="#fff" fontSize="13" fontWeight="700">Biz-Eyes Agency</text>
              <text x="920" y="130" textAnchor="middle" fill="#E8291C" fontSize="13" fontWeight="700">11.2025</text>
            </svg>
          </div>
        </div>

        {/* Cards */}
        <div className="exp-cards-grid">
          {/* Biz-Eyes */}
          <div className="exp-card">
            <span className="exp-card-period">/11.2025 - Now/</span>
            <h3 className="exp-card-role">Biz-Eyes Agency — Creative Designer</h3>
            <p className="exp-card-desc">Biz-Eyes is an IMC agency in Vietnam, specializing in PR, content, social media, and digital marketing campaigns</p>
            <ul className="exp-card-list">
              <li>Collaborate with the concept team to brainstorm ideas and edit copy, ensuring that the visuals align with the message</li>
              <li>Create key visuals and design assets for PR, social media, and digital marketing campaigns</li>
              <li>Execute design adaptations and production-ready assets across multiple channels while maintaining visual consistency</li>
            </ul>
          </div>

          {/* Freelancer */}
          <div className="exp-card">
            <span className="exp-card-period">/2022 - Now/</span>
            <h3 className="exp-card-role">Freelancer</h3>
            <p className="exp-card-desc">Freelancer for agencies: Publicis Groupe Vietnam, VNGames, Zee Agency, and large businesses in Vietnam</p>
            <ul className="exp-card-list">
              <li>Design the visual identity system and key visuals for events under the supervision of the Art Director from the agency</li>
              <li>Work directly with marketing department heads to design a system of printed materials and communication assets</li>
              <li>Consult, advise, and design logos, printed materials, and brand identity systems for business owners in Vietnam</li>
            </ul>
          </div>

          {/* InBold */}
          <div className="exp-card">
            <span className="exp-card-period">/01.2025 - 11.2025/</span>
            <h3 className="exp-card-role">InBold Agency — Mid Level Designer</h3>
            <p className="exp-card-desc">InBold Agency is a Denmark-based creative agency</p>
            <ul className="exp-card-list">
              <li>Designed advertising content for social media platforms as well as various printed POSM materials</li>
              <li>Create guidelines/tutorials and train team members to use automatic tools (AI, script, action, extension, plugin, etc.)</li>
              <li>Regularly updated new guideline and new QC checklist assigned by superiors</li>
            </ul>
          </div>

          {/* One Tech */}
          <div className="exp-card">
            <span className="exp-card-period">/10.2023 - 12.2024/</span>
            <h3 className="exp-card-role">One Tech Medical — Multimedia Designer</h3>
            <p className="exp-card-desc">Exclusive distributor of Neova, mdceuticals, and Skinfill in Vietnam</p>
            <ul className="exp-card-list">
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

export default Hero;
