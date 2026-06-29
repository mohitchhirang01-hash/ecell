import React from 'react';
import './Footer.css';
import logo from '../../assets/logo.png';

const footerLinks = {
  initiatives: [
    { label: 'E-Summit \'26', href: '#events' },
    { label: 'UpStart', href: '#events' },
    { label: 'Internship Fair', href: '#events' },
    { label: 'Startup Expo', href: '#events' },
  ],
  resources: [
    { label: 'Startup Toolkit', href: '#' },
    { label: 'Mentor Directory', href: '#' },
    { label: 'Funding Guide', href: '#' },
    { label: 'Blog', href: '#' },
  ],
  connect: [
    { label: 'About Us', href: '#about' },
    { label: 'Our Team', href: '#team' },
    { label: 'Gallery', href: '#gallery' },
    { label: 'Contact', href: '#' },
  ],
};

// Inline SVGs for social icons (lucide-react doesn't have brand icons in this version)
const TwitterIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
  </svg>
);

const InstagramIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
  </svg>
);

const LinkedinIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect width="4" height="12" x="2" y="9" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

const YoutubeIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17" />
    <path d="m10 15 5-3-5-3z" />
  </svg>
);

const MailIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect width="20" height="16" x="2" y="4" rx="2" />
    <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
  </svg>
);

const socialLinks = [
  { icon: <TwitterIcon />, href: 'https://twitter.com/eaboraiitk', label: 'Twitter' },
  { icon: <InstagramIcon />, href: 'https://instagram.com/ecaboraiitk', label: 'Instagram' },
  { icon: <LinkedinIcon />, href: 'https://linkedin.com/company/ecell-iitk', label: 'LinkedIn' },
  { icon: <YoutubeIcon />, href: 'https://youtube.com/@eaboraiitk', label: 'YouTube' },
  { icon: <MailIcon />, href: 'mailto:ecell@iitk.ac.in', label: 'Email' },
];

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer-section">
      <div className="footer-container">
        {/* Top Row: Brand + Link Columns */}
        <div className="footer-top">
          {/* Brand Column */}
          <div className="footer-brand">
            <div className="footer-logo-row">
              <img src={logo} alt="E-Cell IITK" className="footer-logo" />
              <span className="footer-logo-text">E‑Cell <span className="text-gold">IITK</span></span>
            </div>
            <p className="footer-brand-desc">
              Entrepreneurship Cell, IIT Kanpur — fostering innovation, incubating startups, and building the next generation of founders.
            </p>

            {/* Social Icons */}
            <div className="footer-socials">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="footer-social-link"
                  aria-label={social.label}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Link Columns */}
          <div className="footer-links-group">
            <div className="footer-link-col">
              <h4 className="footer-col-title">Initiatives</h4>
              <ul>
                {footerLinks.initiatives.map((link) => (
                  <li key={link.label}><a href={link.href}>{link.label}</a></li>
                ))}
              </ul>
            </div>

            <div className="footer-link-col">
              <h4 className="footer-col-title">Resources</h4>
              <ul>
                {footerLinks.resources.map((link) => (
                  <li key={link.label}><a href={link.href}>{link.label}</a></li>
                ))}
              </ul>
            </div>

            <div className="footer-link-col">
              <h4 className="footer-col-title">Connect</h4>
              <ul>
                {footerLinks.connect.map((link) => (
                  <li key={link.label}><a href={link.href}>{link.label}</a></li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="footer-divider" />

        {/* Bottom Row: Copyright + Legal */}
        <div className="footer-bottom">
          <p className="footer-copyright">
            © {currentYear} Entrepreneurship Cell, IIT Kanpur. All rights reserved.
          </p>
          <div className="footer-legal">
            <a href="#">Privacy Policy</a>
            <span className="footer-legal-dot">·</span>
            <a href="#">Terms of Use</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
