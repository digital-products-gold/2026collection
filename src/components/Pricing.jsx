import React from 'react';
import { ShoppingCart, ShieldCheck } from 'lucide-react';
import { useTranslation } from '../hooks/useTranslation';
import './Pricing.css';

const Pricing = ({ onOpenDownload }) => {
  const { t } = useTranslation();

  const queryParams = new URLSearchParams(window.location.search);
  const langParam = queryParams.get('lang')?.toLowerCase();
  const isPtOrPtBr = langParam === 'pt' || langParam === 'ptbr' || langParam === 'pt-br';

  const handlePricingClick = () => {
    if (isPtOrPtBr) {
      window.location.href = 'https://digitalmemberarea.digitalstoregames.com/checkout?storeid=600009';
    } else {
      window.location.href = 'https://digitalmemberarea.digitalstoregames.com/checkout?storeid=600010';
    }
  };

  return (
    <section className="pricing-section" id="pricing">
      <div className="container">
        <div className="pricing-card">
          <div className="pricing-header">
            <h3>{t('pricing_title')}</h3>
            <p>{t('pricing_subtitle')}</p>
          </div>

          <div className="pricing-price">
            {isPtOrPtBr ? (
              <>
                <span className="currency">R$</span>
                <span className="amount">9</span>
                <span className="cents">,90</span>
              </>
            ) : (
              <>
                <span className="currency">$</span>
                <span className="amount">29</span>
                <span className="cents">.70</span>
              </>
            )}
          </div>
          <div className="pricing-original">{t('pricing_offer')}</div>

          <ul className="pricing-features">
            <li>{t('pricing_feat_1')}</li>
            <li>{t('pricing_feat_2')}</li>
            <li>{t('pricing_feat_3')}</li>
            <li>{t('pricing_feat_4')}</li>
            <li>{t('pricing_feat_5')}</li>
          </ul>

          <button className="btn btn-primary btn-large pulse-btn w-full" onClick={handlePricingClick}>
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
