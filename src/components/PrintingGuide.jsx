import React from 'react';
import { Printer, FileText, Scissors, AlertTriangle, CheckCircle, Star, Maximize } from 'lucide-react';
import { useTranslation } from '../hooks/useTranslation';
import './PrintingGuide.css';

const PrintingGuide = () => {
  const { t } = useTranslation();
  return (
    <section className="printing-guide-section" id="printing-guide">
      <div className="container">
        <div className="section-header text-center">
          <h2 className="section-title">{t('guide_title')}</h2>
          <p className="section-subtitle">{t('guide_subtitle')}</p>
        </div>

        <div className="guide-grid">
          {/* Step 1: Printing Settings */}
          <div className="guide-card">
            <div className="guide-step-number">1</div>
            <h3 className="guide-card-title">{t('guide_step_1_title')} <span className="highlight-text">{t('guide_important')}</span></h3>
            
            <div className="guide-content-wrapper">
              <ul className="guide-list">
                <li>
                  <FileText className="guide-icon" />
                  <div>
                    <strong>{t('guide_label_paper')}</strong> {t('guide_paper_size')}
                  </div>
                </li>
                <li>
                  <Maximize className="guide-icon" />
                  <div>
                    <strong>{t('guide_label_scale')}</strong> {t('guide_scale')}
                    <div className="alert-box">
                      <AlertTriangle size={16} />
                      <span><strong>{t('guide_label_attention')}</strong> {t('guide_attention')}</span>
                    </div>
                  </div>
                </li>
                <li>
                  <Star className="guide-icon" />
                  <div>
                    <strong>{t('guide_label_quality')}</strong> {t('guide_quality')}
                  </div>
                </li>
              </ul>
              <div className="guide-illustration">
                <img src={`${import.meta.env.BASE_URL}guide-printer.webp`} alt="Printer Settings" />
              </div>
            </div>
          </div>

          {/* Step 2: Recommended Paper */}
          <div className="guide-card">
            <div className="guide-step-number">2</div>
            <h3 className="guide-card-title">{t('guide_step_2_title')}</h3>
            
            <div className="guide-content-wrapper">
              <ul className="guide-list">
                <li>
                  <FileText className="guide-icon" />
                  <div>
                    <strong>{t('guide_label_type')}</strong> {t('guide_type')}
                  </div>
                </li>
                <li>
                  <Printer className="guide-icon" />
                  <div>
                    <strong>{t('guide_label_weight')}</strong> {t('guide_weight')}
                  </div>
                </li>
              </ul>
              <div className="guide-illustration">
                <img src={`${import.meta.env.BASE_URL}guide-paper.webp`} alt="Recommended Paper" />
              </div>
            </div>
          </div>

          {/* Step 3: Tips for the Perfect Cut */}
          <div className="guide-card">
            <div className="guide-step-number">3</div>
            <h3 className="guide-card-title">{t('guide_step_3_title')}</h3>
            
            <div className="guide-content-wrapper">
              <ul className="guide-list">
                <li>
                  <Scissors className="guide-icon" />
                  <div>
                    <strong>{t('guide_label_tools')}</strong> {t('guide_tools')}
                  </div>
                </li>
                <li>
                  <Star className="guide-icon text-warning" />
                  <div>
                    <strong>{t('guide_label_golden')}</strong> {t('guide_golden_tip')}
                  </div>
                </li>
              </ul>
              <div className="guide-illustration">
                <img src={`${import.meta.env.BASE_URL}guide-cut.webp`} alt="Cutting Tips" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PrintingGuide;
