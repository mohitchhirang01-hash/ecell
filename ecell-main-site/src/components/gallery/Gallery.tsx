import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Image as ImageIcon, Users, Rocket, Award, Coffee, Presentation } from 'lucide-react';
import './Gallery.css';

gsap.registerPlugin(ScrollTrigger);

interface GalleryItem {
  id: string;
  title: string;
  category: string;
  image?: string;
  gradient?: string;
  icon?: React.ReactNode;
}

const galleryList: GalleryItem[] = [
  {
    id: 'esummit',
    title: 'E-Summit Keynote',
    category: 'Flagship Summit',
    image: '/esummit_session.png',
  },
  {
    id: 'hackathon',
    title: 'Startup Hackathon',
    category: 'Innovators Arena',
    image: '/hackathon_team.png',
  },
  {
    id: 'panel',
    title: 'Founder Panel Discussion',
    category: 'Incubators & Mentors',
    image: '/panel_discussion.png',
  },
  {
    id: 'networking',
    title: 'Networking Dinners',
    category: 'E-Summit Connections',
    gradient: 'linear-gradient(135deg, #201e15 0%, #3a3222 100%)',
    icon: <Users size={32} className="gallery-card-icon" />,
  },
  {
    id: 'pitching',
    title: 'Pitching Contests',
    category: 'Upstart Ventures',
    gradient: 'linear-gradient(135deg, #191c1e 0%, #2e353b 100%)',
    icon: <Award size={32} className="gallery-card-icon" />,
  },
  {
    id: 'incubation',
    title: 'Incubation Support',
    category: 'Startup Acceleration',
    gradient: 'linear-gradient(135deg, #06182e 0%, #0d2e54 100%)',
    icon: <Rocket size={32} className="gallery-card-icon" />,
  },
];

export const Gallery: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const gridRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    const grid = gridRef.current;
    if (!section || !grid) return;

    const ctx = gsap.context(() => {
      // Heading fade-in
      gsap.from('.gallery-title-box', {
        scrollTrigger: {
          trigger: section,
          start: 'top 80%',
          toggleActions: 'play none none none',
        },
        opacity: 0,
        y: 40,
        duration: 0.8,
        ease: 'power3.out',
      });

      // Grid items staggered fade-in
      gsap.from('.gallery-card-wrapper', {
        scrollTrigger: {
          trigger: grid,
          start: 'top 80%',
          toggleActions: 'play none none none',
        },
        opacity: 0,
        y: 50,
        duration: 0.8,
        stagger: 0.15,
        ease: 'power3.out',
      });
    }, section);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="gallery-section" id="gallery">
      <div className="gallery-bg-glow" />
      <div className="gallery-grid-overlay" />

      <div className="gallery-container">
        {/* Title Group */}
        <div className="gallery-title-box">
          <span className="gallery-eyebrow">
            <ImageIcon size={12} style={{ marginRight: '6px' }} />
            Moments / Flashbacks
          </span>
          <h2 className="gallery-heading">GALLERY</h2>
          <p className="gallery-subtext">
            Capturing the spirit of entrepreneurship, networking, and innovation at IIT Kanpur.
          </p>
        </div>

        {/* Gallery Bento Grid */}
        <div ref={gridRef} className="gallery-grid">
          {galleryList.map((item) => (
            <div key={item.id} className={`gallery-card-wrapper gallery-card-${item.id}`}>
              <div className="gallery-card">
                {item.image ? (
                  // Card with Image
                  <div className="gallery-image-box">
                    <img src={item.image} alt={item.title} className="gallery-img" />
                    <div className="gallery-img-overlay" />
                  </div>
                ) : (
                  // Card with Gradient & Icon
                  <div className="gallery-gradient-box" style={{ background: item.gradient }}>
                    <div className="gallery-icon-container">
                      {item.icon}
                    </div>
                  </div>
                )}
                
                {/* Information Overlay */}
                <div className="gallery-card-info">
                  <span className="gallery-card-category">{item.category}</span>
                  <h3 className="gallery-card-title">{item.title}</h3>
                </div>
                <div className="gallery-card-border" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;
