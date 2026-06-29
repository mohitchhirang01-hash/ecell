import React from 'react';
import Masonry, { type MasonryItem } from '../common/Masonry';
import './Gallery.css';

// Import local event photos
import esummit from '../../assets/events/esummit.png';
import etalk from '../../assets/events/etalk.png';
import hackathon from '../../assets/events/hackathon.png';
import pitchCompetition from '../../assets/events/pitch-competition.png';
import startupExpo from '../../assets/events/startup-expo.png';
import aboutUs from '../../assets/about-us.jpg';

const galleryItems: MasonryItem[] = [
  {
    id: '1',
    img: esummit,
    url: '#events',
    height: 600,
    title: 'E-Summit Conclave Talks',
  },
  {
    id: '2',
    img: pitchCompetition,
    url: '#events',
    height: 460,
    title: 'UpStart Funding Pitch',
  },
  {
    id: '3',
    img: hackathon,
    url: '#events',
    height: 520,
    title: 'Student Hackathon Ventures',
  },
  {
    id: '4',
    img: etalk,
    url: '#events',
    height: 400,
    title: 'Industry E-Talk Panels',
  },
  {
    id: '5',
    img: startupExpo,
    url: '#events',
    height: 580,
    title: 'Startup Expo Exhibitions',
  },
  {
    id: '6',
    img: aboutUs,
    url: '#about',
    height: 440,
    title: 'E-Cell Launch Launchpad',
  },
  {
    id: '7',
    img: esummit,
    url: '#events',
    height: 500,
    title: 'Founders Roundtable Conclave',
  },
  {
    id: '8',
    img: pitchCompetition,
    url: '#events',
    height: 410,
    title: 'UpStart Investor Jury Panels',
  },
  {
    id: '9',
    img: hackathon,
    url: '#events',
    height: 470,
    title: 'Prototype Developing Hacks',
  },
  {
    id: '10',
    img: etalk,
    url: '#events',
    height: 480,
    title: 'Alumni Founder Interactive Share',
  },
  {
    id: '11',
    img: startupExpo,
    url: '#events',
    height: 540,
    title: 'Product Design Exhibition',
  },
  {
    id: '12',
    img: aboutUs,
    url: '#about',
    height: 430,
    title: 'E-Cell Space Incubator Wings',
  },
];

export const Gallery: React.FC = () => {
  return (
    <section className="gallery-section" id="gallery">
      {/* Background Amber Glow */}
      <div className="gallery-glow" />

      <div className="gallery-container">
        {/* Header Block */}
        <div className="gallery-header">
          <span className="gallery-eyebrow">Moments</span>
          <h2 className="gallery-title">
            Ecosystem <span className="text-gold">In Motion.</span>
          </h2>
          <p className="gallery-subtitle">
            A visual capture of panel debates, pitch presentations, and developer hackathons across our annual startup cycles.
          </p>
        </div>

        {/* Masonry Layout Wrapper */}
        <div className="gallery-grid-wrapper">
          <Masonry 
            items={galleryItems} 
            stagger={0.06} 
            animateFrom="bottom" 
            blurToFocus={true} 
            colorShiftOnHover={true}
          />
        </div>
      </div>
    </section>
  );
};

export default Gallery;
