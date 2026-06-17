import React from 'react';
import { X, Download, CheckCircle } from 'lucide-react';
import './CheckoutModal.css';

const CheckoutModal = ({ isOpen, onClose }) => {
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
          <h2>Instant Access</h2>
          <p className="success-sub">Get access to all print-ready sticker packages and digital album resources immediately.</p>
          
          <div className="download-section">
            <h3>Available Files</h3>
            <div className="download-item">
              <div className="download-info">
                <strong>Stickers Pack (Part 1 - Teams A-L)</strong>
                <span>PDF Format • High Resolution • 450+ Stickers</span>
              </div>
              <button 
                className="btn btn-secondary btn-download" 
                onClick={() => mockDownload('WorldCup2026_Stickers_Part1.png', `${import.meta.env.BASE_URL}samples/main_stickers_1.png`)}
              >
                <Download size={18} />
                Download
              </button>
            </div>
            
            <div className="download-item">
              <div className="download-info">
                <strong>Stickers Pack (Part 2 - Teams M-Z)</strong>
                <span>PDF Format • High Resolution • 450+ Stickers</span>
              </div>
              <button 
                className="btn btn-secondary btn-download" 
                onClick={() => mockDownload('WorldCup2026_Stickers_Part2.png', `${import.meta.env.BASE_URL}samples/main_stickers_5.png`)}
              >
                <Download size={18} />
                Download
              </button>
            </div>

            <div className="download-item">
              <div className="download-info">
                <strong>Digital Collector's Album 2026</strong>
                <span>PDF Format • Standard Layout • 80 Pages</span>
              </div>
              <button 
                className="btn btn-secondary btn-download" 
                onClick={() => mockDownload('WorldCup2026_Album.png', `${import.meta.env.BASE_URL}samples/main_album_1.png`)}
              >
                <Download size={18} />
                Download
              </button>
            </div>

            <div className="download-item">
              <div className="download-info">
                <strong>Exclusive Bonuses Pack</strong>
                <span>Covers, Backings & Printing Templates</span>
              </div>
              <button 
                className="btn btn-secondary btn-download" 
                onClick={() => mockDownload('WorldCup2026_Bonuses.png', `${import.meta.env.BASE_URL}samples/bonus_golden_1.png`)}
              >
                <Download size={18} />
                Download
              </button>
            </div>
          </div>

          <button className="btn btn-primary w-full" onClick={onClose} style={{ marginTop: '1.5rem' }}>
            Close Window
          </button>
        </div>
      </div>
    </div>
  );
};

export default CheckoutModal;
