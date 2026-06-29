import React from 'react';
import './Team.css';

// Offline-safe SVG component for LinkedIn
const LinkedinIcon: React.FC<{ size?: number }> = ({ size = 18 }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect width="4" height="12" x="2" y="9" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

// Import local photos for mock portraits
import esummit from '../../assets/events/esummit.png';
import etalk from '../../assets/events/etalk.png';
import hackathon from '../../assets/events/hackathon.png';
import pitchCompetition from '../../assets/events/pitch-competition.png';
import startupExpo from '../../assets/events/startup-expo.png';
import aboutUs from '../../assets/about-us.jpg';

interface TeamMember {
  id: string;
  name: string;
  role: string;
  img: string;
  linkedin: string;
}

const crewList: TeamMember[] = [
  {
    id: '1',
    name: 'Mohit Chandra',
    role: 'Overall Coordinator',
    img: esummit,
    linkedin: 'https://linkedin.com',
  },
  {
    id: '2',
    name: 'Dmitry Vartanyan',
    role: 'Co-Coordinator',
    img: etalk,
    linkedin: 'https://linkedin.com',
  },
  {
    id: '3',
    name: 'Natasha Romanoff',
    role: 'Head of Corporate Relations',
    img: hackathon,
    linkedin: 'https://linkedin.com',
  },
  {
    id: '4',
    name: 'Alexander Pierce',
    role: 'Head of Media & Marketing',
    img: pitchCompetition,
    linkedin: 'https://linkedin.com',
  },
  {
    id: '5',
    name: 'Elena Belova',
    role: 'Head of Events & Operations',
    img: startupExpo,
    linkedin: 'https://linkedin.com',
  },
  {
    id: '6',
    name: 'Sergey Brin',
    role: 'Head of Startups & Incubation',
    img: aboutUs,
    linkedin: 'https://linkedin.com',
  },
];

export const Team: React.FC = () => {
  // Determine card shape based on staggering pattern
  const getCardShape = (index: number): 'shape-a' | 'shape-b' => {
    const isLeft = index % 2 === 0;
    const row = Math.floor(index / 2);
    // Row 2 swaps the left/right order for a visual stagger
    if (row === 2) {
      return isLeft ? 'shape-b' : 'shape-a';
    }
    return isLeft ? 'shape-a' : 'shape-b';
  };

  return (
    <section className="crew-section" id="team">

      {/* Global Section Glow */}
      <div className="crew-section-glow" />

      <div className="crew-container">
        {/* Header Block */}
        <div className="crew-header">
          <span className="crew-eyebrow">The Leadership</span>
          <h2 className="crew-title">
            Meet the <span className="text-gold">Crew.</span>
          </h2>
          <p className="crew-subtitle">
            The developers, designers, and startup strategists powering the innovation ecosystem at IIT Kanpur.
          </p>
        </div>

        {/* 2-Column Staggered Grid */}
        <div className="crew-grid">
          {crewList.map((member, index) => {
            const shapeClass = getCardShape(index);
            return (
              <div key={member.id} className={`crew-card-wrapper ${shapeClass}`}>
                {/* Background glow behind card shape */}
                <div className="crew-card-glow" />

                {/* Main clipped card */}
                <div className="crew-card">
                  <div
                    className="crew-card-img"
                    style={{ backgroundImage: `url(${member.img})` }}
                  />
                </div>

                {/* Content placed below card to avoid polygon clipping */}
                <div className="crew-card-info">
                  <h3 className="crew-card-name">{member.name}</h3>
                  <p className="crew-card-role">{member.role}</p>
                  <a
                    href={member.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="crew-card-linkedin"
                  >
                    <LinkedinIcon size={18} />
                  </a>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Team;
