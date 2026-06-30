import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import './Hero.css';
import Strands from '../Strands/Strands';
import logoImg from '../../assets/logo.png';

const PARTICLES_COUNT = 12;

export const Hero: React.FC = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    // Dynamic Chroma Keying for Building Image
    const img = new Image();
    img.src = '/building.jpg';
    img.onload = () => {
      const canvas = canvasRef.current;
      if (!canvas) return;

      // Set the canvas bitmap size to match the image
      canvas.width = img.width;
      canvas.height = img.height;

      const ctx = canvas.getContext('2d');
      if (!ctx) return;
      ctx.drawImage(img, 0, 0);

      // Defer the heavy pixel-processing to avoid blocking the main thread
      // during the critical first-paint window (reduces CLS from layout thrashing)
      const runChromaKey = () => {
        const imgData = ctx.getImageData(0, 0, canvas.width, canvas.height);
        const data = imgData.data;

        // Sample sky color from top-left pixel
        const targetR = data[0];
        const targetG = data[1];
        const targetB = data[2];

        const threshold = 95;
        const fadeRange = 30;

        for (let i = 0; i < data.length; i += 4) {
          const r = data[i];
          const g = data[i + 1];
          const b = data[i + 2];

          // Euclidean distance in RGB color space
          const dist = Math.sqrt(
            (r - targetR) ** 2 +
            (g - targetG) ** 2 +
            (b - targetB) ** 2
          );

          if (dist < threshold) {
            data[i + 3] = 0; // Fully transparent sky
          } else if (dist < threshold + fadeRange) {
            const factor = (dist - threshold) / fadeRange;
            data[i + 3] = Math.floor(factor * 255); // Feathered transition
          }
        }

        ctx.putImageData(imgData, 0, 0);
      };

      // Use requestIdleCallback where available, else setTimeout
      if ('requestIdleCallback' in window) {
        (window as any).requestIdleCallback(runChromaKey);
      } else {
        setTimeout(runChromaKey, 0);
      }
    };
  }, []);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });

      tl.to(
        '.hero-heading-line',
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          stagger: 0.15,
          delay: 0.2,
        }
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
          '.hero-scroll-indicator',
          {
            opacity: 1,
            y: 0,
            duration: 0.6,
          },
          '-=0.2'
        )
        .to(
          '.hero-logo-container',
          {
            opacity: 1,
            y: 0,
            duration: 0.8,
            ease: 'power3.out',
          },
          '-=0.4'
        );
    }, heroRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={heroRef} className="hero" id="hero">
      {/* Top Left Logo */}
      <div className="hero-logo-container">
        <img src={logoImg} alt="E-Cell Logo" className="hero-logo" />
      </div>

      {/* Background layers */}
      <div className="hero-bg-mesh" />
      <div className="hero-grid-overlay" />

      {/* Dynamic Strands Background (Increased size and thickness) */}
      <div className="hero-strands-bg">
        <Strands
          colors={["#C98017", "#372507", "#B3B3B3"]}
          count={3}
          speed={0.5}
          amplitude={1.4}
          waviness={1.2}
          thickness={0.9}
          glow={3.0}
          taper={3}
          spread={1.2}
          intensity={0.7}
          saturation={1.5}
          opacity={0.9}
          scale={2.2}
          glass={false}
          refraction={1}
          dispersion={1}
          glassSize={1}
        />
      </div>

      {/* Floating particles */}
      <div className="hero-particles">
        {Array.from({ length: PARTICLES_COUNT }).map((_, i) => (
          <div key={i} className="hero-particle" />
        ))}
      </div>

      {/* Transparent Building Canvas (Chroma-keyed on the fly) */}
      <canvas ref={canvasRef} className="hero-building-canvas" />

      {/* Main content */}
      <div className="hero-content">

        <h1 className="hero-heading">
          <span className="hero-heading-line">IDEATE.</span>
          <span className="hero-heading-line">INNOVATE.</span>
          <span className="hero-heading-line accent">INCUBATE.</span>
        </h1>

        <p className="hero-subtitle">
          Entrepreneurship Cell, IIT Kanpur
        </p>

        <div className="hero-cta-group">
          <a href="#events" className="hero-cta-primary">
            <span>Explore ↓</span>
          </a>
        </div>
      </div>

      {/* Bottom Scroll Indicator (Centered Down Chevron) */}
      <div className="hero-scroll-indicator">
        <svg 
          className="chevron-down" 
          width="24" 
          height="24" 
          viewBox="0 0 24 24" 
          fill="none" 
          stroke="currentColor" 
          strokeWidth="1.5" 
          strokeLinecap="round" 
          strokeLinejoin="round"
        >
          <polyline points="6 9 12 15 18 9" />
        </svg>
      </div>

      {/* Left social sidebar */}
      <div className="hero-socials-left">
        <div className="social-line" />
        <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
            <rect x="2" y="9" width="4" height="12" />
            <circle cx="4" cy="4" r="2" />
          </svg>
        </a>
        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
            <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
            <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
          </svg>
        </a>
        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M4 4l11.733 16h4.267l-11.733 -16h-4.267z" />
            <path d="M4 20l6.768 -6.768m2.46 -2.46l6.772 -6.772" />
          </svg>
        </a>
      </div>
    </section>
  );
};
