import React from 'react';
import './FeatureGrid.css';

export const FeatureGrid: React.FC = () => {
  return (
    <section className="feature-grid-section" id="events">
      <div className="feature-grid-container">
        {/* Header Row */}
        <div className="feature-grid-header">
          <div className="feature-grid-header-left">
            <h2 className="feature-grid-heading">Bending Spacetime through Core Initiatives</h2>
            <p className="feature-grid-description">
              E-Cell IIT Kanpur aims to induce an entrepreneurial mindset and air an innovative streak. We water the 'Ideas' in the bud and help them bloom into impactful endeavors.
            </p>
          </div>
          <div className="feature-grid-header-right">
            <a href="#events" className="feature-grid-specs-link">
              View All Events <span className="arrow">→</span>
            </a>
          </div>
        </div>

        {/* Asymmetric Grid */}
        <div className="feature-grid-layout">
          {/* Card 1: Wide */}
          <div className="feature-card card-wide">
            <div className="feature-card-glow" />
            <div className="feature-card-content">
              <div className="feature-card-icon">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
                </svg>
              </div>
              <h3 className="feature-card-title">E-Summit</h3>
              <p className="feature-card-text">
                Our annual flagship summit that witnesses huge participation from all over India, connecting campus start-ups with incubators, angel investors, and venture funds.
              </p>
            </div>
          </div>

          {/* Card 2: Small */}
          <div className="feature-card card-small">
            <div className="feature-card-glow" />
            <div className="feature-card-content">
              <div className="feature-card-icon">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="10" />
                  <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3" />
                  <line x1="12" y1="17" x2="12.01" y2="17" />
                </svg>
              </div>
              <h3 className="feature-card-title">TEDx & talks</h3>
              <p className="feature-card-text">
                Guest lectures and TEDx events taking learning to a whole new level by bringing key industry innovators to share ideas.
              </p>
            </div>
          </div>

          {/* Card 3: Small */}
          <div className="feature-card card-small">
            <div className="feature-card-glow" />
            <div className="feature-card-content">
              <div className="feature-card-icon">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
                  <circle cx="9" cy="7" r="4" />
                  <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
                  <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                </svg>
              </div>
              <h3 className="feature-card-title">StartUp Internship</h3>
              <p className="feature-card-text">
                Helping students land internships in high-growth startups to learn the core mechanics of venture creation from within.
              </p>
            </div>
          </div>

          {/* Card 4: Wide with Button */}
          <div className="feature-card card-wide card-with-action">
            <div className="feature-card-glow" />
            <div className="feature-card-content flex-row-layout">
              <div className="card-info-side">
                <div className="feature-card-icon">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <polygon points="12 2 2 7 12 12 22 7 12 2" />
                    <polyline points="2 17 12 22 22 17" />
                    <polyline points="2 12 12 17 22 12" />
                  </svg>
                </div>
                <h3 className="feature-card-title">Startup Master Class & Workshops</h3>
                <p className="feature-card-text">
                  A high-intensity gathering of founders and professionals conducting lectures and workshops focused on incubating newly proposed startup ideas.
                </p>
              </div>
              <div className="card-action-side">
                <a href="#cta" className="feature-card-btn">
                  <span>Register Now</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
