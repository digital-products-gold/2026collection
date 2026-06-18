import React from 'react';
import { Download, Star } from 'lucide-react';
import { useTranslation } from '../hooks/useTranslation';
import './Hero.css';

const Hero = () => {
  const { t } = useTranslation();
  // Determine image based on query parameter
  const queryParams = new URLSearchParams(window.location.search);
  const langParam = queryParams.get('lang') || '';
  let imageSrc = `${import.meta.env.BASE_URL}il_1140xN.8169060353_59ed.webp`;
  
  if (langParam === 'pt' || langParam.startsWith('pt-')) {
    imageSrc = `${import.meta.env.BASE_URL}album_pt_br_1781720677242.png`;
  } else if (langParam === 'es' || langParam.startsWith('es-')) {
    imageSrc = `${import.meta.env.BASE_URL}album_es_1781721015091.png`;
  }

  return (
    <header className="hero-section">
      <div className="container hero-container">
        <div className="hero-content">

          
          <h1 className="hero-title">
            {t('hero_title_1')}<span className="text-gradient">{t('hero_title_2')}</span>
          </h1>
          
          <p className="hero-subtitle">
            {t('hero_subtitle')}
          </p>
          
          <div className="hero-actions">
            <a href="#pricing" className="btn btn-primary pulse-btn">
              <Download size={20} />
              {t('hero_btn_primary')}
            </a>
            <a href="#features" className="btn btn-secondary" style={{ background: 'rgba(255,255,255,0.05)', color: 'var(--color-text-main)', border: '1px solid rgba(255,255,255,0.1)', boxShadow: 'none' }}>
              {t('hero_btn_secondary')}
            </a>
          </div>
          
        </div>
        
        <div className="hero-image-wrapper">
          <div className="glow-effect"></div>
          <img 
            src={imageSrc} 
            alt="World Football Championship 2026 Sticker Collection" 
            className="hero-image animate-float"
          />
        </div>
      </div>
    </header>
  );
};

export default Hero;
