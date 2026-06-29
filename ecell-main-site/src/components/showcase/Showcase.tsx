import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import './Showcase.css';

import esummitImg from '../../assets/events/esummit.png';
import startupExpoImg from '../../assets/events/startup-expo.png';
import etalkImg from '../../assets/events/etalk.png';
import hackathonImg from '../../assets/events/hackathon.png';
import pitchImg from '../../assets/events/pitch-competition.png';

gsap.registerPlugin(ScrollTrigger);

interface ShowcaseEvent {
  id: string;
  image: string;
  title: string;
  description: string;
  link: string;
}

const events: ShowcaseEvent[] = [
  {
    id: 'esummit',
    image: esummitImg,
    title: 'Entrepreneurship Summit',
    description:
      'The flagship annual event bringing together entrepreneurs, investors, and visionaries for a weekend of inspiration and networking.',
    link: '#',
  },
  {
    id: 'startup-expo',
    image: startupExpoImg,
    title: 'Startup Expo',
    description:
      'A demo day showcasing student-led startups, connecting founders with mentors, investors, and early adopters.',
    link: '#',
  },
  {
    id: 'etalk',
    image: etalkImg,
    title: 'E-Talk',
    description:
      'Intimate speaker sessions featuring industry leaders, successful founders, and changemakers sharing their journeys.',
    link: '#',
  },
  {
    id: 'hackathon',
    image: hackathonImg,
    title: 'Hackathon',
    description:
      'An intense 36-hour coding marathon where teams build innovative solutions to real-world problems.',
    link: '#',
  },
  {
    id: 'pitch-competition',
    image: pitchImg,
    title: 'Pitch Competition',
    description:
      'Students pitch their startup ideas to a panel of investors and industry experts for funding and mentorship.',
    link: '#',
  },
];

export const Showcase: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const stickyRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    const track = trackRef.current;
    if (!section || !track) return;

    // Calculate the scroll distance: total track width minus viewport width
    const getScrollDistance = () => {
      return track.scrollWidth - window.innerWidth;
    };

    const ctx = gsap.context(() => {
      // Horizontal scroll driven by vertical scrolling
      gsap.to(track, {
        x: () => -getScrollDistance(),
        ease: 'none',
        scrollTrigger: {
          trigger: section,
          start: 'top top',
          end: () => `+=${getScrollDistance()}`,
          pin: true,
          scrub: 1,
          invalidateOnRefresh: true,
          anticipatePin: 1,
        },
      });

      // Animate left panel content on enter
      gsap.from('.showcase-title', {
        scrollTrigger: {
          trigger: section,
          start: 'top 80%',
          toggleActions: 'play none none none',
        },
        opacity: 0,
        y: 50,
        duration: 0.9,
        ease: 'power3.out',
      });

      gsap.from('.showcase-subtitle', {
        scrollTrigger: {
          trigger: section,
          start: 'top 80%',
          toggleActions: 'play none none none',
        },
        opacity: 0,
        y: 30,
        duration: 0.8,
        delay: 0.2,
        ease: 'power3.out',
      });

      gsap.from('.showcase-cta-link', {
        scrollTrigger: {
          trigger: section,
          start: 'top 80%',
          toggleActions: 'play none none none',
        },
        opacity: 0,
        y: 20,
        duration: 0.7,
        delay: 0.35,
        ease: 'power3.out',
      });
    }, section);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="showcase-section" id="events">
      <div ref={stickyRef} className="showcase-sticky">
        {/* Background effects */}
        <div className="showcase-bg-glow" />

        <div ref={trackRef} className="showcase-track">
          {/* Left panel — section title */}
          <div className="showcase-intro-panel">
            <div className="showcase-intro-content">
              <div className="showcase-label">
                <span className="showcase-label-line" />
                <span className="showcase-label-text">What We Do</span>
              </div>

              <h2 className="showcase-title">
                Our Flagship
                <br />
                <span className="showcase-title-accent">Events</span>
              </h2>

              <p className="showcase-subtitle">
                From ideation to execution — experiences that shape the
                entrepreneurial journey of every student.
              </p>

              <a href="#" className="showcase-cta-link">
                <span className="showcase-cta-text">View All Events</span>
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <line x1="5" y1="12" x2="19" y2="12" />
                  <polyline points="12 5 19 12 12 19" />
                </svg>
              </a>
            </div>
          </div>

          {/* Event cards */}
          {events.map((event) => (
            <div key={event.id} className="showcase-card">
              <div className="showcase-card-image-wrap">
                <img
                  src={event.image}
                  alt={event.title}
                  className="showcase-card-image"
                  loading="lazy"
                />
              </div>
              <div className="showcase-card-info">
                <div className="showcase-card-meta">
                  <h3 className="showcase-card-title">{event.title}</h3>
                  <p className="showcase-card-desc">{event.description}</p>
                </div>
                <a href={event.link} className="showcase-card-link">
                  <span className="showcase-card-link-text">
                    Explore Event
                  </span>
                  <svg
                    width="12"
                    height="12"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <line x1="5" y1="12" x2="19" y2="12" />
                    <polyline points="12 5 19 12 12 19" />
                  </svg>
                </a>
              </div>
            </div>
          ))}

          {/* Closing CTA panel */}
          <div className="showcase-closing-panel">
            <div className="showcase-closing-content">
              <p className="showcase-closing-text">
                Discover all our events,
                <br />
                initiatives, and programs.
              </p>
              <a href="#" className="showcase-closing-cta">
                <span className="showcase-closing-cta-text">
                  View All Events
                </span>
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <line x1="5" y1="12" x2="19" y2="12" />
                  <polyline points="12 5 19 12 12 19" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
