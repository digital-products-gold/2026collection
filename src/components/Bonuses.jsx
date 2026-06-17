import React from 'react';
import { CheckCircle, Gift } from 'lucide-react';
import SampleCarousel from './SampleCarousel';
import './Bonuses.css';

const bonuses = [
  "Bonus Sticker Backing Templates (For a realistic look)",
  "Easy-to-follow Printing Instructions",
  "High-Resolution Artwork for vibrant colors",
  "Collection Pages & Digital PDF Album"
];

const bonusSamples = [
  "/samples/bonus_cocacola_1.png",
  "/samples/bonus_holo_shields_1.png",
  "/samples/bonus_extra_gold_1.png"
];

const Bonuses = () => {
  return (
    <section className="bonuses-section">
      <div className="container bonuses-container">
        <div className="bonuses-content">
          <div className="bonus-badge">
            <Gift size={20} />
            <span>Exclusive Bonuses</span>
          </div>
          <h2 className="section-title">Not just stickers. <span className="text-gradient">The Ultimate Package.</span></h2>
          <p className="bonuses-description">
            We provide everything you need to recreate the magic of collecting, including backing templates and step-by-step guides for the best results.
          </p>

          <ul className="bonuses-list">
            {bonuses.map((bonus, index) => (
              <li key={index} className="bonus-item">
                <CheckCircle className="check-icon" size={24} />
                <span>{bonus}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="bonuses-visual">
          <img 
            src="/impressora.png" 
            alt="Print Ready" 
            className="printer-image"
          />
          <div className="bonuses-tags-under">
            <div className="bonus-tag">Backing Templates</div>
            <div className="bonus-tag">High-Res Artwork</div>
            <div className="bonus-tag">Step-by-step Guides</div>
          </div>
        </div>
      </div>

      <div className="container" style={{ marginTop: 'var(--spacing-xl)' }}>
        <SampleCarousel images={bonusSamples} title="Bonus Content Preview" />
      </div>
    </section>
  );
};

export default Bonuses;
