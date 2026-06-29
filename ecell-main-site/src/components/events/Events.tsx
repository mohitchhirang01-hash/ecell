import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ArrowRight } from 'lucide-react';
import './Events.css';

gsap.registerPlugin(ScrollTrigger);

const eventsData = [
  {
    badge: 'Flagship Conclave',
    title: 'E-Summit ’26',
    desc: 'IIT Kanpur’s annual conclave bringing together global visionary founders, corporate leaders, and VC partners for keynotes, workshops, and networking.',
    date: 'COMING SOON • OCTOBER 2026',
  },
  {
    badge: 'National Challenge',
    title: 'UpStart',
    desc: 'Our premier national startup competition offering early-stage ventures direct access to angel syndicates, seed grants, and critical pivot mentorship.',
    date: 'APPLICATIONS OPEN • AUGUST 2026',
  },
  {
    badge: 'Talent Portal',
    title: 'Internship Fair',
    desc: 'Bridging early-stage startups with the brightest technical talent at IIT Kanpur, helping growth companies scale and hire for roles.',
    date: 'REGISTRATIONS OPEN • SEPTEMBER 2026',
  },
];

export const Events: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    const ctx = gsap.context(() => {
      // Staggered cards entry animation
      gsap.fromTo(
        '.event-card',
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          stagger: 0.2,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: cardsRef.current,
            start: 'top 85%',
            toggleActions: 'play none none none',
          },
        }
      );
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={containerRef} className="events-section" id="events">
      {/* Background radial glow */}
      <div className="events-glow-1" />
      <div className="events-glow-2" />

      <div className="events-container">
        {/* Header Block */}
        <div className="events-header">
          <span className="events-eyebrow">Flagships</span>
          <h2 className="events-title">
            Where Ambitions <span className="text-gold">Meet Platforms.</span>
          </h2>
          <p className="events-subtitle">
            We host structural initiatives designed to guide student ventures from simple lines of code to market-viable entities.
          </p>
        </div>

        {/* Staggered Event Cards */}
        <div ref={cardsRef} className="events-grid">
          {eventsData.map((evt) => (
            <div key={evt.title} className="event-card">
              <div className="event-card-top">
                <span className="event-card-badge">{evt.badge}</span>
                <h3 className="event-card-title">{evt.title}</h3>
                <p className="event-card-desc">{evt.desc}</p>
              </div>

              <div className="event-card-bottom">
                <span className="event-card-date">{evt.date}</span>
                <button className="event-btn">
                  Learn More <ArrowRight size={16} />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Events;
