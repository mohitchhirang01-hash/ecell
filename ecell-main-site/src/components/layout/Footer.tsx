import React, { useState } from 'react';
import { Send, ArrowRight } from 'lucide-react';
import './Footer.css';

export const Footer: React.FC = () => {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setEmail('');
    }, 3000);
  };

  return (
    <footer className="site-footer">
      <div className="footer-glow-1" />
      <div className="footer-glow-2" />

      <div className="footer-container">
        {/* Column 1: Brand Info */}
        <div className="footer-col brand-col">
          <div className="footer-logo">
            <h3 className="footer-brand-title">E-CELL</h3>
            <span className="footer-brand-sub">IIT KANPUR</span>
          </div>
          <div className="footer-motto">
            <span className="motto-word">Ideate</span>
            <span className="motto-dot">•</span>
            <span className="motto-word">Innovate</span>
            <span className="motto-dot">•</span>
            <span className="motto-word">Incubate</span>
          </div>
        </div>

        {/* Column 2: Social Media */}
        <div className="footer-col social-col">
          <h4 className="footer-heading">FOLLOW US</h4>
          <div className="social-links-grid">
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="footer-social-link">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/>
                <rect width="4" height="12" x="2" y="9"/>
                <circle cx="4" cy="4" r="2"/>
              </svg>
              <span>LinkedIn</span>
            </a>

            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="footer-social-link">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect width="20" height="20" x="2" y="2" rx="5" ry="5"/>
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
                <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/>
              </svg>
              <span>Instagram</span>
            </a>

            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="footer-social-link">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"/>
              </svg>
              <span>X (Twitter)</span>
            </a>

            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="footer-social-link">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
              </svg>
              <span>Facebook</span>
            </a>

            <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="footer-social-link">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M22.54 6.42a2.78 2.78 0 0 0-1.95-1.96C18.88 4 12 4 12 4s-6.88 0-8.59.46a2.78 2.78 0 0 0-1.95 1.96A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.41 19c1.71.46 8.59.46 8.59.46s6.88 0 8.59-.46a2.78 2.78 0 0 0 1.95-1.96 29 29 0 0 0 .46-5.33 29 29 0 0 0-.46-5.33z"/>
                <polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02"/>
              </svg>
              <span>YouTube</span>
            </a>
          </div>
        </div>

        {/* Column 3: Get Notified */}
        <div className="footer-col notify-col">
          <h4 className="footer-heading">GET NOTIFIED</h4>
          <p className="notify-text">
            Be the first to know about the activities of E-Cell.
          </p>
          <form className="notify-form" onSubmit={handleSubmit}>
            <div className="input-group">
              <input
                type="email"
                placeholder="type email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="notify-input"
              />
              <button type="submit" className="notify-submit" aria-label="Subscribe">
                {submitted ? <span className="submitted-check">✓</span> : <ArrowRight size={18} />}
              </button>
            </div>
          </form>
          {submitted && <span className="notification-toast">Thank you! You're subscribed.</span>}
        </div>
      </div>

      {/* Footer Bottom copyright bar */}
      <div className="footer-bottom">
        <p className="copyright-text">
          &copy; {new Date().getFullYear()} E-Cell, IIT Kanpur. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
