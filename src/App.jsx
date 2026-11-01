import React, { useState, useEffect } from 'react';
import AboutMe from './components/AboutMe/AboutMe';
import Experience from './components/Experience/Experience';
import Contents from './components/Contents/Contents';
import Hero from './components/Hero/Hero';

import MusicVideoProject from './components/MusicVideo/MusicVideoProject';
import PhotographerFolderPage from './components/Photographer/PhotographerFolderPage';
import CampaignProjects from './components/Campaign/CampaignProjects';
import EventProjects from './components/EventProjects/EventProjects';
import SocialAssetsProject from './components/SocialAssetsProject/SocialAssetsProject';
import PrintingProject from './components/PrintingProject/PrintingProject';
import MotionGraphicProject from './components/MotionGraphicProject/MotionGraphicProject';
import ThankYou from './components/ThankYou/ThankYou';

function App() {
  // Lấy folderId từ hash URL nếu có (ví dụ: #folder-not-tra-trung-thu)
  const [activeFolderId, setActiveFolderId] = useState(() => {
    const hash = window.location.hash;
    if (hash && hash.startsWith('#folder-')) {
      return hash.replace('#folder-', '');
    }
    return null;
  });

  // Đồng bộ lịch sử trình duyệt (Back / Forward)
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash;
      if (hash && hash.startsWith('#folder-')) {
        const id = hash.replace('#folder-', '');
        setActiveFolderId(id);
        window.scrollTo({ top: 0, behavior: 'instant' });
      } else {
        setActiveFolderId(null);
      }
    };

    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  // Mở trang mới của một folder
  const handleOpenFolder = (folderId) => {
    window.location.hash = `folder-${folderId}`;
    setActiveFolderId(folderId);
    window.scrollTo({ top: 0, behavior: 'instant' });
  };

  // Quay lại trang danh mục chính
  const handleBackToMain = () => {
    window.location.hash = 'photographer-section';
    setActiveFolderId(null);
    setTimeout(() => {
      document.getElementById('photographer-section')?.scrollIntoView({ behavior: 'smooth' });
    }, 60);
  };

  const handleScrollToPhotographer = () => {
    document.getElementById('photographer-section')?.scrollIntoView({ behavior: 'smooth' });
  };

  // ================= KHI MỞ MỘT FOLDER: HIỆN RA 1 TRANG MỚI =================
  // Đầu trang mới này luôn là Thumbnail Photographer banner
  if (activeFolderId) {
    return (
      <main className="portfolio-container">
        <PhotographerFolderPage 
          folderId={activeFolderId}
          onBack={handleBackToMain}
          onSelectFolder={handleOpenFolder}
        />
        <ThankYou />
      </main>
    );
  }

  // ================= TRANG PORTFOLIO TỔNG QUAN =================
  return (
    <main className="portfolio-container">
      <Hero />
      <img
        className="welcome-image" 
        src="/welcome.png"
        alt="Welcome text layout" 
      />
      <AboutMe />
      <Experience />
      <Contents onSelectPhotographer={handleScrollToPhotographer} />
      
      {/* Khối Photographer có thumbnail và 6 folder bên dưới */}
      <div id="photographer-section">
        <MusicVideoProject onOpenFolder={handleOpenFolder} />
      </div>

      <CampaignProjects />
      <EventProjects />
      <SocialAssetsProject />
      <PrintingProject />
      <MotionGraphicProject />
      <ThankYou />
    </main>
  );
}

export default App;
