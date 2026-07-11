import React from 'react';
import './EventProjects.css';

function EventProjects() {
  // Dữ liệu các dự án thuộc danh mục Event của bạn
  const eventsData = [
    {
      id: 'sawaco',
      category: 'Sawaco Event',
      title: '| SAWACO’S CONFERENCE',
      tags: ['3D Design', '2D Design', 'Freelance'],
      description: 'SAWACO’s conference is the annual meeting of Ho Chi Minh City’s largest water supply enterprise, aimed at reflecting on the results achieved and setting directions for the coming year. I worked as a freelancer on this project through a connection with Boss Tourist, a tour and event organizing company. I received the brief, developed ideas, designed the key visual, and created the photobooth. The project was well received by SAWACO, who appreciated the freshness and originality of the designs.',
      clients: 'SAWACO',
      subTitle: 'Photo Booth',
      layoutType: 'sawaco-layout',
      images: [
        'https://images.unsplash.com/photo-1540575467063-178a50c2df87?q=80&w=800', // Khối booth lớn phía trên
        'https://images.unsplash.com/photo-1505373877841-8d25f7d46678?q=80&w=400', // 3 ảnh nhỏ ở giữa
        'https://images.unsplash.com/photo-1505373877841-8d25f7d46678?q=80&w=400',
        'https://images.unsplash.com/photo-1505373877841-8d25f7d46678?q=80&w=400',
        'https://images.unsplash.com/photo-1511578314322-379afb476865?q=80&w=800'  // Ảnh thực tế lớn phía dưới
      ]
    },
    {
      id: 'vcs',
      category: 'E-sport Event',
      title: '| VIETNAM CHAMPION SERIES',
      tags: ['Logotype', 'Key Visual', 'Social Post'],
      description: 'Vietnam Championship Series (VCS) is the highest-level League of Legends tournament in Vietnam, previously organized by Riot Games and Garena. It is the professional stage that gathers the top E-Sports teams in Vietnam, where players compete for the national championship title and the opportunity to participate in major international tournaments such as the Mid-Season Invitational (MSI) and the World Championship (Worlds). For this project, I worked as a Freelance Graphic Designer, collaborating directly with the Art Director from VNG. The design process took place from June 2024 to July 2024.',
      clients: 'VCS / RIOT GAMES / VNGGAME',
      subTitle: 'Key Visual',
      layoutType: 'vcs-layout',
      images: [
        'https://images.unsplash.com/photo-1542751371-adc38448a05e?q=80&w=800', // Ảnh logo options nằm ngang
        'https://images.unsplash.com/photo-1560253023-3ec5d502959f?q=80&w=1200' // Ảnh Key Visual siêu to khổng lồ
      ]
    },
    {
      id: 'healara',
      category: 'Brand Event',
      title: '| PHOTO BOOTH',
      tags: ['3D Design', 'Photo Booth'],
      description: 'Healara is a pharmaceutical skincare brand from South Korea. The brand’s products contain the vitality of the fresh sea and the powerful regenerative ability of pure microalgae. Healara is a premium, vegan skincare line derived from the ocean, targeting aging skin to restore a healthy, radiant appearance. For this project, I worked as a Freelance Graphic Designer with Healara’s Marketing Manager from September 10 to October 4, 2024.',
      clients: 'HEALARA',
      subTitle: 'Photo Booth',
      layoutType: 'healara-layout',
      images: [
        'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=600', // Booth 3D trung tâm
        'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?q=80&w=400', // 3 ảnh chụp thực tế phía dưới
        'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?q=80&w=400',
        'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?q=80&w=400'
      ]
    },
    {
      id: 'tiktok',
      category: 'Tiktok Event',
      title: '| TIKTOK AWARDS 2024',
      tags: ['Invitation Letter', 'Nomination Letter'],
      description: 'TikTok Awards 2024 is an annual event that honors outstanding content creators on the TikTok platform, recognizing creativity, influence, and positive contributions. The event brings together top creators, prominent brands, and the TikTok user community. For this project, I collaborated with Zee Agency as a Freelance Graphic Designer. The entire design process started on October 1, 2024, and concluded on October 10, 2024.',
      clients: 'TIKTOK / ZEE',
      subTitle: 'Invitation Letter & Nomination Letter',
      layoutType: 'tiktok-layout',
      images: [
        'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?q=80&w=400', // 3 Mockup điện thoại song song
        'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?q=80&w=400',
        'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?q=80&w=400'
      ]
    }
  ];

  return (
    <section className="event-section">
      {/* Tiêu đề mục chính "Event" uốn lượn nghệ thuật ra giữa màn */}
      <div className="event-main-title-wrapper">
        <h1 className="event-main-title-script">Event</h1>
      </div>

      <div className="event-content-container">
        {eventsData.map((project) => (
          <div key={project.id} className="event-project-card">
            
            {/* Khối Thông tin giới thiệu dự án (Intro) */}
            <div className="event-intro-block">
              <div className="event-intro-left">
                {/* Ảnh đại diện/Logo dự án nằm bên trái */}
                <div className="event-logo-box">
                  <span className="logo-placeholder">{project.id.toUpperCase()} LOGO</span>
                </div>
              </div>
              <div className="event-intro-right">
                <span className="event-category-label">{project.category}</span>
                <h2 className="event-project-title">{project.title}</h2>
                
                <div className="event-tags">
                  {project.tags.map((tag, idx) => (
                    <span key={idx} className="event-tag">{tag}</span>
                  ))}
                </div>

                <div className="event-description">
                  <p>{project.description}</p>
                </div>

                <div className="event-clients">
                  <span className="ev-client-label">Clients:</span>
                  <span className="ev-client-tag">{project.clients}</span>
                </div>
              </div>
            </div>

            {/* Khối hiển thị hình ảnh Layout Graphic tùy biến theo từng project */}
            <div className="event-visual-block">
              <h3 className="event-sub-title">{project.subTitle}</h3>
              
              {/* LAYOUT DỰ ÁN 1: SAWACO */}
              {project.layoutType === 'sawaco-layout' && (
                <div className="sawaco-grid-structure">
                  <img src={project.images[0]} alt="Booth Render" className="sawaco-main-render" />
                  <div className="sawaco-triple-row">
                    <img src={project.images[1]} alt="Detail 1" />
                    <img src={project.images[2]} alt="Detail 2" />
                    <img src={project.images[3]} alt="Detail 3" />
                  </div>
                  <img src={project.images[4]} alt="Real Event Photo" className="sawaco-bottom-photo" />
                </div>
              )}

              {/* LAYOUT DỰ ÁN 2: VCS */}
              {project.layoutType === 'vcs-layout' && (
                <div className="vcs-flex-structure">
                  <div className="vcs-dark-options-bar">
                    <span className="bar-title">Draft Logotype Options</span>
                    <img src={project.images[0]} alt="Logotype Drafts" />
                  </div>
                  <img src={project.images[1]} alt="VCS Key Visual" className="vcs-kv-large" />
                </div>
              )}

              {/* LAYOUT DỰ ÁN 3: HEALARA */}
              {project.layoutType === 'healara-layout' && (
                <div className="healara-grid-structure">
                  <div className="healara-top-center">
                    <img src={project.images[0]} alt="Healara Main Booth" />
                  </div>
                  <div className="healara-bottom-row">
                    <img src={project.images[1]} alt="Healara Event 1" />
                    <img src={project.images[2]} alt="Healara Event 2" />
                    <img src={project.images[3]} alt="Healara Event 3" />
                  </div>
                </div>
              )}

              {/* LAYOUT DỰ ÁN 4: TIKTOK AWARDS */}
              {project.layoutType === 'tiktok-layout' && (
                <div className="tiktok-phone-mockup-row">
                  <img src={project.images[0]} alt="Phone Left" className="phone-side" />
                  <img src={project.images[1]} alt="Phone Center" className="phone-center" />
                  <img src={project.images[2]} alt="Phone Right" className="phone-side" />
                </div>
              )}

            </div>
            
            <hr className="project-separator" />
          </div>
        ))}
      </div>
    </section>
  );
}

export default EventProjects;