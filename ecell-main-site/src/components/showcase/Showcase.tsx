import React, { useRef, useState, useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { FrictionSection } from './FrictionSection';
import { MentorshipSection } from './MentorshipSection';
import { CapitalSection } from './CapitalSection';
import { ThroughputSection } from './ThroughputSection';
import { Events } from '../events/Events';
import './Showcase.css';

gsap.registerPlugin(ScrollTrigger);

export const Showcase: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const [horizontalTween, setHorizontalTween] = useState<gsap.core.Timeline | null>(null);

  useEffect(() => {
    const container = containerRef.current;
    const track = trackRef.current;
    if (!container || !track) return;

    const ctx = gsap.context(() => {
      const mm = gsap.matchMedia();

      // Desktop only horizontal scroll pinning + reveal
      mm.add('(min-width: 769px)', () => {
        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: container,
            pin: true,
            scrub: 1,
            start: 'top top',
            end: () => `+=${(track.scrollWidth - window.innerWidth) + window.innerHeight}`,
            invalidateOnRefresh: true,
          },
        });

        // 1. Horizontal scroll to final slide
        tl.to(track, {
          x: () => -(track.scrollWidth - window.innerWidth),
          ease: 'none',
        });

        // 2. Vertical reveal of slide 4's bottom layer (Events)
        tl.to('.reveal-layer-top', {
          yPercent: -100,
          ease: 'power1.inOut',
        });

        setHorizontalTween(tl);
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={containerRef} className="showcase-section" id="showcase">
      <div ref={trackRef} className="showcase-track">
        <FrictionSection />
        <MentorshipSection />
        <CapitalSection />
        <div className="horizontal-slide slide-reveal-container">
          <div className="reveal-layer-behind">
            <Events />
          </div>
          <div className="reveal-layer-top">
            <ThroughputSection containerAnimation={horizontalTween} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Showcase;
