import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import './Hero.css';

const PARTICLES_COUNT = 8;

const stats = [
  { value: '50+', label: 'Events' },
  { value: '10K+', label: 'Participants' },
  { value: '100+', label: 'Startups' },
  { value: '₹2Cr+', label: 'Funding Raised' },
];

export const Hero: React.FC = () => {
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });

      tl.to('.hero-badge', {
        opacity: 1,
        y: 0,
        duration: 0.7,
        delay: 0.2,
      })
        .to(
          '.hero-heading',
          {
            opacity: 1,
            y: 0,
            duration: 0.8,
          },
          '-=0.4'
        )
        .to(
          '.hero-subtitle',
          {
            opacity: 1,
            y: 0,
            duration: 0.7,
          },
          '-=0.4'
        )
        .to(
          '.hero-cta-group',
          {
            opacity: 1,
            y: 0,
            duration: 0.7,
          },
          '-=0.3'
        )
        .to(
          '.hero-stat',
          {
            opacity: 1,
            y: 0,
            duration: 0.6,
            stagger: 0.1,
          },
          '-=0.3'
        );
    }, heroRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={heroRef} className="hero" id="hero">
      {/* Background layers */}
      <div className="hero-bg-mesh" />
      <div className="hero-grid-overlay" />

      {/* Floating particles */}
      <div className="hero-particles">
        {Array.from({ length: PARTICLES_COUNT }).map((_, i) => (
          <div key={i} className="hero-particle" />
        ))}
      </div>

      {/* Decorative ring */}
      <div className="hero-ring" />

      {/* Main content */}
      <div className="hero-content">
        <div className="hero-badge">
          <span className="hero-badge-dot" />
          <span className="hero-badge-text">IIT Kanpur</span>
        </div>

        <h1 className="hero-heading">
          Igniting the{' '}
          <span className="accent">Entrepreneurial</span>
          <br />
          Spirit in You
        </h1>

        <p className="hero-subtitle">
          E-Cell IITK is the entrepreneurship cell of IIT Kanpur — fostering
          innovation, mentoring startups, and building a thriving ecosystem for
          student-led ventures.
        </p>

        <div className="hero-cta-group">
          <a href="#events" className="hero-cta-primary">
            <span>Explore Events</span>
          </a>
          <a href="#about" className="hero-cta-secondary">
            Learn More
          </a>
        </div>
      </div>

      {/* Stats bar */}
      <div className="hero-stats">
        {stats.map((stat) => (
          <div key={stat.label} className="hero-stat">
            <div className="hero-stat-value">{stat.value}</div>
            <div className="hero-stat-label">{stat.label}</div>
          </div>
        ))}
      </div>

      {/* Left social sidebar */}
      <div className="hero-socials-left">
        <div className="social-line" />
        <a href="#" aria-label="LinkedIn">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
            <rect x="2" y="9" width="4" height="12" />
            <circle cx="4" cy="4" r="2" />
          </svg>
        </a>
        <a href="#" aria-label="Instagram">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
            <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
            <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
          </svg>
        </a>
        <a href="#" aria-label="Twitter">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M4 4l11.733 16h4.267l-11.733 -16h-4.267z" />
            <path d="M4 20l6.768 -6.768m2.46 -2.46l6.772 -6.772" />
          </svg>
        </a>
      </div>

      {/* Right scroll indicator */}
      <div className="hero-scroll-indicator">
        <span className="hero-scroll-label">Scroll</span>
        <div className="hero-scroll-icon" />
      </div>
    </section>
  );
};
