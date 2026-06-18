import React from 'react';
import { ShoppingCart, ShieldCheck } from 'lucide-react';
import { useTranslation } from '../hooks/useTranslation';
import './Pricing.css';

const Pricing = ({ onOpenDownload }) => {
  const { t } = useTranslation();
  return (
    <section className="pricing-section" id="pricing">
      <div className="container">
        <div className="pricing-card">
          <div className="pricing-header">
            <h3>{t('pricing_title')}</h3>
            <p>{t('pricing_subtitle')}</p>
          </div>
          
          <div className="pricing-price">
            <span className="currency">$</span>
            <span className="amount">19</span>
            <span className="cents">.99</span>
          </div>
          <div className="pricing-original">{t('pricing_offer')}</div>
          
          <ul className="pricing-features">
            <li>{t('pricing_feat_1')}</li>
            <li>{t('pricing_feat_2')}</li>
            <li>{t('pricing_feat_3')}</li>
            <li>{t('pricing_feat_4')}</li>
            <li>{t('pricing_feat_5')}</li>
          </ul>
          
          <button className="btn btn-primary btn-large pulse-btn w-full" onClick={onOpenDownload}>
            <ShoppingCart size={24} />
            {t('pricing_btn')}
          </button>
          
          <div className="guarantee">
            <ShieldCheck size={20} className="guarantee-icon" />
            <span>{t('pricing_guarantee')}</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
