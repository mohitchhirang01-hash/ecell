import React from 'react';
import { Lock, Coins, Users, Compass } from 'lucide-react';

const obstacles = [
  {
    name: 'Mentorship Gap',
    status: 'Disconnected',
    icon: Compass,
  },
  {
    name: 'Seed Funding',
    status: 'Inaccessible',
    icon: Coins,
  },
  {
    name: 'Co-founder Match',
    status: 'Fragmented',
    icon: Users,
  },
  {
    name: 'Regulatory Bureaucracy',
    status: 'Locked Gates',
    icon: Lock,
  },
];

export const FrictionSection: React.FC = () => {
  return (
    <div className="horizontal-slide">
      <div className="slide-friction-bg" />

      <div className="showcase-grid">
        {/* Left Side: Copy */}
        <div className="showcase-content-wrapper">
          <span className="showcase-eyebrow eyebrow-friction">The Friction</span>
          <h2 className="showcase-slide-title">
            Where Raw Ideas <br />
            <span className="accent-red">Dissolve Into Nothing.</span>
          </h2>
          <div className="space-y-4">
            <p className="showcase-slide-desc">
              Every year, hundreds of student projects dry up on campus. Not due to a lack of ambition, but because the path from ideation to market is filled with <span className="highlight-red">unnecessary friction</span>.
            </p>
            <p className="showcase-slide-desc">
              Traditional education encourages conformity. Stepping out requires bridges that don't exist. Mentorship is hard to reach, funding is locked, and networks are completely fragmented.
            </p>
          </div>
        </div>

        {/* Right Side: Interactive CSS Visual */}
        <div className="friction-visual-wrapper">
          <div className="friction-obstacle-grid">
            {obstacles.map((obs) => {
              const Icon = obs.icon;
              return (
                <div key={obs.name} className="obstacle-card">
                  <div className="obstacle-icon-box">
                    <Icon size={22} />
                  </div>
                  <h3 className="obstacle-name">{obs.name}</h3>
                  <span className="obstacle-status">{obs.status}</span>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FrictionSection;
