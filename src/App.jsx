import React, { useState } from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import Features from './components/Features'
import Bonuses from './components/Bonuses'
import Pricing from './components/Pricing'
import FAQ from './components/FAQ'
import CheckoutModal from './components/CheckoutModal'

function App() {
  const [isDownloadOpen, setIsDownloadOpen] = useState(false);

  const openDownload = () => setIsDownloadOpen(true);
  const closeDownload = () => setIsDownloadOpen(false);

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
        <p>© 2026 World Football Championship Digital Collection. All rights reserved.</p>
        <p style={{ fontSize: '0.875rem', marginTop: '0.5rem' }}>
          This is an independent digital product. We are not affiliated with FIFA or any mentioned brands.
        </p>
      </footer>
    </>
  )
}

export default App
