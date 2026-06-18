import React, { useState, useEffect } from 'react';
import { Menu, X, ShoppingCart } from 'lucide-react';
import { useTranslation } from '../hooks/useTranslation';
import './Header.css';

const Header = () => {
  const { t } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <nav className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
      <div className="container navbar-container">
        <a href="#" className="navbar-logo" onClick={closeMenu}>
          <span className="logo-icon">⚽</span>
          <span className="logo-text">2026<span className="text-gradient">COLLECTION</span></span>
        </a>

        <div className={`navbar-menu-icon`} onClick={toggleMenu}>
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </div>

        <ul className={`navbar-links ${isOpen ? 'active' : ''}`}>
          <li>
            <a href="#features" onClick={closeMenu}>{t('nav_features')}</a>
          </li>
          <li>
            <a href="#pricing" onClick={closeMenu}>{t('nav_pricing')}</a>
          </li>
          <li>
            <a href="#faq" onClick={closeMenu}>{t('nav_faq')}</a>
          </li>
          <li className="navbar-cta-item">
            <a href="#pricing" className="btn btn-primary pulse-btn navbar-cta" onClick={closeMenu}>
              <ShoppingCart size={18} />
              {t('nav_buy')}
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Header;
