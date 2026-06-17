import React from 'react';
import { ShoppingCart, ShieldCheck } from 'lucide-react';
import './Pricing.css';

const Pricing = ({ onOpenDownload }) => {
  return (
    <section className="pricing-section" id="pricing">
      <div className="container">
        <div className="pricing-card">
          <div className="pricing-header">
            <h3>Complete Collection</h3>
            <p>Get instant access to over 900 stickers</p>
          </div>
          
          <div className="pricing-price">
            <span className="currency">$</span>
            <span className="amount">19</span>
            <span className="cents">.99</span>
          </div>
          <div className="pricing-original">Limited Time Offer</div>
          
          <ul className="pricing-features">
            <li>✓ Digital PDF Sticker Collection (A4 Ready)</li>
            <li>✓ All 48 Teams & Special Collectibles</li>
            <li>✓ Backing Templates & Instructions</li>
            <li>✓ Free Future File Updates</li>
            <li>✓ Instant Access After Purchase</li>
          </ul>
          
          <button className="btn btn-primary btn-large pulse-btn w-full" onClick={onOpenDownload}>
            <ShoppingCart size={24} />
            Download Now
          </button>
          
          <div className="guarantee">
            <ShieldCheck size={20} className="guarantee-icon" />
            <span>Secure Payment & Instant Delivery</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
