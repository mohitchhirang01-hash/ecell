import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ArrowRight, Award, Zap, Rocket, Share2 } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

interface ThroughputSectionProps {
  containerAnimation?: gsap.core.Tween | null;
}

export const ThroughputSection: React.FC<ThroughputSectionProps> = ({ containerAnimation }) => {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;

    const ctx = gsap.context(() => {
      // Loop animating light-trails flowing left to right
      gsap.fromTo(
        '.light-trail-line',
        { x: '-150px', opacity: 0 },
        {
          x: '450px',
          opacity: 0.6,
          duration: 3,
          stagger: 0.6,
          ease: 'none',
          repeat: -1,
        }
      );

      if (containerAnimation) {
        // Core visual glow expansion synchronized with the horizontal scroll scrub
        gsap.to('.velocity-visual-wrapper', {
          boxShadow: '0 0 80px 10px rgba(241, 159, 17, 0.15)',
          borderColor: 'rgba(241, 159, 17, 0.5)',
          ease: 'none',
          scrollTrigger: {
            trigger: el,
            containerAnimation: containerAnimation,
            start: 'left center',
            end: 'right center',
            scrub: true,
          },
        });
      }
    }, sectionRef);

    return () => ctx.revert();
  }, [containerAnimation]);

  const handleScrollToEvents = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const target = document.querySelector('#events');
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div ref={sectionRef} className="horizontal-slide">
      <div className="slide-velocity-bg" />

      <div className="showcase-grid">
        {/* Left Side: Copy */}
        <div className="showcase-content-wrapper">
          <span className="showcase-eyebrow eyebrow-velocity">The Velocity</span>
          <h2 className="showcase-slide-title">
            Connecting Ideas <br />
            <span className="accent-gold">to Infinite Momentum.</span>
          </h2>
          <div className="space-y-4">
            <p className="showcase-slide-desc">
              When the pathway is clear, <span className="highlight-gold">ideas move at terminal velocity</span>. By matching student ventures directly with incubators, domain experts, and seed funding, we bridge the execution gap.
            </p>
            <p className="showcase-slide-desc">
              We do not just spark interest; we upgrade the venture's bandwidth. From campus concepts to market validation.
            </p>
            <div style={{ marginTop: '36px' }}>
              <a href="#events" onClick={handleScrollToEvents} className="btn-gold inline-flex items-center gap-2">
                Explore Initiatives <ArrowRight size={16} />
              </a>
            </div>
          </div>
        </div>

        {/* Right Side: Glowing Network Core */}
        <div className="velocity-visual-wrapper">
          {/* Animated Light Trails Overlay */}
          <div className="light-trail-overlay">
            {[...Array(5)].map((_, i) => (
              <div
                key={i}
                className="light-trail-line"
                style={{
                  top: `${20 + i * 15}%`,
                  left: '10%',
                }}
              />
            ))}
          </div>

          {/* Central core node */}
          <div className="velocity-core">
            <Rocket size={32} />
          </div>

          {/* Orbiting Satellite Nodes */}
          <div className="velocity-node node-1" title="Mentorship">
            <Award size={20} />
          </div>
          <div className="velocity-node node-2" title="Funding">
            <Zap size={20} />
          </div>
          <div className="velocity-node node-3" title="Networking">
            <Share2 size={20} />
          </div>
          <div className="velocity-node node-4" title="Incubator">
            <Rocket size={20} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ThroughputSection;
