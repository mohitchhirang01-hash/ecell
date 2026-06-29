import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { BlurText } from '../common/BlurText';
import './About.css';

gsap.registerPlugin(ScrollTrigger);

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
            <BlurText text="About Us" animateBy="chars" triggerOnMount={false} />
          </span>

          <h2 className="about-title">
            <BlurText text="Cultivating the" animateBy="chars" delay={0.05} />
            <br />
            <BlurText text="Next Generation of" animateBy="chars" delay={0.15} />
            <br />
            <BlurText text="Innovators" className="text-gold" animateBy="chars" delay={0.25} />
          </h2>

          <p className="about-desc">
            <BlurText
              text="E‑Cell, IIT Kanpur aims to induce an entrepreneurial mindset into the students and air an innovative streak in them. We are here to water the ‘Ideas’ in the bud and help them bloom into impactful endeavors through networking student enterprises from campus to incubators, seeding funds and angel investors to transform the newly proposed ideas into successful start-ups."
              animateBy="words"
              delay={0.35}
              duration={0.8}
            />
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;

