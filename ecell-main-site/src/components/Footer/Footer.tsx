import React from 'react';
import './Footer.css';
import logoImg from '../../assets/logo.png';

export const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Left Side */}
        <div className="footer-left">
          <div className="footer-logo">
            <img src={logoImg} alt="E-Cell IITK Logo" className="footer-logo-img" />
            <span className="footer-logo-text">E-Cell IITK</span>
          </div>
          <p className="footer-statement">
            Fostering the spirit of entrepreneurship at IIT Kanpur. Helping turn ideas into impactful startups.
          </p>
          <div className="footer-copyright">
            &copy; {new Date().getFullYear()} E-Cell IIT Kanpur. All rights reserved.
          </div>
        </div>

        {/* Right Side */}
        <div className="footer-right">
          <div className="footer-links">
            <a href="#about">About Us</a>
            <a href="#events">Events</a>
            <a href="#internships">Internships</a>
            <a href="#cta">Contact Us</a>
            <a href="#cta">Privacy Policy</a>
            <a href="#cta">Terms of Service</a>
          </div>

          <div className="footer-socials">
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="social-circle" aria-label="LinkedIn">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                <rect x="2" y="9" width="4" height="12" />
                <circle cx="4" cy="4" r="2" />
              </svg>
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="social-circle" aria-label="Instagram">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
              </svg>
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="social-circle" aria-label="Twitter">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M4 4l11.733 16h4.267l-11.733 -16h-4.267z" />
                <path d="M4 20l6.768 -6.768m2.46 -2.46l6.772 -6.772" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
