import React, { useState, useEffect } from 'react';
import { 
  ArrowLeft, 
  Folder, 
  FolderOpen, 
  Layers, 
  Calendar, 
  User, 
  Briefcase,
  Grid,
  ChevronLeft,
  ChevronRight,
  Clock,
  Sparkles,
  Film,
  ExternalLink
} from 'lucide-react';
import StoryboardGallery from '../common/StoryboardGallery';
import { photographerFolders } from '../../data/photographerFoldersData';
import './PhotographerFolderPage.css';

export default function PhotographerFolderPage({ 
  folderId, 
  onBack, 
  onSelectFolder 
}) {
  const [selectedAlbumTab, setSelectedAlbumTab] = useState('all');

  // Cuộn lên đầu trang mỗi khi đổi folder
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
    setSelectedAlbumTab('all');
  }, [folderId]);

  // Tìm folder hiện tại
  const currentIndex = photographerFolders.findIndex(f => f.id === folderId);
  const folder = currentIndex !== -1 ? photographerFolders[currentIndex] : photographerFolders[0];

  // Tính folder trước / sau để điều hướng
  const prevFolder = currentIndex > 0 
    ? photographerFolders[currentIndex - 1] 
    : photographerFolders[photographerFolders.length - 1];
  const nextFolder = currentIndex < photographerFolders.length - 1 
    ? photographerFolders[currentIndex + 1] 
    : photographerFolders[0];

  const isBlank = folder.isEmpty;

  // Lọc album nếu folder có nhiều album (như Nốt Trà có Trung Thu, 20/10, Daily)
  const displayAlbums = folder.albums ? (
    selectedAlbumTab === 'all' 
      ? folder.albums 
      : folder.albums.filter(a => a.id === selectedAlbumTab)
  ) : [];

  return (
    <div className="photographer-folder-page">
      {/* ================= 1. ĐẦU TRANG MỚI: THUMBNAIL PHOTOGRAPHER ================= */}
      <div className="folder-page-banner">
        <img 
          src="/photographer-banner.png" 
          alt="Photographer" 
          className="folder-page-banner-img"
        />
      </div>

      {/* ================= 2. THANH ĐIỀU HƯỚNG VÀ BREADCRUMB ================= */}
      <div className="folder-page-nav-bar">
        <div className="folder-page-nav-container">
          <div className="nav-left-group">
            <button 
              type="button" 
              className="back-btn"
              onClick={onBack}
              title="Quay lại danh sách 6 thư mục"
            >
              <ArrowLeft size={16} />
              <span>Quay lại tất cả thư mục</span>
            </button>

            <div className="breadcrumb-trail">
              <span className="crumb-link" onClick={onBack}>Portfolio</span>
              <span className="crumb-sep">/</span>
              <span className="crumb-link" onClick={onBack}>Photographer</span>
              <span className="crumb-sep">/</span>
              <span className="crumb-active">Folder {folder.number}: {folder.title}</span>
            </div>
          </div>

          {/* Cụm 6 nút chuyển nhanh giữa các Folder */}
          <div className="folder-quick-switcher">
            <span className="switcher-label">Chọn thư mục:</span>
            <div className="switcher-pills">
              {photographerFolders.map((f) => (
                <button
                  key={f.id}
                  type="button"
                  className={`switcher-pill ${f.id === folder.id ? 'active' : ''} ${f.isEmpty ? 'pill-blank' : ''}`}
                  onClick={() => onSelectFolder(f.id)}
                  title={`${f.number}. ${f.title} ${f.isEmpty ? '(Trống)' : ''}`}
                >
                  <Folder size={12} className="pill-icon" />
                  <span>{f.number}</span>
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* ================= 3. NỘI DUNG CHI TIẾT CỦA THƯ MỤC ================= */}
      <div className="folder-page-content">
        
        {isBlank ? (
          /* ================= GIAO DIỆN KHI FOLDER TẠM ĐỂ TRỐNG (FOLDER 03, 04, 05, 06) ================= */
          <div className="folder-empty-page-state">
            <div className="empty-state-card">
              <div className="empty-icon-box">
                <FolderOpen size={48} className="empty-card-icon" />
              </div>
              <div className="empty-badge">
                <Clock size={13} />
                <span>FOLDER {folder.number} — SẮP CẬP NHẬT</span>
              </div>
              <h1 className="empty-title">Thư Mục {folder.number} Hiện Tạm Để Trống</h1>
              <p className="empty-description">
                Dự án này đang trong giai đoạn hoàn thiện ý tưởng và chọn lọc hình ảnh. Hình ảnh và câu chuyện hậu trường sẽ sớm được bổ sung tại đây.
              </p>
              
              <div className="empty-action-buttons">
                <button type="button" className="empty-btn-primary" onClick={onBack}>
                  <ArrowLeft size={16} />
                  <span>Quay lại tất cả thư mục</span>
                </button>
                <button 
                  type="button" 
                  className="empty-btn-secondary"
                  onClick={() => onSelectFolder('not-tra')}
                >
                  <span>Khám phá Folder 01: Nốt Trà</span>
                  <ChevronRight size={16} />
                </button>
                <button 
                  type="button" 
                  className="empty-btn-secondary"
                  onClick={() => onSelectFolder('dan-lat')}
                >
                  <span>Khám phá Folder 02: Đan Lát</span>
                  <ChevronRight size={16} />
                </button>
              </div>
            </div>
          </div>
        ) : (
          /* ================= GIAO DIỆN FOLDER CÓ NỘI DUNG (FOLDER 1: NỐT TRÀ & FOLDER 2: ĐAN LÁT) ================= */
          <>
            {/* Khối Header giới thiệu dự án (Intro block) */}
            <div className="folder-detail-intro">
              <div className="detail-intro-left">
                <img 
                  src={folder.brandBanner || folder.coverImage} 
                  alt={folder.title} 
                  className={`detail-cover-img ${folder.id === 'dan-lat' ? 'detail-cover-img--wide' : ''}`}
                />
              </div>

              <div className="detail-intro-right">
                <div className="folder-badge-row">
                  <span className="folder-serial-badge">
                    <FolderOpen size={13} />
                    FOLDER {folder.number} / 06
                  </span>
                  <span className="folder-category-badge">
                    {folder.category}
                  </span>
                </div>

                <h1 className="detail-project-title">
                  | {folder.title.toUpperCase()}
                </h1>

                <p className="detail-project-description">
                  {folder.description}
                </p>

                {/* Thông tin Meta */}
                <div className="detail-meta-grid">
                  <div className="detail-meta-item">
                    <span className="meta-item-label">
                      <Briefcase size={13} /> Khách hàng
                    </span>
                    <span className="meta-item-value">{folder.client}</span>
                  </div>
                  <div className="detail-meta-item">
                    <span className="meta-item-label">
                      <User size={13} /> Vai trò
                    </span>
                    <span className="meta-item-value">{folder.role}</span>
                  </div>
                  <div className="detail-meta-item">
                    <span className="meta-item-label">
                      <Calendar size={13} /> Thời gian
                    </span>
                    <span className="meta-item-value">{folder.date}</span>
                  </div>
                  <div className="detail-meta-item">
                    <span className="meta-item-label">
                      <Layers size={13} /> Quy mô
                    </span>
                    <span className="meta-item-value">
                      {typeof folder.photoCount === 'number' ? `${folder.photoCount} ảnh chất lượng cao` : folder.photoCount}
                    </span>
                  </div>
                </div>

                {/* Danh sách Tags */}
                <div className="detail-tags-row">
                  {folder.tags.map((tag, idx) => (
                    <span key={idx} className="detail-tag-pill">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Thanh Tab chọn bộ sưu tập (dành cho Folder có nhiều album như Nốt Trà) */}
            {folder.albums && folder.albums.length > 1 && (
              <div className="folder-albums-tab-bar">
                <div className="albums-tab-heading">
                  <span className="albums-tab-label">Các bộ sưu tập trong thư mục:</span>
                </div>
                <div className="albums-tabs-list">
                  <button
                    type="button"
                    className={`album-tab-btn ${selectedAlbumTab === 'all' ? 'active' : ''}`}
                    onClick={() => setSelectedAlbumTab('all')}
                  >
                    <span>Tất cả ({folder.photoCount})</span>
                  </button>
                  {folder.albums.map((alb) => (
                    <button
                      key={alb.id}
                      type="button"
                      className={`album-tab-btn ${selectedAlbumTab === alb.id ? 'active' : ''}`}
                      onClick={() => setSelectedAlbumTab(alb.id)}
                    >
                      <span>{alb.title} ({alb.images.length})</span>
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* ================= 4. CÁC PHÂN ĐOẠN GALLERY HÌNH ẢNH ================= */}
            <div className="folder-gallery-container">
              {displayAlbums.map((album) => (
                <div key={album.id} className="folder-album-section">
                  <div className="album-section-header">
                    <h2 className="album-section-title">{album.title}</h2>
                    {album.description && (
                      <p className="album-section-desc">{album.description}</p>
                    )}
                  </div>
                  <StoryboardGallery 
                    images={album.images}
                    title={album.title}
                    visibleCount={5}
                  />
                </div>
              ))}
            </div>

            {/* ================= 5. VIDEO KHỐI (WATCH VIDEO) ================= */}
            {(folder.videos || folder.videoUrl) && (
              <div className="folder-video-container">
                <div className="folder-video-header">
                  <h2 className="folder-video-title">Watch Video</h2>
                  {folder.videos && folder.videos.length > 0 && (
                    <span className="folder-video-subtitle">
                      {folder.videos.length} thước phim ngắn (Facebook Reels)
                    </span>
                  )}
                </div>

                {folder.videos && folder.videos.length > 0 ? (
                  <div className="reels-grid-container">
                    {folder.videos.map((vid, idx) => (
                      <div key={vid.id || idx} className="reel-card">
                        <div className="reel-card-header">
                          <span className="reel-badge">
                            <Film size={13} />
                            REEL {idx + 1 < 10 ? `0${idx + 1}` : idx + 1}
                          </span>
                          <div className="reel-tags-right">
                            <span className="reel-ratio-tag">9:16</span>
                            <span className="reel-platform-tag">Facebook</span>
                          </div>
                        </div>

                        <div className="reel-iframe-wrap">
                          <iframe
                            src={vid.embedUrl || vid.url}
                            title={vid.title || `Video Reel ${idx + 1}`}
                            frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                            allowFullScreen
                            scrolling="no"
                          ></iframe>
                        </div>

                        <div className="reel-card-footer">
                          <a 
                            href={vid.url} 
                            target="_blank" 
                            rel="noopener noreferrer" 
                            className="reel-fb-link"
                            title="Mở xem trực tiếp trên Facebook"
                          >
                            <span>Xem trên Facebook</span>
                            <ExternalLink size={13} />
                          </a>
                        </div>
                      </div>
                    ))}
                  </div>
                ) : (
                  <div className="video-responsive-container">
                    <iframe
                      src={folder.videoUrl}
                      title="Video player"
                      frameBorder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                      allowFullScreen
                    ></iframe>
                  </div>
                )}
              </div>
            )}
          </>
        )}

        {/* ================= 6. THANH ĐIỀU HƯỚNG DƯỚI ĐÁY (PREV / NEXT FOLDER) ================= */}
        <div className="folder-bottom-pagination">
          <button 
            type="button" 
            className="bottom-nav-card prev-card"
            onClick={() => onSelectFolder(prevFolder.id)}
          >
            <div className="bottom-nav-arrow">
              <ChevronLeft size={20} />
            </div>
            <div className="bottom-nav-text">
              <span className="bottom-nav-sub">Thư mục trước</span>
              <span className="bottom-nav-title">{prevFolder.number}. {prevFolder.title}</span>
            </div>
          </button>

          <button 
            type="button"
            className="bottom-center-all-btn"
            onClick={onBack}
          >
            <Grid size={16} />
            <span>Tất cả 6 thư mục</span>
          </button>

          <button 
            type="button" 
            className="bottom-nav-card next-card"
            onClick={() => onSelectFolder(nextFolder.id)}
          >
            <div className="bottom-nav-text text-right">
              <span className="bottom-nav-sub">Thư mục kế tiếp</span>
              <span className="bottom-nav-title">{nextFolder.number}. {nextFolder.title}</span>
            </div>
            <div className="bottom-nav-arrow">
              <ChevronRight size={20} />
            </div>
          </button>
        </div>

      </div>
    </div>
  );
}
