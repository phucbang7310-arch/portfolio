import React from 'react';
import { Phone, Mail, Facebook, Heart } from 'lucide-react';

const navLinks = [
  { label: 'Trang chủ', href: '#hero' },
  { label: 'Kinh nghiệm', href: '#experience' },
  { label: 'Mục lục', href: '#contents' },
  { label: 'Dự án nổi bật', href: '#project-01' },
  { label: 'Liên hệ', href: '#contact' },
];

const Footer = () => {
  const handleLinkClick = (e, href) => {
    e.preventDefault();
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <footer className="footer">
      <div className="footer-inner">
        {/* Decorative top bar border */}
        <div className="footer-topbar">
          <div className="footer-topbar-orange"></div>
        </div>

        <div className="footer-grid">
          {/* Brand Column */}
          <div className="footer-brand">
            <h3 className="footer-brand-name">NGUYỄN THỊ ANH THƠ</h3>
            <p className="footer-brand-tagline">PORTFOLIO / CREATIVE DESIGNER</p>
            <p className="footer-brand-desc">
              Mang những ý tưởng táo bạo vào thực tế qua lăng kính hình ảnh tối giản, cá tính. Hãy cùng đồng hành kiến tạo nên sản phẩm tuyệt vời tiếp theo của doanh nghiệp bạn.
            </p>
          </div>

          {/* Navigation Links Column */}
          <div className="footer-nav">
            <h4 className="footer-col-title">DIRECTORY</h4>
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

          {/* Contact Details Column */}
          <div className="footer-contact">
            <h4 className="footer-col-title">GET IN TOUCH</h4>
            <div className="footer-contact-item">
              <Phone size={16} />
              <a href="tel:0983967621">0983 967 621</a>
            </div>
            <div className="footer-contact-item">
              <Mail size={16} />
              <a href="mailto:nguyenthianhtho@gmail.com">nguyenthianhtho@gmail.com</a>
            </div>
            <div className="footer-contact-item">
              <Facebook size={16} fill="none" />
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">Nguyễn Thị Anh Thơ</a>
            </div>
          </div>
        </div>

        {/* Bottom Banner */}
        <div className="footer-bottom">
          <p className="footer-copy">
            &copy; {new Date().getFullYear()} Nguyễn Thị Anh Thơ. Crafted with precision.
          </p>
          <div className="footer-made">
            <span>Made with</span>
            <Heart size={14} fill="#FF4D00" color="#FF4D00" />
            <span>by Anh Thơ Creative</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
