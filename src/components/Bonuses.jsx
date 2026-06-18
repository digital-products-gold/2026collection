import React from 'react';
import { CheckCircle, Gift } from 'lucide-react';
import SampleCarousel from './SampleCarousel';
import { useTranslation } from '../hooks/useTranslation';
import './Bonuses.css';

const bonusSamples = [
  `${import.meta.env.BASE_URL}samples/bonus_cocacola_1.png`,
  `${import.meta.env.BASE_URL}samples/bonus_holo_shields_1.png`,
  `${import.meta.env.BASE_URL}samples/bonus_extra_gold_1.png`
];

const Bonuses = () => {
  const { t } = useTranslation();

  const bonusesList = [
    t('bonus_item_1'),
    t('bonus_item_2'),
    t('bonus_item_3'),
    t('bonus_item_4')
  ];
  return (
    <section className="bonuses-section">
      <div className="container bonuses-container">
        <div className="bonuses-content">
          <div className="bonus-badge">
            <Gift size={20} />
            <span>{t('bonus_badge')}</span>
          </div>
          <h2 className="section-title">{t('bonus_title_1')}<span className="text-gradient">{t('bonus_title_2')}</span></h2>
          <p className="bonuses-description">
            {t('bonus_desc')}
          </p>

          <ul className="bonuses-list">
            {bonusesList.map((bonus, index) => (
              <li key={index} className="bonus-item">
                <CheckCircle className="check-icon" size={24} />
                <span>{bonus}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="bonuses-visual">
          <img 
            src={`${import.meta.env.BASE_URL}impressora.png`} 
            alt="Print Ready" 
            className="printer-image"
          />
          <div className="bonuses-tags-under">
            <div className="bonus-tag">{t('bonus_tag_1')}</div>
            <div className="bonus-tag">{t('bonus_tag_2')}</div>
            <div className="bonus-tag">{t('bonus_tag_3')}</div>
          </div>
        </div>
      </div>

      <div className="container" style={{ marginTop: 'var(--spacing-xl)' }}>
        <SampleCarousel images={bonusSamples} title={t('bonus_carousel_title')} />
      </div>
    </section>
  );
};

export default Bonuses;
