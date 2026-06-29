import React, { useRef } from 'react';
import './About.css';

export const About: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  return (
    <section ref={containerRef} className="about-section" id="about">
      {/* Background Decorative Glow */}
      <div className="about-glow" />

      <div className="about-container">
        {/* Centered Text Content */}
        <div className="about-text-col">
          <span className="about-eyebrow">
            About Us
          </span>

          <h2 className="about-title">
            Cultivating the <br />
            Next Generation of <br />
            <span className="text-gold">Innovators</span>
          </h2>

          <p className="about-desc">
            E‑Cell, IIT Kanpur aims to induce an entrepreneurial mindset into the students and air an innovative streak in them. We are here to water the ‘Ideas’ in the bud and help them bloom into impactful endeavors through networking student enterprises from campus to incubators, seeding funds and angel investors to transform the newly proposed ideas into successful start-ups.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;


