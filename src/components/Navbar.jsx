import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const navLinks = [
  { label: 'Trang chủ', href: '#hero' },
  { label: 'Kinh nghiệm', href: '#experience' },
  { label: 'Mục lục', href: '#contents' },
  { label: 'Dự án', href: '#project-01' },
  { label: 'Liên hệ', href: '#contact' },
];

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleLinkClick = (e, href) => {
    e.preventDefault();
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
    setMenuOpen(false);
  };

  return (
    <header className={`navbar${scrolled ? ' navbar--scrolled' : ''}`}>
      <div className="navbar-inner">
        {/* Logo */}
        <a href="#hero" className="navbar-logo" onClick={(e) => handleLinkClick(e, '#hero')}>
          <span className="navbar-logo-dot"></span>
          <span className="navbar-logo-text">ANH THƠ</span>
        </a>

        {/* Desktop Nav */}
        <nav className="navbar-links">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="navbar-link"
              onClick={(e) => handleLinkClick(e, link.href)}
            >
              {link.label}
            </a>
          ))}
          <a
            href="#contact"
            className="navbar-cta"
            onClick={(e) => handleLinkClick(e, '#contact')}
          >
            Hợp Tác
          </a>
        </nav>

        {/* Mobile menu button */}
        <button
          className="navbar-burger"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          {menuOpen ? <X size={24} color="#FFF" /> : <Menu size={24} color="#FFF" />}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      <div className={`navbar-mobile${menuOpen ? ' navbar-mobile--open' : ''}`}>
        {navLinks.map((link) => (
          <a
            key={link.href}
            href={link.href}
            className="navbar-mobile-link"
            onClick={(e) => handleLinkClick(e, link.href)}
          >
            {link.label}
          </a>
        ))}
        <a
          href="#contact"
          className="navbar-mobile-cta"
          onClick={(e) => handleLinkClick(e, '#contact')}
        >
          Hợp Tác Ngay
        </a>
      </div>
    </header>
  );
};

export default Navbar;
