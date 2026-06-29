import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import './About.css';

gsap.registerPlugin(ScrollTrigger);

const highlights = [
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2L2 7l10 5 10-5-10-5z" />
        <path d="M2 17l10 5 10-5" />
        <path d="M2 12l10 5 10-5" />
      </svg>
    ),
    title: 'Ideation',
    description: 'Nurturing raw ideas from the very first spark into structured, viable concepts.',
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
        <path d="M16 3.13a4 4 0 0 1 0 7.75" />
      </svg>
    ),
    title: 'Networking',
    description: 'Bridging student ventures with incubators, mentors, and industry leaders.',
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <line x1="12" y1="1" x2="12" y2="23" />
        <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
      </svg>
    ),
    title: 'Funding',
    description: 'Connecting startups with seed funds and angel investors for sustainable growth.',
  },
];

export const About: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Badge + heading + description animate in
      gsap.from('.about-label', {
        scrollTrigger: {
          trigger: '.about-label',
          start: 'top 85%',
          toggleActions: 'play none none none',
        },
        opacity: 0,
        x: -30,
        duration: 0.7,
        ease: 'power3.out',
      });

      gsap.from('.about-heading', {
        scrollTrigger: {
          trigger: '.about-heading',
          start: 'top 85%',
          toggleActions: 'play none none none',
        },
        opacity: 0,
        y: 40,
        duration: 0.8,
        ease: 'power3.out',
      });

      gsap.from('.about-description', {
        scrollTrigger: {
          trigger: '.about-description',
          start: 'top 85%',
          toggleActions: 'play none none none',
        },
        opacity: 0,
        y: 30,
        duration: 0.8,
        delay: 0.15,
        ease: 'power3.out',
      });

      // Accent line grows
      gsap.from('.about-accent-line', {
        scrollTrigger: {
          trigger: '.about-accent-line',
          start: 'top 90%',
          toggleActions: 'play none none none',
        },
        scaleY: 0,
        duration: 1,
        ease: 'power3.out',
      });

      // Highlight cards stagger in
      gsap.from('.about-highlight', {
        scrollTrigger: {
          trigger: '.about-highlights',
          start: 'top 80%',
          toggleActions: 'play none none none',
        },
        opacity: 0,
        y: 40,
        duration: 0.7,
        stagger: 0.15,
        ease: 'power3.out',
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="about" id="about">
      {/* Background decorative elements */}
      <div className="about-bg-glow" />
      <div className="about-grid-overlay" />

      <div className="about-container">
        {/* Left column: accent line */}
        <div className="about-accent-col">
          <div className="about-accent-line" />
        </div>

        {/* Right column: content */}
        <div className="about-content">
          <div className="about-label">
            <span className="about-label-line" />
            <span className="about-label-text">About Us</span>
          </div>

          <h2 className="about-heading">
            Cultivating the Next Generation of{' '}
            <span className="about-heading-accent">Innovators</span>
          </h2>

          <p className="about-description">
            E-Cell, IIT Kanpur aims to induce an entrepreneurial mindset into the
            students and air an innovative streak in them. We are here to water the
            'Ideas' in the bud and help them bloom into impactful endeavors through
            networking student enterprises from campus to incubators, seeding funds
            and angel investors to transform the newly proposed ideas into
            successful start-ups.
          </p>

          {/* Highlight cards */}
          <div className="about-highlights">
            {highlights.map((item) => (
              <div key={item.title} className="about-highlight">
                <div className="about-highlight-icon">{item.icon}</div>
                <div className="about-highlight-content">
                  <h3 className="about-highlight-title">{item.title}</h3>
                  <p className="about-highlight-desc">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
