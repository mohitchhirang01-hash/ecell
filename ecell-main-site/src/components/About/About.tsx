import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import './About.css';

gsap.registerPlugin(ScrollTrigger);

export const About: React.FC = () => {
  const revealRef = useRef<HTMLParagraphElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Text Reveal animation
      const revealText = revealRef.current;
      if (revealText) {
        const textStr = revealText.textContent || '';
        const words = textStr.trim().split(/\s+/);
        revealText.innerHTML = '';
        words.forEach((word) => {
          const span = document.createElement('span');
          span.textContent = word + ' ';
          revealText.appendChild(span);
        });
        const spans = revealText.querySelectorAll('span');
        gsap.fromTo(
          spans,
          { opacity: 0.15, color: 'rgba(255, 255, 255, 0.15)' },
          {
            opacity: 1,
            color: 'var(--text)',
            stagger: 0.1,
            scrollTrigger: {
              trigger: '.about-container',
              start: 'top 75%',
              end: 'bottom 60%',
              scrub: true,
            },
          }
        );
      }
    });

    return () => {
      ctx.revert();
    };
  }, []);

  return (
    <section id="about" className="section about">
      {/* 1. Text Reveal Section */}
      <div className="container about-container">
        <div className="about-header">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="star-icon">
            <path d="M12 2L14.4 9.6L22 12L14.4 14.4L12 22L9.6 14.4L2 12L9.6 9.6L12 2Z" fill="currentColor" stroke="currentColor" stroke-width="2" />
          </svg>
          <span className="about-label">ABOUT US</span>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="star-icon">
            <path d="M12 2L14.4 9.6L22 12L14.4 14.4L12 22L9.6 14.4L2 12L9.6 9.6L12 2Z" fill="currentColor" stroke="currentColor" stroke-width="2" />
          </svg>
        </div>
        <div className="about-text-reveal">
          <p ref={revealRef} className="reveal-type">
            E-Cell, IIT Kanpur aims to induce an entrepreneurial mindset into the students and air an innovative streak in them. We are here to water the 'Ideas' in the bud and help them bloom into impactful endeavors through networking student enterprises from campus to incubators, seeding funds and angel investors to transform the newly proposed ideas into successful start-ups.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
