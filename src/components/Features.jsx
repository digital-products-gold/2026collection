import React from 'react';
import { BookOpen, Sparkles, Printer, RefreshCcw } from 'lucide-react';
import SampleCarousel from './SampleCarousel';
import { useTranslation } from '../hooks/useTranslation';
import './Features.css';

const Features = () => {
  const { t } = useTranslation();

  const queryParams = new URLSearchParams(window.location.search);
  const langParam = queryParams.get('lang') || '';
  
  let secondImage = `${import.meta.env.BASE_URL}samples/main_stickers_1.png`;
  if (langParam === 'pt' || langParam.startsWith('pt-')) {
    secondImage = `${import.meta.env.BASE_URL}carousel_br.png`;
  } else if (langParam === 'es' || langParam.startsWith('es-')) {
    secondImage = `${import.meta.env.BASE_URL}carousel_ar.png`;
  }

  const mainSamples = [
    `${import.meta.env.BASE_URL}samples/main_album_1.png`,
    secondImage,
    `${import.meta.env.BASE_URL}samples/main_stickers_5.png`,
    `${import.meta.env.BASE_URL}samples/main_album_2.png`
  ];

  const featuresList = [
    {
      icon: <BookOpen size={32} />,
      title: t('feat_1_title'),
      description: t('feat_1_desc'),
      color: 'var(--color-primary)'
    },
    {
      icon: <Sparkles size={32} />,
      title: t('feat_2_title'),
      description: t('feat_2_desc'),
      color: 'var(--color-secondary)'
    },
    {
      icon: <Printer size={32} />,
      title: t('feat_3_title'),
      description: t('feat_3_desc'),
      color: '#4A90E2'
    },
    {
      icon: <RefreshCcw size={32} />,
      title: t('feat_4_title'),
      description: t('feat_4_desc'),
      color: '#FF8A00'
    }
  ];

  return (
    <section className="features-section" id="features">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">{t('feat_title')}</h2>
          <p className="section-subtitle">{t('feat_subtitle')}</p>
        </div>

        <div className="features-grid" style={{ marginBottom: 'var(--spacing-xl)' }}>
          {featuresList.map((feature, index) => (
            <div className="feature-card" key={index}>
              <div className="feature-icon-wrapper" style={{ color: feature.color, background: `${feature.color}15` }}>
                {feature.icon}
              </div>
              <h3 className="feature-title">{feature.title}</h3>
              <p className="feature-description">{feature.description}</p>
            </div>
          ))}
        </div>

        <SampleCarousel images={mainSamples} title={t('feat_carousel_title')} />
      </div>
    </section>
  );
};

export default Features;
