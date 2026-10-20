import React, { useState, useEffect, useRef } from 'react';
import { 
  ChevronLeft, 
  ChevronRight, 
  X, 
  Maximize2, 
  LayoutGrid, 
  Eye, 
  Layers,
  Sparkles,
  ZoomIn,
  Search
} from 'lucide-react';
import './StoryboardGallery.css';

/**
 * StoryboardCard Item Component với hiệu ứng tương tác rê chuột zoom to điểm trỏ (Interactive Mouse Zoom)
 */
function StoryboardCard({ 
  image, 
  index, 
  globalIdx, 
  isExtraCard, 
  totalExtra, 
  onClick 
}) {
  const cardRef = useRef(null);

  // Hiệu ứng tương tác trỏ chuột: Di chuyển tâm phóng to (transform-origin) theo tọa độ con trỏ
  const handleMouseMove = (e) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;
    const img = cardRef.current.querySelector('.mosaic-card-img');
    if (img) {
      img.style.transformOrigin = `${x}% ${y}%`;
    }
  };

  const handleMouseLeave = () => {
    if (!cardRef.current) return;
    const img = cardRef.current.querySelector('.mosaic-card-img');
    if (img) {
      img.style.transformOrigin = 'center center';
    }
  };

  if (!image) return null;
  const title = image.title || `Frame ${globalIdx + 1}`;

  return (
    <div 
      ref={cardRef}
      className={`mosaic-card card-item-${index} ${isExtraCard ? 'has-extra-count' : ''}`}
      onClick={onClick}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      <div className="mosaic-card-inner">
        <img 
          src={image.src} 
          alt={image.alt || title} 
          className="mosaic-card-img"
          loading="lazy"
        />

        {/* Lớp phủ tương tác khi rê chuột (Hover Zoom Overlay) */}
        <div className="mosaic-card-overlay">
          <div className="overlay-content">
            <div className="overlay-icon-wrap">
              <Search size={22} strokeWidth={2.5} />
            </div>
            <span className="overlay-title">{title}</span>
            <span className="overlay-hint">Phóng to</span>
          </div>
        </div>

        {/* Tag định danh góc dưới bên trái */}
        <div className="mosaic-card-tag">{title}</div>

        {/* Huy hiệu +N ảnh khác ở góc trên bên phải của tấm ảnh thứ 5 */}
        {isExtraCard && totalExtra > 0 && (
          <div className="extra-count-badge">
            <Sparkles size={14} className="sparkle-icon" />
            <span className="extra-number">+{totalExtra}</span>
            <span className="extra-label">ảnh khác</span>
          </div>
        )}
      </div>
    </div>
  );
}

/**
 * StoryboardGallery Component
 * - Layout Bento Mosaic đúng chuẩn thiết kế
 * - Hiệu ứng trỏ chuột zoom to tương tác mượt mà
 * - Điều hướng trang Carousel mượt & Modal Lightbox toàn màn hình
 */
export default function StoryboardGallery({ 
  images = [], 
  title = "Storyboard",
  defaultLayout = "bento"
}) {
  const [modalOpen, setModalOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [viewMode, setViewMode] = useState('single'); // 'single' | 'grid'
  const [currentPage, setCurrentPage] = useState(0);
  const [slideDirection, setSlideDirection] = useState('next'); // 'next' | 'prev'
  const [isAnimating, setIsAnimating] = useState(false);
  const [inlineLayout, setInlineLayout] = useState(defaultLayout); // 'bento' | 'grid'

  const ITEMS_PER_PAGE = 5;
  const totalPages = Math.ceil(images.length / ITEMS_PER_PAGE) || 1;

  // Touch swipe gesture refs
  const touchStartX = useRef(null);
  const touchEndX = useRef(null);

  // Lấy 5 ảnh của trang hiện tại
  const startIndex = currentPage * ITEMS_PER_PAGE;
  const pageImages = images.slice(startIndex, startIndex + ITEMS_PER_PAGE);
  const totalExtraImages = Math.max(0, images.length - ITEMS_PER_PAGE);

  // Chuyển trang lướt trước / sau
  const handlePrevPage = (e) => {
    e?.stopPropagation();
    if (isAnimating || totalPages <= 1) return;
    setSlideDirection('prev');
    setIsAnimating(true);
    setCurrentPage((prev) => (prev === 0 ? totalPages - 1 : prev - 1));
    setTimeout(() => setIsAnimating(false), 380);
  };

  const handleNextPage = (e) => {
    e?.stopPropagation();
    if (isAnimating || totalPages <= 1) return;
    setSlideDirection('next');
    setIsAnimating(true);
    setCurrentPage((prev) => (prev === totalPages - 1 ? 0 : prev + 1));
    setTimeout(() => setIsAnimating(false), 380);
  };

  // Touch swipe handlers
  const handleTouchStart = (e) => {
    touchStartX.current = e.targetTouches[0].clientX;
  };

  const handleTouchMove = (e) => {
    touchEndX.current = e.targetTouches[0].clientX;
  };

  const handleTouchEnd = () => {
    if (!touchStartX.current || !touchEndX.current) return;
    const distance = touchStartX.current - touchEndX.current;
    if (distance > 50 && totalPages > 1) {
      handleNextPage();
    } else if (distance < -50 && totalPages > 1) {
      handlePrevPage();
    }
    touchStartX.current = null;
    touchEndX.current = null;
  };

  // Mở modal lightbox
  const openModal = (globalIdx, mode = 'single') => {
    setCurrentIndex(globalIdx);
    setViewMode(mode);
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  const handlePrevModalImage = (e) => {
    e?.stopPropagation();
    setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const handleNextModalImage = (e) => {
    e?.stopPropagation();
    setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  // Phím tắt ESC, Mũi tên trái/phải
  useEffect(() => {
    if (!modalOpen) return;

    const handleKeyDown = (e) => {
      if (e.key === 'Escape') closeModal();
      if (viewMode === 'single') {
        if (e.key === 'ArrowLeft') handlePrevModalImage();
        if (e.key === 'ArrowRight') handleNextModalImage();
      }
    };

    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [modalOpen, viewMode, images.length]);

  return (
    <div className="storyboard-gallery-wrapper">
      {/* Header điều hướng gallery */}
      <div className="gallery-header">
        <div className="gallery-title-group">
          {title && <h2 className="gallery-sub-title">{title}</h2>}
          <span className="gallery-badge-count">
            <Layers size={15} className="badge-icon" />
            {images.length} ảnh
          </span>
          {inlineLayout === 'bento' && totalPages > 1 && (
            <span className="gallery-page-indicator">
              Trang {currentPage + 1}/{totalPages}
            </span>
          )}
        </div>

        <div className="gallery-controls">
          {/* Nút chuyển đổi giao diện Bento Mosaic vs Lưới 4 cột */}
          <div className="layout-mode-switch">
            <button
              type="button"
              className={`layout-mode-btn ${inlineLayout === 'bento' ? 'active' : ''}`}
              onClick={() => setInlineLayout('bento')}
              title="Chế độ Bento (5 ảnh đại diện, tương tác trỏ chuột)"
            >
              <Layers size={14} />
              <span>Bento</span>
            </button>
            <button
              type="button"
              className={`layout-mode-btn ${inlineLayout === 'grid' ? 'active' : ''}`}
              onClick={() => setInlineLayout('grid')}
              title="Chế độ Lưới (Lưới 4 cột trực quan)"
            >
              <LayoutGrid size={14} />
              <span>Lưới 4 cột</span>
            </button>
          </div>

          {/* Cụm nút mũi tên điều hướng trang (cho chế độ Bento) */}
          {inlineLayout === 'bento' && totalPages > 1 && (
            <div className="gallery-pagination-arrows">
              <button 
                type="button" 
                className="gallery-nav-arrow-btn" 
                onClick={handlePrevPage}
                title="Lướt sang các ảnh trước"
              >
                <ChevronLeft size={18} />
              </button>
              <button 
                type="button" 
                className="gallery-nav-arrow-btn" 
                onClick={handleNextPage}
                title="Lướt sang các ảnh tiếp theo"
              >
                <ChevronRight size={18} />
              </button>
            </div>
          )}

          {/* Nút Xem tất cả qua Lightbox */}
          <button 
            type="button"
            className="view-all-btn"
            onClick={() => openModal(0, 'grid')}
            title="Xem tổng tất cả các ảnh trong Lightbox"
          >
            <Maximize2 size={15} />
            <span>Xem trọn bộ ({images.length})</span>
          </button>
        </div>
      </div>

      {/* ================= GIAO DIỆN 1: LƯỚI 4 CỘT (GRID LAYOUT) ================= */}
      {inlineLayout === 'grid' && (
        <div className="storyboard-inline-grid-wrapper">
          <div className="storyboard-inline-grid">
            {images.map((item, idx) => (
              <div 
                key={item.id || idx}
                className="storyboard-grid-card"
                onClick={() => openModal(idx, 'single')}
                title={`Nhấp để phóng to: ${item.title || item.alt || `Ảnh ${idx + 1}`}`}
              >
                <div className="grid-card-inner">
                  <img src={item.src} alt={item.alt || item.title} loading="lazy" />
                  <div className="grid-card-overlay">
                    <span className="grid-card-title">{item.title || `#${idx + 1}`}</span>
                    <span className="grid-card-zoom-icon"><ZoomIn size={18} /></span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="gallery-footer-hint">
            <span className="hint-text">
              💡 <em>Đang hiển thị toàn bộ <strong>{images.length} ảnh</strong>. Nhấp vào bất kỳ ảnh nào để phóng to và trình chiếu toàn màn hình.</em>
            </span>
          </div>
        </div>
      )}

      {/* ================= GIAO DIỆN 2: BỐ CỤC BENTO 5 ẢNH CHUẨN DESIGN ================= */}
      {inlineLayout === 'bento' && (
        <>
          <div 
            className="mosaic-slider-viewport"
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
          >
            {/* Nút lướt nổi bên trái / phải */}
            {totalPages > 1 && (
              <>
                <button 
                  type="button" 
                  className="slider-side-nav prev"
                  onClick={handlePrevPage}
                  title="Lướt ảnh trước"
                >
                  <ChevronLeft size={22} />
                </button>
                <button 
                  type="button" 
                  className="slider-side-nav next"
                  onClick={handleNextPage}
                  title="Lướt ảnh sau"
                >
                  <ChevronRight size={22} />
                </button>
              </>
            )}

            <div className={`mosaic-collage-container animate-${slideDirection} ${isAnimating ? 'is-animating' : ''}`}>
              
              {/* CỘT TRÁI (LEFT SECTION ~ 58-60% TỔNG CHIỀU RỘNG): 
                  - Hàng trên: 2 ảnh cạnh nhau (card 0 & card 1)
                  - Hàng dưới: 1 ảnh ngang rộng (card 2)
              */}
              <div className="mosaic-section-left">
                <div className="mosaic-left-top-row">
                  {pageImages[0] && (
                    <StoryboardCard 
                      image={pageImages[0]}
                      index={0}
                      globalIdx={startIndex + 0}
                      onClick={() => openModal(startIndex + 0, 'single')}
                    />
                  )}
                  {pageImages[1] && (
                    <StoryboardCard 
                      image={pageImages[1]}
                      index={1}
                      globalIdx={startIndex + 1}
                      onClick={() => openModal(startIndex + 1, 'single')}
                    />
                  )}
                </div>

                {pageImages[2] && (
                  <div className="mosaic-left-bottom-row">
                    <StoryboardCard 
                      image={pageImages[2]}
                      index={2}
                      globalIdx={startIndex + 2}
                      onClick={() => openModal(startIndex + 2, 'single')}
                    />
                  </div>
                )}
              </div>

              {/* CỘT PHẢI (RIGHT SECTION ~ 40-42% TỔNG CHIỀU RỘNG): 
                  - Trên: 1 ảnh cao lớn (card 3)
                  - Dưới: 1 ảnh ngang (card 4 kèm huy hiệu +N ảnh nếu có)
              */}
              <div className="mosaic-section-right">
                {pageImages[3] && (
                  <StoryboardCard 
                    image={pageImages[3]}
                    index={3}
                    globalIdx={startIndex + 3}
                    onClick={() => openModal(startIndex + 3, 'single')}
                  />
                )}

                {pageImages[4] && (
                  <StoryboardCard 
                    image={pageImages[4]}
                    index={4}
                    globalIdx={startIndex + 4}
                    isExtraCard={currentPage === 0 && totalExtraImages > 0}
                    totalExtra={totalExtraImages}
                    onClick={() => openModal(startIndex + 4, currentPage === 0 && totalExtraImages > 0 ? 'grid' : 'single')}
                  />
                )}
              </div>

            </div>
          </div>

          {/* Thanh điều hướng Dots dưới đáy & Lời nhắc tương tác */}
          <div className="gallery-bottom-bar">
            {totalPages > 1 ? (
              <div className="gallery-dots-pagination">
                {Array.from({ length: totalPages }).map((_, pIdx) => (
                  <button
                    key={pIdx}
                    type="button"
                    className={`pagination-dot ${currentPage === pIdx ? 'active' : ''}`}
                    onClick={() => {
                      setSlideDirection(pIdx > currentPage ? 'next' : 'prev');
                      setCurrentPage(pIdx);
                    }}
                    title={`Chuyển đến trang ${pIdx + 1}`}
                  />
                ))}
              </div>
            ) : <div />}

            <div className="gallery-footer-hint">
              <span className="hint-text">
                💡 <em>Rê chuột để zoom to — Lướt sang để xem thêm — Nhấp ảnh để xem tổng tất cả ({images.length}) ảnh.</em>
              </span>
            </div>
          </div>
        </>
      )}

      {/* ================= LIGHTBOX MODAL TOÀN MÀN HÌNH ================= */}
      {modalOpen && (
        <div className="lightbox-backdrop" onClick={closeModal}>
          <div className="lightbox-modal-content" onClick={(e) => e.stopPropagation()}>
            
            {/* Header Modal */}
            <div className="lightbox-topbar">
              <div className="lightbox-info">
                <h3 className="lightbox-title">
                  {images[currentIndex]?.title || images[currentIndex]?.alt || `Ảnh ${currentIndex + 1}`}
                </h3>
                <span className="lightbox-counter">
                  {currentIndex + 1} / {images.length}
                </span>
              </div>

              <div className="lightbox-actions">
                <button 
                  type="button" 
                  className={`lightbox-mode-btn ${viewMode === 'single' ? 'active' : ''}`}
                  onClick={() => setViewMode('single')}
                  title="Xem từng ảnh lớn"
                >
                  <Eye size={16} />
                  <span>Trình chiếu</span>
                </button>
                <button 
                  type="button" 
                  className={`lightbox-mode-btn ${viewMode === 'grid' ? 'active' : ''}`}
                  onClick={() => setViewMode('grid')}
                  title="Xem tổng tất cả các ảnh dạng lưới"
                >
                  <LayoutGrid size={16} />
                  <span>Xem tổng tất cả ({images.length})</span>
                </button>
                <button 
                  type="button" 
                  className="lightbox-close-btn"
                  onClick={closeModal}
                  title="Đóng (ESC)"
                >
                  <X size={22} />
                </button>
              </div>
            </div>

            {/* Thân Modal: Chế độ 1 - Xem đơn phóng to (Single View) */}
            {viewMode === 'single' && (
              <div className="lightbox-single-view">
                <button 
                  type="button" 
                  className="lightbox-nav-btn prev"
                  onClick={handlePrevModalImage}
                  title="Ảnh trước (Phím ←)"
                >
                  <ChevronLeft size={36} />
                </button>

                <div className="lightbox-main-stage">
                  <img 
                    src={images[currentIndex]?.src} 
                    alt={images[currentIndex]?.alt || `Ảnh ${currentIndex + 1}`}
                    className="lightbox-main-img"
                  />
                  {images[currentIndex]?.description && (
                    <div className="lightbox-caption">
                      {images[currentIndex]?.description}
                    </div>
                  )}
                </div>

                <button 
                  type="button" 
                  className="lightbox-nav-btn next"
                  onClick={handleNextModalImage}
                  title="Ảnh tiếp theo (Phím →)"
                >
                  <ChevronRight size={36} />
                </button>
              </div>
            )}

            {/* Thân Modal: Chế độ 2 - Xem tổng tất cả các ảnh (Grid View) */}
            {viewMode === 'grid' && (
              <div className="lightbox-grid-view">
                <div className="lightbox-grid-header">
                  <h4 className="grid-header-title">Tổng bộ sưu tập ({images.length} ảnh)</h4>
                  <p className="grid-header-desc">Bấm vào bất kỳ tấm ảnh nào để phóng to toàn màn hình</p>
                </div>
                <div className="lightbox-grid-container">
                  {images.map((item, idx) => (
                    <div 
                      key={item.id || idx}
                      className={`lightbox-grid-item ${currentIndex === idx ? 'current-active' : ''}`}
                      onClick={() => {
                        setCurrentIndex(idx);
                        setViewMode('single');
                      }}
                    >
                      <img src={item.src} alt={item.alt || `Ảnh ${idx + 1}`} loading="lazy" />
                      <div className="grid-item-badge">
                        <span>{item.title || `#${idx + 1}`}</span>
                      </div>
                      <div className="grid-item-hover-indicator">
                        <ZoomIn size={20} />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Thanh filmstrip thumbnail ở đáy modal */}
            {viewMode === 'single' && (
              <div className="lightbox-filmstrip">
                <div className="filmstrip-track">
                  {images.map((item, idx) => (
                    <button
                      type="button"
                      key={item.id || idx}
                      className={`filmstrip-thumb ${currentIndex === idx ? 'selected' : ''}`}
                      onClick={() => setCurrentIndex(idx)}
                      title={`Xem ảnh ${idx + 1}`}
                    >
                      <img src={item.src} alt={`Thumb ${idx + 1}`} />
                      <span className="thumb-idx">{idx + 1}</span>
                    </button>
                  ))}
                </div>
              </div>
            )}

          </div>
        </div>
      )}
    </div>
  );
}

