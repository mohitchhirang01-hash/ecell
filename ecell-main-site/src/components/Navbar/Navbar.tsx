import React, { useState } from 'react';
import './Navbar.css';

export const Navbar: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      {/* Single Menu Toggle Option */}
      <button 
        className={`menu-trigger ${menuOpen ? 'active' : ''}`}
        onClick={() => setMenuOpen(!menuOpen)}
        aria-label="Toggle menu"
      >
        <span className="menu-trigger-text">{menuOpen ? 'CLOSE' : 'MENU'}</span>
        <div className="hamburger-icon">
          <span></span>
          <span></span>
          <span></span>
        </div>
      </button>

      {/* Full-screen Minimalist Overlay */}
      <div className={`menu-overlay ${menuOpen ? 'open' : ''}`}>
        <div className="menu-overlay-bg" />
        <div className="menu-overlay-links">
          <a href="#about" onClick={() => setMenuOpen(false)}>
            <span className="link-num">01</span> About Us
          </a>
          <a href="#events" onClick={() => setMenuOpen(false)}>
            <span className="link-num">02</span> Events
          </a>
          <a href="#internships" onClick={() => setMenuOpen(false)}>
            <span className="link-num">03</span> Internships
          </a>
          <a href="#team" onClick={() => setMenuOpen(false)}>
            <span className="link-num">04</span> Team
          </a>
          <a href="#cta" onClick={() => setMenuOpen(false)} className="menu-overlay-cta">
            Join Us
          </a>
        </div>
      </div>
    </>
  );
};
