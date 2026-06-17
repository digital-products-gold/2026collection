import React from 'react';
import { Download, Star } from 'lucide-react';
import './Hero.css';

const Hero = () => {
  return (
    <header className="hero-section">
      <div className="container hero-container">
        <div className="hero-content">
          <div className="badge">
            <Star className="badge-icon" size={16} />
            <span>Updated for the 2026 Tournament</span>
          </div>
          
          <h1 className="hero-title">
            The Ultimate 2026 Football Sticker Collection, <span className="text-gradient">Ready to Print!</span>
          </h1>
          
          <p className="hero-subtitle">
            Build your ultimate football sticker album without the expense of buying endless packs. Download over 900 high-quality printable stickers featuring all 48 participating nations, star athletes, and exclusive special cards.
          </p>
          
          <div className="hero-actions">
            <a href="#pricing" className="btn btn-primary pulse-btn">
              <Download size={20} />
              Get Instant Access
            </a>
            <a href="#features" className="btn btn-secondary" style={{ background: 'rgba(255,255,255,0.05)', color: 'var(--color-text-main)', border: '1px solid rgba(255,255,255,0.1)', boxShadow: 'none' }}>
              Learn More
            </a>
          </div>
          

        </div>
        
        <div className="hero-image-wrapper">
          <div className="glow-effect"></div>
          <img 
            src="/il_1140xN.8169060353_59ed.webp" 
            alt="World Football Championship 2026 Sticker Collection" 
            className="hero-image animate-float"
          />
        </div>
      </div>
    </header>
  );
};

export default Hero;
