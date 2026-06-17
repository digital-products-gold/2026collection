import React from 'react';
import { BookOpen, Sparkles, Printer, RefreshCcw } from 'lucide-react';
import SampleCarousel from './SampleCarousel';
import './Features.css';

const features = [
  {
    icon: <BookOpen size={32} />,
    title: '900+ Stickers & 48 Teams',
    description: 'Get massive coverage of all 48 participating national teams, featuring world-famous players, rising stars, and team group photos.',
    color: 'var(--color-primary)'
  },
  {
    icon: <Sparkles size={32} />,
    title: 'Legends & Special Cards',
    description: 'Includes special collectibles, classic football legends, and bonus sticker designs for a truly complete and premium collection.',
    color: 'var(--color-secondary)'
  },
  {
    icon: <Printer size={32} />,
    title: 'Print-Ready A4 Pages',
    description: 'High-resolution artwork arranged by team for convenient printing. Suitable for home printers or professional print shops.',
    color: '#4A90E2'
  },
  {
    icon: <RefreshCcw size={32} />,
    title: 'Future File Updates',
    description: 'Your purchase includes access to future updates. Whenever new content or teams are available, you get them at no extra charge.',
    color: '#FF8A00'
  }
];

const mainSamples = [
  "/samples/main_album_1.png",
  "/samples/main_stickers_1.png",
  "/samples/main_stickers_5.png",
  "/samples/main_album_2.png"
];

const Features = () => {
  return (
    <section className="features-section" id="features">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Everything You Need to Collect</h2>
          <p className="section-subtitle">Skip the blind packs. Get the complete collection organized and ready to print.</p>
        </div>

        <div className="features-grid" style={{ marginBottom: 'var(--spacing-xl)' }}>
          {features.map((feature, index) => (
            <div className="feature-card" key={index}>
              <div className="feature-icon-wrapper" style={{ color: feature.color, background: `${feature.color}15` }}>
                {feature.icon}
              </div>
              <h3 className="feature-title">{feature.title}</h3>
              <p className="feature-description">{feature.description}</p>
            </div>
          ))}
        </div>

        <SampleCarousel images={mainSamples} title="Sneak Peek: Inside the Collection" />
      </div>
    </section>
  );
};

export default Features;
