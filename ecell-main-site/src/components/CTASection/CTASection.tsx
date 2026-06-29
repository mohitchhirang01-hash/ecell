import React from 'react';
import './CTASection.css';

export const CTASection: React.FC = () => {
  return (
    <section className="cta-section" id="cta">
      {/* Grid background layer */}
      <div className="cta-grid-bg" />
      <div className="cta-dot-matrix" />
      
      {/* Decorative glow elements */}
      <div className="cta-glow-element cta-glow-left" />
      <div className="cta-glow-element cta-glow-right" />

      <div className="cta-container">
        <h2 className="cta-heading">Ready to Defy Gravity?</h2>
        <p className="cta-subtext">
          Applications for the Flight Test Cohort are now open. Secure your coordinates today.
        </p>
        <div className="cta-btn-wrapper">
          <a href="#cta" className="cta-button">
            <span>Apply for Flight Test</span>
          </a>
        </div>
      </div>
    </section>
  );
};
