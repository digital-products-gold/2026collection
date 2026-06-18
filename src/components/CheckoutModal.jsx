import React from 'react';
import { X, Download, CheckCircle } from 'lucide-react';
import { useTranslation } from '../hooks/useTranslation';
import './CheckoutModal.css';

const CheckoutModal = ({ isOpen, onClose }) => {
  const { t } = useTranslation();
  if (!isOpen) return null;

  const mockDownload = (fileName, url) => {
    const link = document.createElement('a');
    link.href = url || '#';
    link.setAttribute('download', fileName);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close" onClick={onClose} aria-label="Close modal">
          <X size={20} />
        </button>

        <div className="success-screen" style={{ marginTop: '1rem' }}>
          <div className="success-icon-wrapper animate-float">
            <CheckCircle size={64} className="success-icon" />
          </div>
          <h2>{t('modal_title')}</h2>
          <p className="success-sub">{t('modal_sub')}</p>
          
          <div className="download-section">
            <h3>{t('modal_files_title')}</h3>
            <div className="download-item">
              <div className="download-info">
                <strong>{t('modal_file_1')}</strong>
                <span>{t('modal_file_1_sub')}</span>
              </div>
              <button 
                className="btn btn-secondary btn-download" 
                onClick={() => mockDownload('WorldCup2026_Stickers_Part1.png', `${import.meta.env.BASE_URL}samples/main_stickers_1.png`)}
              >
                <Download size={18} />
                {t('modal_btn_download')}
              </button>
            </div>
            
            <div className="download-item">
              <div className="download-info">
                <strong>{t('modal_file_2')}</strong>
                <span>{t('modal_file_2_sub')}</span>
              </div>
              <button 
                className="btn btn-secondary btn-download" 
                onClick={() => mockDownload('WorldCup2026_Stickers_Part2.png', `${import.meta.env.BASE_URL}samples/main_stickers_5.png`)}
              >
                <Download size={18} />
                {t('modal_btn_download')}
              </button>
            </div>

            <div className="download-item">
              <div className="download-info">
                <strong>{t('modal_file_3')}</strong>
                <span>{t('modal_file_3_sub')}</span>
              </div>
              <button 
                className="btn btn-secondary btn-download" 
                onClick={() => mockDownload('WorldCup2026_Album.png', `${import.meta.env.BASE_URL}samples/main_album_1.png`)}
              >
                <Download size={18} />
                {t('modal_btn_download')}
              </button>
            </div>

            <div className="download-item">
              <div className="download-info">
                <strong>{t('modal_file_4')}</strong>
                <span>{t('modal_file_4_sub')}</span>
              </div>
              <button 
                className="btn btn-secondary btn-download" 
                onClick={() => mockDownload('WorldCup2026_Bonuses.png', `${import.meta.env.BASE_URL}samples/bonus_golden_1.png`)}
              >
                <Download size={18} />
                {t('modal_btn_download')}
              </button>
            </div>
          </div>

          <button className="btn btn-primary w-full" onClick={onClose} style={{ marginTop: '1.5rem' }}>
            {t('modal_btn_close')}
          </button>
        </div>
      </div>
    </div>
  );
};

export default CheckoutModal;
