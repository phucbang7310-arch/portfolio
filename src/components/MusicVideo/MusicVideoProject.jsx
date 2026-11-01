import React from 'react';
import PhotographerFolders from '../Photographer/PhotographerFolders';
import './MusicVideoProject.css';

function MusicVideoProject({ onOpenFolder }) {
  return (
    <section className="mv-project-section" id="photographer">
      {/* 1. Ảnh banner tiêu đề ở trên cùng (Thumbnail có chữ Photographer) */}
      <div className="mv-banner">
        <img 
          src="/photographer-banner.png" 
          alt="Photographer" 
          className="mv-banner-img"
        />
      </div>

      {/* 2. Dưới thumbnail: 6 Thư mục dự án Photographer */}
      <PhotographerFolders onOpenFolder={onOpenFolder} />
    </section>
  );
}

export default MusicVideoProject;
