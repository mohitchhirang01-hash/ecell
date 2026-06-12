import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import './Events.css';

gsap.registerPlugin(ScrollTrigger);

interface EventItem {
  id: string;
  label: string;
  title: string;
  date: string;
  category: string;
  description: string;
}

const mockEvents: EventItem[] = [
  {
    id: 'event-1',
    label: 'event 1',
    title: "E-Summit '26",
    date: 'OCTOBER 2026',
    category: 'Flagship Summit',
    description: 'The annual flagship entrepreneurial summit of IIT Kanpur, hosting keynote talks, pitching battles, and networking with top VCs.'
  },
  {
    id: 'event-2',
    label: 'event 2',
    title: 'Upstart',
    date: 'DECEMBER 2026',
    category: 'National Challenge',
    description: 'A multi-stage national level startup challenge that acts as a launching pad for early-stage ventures to secure funding and mentorship.'
  },
  {
    id: 'event-3',
    label: 'event 3',
    title: 'TEDxIITKanpur',
    date: 'MARCH 2027',
    category: 'Idea Platform',
    description: 'Bringing together global thinkers, disruptors, and innovators to share inspiring ideas that spark deep discussions and active change.'
  }
];

export const Events: React.FC = () => {
  const triggerRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const track = trackRef.current;
      const trigger = triggerRef.current;
      if (!track || !trigger) return;

      gsap.to(track, {
        x: () => -(track.scrollWidth - window.innerWidth),
        ease: 'none',
        scrollTrigger: {
          trigger: trigger,
          pin: true,
          scrub: 1,
          start: 'top top',
          end: () => `+=${track.scrollWidth - window.innerWidth}`,
          invalidateOnRefresh: true,
        }
      });
    }, triggerRef);

    return () => {
      ctx.revert();
    };
  }, []);

  return (
    <section ref={triggerRef} id="events" className="events-section">
      <div className="events-container">
        <div ref={trackRef} className="events-track">
          {/* Slide 1: Title Card */}
          <div className="events-card title-card">
            <div className="title-card-content">
              <span className="title-word accent">Events</span>
              <span className="title-word light">WE</span>
              <span className="title-word accent">Organize</span>
            </div>
            <div className="card-ambient-glow"></div>
          </div>

          {/* Slides 2-4: Event Cards */}
          {mockEvents.map((event) => (
            <div key={event.id} className="events-card event-card-item">
              <div className="card-top">
                <span className="event-label">{event.label}</span>
                <span className="event-date">{event.date}</span>
              </div>
              <div className="card-body">
                <span className="event-category">{event.category}</span>
                <h3 className="event-title">{event.title}</h3>
                <p className="event-description">{event.description}</p>
              </div>
              <div className="card-footer">
                <span className="explore-link">
                  EXPLORE EVENT 
                  <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M1 11L11 1M11 1H3M11 1V9" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </span>
              </div>
              <div className="card-ambient-glow"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Events;
