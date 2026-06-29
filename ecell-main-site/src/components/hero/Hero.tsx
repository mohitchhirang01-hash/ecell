import React from 'react';
import './Hero.css';

export const Hero: React.FC = () => {
  return (
    <section className="dummy-hero" id="hero">
      <div className="dummy-hero-glow" />
      <div className="dummy-hero-content">
        <div className="dummy-hero-badge">
          <span className="dummy-hero-badge-dot" />
          Placeholder Hero Section
        </div>
        <h1 className="dummy-hero-title">
          Fostering <span className="text-gold">Innovation</span> & <br />
          <span className="text-gold">Entrepreneurship</span>
        </h1>
        <p className="dummy-hero-desc">
          E-Cell IIT Kanpur is dedicated to helping student ventures grow from raw ideas into successful startups. 
          This is a placeholder hero section that we will design and animate later.
        </p>
        <div className="dummy-hero-actions">
          <a href="#events" className="btn-gold">Explore Initiatives</a>
          <a href="#about" className="btn-outline">Learn More</a>
        </div>
      </div>
    </section>
  );
};
