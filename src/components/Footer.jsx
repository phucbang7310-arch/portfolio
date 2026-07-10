import React from 'react';
import { Phone, Mail, Facebook, Heart } from 'lucide-react';

const navLinks = [
  { label: 'Home',       href: '#hero' },
  { label: 'Experience', href: '#experience' },
  { label: 'Works',      href: '#contents' },
  { label: 'Projects',   href: '#project-01' },
  { label: 'Contact',    href: '#contact' },
];

const Footer = () => {
  const go = (e, href) => {
    e.preventDefault();
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className="footer">
      <div className="footer-topbar">
        <div className="footer-topbar-red" />
      </div>

      <div className="footer-grid">
        {/* Brand */}
        <div>
          <h3 className="footer-brand-name">TRUNG HẬU — BORICA</h3>
          <p className="footer-brand-tagline">PORTFOLIO / CREATIVE DESIGNER</p>
          <p className="footer-brand-desc">
            Bringing bold ideas to life through minimal, characterful visuals.
            Let's build your next great project together.
          </p>
        </div>

        {/* Nav */}
        <div>
          <h4 className="footer-col-title">DIRECTORY</h4>
          <nav className="footer-nav">
            {navLinks.map(l => (
              <a key={l.href} href={l.href} className="footer-nav-link" onClick={e => go(e, l.href)}>
                {l.label}
              </a>
            ))}
          </nav>
        </div>

        {/* Contact */}
        <div>
          <h4 className="footer-col-title">GET IN TOUCH</h4>
          <div className="footer-contact">
            <div className="footer-contact-item">
              <Phone size={15} />
              <a href="tel:0947934107">0947 934 107</a>
            </div>
            <div className="footer-contact-item">
              <Mail size={15} />
              <a href="mailto:heotrunghaucreativedesigner@gmail.com">
                heotrunghaucreativedesigner@gmail.com
              </a>
            </div>
            <div className="footer-contact-item">
              <Facebook size={15} />
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                Trung Hậu (Borica)
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <span>&copy; {new Date().getFullYear()} Trung Hậu — Borica. Crafted with precision.</span>
        <div className="footer-made">
          <span>Made with</span>
          <Heart size={13} fill="#E8291C" color="#E8291C" />
          <span>by Borica Creative</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
