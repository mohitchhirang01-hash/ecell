import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Calendar, Mic, Rocket, Users, Briefcase, ChevronRight, Coffee } from 'lucide-react';
import './Events.css';

gsap.registerPlugin(ScrollTrigger);

interface EventData {
  id: string;
  num: string;
  title: string;
  description: string;
  icon: React.ReactNode;
  accent: string;
}

const eventsList: EventData[] = [
  {
    id: 'esummit',
    num: '01',
    title: 'E-SUMMIT',
    description: "E-Summit is an annual flagship event of IIT Kanpur effectuated with the intention to foster entrepreneurial initiatives and activities in the campus to accomplish IIT Kanpur's mandate of nurturing India's future technopreneurs. Sharing of entrepreneurship endeavour and experiences, discussion of ideas and opportunities will be a profuse learning experience for the active leaders of entrepreneurship in the savant community who can then disperse these ideas further.",
    icon: <Calendar className="event-icon" size={32} />,
    accent: '#BB8804', // Bright gold
  },
  {
    id: 'tedx',
    num: '02',
    title: 'TEDX',
    description: 'TED is a global set of conferences run by the private non-profit Sapling Foundation, under the slogan "Ideas Worth Spreading". TED was founded in 1984 as a one-off event; the annual conference series began in 1990. TEDx IIT Kanpur is an independent initiative by Entrepreneurship Cell, IIT Kanpur, under the umbrella of TED, to organize versatile annual talk series from several eminent speakers from the field of Technology, Entertainment and Design.',
    icon: <Mic className="event-icon" size={32} />,
    accent: '#A57403', // Deep gold
  },
  {
    id: 'upstart',
    num: '03',
    title: 'UPSTART',
    description: 'An event that caters to the budding startups of our country, Upstart stands apart from the conventional Start-up Competition and 10-minute pitching - we strive to give our participants more than just the prize. The start-ups go through multiple rounds of screening, which are essentially brainstorming sessions at different levels and face to face mentoring. Finalists get to develop their ideas and hone their business plans with a panel of mentors.',
    icon: <Rocket className="event-icon" size={32} />,
    accent: '#74460D', // Reddish bronze / amber brown
  },
  {
    id: 'smc',
    num: '04',
    title: 'STARTUP MASTER CLASS',
    description: 'In association with Alumni Association, IIT Kanpur, E-Cell organises StartUp Master Class, a highly enriching and enlightening startup event "for Entrepreneurs, from Entrepreneurs". It brings together startups, mentors and investors to build interactions and strengthen the network within the entrepreneurial community.',
    icon: <Users className="event-icon" size={32} />,
    accent: '#775923', // Olive gold / bronze
  },
  {
    id: 'sip',
    num: '05',
    title: 'STARTUP INTERNSHIP PROGRAM',
    description: 'E-Cell, IIT Kanpur achieved great success with Startup Internship Program. The profiles included IT/Programming, Core, and Marketing/Business Development recruitment. The season saw registrations from a total of 151 Startups including Robotics, Ridlr, Dunzo, Pharmeasy, EarlySalary to name a few, witnessing a 73% boom in the total internships offered than the previous year.',
    icon: <Briefcase className="event-icon" size={32} />,
    accent: '#BFAB82', // Light sand / champagne gold
  },
  {
    id: 'hangouts',
    num: '06',
    title: 'CAMPUS HANGOUTS',
    description: 'Hangouts is special interactive session specifically targeting the campus students. The session is like an informal discussion between campus junta and entrepreneurship oracles of varied arenas. It involves discussions and brainstorming on entrepreneurship matters. Throughout the year multiple hangout sessions are organised.',
    icon: <Coffee className="event-icon" size={32} />,
    accent: '#BB8804', // Bright gold to balance
  },
];


export const Events: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    const track = trackRef.current;
    if (!container || !track) return;

    const ctx = gsap.context(() => {
      const mm = gsap.matchMedia();

      // Desktop only horizontal scroll pinning
      mm.add('(min-width: 769px)', () => {
        gsap.to(track, {
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
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={containerRef} className="events-section" id="events">
      <div ref={trackRef} className="events-track">
        {/* Intro Slide */}
        <div className="events-slide events-intro-slide">
          <div className="events-intro-card">
            <span className="events-eyebrow">Initiatives</span>
            <h2 className="events-main-title">
              EVENTS <br />
              <span className="text-gold">What We Do.</span>
            </h2>
            <p className="events-main-desc">
              E-Cell organises a variety of events throughout the year to promote entrepreneurial activities in and around the campus. Our annual E-Summit witnesses huge participation from all over India. Events like TEDx and StartUp Master Class take the learning to a whole new level. E-Cell also conducts various lectures and workshops focussed at budding entrepreneurs. StartUp Internship Programme helps IITK students land internships in start-ups and get to know their working in greater depth.
            </p>
            <div className="events-scroll-hint">
              <span>Scroll to explore</span>
              <ChevronRight size={16} className="hint-arrow" />
            </div>
          </div>
        </div>

        {/* Matrix Grid Slide */}
        <div className="events-slide events-grid-slide">
          <div className="events-bg-watermark" />
          <div className="events-grid-matrix">
            {eventsList.map((event) => (
              <div 
                key={event.id} 
                className={`event-card event-card-${event.id}`}
                style={{ '--event-accent': event.accent } as React.CSSProperties}
              >
                <div className="event-header">
                  <span className="event-number">{event.num}</span>
                  <div className="event-icon-wrapper">
                    {event.icon}
                  </div>
                </div>
                <h3 className="event-title">{event.title}</h3>
                <p className="event-desc">{event.description}</p>
                <div className="card-glow" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Events;
