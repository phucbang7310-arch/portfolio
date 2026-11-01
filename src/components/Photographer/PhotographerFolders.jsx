import React from 'react';
import { Folder, FolderOpen, ArrowUpRight, Layers, Sparkles, Clock } from 'lucide-react';
import { photographerFolders } from '../../data/photographerFoldersData';
import './PhotographerFolders.css';

export default function PhotographerFolders({ onOpenFolder }) {
  return (
    <div className="photographer-folders-wrapper">
      <div className="folders-header-block">
        <div className="folders-caption">
          <span className="caption-dot"></span>
          <span className="caption-text">PROJECT DIRECTORY</span>
        </div>
        <h2 className="folders-heading">
          Thư Mục Dự Án Nhiếp Ảnh
        </h2>
        <p className="folders-subtext">
          Khám phá các dự án nhiếp ảnh. Nhấp vào mỗi thư mục để mở trang chi tiết và xem trọn bộ tác phẩm.
        </p>
      </div>

      <div className="folders-grid">
        {photographerFolders.map((folder, index) => {
          const isBlank = folder.isEmpty;

          return (
            <div 
              key={folder.id}
              className={`folder-card folder-card-${index} ${isBlank ? 'folder-card-blank' : ''}`}
              onClick={() => onOpenFolder(folder.id)}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  e.preventDefault();
                  onOpenFolder(folder.id);
                }
              }}
            >
              {/* Folder Tab trên cùng */}
              <div className="folder-tab-header">
                <div className={`folder-tab ${isBlank ? 'tab-blank' : ''}`}>
                  <Folder size={14} className="folder-tab-icon" />
                  <span className="folder-tab-number">FOLDER {folder.number}</span>
                </div>
                <div className="folder-tab-count">
                  {isBlank ? (
                    <span className="blank-pill">Tạm để trống</span>
                  ) : (
                    <>
                      <Layers size={13} />
                      <span>{typeof folder.photoCount === 'number' ? `${folder.photoCount} ảnh` : folder.photoCount}</span>
                    </>
                  )}
                </div>
              </div>

              {/* Thân Folder */}
              <div className="folder-card-body">
                {isBlank ? (
                  /* Giao diện thư mục trống (Placeholder) */
                  <div className="folder-blank-body">
                    <div className="blank-icon-wrap">
                      <Folder size={36} strokeWidth={1.5} className="blank-main-icon" />
                    </div>
                    <h3 className="blank-title">{folder.title}</h3>
                    <p className="blank-desc">Dự án sắp cập nhật hình ảnh...</p>
                    <div className="blank-status-badge">
                      <Clock size={12} />
                      <span>Coming Soon</span>
                    </div>
                  </div>
                ) : (
                  /* Giao diện thư mục có dữ liệu (Folder 1: Nốt Trà & Folder 2: Đan Lát) */
                  <>
                    <div className="folder-preview-container">
                      <div className="folder-cover-wrap">
                        <img 
                          src={folder.coverImage} 
                          alt={folder.title} 
                          className="folder-cover-image"
                          loading="lazy"
                        />
                        <div className="folder-image-gradient"></div>
                      </div>

                      <div className="folder-badge-category">
                        {folder.category}
                      </div>

                      <div className="folder-open-hover-indicator">
                        <FolderOpen size={20} className="indicator-icon" />
                        <span>Mở trang chi tiết</span>
                        <ArrowUpRight size={16} />
                      </div>
                    </div>

                    <div className="folder-info">
                      <div className="folder-meta-top">
                        <span className="folder-timeline">{folder.date}</span>
                        <span className="folder-client">{folder.client}</span>
                      </div>

                      <h3 className="folder-title">
                        {folder.title}
                      </h3>

                      <p className="folder-description">
                        {folder.description}
                      </p>

                      <div className="folder-tags">
                        {folder.tags.slice(0, 3).map((tag, tIdx) => (
                          <span key={tIdx} className="folder-tag-item">
                            #{tag}
                          </span>
                        ))}
                      </div>

                      <div className="folder-action-bar">
                        <span className="folder-action-text">Xem toàn bộ thư mục</span>
                        <div className="folder-action-arrow">
                          <ArrowUpRight size={18} />
                        </div>
                      </div>
                    </div>
                  </>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
