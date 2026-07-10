import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const links = [
  { label: 'Home',       href: '#hero' },
  { label: 'Experience', href: '#experience' },
  { label: 'Works',      href: '#contents' },
  { label: 'Projects',   href: '#project-01' },
  { label: 'Contact',    href: '#contact' },
];

const Navbar = () => {
  const [open,     setOpen]     = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const go = (e, href) => {
    e.preventDefault();
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });
    setOpen(false);
  };

  return (
    <header className={`navbar${scrolled ? ' navbar--scrolled' : ''}`}>
      <a href="#hero" className="navbar-logo" onClick={e => go(e, '#hero')}>
        <span className="navbar-logo-dot" />
        <span className="navbar-logo-text">BORICA</span>
      </a>

      <nav className="navbar-links">
        {links.map(l => (
          <a key={l.href} href={l.href} className="navbar-link" onClick={e => go(e, l.href)}>
            {l.label}
          </a>
        ))}
        <a href="#contact" className="navbar-cta" onClick={e => go(e, '#contact')}>
          Let's Talk
        </a>
      </nav>

      <button className="navbar-burger" onClick={() => setOpen(!open)} aria-label="Menu">
        {open ? <X size={22} /> : <Menu size={22} />}
      </button>

      <div className={`navbar-mobile${open ? ' open' : ''}`}>
        {links.map(l => (
          <a key={l.href} href={l.href} className="navbar-mobile-link" onClick={e => go(e, l.href)}>
            {l.label}
          </a>
        ))}
        <a href="#contact" className="navbar-mobile-cta" onClick={e => go(e, '#contact')}>
          Let's Talk
        </a>
      </div>
    </header>
  );
};

export default Navbar;
