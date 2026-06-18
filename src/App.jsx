import React, { useState } from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import Features from './components/Features'
import Bonuses from './components/Bonuses'
import Pricing from './components/Pricing'
import FAQ from './components/FAQ'
import CheckoutModal from './components/CheckoutModal'
import DownloadPage from './components/DownloadPage'
import { useTranslation } from './hooks/useTranslation'

function App() {
  const { t } = useTranslation();
  const [isDownloadOpen, setIsDownloadOpen] = useState(false);

  const openDownload = () => setIsDownloadOpen(true);
  const closeDownload = () => setIsDownloadOpen(false);

  // Basic client-side routing
  const pathname = window.location.pathname;
  const isDownloadRoute = pathname === '/download' || pathname === '/download/' || pathname.endsWith('/download') || pathname.endsWith('/download/');

  if (isDownloadRoute) {
    return (
      <>
        <DownloadPage />
        <footer style={{
          textAlign: 'center',
          padding: '2rem',
          borderTop: '1px solid rgba(255,255,255,0.05)',
          color: 'var(--color-text-muted)',
          marginTop: 'auto'
        }}>
          <p>{t('footer_rights')}</p>
          <p style={{ fontSize: '0.875rem', marginTop: '0.5rem' }}>
            {t('footer_disclaimer')}
          </p>
        </footer>
      </>
    );
  }

  return (
    <>
      <Header />
      <main style={{ marginTop: '80px' }}>
        <Hero />
        <Features />
        <Bonuses />
        <Pricing onOpenDownload={openDownload} />
        <FAQ />
      </main>

      <CheckoutModal isOpen={isDownloadOpen} onClose={closeDownload} />
      
      <footer style={{
        textAlign: 'center',
        padding: '2rem',
        borderTop: '1px solid rgba(255,255,255,0.05)',
        color: 'var(--color-text-muted)',
        marginTop: 'var(--spacing-xl)'
      }}>
        <p>{t('footer_rights')}</p>
        <p style={{ fontSize: '0.875rem', marginTop: '0.5rem' }}>
          {t('footer_disclaimer')}
        </p>
      </footer>
    </>
  )
}

export default App
