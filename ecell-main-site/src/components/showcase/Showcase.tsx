import React, { useRef, useState, useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { FrictionSection } from './FrictionSection';
import { ThroughputSection } from './ThroughputSection';
import './Showcase.css';

gsap.registerPlugin(ScrollTrigger);

export const Showcase: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const [horizontalTween, setHorizontalTween] = useState<gsap.core.Tween | null>(null);

  useEffect(() => {
    const container = containerRef.current;
    const track = trackRef.current;
    if (!container || !track) return;

    const ctx = gsap.context(() => {
      const mm = gsap.matchMedia();

      // Desktop only horizontal scroll pinning
      mm.add('(min-width: 769px)', () => {
        const tween = gsap.to(track, {
          x: () => -(track.scrollWidth - window.innerWidth),
          ease: 'none',
          scrollTrigger: {
            trigger: container,
            pin: true,
            scrub: 1,
            start: 'top top',
            end: () => `+=${track.scrollWidth - window.innerWidth}`,
            invalidateOnRefresh: true,
          },
        });
        setHorizontalTween(tween);
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={containerRef} className="showcase-section" id="showcase">
      <div ref={trackRef} className="showcase-track">
        <FrictionSection />
        <ThroughputSection containerAnimation={horizontalTween} />
      </div>
    </section>
  );
};

export default Showcase;
