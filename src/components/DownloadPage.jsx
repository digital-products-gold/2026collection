import React, { useState } from 'react';
import { Download, Monitor, Smartphone } from 'lucide-react';
import { useTranslation } from '../hooks/useTranslation';
import './DownloadPage.css';

const DownloadPage = () => {
  const { t } = useTranslation();
  const [activeTab, setActiveTab] = useState('pc'); // 'pc' or 'mobile'

  return (
    <div className="download-page">
      <div className="container download-container">
        <div className="download-header">
          <h1 className="download-title text-gradient">{t('download_title')}</h1>
          <p className="download-subtitle">{t('download_subtitle')}</p>
          
          <a href={t('download_link')} className="btn btn-primary pulse-btn download-btn" download>
            <Download size={24} />
            {t('download_btn')}
          </a>
        </div>

        <div className="instructions-section">
          <h2 className="instructions-title">{t('download_instructions_title')}</h2>
          
          <div className="instructions-tabs">
            <button 
              className={`tab-btn ${activeTab === 'pc' ? 'active' : ''}`}
              onClick={() => setActiveTab('pc')}
            >
              <Monitor size={20} />
              {t('download_tab_pc')}
            </button>
            <button 
              className={`tab-btn ${activeTab === 'mobile' ? 'active' : ''}`}
              onClick={() => setActiveTab('mobile')}
            >
              <Smartphone size={20} />
              {t('download_tab_mobile')}
            </button>
          </div>

          <div className="instructions-content">
            {activeTab === 'pc' && (
              <div className="instruction-steps">
                <div className="step-card">
                  <p>{t('download_pc_step1')}</p>
                </div>
                <div className="step-card">
                  <p>{t('download_pc_step2')}</p>
                </div>
                <div className="step-card">
                  <p>{t('download_pc_step3')}</p>
                </div>
                <div className="step-card">
                  <p>{t('download_pc_step4')}</p>
                </div>
              </div>
            )}

            {activeTab === 'mobile' && (
              <div className="instruction-steps">
                <div className="step-card">
                  <p>{t('download_mobile_step1')}</p>
                </div>
                <div className="step-card">
                  <p>{t('download_mobile_step2')}</p>
                </div>
                <div className="step-card">
                  <p>{t('download_mobile_step3')}</p>
                </div>
                <div className="step-card">
                  <p>{t('download_mobile_step4')}</p>
                </div>
                <div className="step-card">
                  <p>{t('download_mobile_step5')}</p>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default DownloadPage;
