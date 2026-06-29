import React from 'react';
import { Award, Zap, ShieldCheck } from 'lucide-react';

const fundingStages = [
  {
    stage: 'Stage 1: Ideation Grants',
    details: 'Up to ₹2L equity-free grants to build the initial proof-of-concept.',
    icon: Award,
    value: '₹2,00,000',
  },
  {
    stage: 'Stage 2: Prototyping Funds',
    details: 'Access to angel investor matching and E-Cell seed funding pools.',
    icon: Zap,
    value: '₹10L - ₹50L',
  },
  {
    stage: 'Stage 3: Growth Round',
    details: 'Direct pitch decks routing to national Venture Capital syndicates.',
    icon: ShieldCheck,
    value: '₹1Cr+',
  },
];

export const CapitalSection: React.FC = () => {
  return (
    <div className="horizontal-slide">
      <div className="slide-capital-bg" />

      <div className="showcase-grid">
        {/* Left Side: Copy */}
        <div className="showcase-content-wrapper">
          <span className="showcase-eyebrow eyebrow-velocity">The Fuel</span>
          <h2 className="showcase-slide-title">
            Powering Runways with <br />
            <span className="accent-gold">Seed Capital.</span>
          </h2>
          <div className="space-y-4">
            <p className="showcase-slide-desc">
              Capital shouldn't be the bottleneck that stalls innovation. To elevate ideas from sketches into products, student founders need <span className="highlight-gold">immediate runway backing</span>.
            </p>
            <p className="showcase-slide-desc">
              Through E-Cell's flagships like UpStart, equity-free prototype grants, and syndicate matching, we clear the financial path for young companies to construct and launch.
            </p>
          </div>
        </div>

        {/* Right Side: Interactive Visual Stage Deck */}
        <div className="capital-visual-wrapper">
          <div className="capital-stage-deck">
            {fundingStages.map((stage) => {
              const Icon = stage.icon;
              return (
                <div key={stage.stage} className="capital-stage-card">
                  <div className="capital-stage-header">
                    <div className="capital-stage-icon">
                      <Icon size={18} />
                    </div>
                    <span className="capital-stage-title">{stage.stage}</span>
                  </div>
                  <p className="capital-stage-desc">{stage.details}</p>
                  <div className="capital-stage-value">{stage.value}</div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CapitalSection;
