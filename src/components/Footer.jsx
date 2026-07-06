import React from 'react';
import { Phone, Mail, Facebook, Heart } from 'lucide-react';

const navLinks = [
  { label: 'Trang chủ', href: '#hero' },
  { label: 'Giới thiệu', href: '#about' },
  { label: 'Dự án', href: '#projects' },
  { label: 'Liên hệ', href: '#contact' },
];

const Footer = () => {
  const handleLinkClick = (e, href) => {
    e.preventDefault();
    const target = document.querySelector(href);
    if (target) target.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className="footer">
      <div className="footer-inner">
        {/* Decorative top bar */}
        <div className="footer-topbar">
          <div className="footer-topbar-red"></div>
          <div className="footer-topbar-teal"></div>
        </div>

        <div className="footer-grid">
          {/* Brand */}
          <div className="footer-brand">
            <h3 className="footer-brand-name">NGUYỄN THỊ ANH THƠ</h3>
            <p className="footer-brand-tagline">CREATIVE · MEDIA · PHOTOGRAPHY</p>
            <p className="footer-brand-desc">
              Tạo ra những khoảnh khắc nghệ thuật đáng nhớ qua từng bức ảnh. Mỗi hình ảnh là một câu chuyện — hãy để tôi kể câu chuyện của bạn.
            </p>
          </div>

          {/* Navigation */}
          <div className="footer-nav">
            <h4 className="footer-col-title">ĐIỀU HƯỚNG</h4>
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="footer-nav-link"
                onClick={(e) => handleLinkClick(e, link.href)}
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Contact Info */}
          <div className="footer-contact">
            <h4 className="footer-col-title">LIÊN HỆ</h4>
            <div className="footer-contact-item">
              <Phone size={16} />
              <a href="tel:0983967621">0983 967 621</a>
            </div>
            <div className="footer-contact-item">
              <Mail size={16} />
              <a href="mailto:nguyenthianhtho@gmail.com">nguyenthianhtho@gmail.com</a>
            </div>
            <div className="footer-contact-item">
              <Facebook size={16} />
              <a href="#" target="_blank" rel="noopener noreferrer">Facebook Profile</a>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="footer-bottom">
          <p className="footer-copy">
            &copy; {new Date().getFullYear()} Nguyễn Thị Anh Thơ. All rights reserved.
          </p>
          <p className="footer-made">
            Made with <Heart size={14} fill="#C92026" color="#C92026" /> by Anh Thơ Creative
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
