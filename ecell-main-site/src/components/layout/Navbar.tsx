import React, { useEffect, useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ChevronDown, Calendar, Briefcase, Rocket } from 'lucide-react';
import './Navbar.css';

import logoImg from '../../assets/logo.png';

interface DropdownItem {
  name: string;
  href: string;
  icon: React.ComponentType<{ size: number; className?: string }>;
  desc: string;
}

const initiativeItems: DropdownItem[] = [
  {
    name: 'E-Summit',
    href: '#events',
    icon: Calendar,
    desc: 'Annual flagship entrepreneurship summit.',
  },
  {
    name: 'Startup Expo',
    href: '#events',
    icon: Briefcase,
    desc: 'Showcasing student-led startups and ventures.',
  },
  {
    name: 'UpStart',
    href: '#events',
    icon: Rocket,
    desc: 'National level business model competition.',
  },
];

export const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [mobileDropdownOpen, setMobileDropdownOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');

  const hoverTimeout = useRef<number | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 120) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const sectionIds = ['hero', 'about', 'showcase', 'events', 'gallery', 'team'];
    const observers = sectionIds.map(id => {
      const el = document.getElementById(id);
      if (!el) return null;

      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setActiveSection(id);
          }
        },
        { threshold: 0.2, rootMargin: '-20% 0px -40% 0px' }
      );
      observer.observe(el);
      return { observer, el };
    });

    return () => {
      observers.forEach(obs => {
        if (obs) obs.observer.unobserve(obs.el);
      });
    };
  }, []);

  const handleDropdownEnter = () => {
    if (hoverTimeout.current) {
      window.clearTimeout(hoverTimeout.current);
    }
    setDropdownOpen(true);
  };

  const handleDropdownLeave = () => {
    hoverTimeout.current = window.setTimeout(() => {
      setDropdownOpen(false);
    }, 150);
  };

  const handleScrollToSection = (e: React.MouseEvent<HTMLAnchorElement | HTMLButtonElement>, href: string) => {
    e.preventDefault();
    setIsOpen(false);
    setDropdownOpen(false);
    setMobileDropdownOpen(false);
    
    const targetElement = document.querySelector(href);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className={`nav-container ${isScrolled ? 'visible' : ''}`}>
      <div className="nav-inner">
        {/* Logo */}
        <a href="#hero" className="nav-logo-link" onClick={(e) => handleScrollToSection(e, '#hero')}>
          <img src={logoImg} alt="E-Cell IITK" className="nav-logo-img" />
        </a>

        {/* Desktop Links */}
        <div className="nav-links">
          <a
            href="#about"
            className={`nav-link text-slide-link ${activeSection === 'about' ? 'active' : ''}`}
            onClick={(e) => handleScrollToSection(e, '#about')}
          >
            <div className="slide-text-wrapper">
              <span className="split-container">About Us</span>
              <span className="split-sr">About Us</span>
            </div>
            <div className="nav-link-dot" />
          </a>

          {/* Initiatives Dropdown */}
          <div
            className="dropdown-wrapper"
            onMouseEnter={handleDropdownEnter}
            onMouseLeave={handleDropdownLeave}
          >
            <button
              className={`nav-link text-slide-link ${
                activeSection === 'showcase' || activeSection === 'events' ? 'active' : ''
              }`}
              aria-expanded={dropdownOpen}
              onClick={() => setDropdownOpen(!dropdownOpen)}
            >
              <div className="slide-text-wrapper">
                <span className="split-container">
                  Initiatives
                  <ChevronDown
                    size={14}
                    className={`dropdown-chevron ${dropdownOpen ? 'open' : ''}`}
                  />
                </span>
                <span className="split-sr">
                  Initiatives
                  <ChevronDown
                    size={14}
                    className={`dropdown-chevron ${dropdownOpen ? 'open' : ''}`}
                  />
                </span>
              </div>
              <div className="nav-link-dot" />
            </button>

            <AnimatePresence>
              {dropdownOpen && (
                <motion.div
                  initial={{ opacity: 0, y: 8, scale: 0.97 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: 8, scale: 0.97 }}
                  transition={{ duration: 0.18, ease: 'easeOut' }}
                  onMouseEnter={handleDropdownEnter}
                  onMouseLeave={handleDropdownLeave}
                  className="dropdown-menu"
                >
                  {initiativeItems.map((item) => {
                    const Icon = item.icon;
                    return (
                      <a
                        key={item.name}
                        href={item.href}
                        onClick={(e) => handleScrollToSection(e, item.href)}
                        className="dropdown-item"
                      >
                        <div className="dropdown-item-icon-box">
                          <Icon size={16} />
                        </div>
                        <div>
                          <p className="dropdown-item-name">{item.name}</p>
                          <p className="dropdown-item-desc">{item.desc}</p>
                        </div>
                      </a>
                    );
                  })}
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          <a
            href="#events"
            className={`nav-link text-slide-link ${activeSection === 'events' ? 'active' : ''}`}
            onClick={(e) => handleScrollToSection(e, '#events')}
          >
            <div className="slide-text-wrapper">
              <span className="split-container">Events</span>
              <span className="split-sr">Events</span>
            </div>
            <div className="nav-link-dot" />
          </a>

          <a
            href="#testimonials"
            className={`nav-link text-slide-link ${activeSection === 'testimonials' ? 'active' : ''}`}
            onClick={(e) => handleScrollToSection(e, '#testimonials')}
          >
            <div className="slide-text-wrapper">
              <span className="split-container">Testimonials</span>
              <span className="split-sr">Testimonials</span>
            </div>
            <div className="nav-link-dot" />
          </a>
        </div>

        {/* CTA & Mobile Toggle */}
        <div className="nav-actions">
          <a
            href="#events"
            onClick={(e) => handleScrollToSection(e, '#events')}
            className="btn-shimmer-cta desktop-only"
          >
            E-Summit '26
          </a>

          <button
            className="nav-toggle-btn"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle Menu"
          >
            {isOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Panel (Bottom Drawer Sheet) */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 15, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 15, scale: 0.95 }}
            transition={{ duration: 0.22, ease: 'easeInOut' }}
            className="nav-mobile-menu"
          >
            <a
              href="#about"
              onClick={(e) => handleScrollToSection(e, '#about')}
              className="nav-mobile-link"
            >
              About Us
            </a>

            {/* Mobile Dropdown Collapsible */}
            <div>
              <button
                onClick={() => setMobileDropdownOpen(!mobileDropdownOpen)}
                className="nav-mobile-dropdown-header"
              >
                <span>Initiatives</span>
                <ChevronDown
                  size={15}
                  className={`dropdown-chevron ${mobileDropdownOpen ? 'open' : ''}`}
                />
              </button>
              <AnimatePresence>
                {mobileDropdownOpen && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                    className="nav-mobile-sublinks"
                  >
                    {initiativeItems.map((item) => {
                      const Icon = item.icon;
                      return (
                        <a
                          key={item.name}
                          href={item.href}
                          onClick={(e) => handleScrollToSection(e, item.href)}
                          className="nav-mobile-sublink"
                        >
                          <Icon size={14} />
                          {item.name}
                        </a>
                      );
                    })}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            <a
              href="#events"
              onClick={(e) => handleScrollToSection(e, '#events')}
              className="nav-mobile-link"
            >
              Events
            </a>

            <a
              href="#testimonials"
              onClick={(e) => handleScrollToSection(e, '#testimonials')}
              className="nav-mobile-link"
            >
              Testimonials
            </a>

            <a
              href="#events"
              onClick={(e) => handleScrollToSection(e, '#events')}
              className="btn-shimmer-cta btn-mobile-cta"
            >
              E-Summit '26
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};
