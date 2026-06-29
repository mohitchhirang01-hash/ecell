import React from 'react';
import './StatsRibbon.css';

const stats = [
  { value: '100+', label: 'STARTUPS NURTURED' },
  { value: '₹2Cr+', label: 'SEED FUNDING STAGED' },
  { value: '50+', label: 'ANNUAL EVENTS' },
];

export const StatsRibbon: React.FC = () => {
  return (
    <section className="stats-ribbon">
      <div className="stats-ribbon-container">
        {stats.map((stat, index) => (
          <div key={index} className="stats-ribbon-item">
            <div className="stats-ribbon-value">{stat.value}</div>
            <div className="stats-ribbon-label">{stat.label}</div>
          </div>
        ))}
      </div>
    </section>
  );
};
