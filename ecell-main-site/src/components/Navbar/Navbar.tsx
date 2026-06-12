import React, { useState, useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import './Navbar.css';
import logoImg from '../../assets/logo.png';

gsap.registerPlugin(ScrollTrigger);

export const Navbar: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Initialize Header Scroll Shrink Effect
  useEffect(() => {
    const ctx = gsap.context(() => {
      const mm = gsap.matchMedia();

      // Desktop viewports (above 900px)
      mm.add("(min-width: 901px)", () => {
        gsap.to('.navbar-header', {
          scrollTrigger: {
            trigger: 'body',
            start: 'top top',
            end: '+=150', // Shrinks over 150px of scroll
            scrub: 1,     // Links scroll progress directly to animation
          },
          width: '45%',     // Shrinks to a compact center pill width
          padding: '0.8rem 2.5rem',
          background: 'rgba(22, 20, 15, 0.85)', // E-cell dark translucent theme
          backdropFilter: 'blur(20px)',
          WebkitBackdropFilter: 'blur(20px)',
          border: '1px solid var(--border)',
          boxShadow: '0 10px 40px rgba(0, 0, 0, 0.6)',
          ease: 'none'
        });
      });

      // Mobile viewports (900px and below)
      mm.add("(max-width: 900px)", () => {
        gsap.to('.navbar-header', {
          scrollTrigger: {
            trigger: 'body',
            start: 'top top',
            end: '+=100',
            scrub: 1,
          },
          width: '85%',     // Stays wider on mobile for spacing
          padding: '0.8rem 1.5rem',
          background: 'rgba(22, 20, 15, 0.85)',
          backdropFilter: 'blur(20px)',
          WebkitBackdropFilter: 'blur(20px)',
          border: '1px solid var(--border)',
          boxShadow: '0 10px 40px rgba(0, 0, 0, 0.6)',
          ease: 'none'
        });
      });
    });

    return () => {
      ctx.revert();
    };
  }, []);

  // Close mobile menu on screen resize to desktop
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 992) {
        setIsMobileMenuOpen(false);
      }
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Prevent background scrolling when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isMobileMenuOpen]);

  return (
    <header className="navbar-header">
      <div className="navbar-container">
        {/* Logo */}
        <a href="#home" className="navbar-logo-link">
          <img src={logoImg} alt="E-Cell IITK" className="navbar-logo" />
        </a>

        {/* Desktop Navigation Links */}
        <nav className="navbar-desktop-nav">
          <ul className="navbar-links-list">
            <li>
              <a href="#home" className="navbar-link">
                Home
              </a>
            </li>
            <li>
              <a href="#about" className="navbar-link">
                About
              </a>
            </li>
            <li>
              <a href="#events" className="navbar-link">
                Events
              </a>
            </li>
            <li>
              <a href="#gallery" className="navbar-link">
                Gallery
              </a>
            </li>
            <li>
              <a href="#team" className="navbar-link">
                Team
              </a>
            </li>
          </ul>
        </nav>

        {/* Navigation links naturally align to the right side of the container */}

        {/* Mobile Toggle Button */}
        <button
          className={`navbar-mobile-toggle ${isMobileMenuOpen ? 'active' : ''}`}
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle navigation menu"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>

      {/* Mobile Drawer Dropdown */}
      <div className={`navbar-mobile-drawer ${isMobileMenuOpen ? 'open' : ''}`}>
        <nav className="navbar-mobile-nav">
          <ul className="navbar-mobile-links">
            <li>
              <a href="#home" onClick={() => setIsMobileMenuOpen(false)}>
                Home
              </a>
            </li>
            <li>
              <a href="#about" onClick={() => setIsMobileMenuOpen(false)}>
                About
              </a>
            </li>
            <li>
              <a href="#events" onClick={() => setIsMobileMenuOpen(false)}>
                Events
              </a>
            </li>
            <li>
              <a href="#gallery" onClick={() => setIsMobileMenuOpen(false)}>
                Gallery
              </a>
            </li>
            <li>
              <a href="#team" onClick={() => setIsMobileMenuOpen(false)}>
                Team
              </a>
            </li>
            {/* Mobile CTA Button removed */}
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
