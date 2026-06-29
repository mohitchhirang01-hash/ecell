import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Mail, User, PhoneCall } from 'lucide-react';
import './Team.css';

gsap.registerPlugin(ScrollTrigger);

interface TeamMember {
  id: string;
  name: string;
  role: string;
  linkedin: string;
  email: string;
}

const teamList: TeamMember[] = [
  {
    id: 'anand',
    name: 'Anand Bugalia',
    role: 'Overall Coordinator',
    linkedin: 'https://www.linkedin.com',
    email: 'mailto:anandb@iitk.ac.in',
  },
  {
    id: 'hirani',
    name: 'Hirani Shah',
    role: 'Overall Coordinator',
    linkedin: 'https://www.linkedin.com',
    email: 'mailto:hiranis@iitk.ac.in',
  },
  {
    id: 'gunjan',
    name: 'Gunjan',
    role: 'Head Events',
    linkedin: 'https://www.linkedin.com',
    email: 'mailto:gunjan@iitk.ac.in',
  },
  {
    id: 'krishna',
    name: 'Krishna Poojitha',
    role: 'Head Events',
    linkedin: 'https://www.linkedin.com',
    email: 'mailto:poojitha@iitk.ac.in',
  },
  {
    id: 'mohit',
    name: 'Mohit Yadav',
    role: 'Head Events',
    linkedin: 'https://www.linkedin.com',
    email: 'mailto:mohity@iitk.ac.in',
  },
  {
    id: 'shreedhar',
    name: 'Shreedhar Gupta',
    role: 'Head Startup Development',
    linkedin: 'https://www.linkedin.com',
    email: 'mailto:shreedharg@iitk.ac.in',
  },
  {
    id: 'deepika',
    name: 'Deepika Rathod',
    role: 'Head Marketing',
    linkedin: 'https://www.linkedin.com',
    email: 'mailto:deepikar@iitk.ac.in',
  },
  {
    id: 'srujana',
    name: 'Srujana',
    role: 'Head Media & Publicity',
    linkedin: 'https://www.linkedin.com',
    email: 'mailto:srujana@iitk.ac.in',
  },
  {
    id: 'ankit',
    name: 'Ankit Masoom',
    role: 'Head Design',
    linkedin: 'https://www.linkedin.com',
    email: 'mailto:ankitm@iitk.ac.in',
  },
  {
    id: 'soni',
    name: 'Soni',
    role: 'Head Design',
    linkedin: 'https://www.linkedin.com',
    email: 'mailto:soni@iitk.ac.in',
  },
];

export const Team: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const gridRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    const grid = gridRef.current;
    if (!section || !grid) return;

    const ctx = gsap.context(() => {
      // Title transition
      gsap.from('.team-header-box', {
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

      // Team cards stagger entrance
      gsap.from('.team-card', {
        scrollTrigger: {
          trigger: grid,
          start: 'top 85%',
          toggleActions: 'play none none none',
        },
        opacity: 0,
        y: 40,
        duration: 0.7,
        stagger: 0.1,
        ease: 'power3.out',
      });
    }, section);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="team-section" id="team">
      <div className="team-bg-mesh" />
      <div className="team-grid-lines" />

      <div className="team-container">
        {/* Heading Panel */}
        <div className="team-header-box">
          <span className="team-eyebrow">
            <PhoneCall size={12} style={{ marginRight: '6px', verticalAlign: 'middle' }} />
            CONTACT
          </span>
          <h2 className="team-heading">Our Team</h2>
          <p className="team-description">
            Contact us for any queries, questions, or ideas. We are here to support your entrepreneurial journey.
          </p>
        </div>

        {/* Members Layout Grid */}
        <div ref={gridRef} className="team-grid">
          {teamList.map((member) => (
            <div key={member.id} className="team-card">
              {/* Photo Box Placeholder (Empty/Stylized) */}
              <div className="team-photo-placeholder">
                <div className="avatar-silhouette">
                  <User size={48} className="user-icon" />
                </div>
                
                {/* Social hover options */}
                <div className="team-social-overlay">
                  <a 
                    href={member.linkedin} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="social-btn linkedin-btn"
                    aria-label="LinkedIn Profile"
                  >
                    <svg 
                      xmlns="http://www.w3.org/2000/svg" 
                      width="18" 
                      height="18" 
                      viewBox="0 0 24 24" 
                      fill="none" 
                      stroke="currentColor" 
                      strokeWidth="2" 
                      strokeLinecap="round" 
                      strokeLinejoin="round"
                    >
                      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/>
                      <rect width="4" height="12" x="2" y="9"/>
                      <circle cx="4" cy="4" r="2"/>
                    </svg>
                  </a>
                  <a 
                    href={member.email} 
                    className="social-btn email-btn"
                    aria-label="Send Email"
                  >
                    <Mail size={18} />
                  </a>
                </div>
              </div>

              {/* Info Area */}
              <div className="team-info">
                <h3 className="team-name">{member.name}</h3>
                <span className="team-role">{member.role}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;
