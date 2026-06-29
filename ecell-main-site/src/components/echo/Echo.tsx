import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { BookOpen, Sparkles, Send } from 'lucide-react';
import './Echo.css';

gsap.registerPlugin(ScrollTrigger);

export const Echo: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const mockupRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    const mockup = mockupRef.current;
    const content = contentRef.current;
    if (!section || !mockup || !content) return;

    const ctx = gsap.context(() => {
      // Entrance animation for cover mockup (slide from left, rotate slightly)
      gsap.from(mockup, {
        scrollTrigger: {
          trigger: section,
          start: 'top 80%',
          toggleActions: 'play none none none',
        },
        opacity: 0,
        x: -60,
        rotationY: -15,
        duration: 1.2,
        ease: 'power3.out',
      });

      // Entrance animation for content blocks (staggered from right)
      gsap.from(content.children, {
        scrollTrigger: {
          trigger: section,
          start: 'top 80%',
          toggleActions: 'play none none none',
        },
        opacity: 0,
        x: 50,
        duration: 0.8,
        stagger: 0.15,
        ease: 'power3.out',
      });
    }, section);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="echo-section" id="echo">
      <div className="echo-bg-glow" />
      <div className="echo-grid-overlay" />

      <div className="echo-container">
        {/* Left Column: Premium Digital Cover Mockup */}
        <div ref={mockupRef} className="echo-visual-column">
          <div className="echo-magazine-cover">
            <img src="/images/echo.png" alt="ECHO Magazine Cover" className="cover-img" />
            <div className="cover-sheen" />
          </div>
          <div className="visual-shadow" />
        </div>

        {/* Right Column: Text Content & Call to Action */}
        <div ref={contentRef} className="echo-content-column">
          <span className="echo-eyebrow">
            <BookOpen size={12} style={{ marginRight: '6px' }} />
            E-Cell Newsletter
          </span>
          
          <h2 className="echo-heading">
            ECHO
          </h2>
          
          <p className="echo-tagline">
            EVOKE &bull; CONNECT &bull; HIGHLIGHT &bull; OUTLOOK
          </p>

          <h3 className="echo-sub-heading">
            Amplifying Innovation from the Heart of IIT Kanpur
          </h3>

          <p className="echo-description">
            We are thrilled to unveil the inaugural edition of <strong>ECHO</strong> - Evoke, Connect, Highlight, Outlook, your gateway to the dynamic world of entrepreneurship at IIT Kanpur.
          </p>

          <p className="echo-description">
            ECHO is crafted to evoke your curiosity, connect you with groundbreaking ideas, highlight inspiring stories, and offer a fresh outlook on innovation and entrepreneurship. This first issue brings you inspiring interviews with visionaries turning ideas into reality, insightful summaries from Y Combinator's best videos, and a glimpse into the trends shaping the entrepreneurial landscape. Challenge your mind with our stimulating puzzles designed to enhance your problem-solving skills.
          </p>

          <p className="echo-closing">
            Have fun exploring the world of entrepreneurship with ECHO!
          </p>

          <div className="echo-actions">
            <a href="#echo" className="btn-read-echo">
              <span>Read ECHO</span>
              <Send size={16} className="btn-icon-send" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Echo;
