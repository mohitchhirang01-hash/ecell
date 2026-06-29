import React from 'react';
import { Briefcase, Terminal, TrendingUp, Scale } from 'lucide-react';

const mentorshipDomains = [
  {
    title: 'Business & Strategy',
    description: 'Refining business models and growth hacks.',
    icon: Briefcase,
    color: '#3b82f6', // blue
  },
  {
    title: 'Tech & Architecture',
    description: 'Scalable system designs and stack selections.',
    icon: Terminal,
    color: '#10b981', // green
  },
  {
    title: 'Marketing & Brand',
    description: 'Positioning, SEO, and user acquisition strategies.',
    icon: TrendingUp,
    color: '#eab308', // yellow
  },
  {
    title: 'Legal & IP',
    description: 'Incorporations, patents, and term sheet setups.',
    icon: Scale,
    color: '#ec4899', // pink
  },
];

export const MentorshipSection: React.FC = () => {
  return (
    <div className="horizontal-slide">
      <div className="slide-mentorship-bg" />

      <div className="showcase-grid">
        {/* Left Side: Content */}
        <div className="showcase-content-wrapper">
          <span className="showcase-eyebrow eyebrow-velocity">The Catalyst</span>
          <h2 className="showcase-slide-title">
            Steering Ventures with <br />
            <span className="accent-gold">Domain Expertise.</span>
          </h2>
          <div className="space-y-4">
            <p className="showcase-slide-desc">
              Having an idea is only 1% of the journey. The remaining 99% is execution, which requires <span className="highlight-gold">tactical guidance</span>: scaling product structures, navigating IP laws, and identifying customer fit.
            </p>
            <p className="showcase-slide-desc">
              We connect student innovators directly with a network of 100+ industry mentors, venture consultants, and alumni founders who help them steer clear of early pitfalls.
            </p>
          </div>
        </div>

        {/* Right Side: Interactive Visual Grid */}
        <div className="mentorship-visual-wrapper">
          <div className="mentorship-domain-grid">
            {mentorshipDomains.map((domain) => {
              const Icon = domain.icon;
              return (
                <div key={domain.title} className="mentor-domain-card">
                  <div className="mentor-domain-icon-box" style={{ borderColor: `${domain.color}33`, color: domain.color }}>
                    <Icon size={22} />
                  </div>
                  <h3 className="mentor-domain-title">{domain.title}</h3>
                  <p className="mentor-domain-desc">{domain.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MentorshipSection;
