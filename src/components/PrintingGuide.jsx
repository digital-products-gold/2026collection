import React from 'react';
import { Printer, FileText, Scissors, AlertTriangle, CheckCircle, Star, Maximize } from 'lucide-react';
import './PrintingGuide.css';

const PrintingGuide = () => {
  return (
    <section className="printing-guide-section" id="printing-guide">
      <div className="container">
        <div className="section-header text-center">
          <h2 className="section-title">Printing and Assembly Guide</h2>
          <p className="section-subtitle">Follow these instructions to ensure your stickers have a professional finish and fit perfectly in your album.</p>
        </div>

        <div className="guide-grid">
          {/* Step 1: Printing Settings */}
          <div className="guide-card">
            <div className="guide-step-number">1</div>
            <h3 className="guide-card-title">Printing Settings <span className="highlight-text">(Very Important!)</span></h3>
            
            <div className="guide-content-wrapper">
              <ul className="guide-list">
                <li>
                  <FileText className="guide-icon" />
                  <div>
                    <strong>PAPER SIZE:</strong> Select A4.
                  </div>
                </li>
                <li>
                  <Maximize className="guide-icon" />
                  <div>
                    <strong>SCALE / SIZING:</strong> Always choose 'Actual Size' or 'Scale 100%'.
                    <div className="alert-box">
                      <AlertTriangle size={16} />
                      <span><strong>Attention:</strong> Never use the 'Fit to page' option.</span>
                    </div>
                  </div>
                </li>
                <li>
                  <Star className="guide-icon" />
                  <div>
                    <strong>QUALITY:</strong> Select 'High Quality' or 'Photo'.
                  </div>
                </li>
              </ul>
              <div className="guide-illustration">
                <img src="/guide-printer.webp" alt="Printer Settings" />
              </div>
            </div>
          </div>

          {/* Step 2: Recommended Paper */}
          <div className="guide-card">
            <div className="guide-step-number">2</div>
            <h3 className="guide-card-title">Recommended Paper</h3>
            
            <div className="guide-content-wrapper">
              <ul className="guide-list">
                <li>
                  <FileText className="guide-icon" />
                  <div>
                    <strong>TYPE:</strong> Glossy Adhesive Photo Paper.
                  </div>
                </li>
                <li>
                  <Printer className="guide-icon" />
                  <div>
                    <strong>WEIGHT:</strong> Between 115g and 135g.
                  </div>
                </li>
              </ul>
              <div className="guide-illustration">
                <img src="/guide-paper.webp" alt="Recommended Paper" />
              </div>
            </div>
          </div>

          {/* Step 3: Tips for the Perfect Cut */}
          <div className="guide-card">
            <div className="guide-step-number">3</div>
            <h3 className="guide-card-title">Tips for the Perfect Cut</h3>
            
            <div className="guide-content-wrapper">
              <ul className="guide-list">
                <li>
                  <Scissors className="guide-icon" />
                  <div>
                    <strong>TOOLS:</strong> Use a utility knife (cutter) and a ruler for straight cuts. Or use scissors following crop marks.
                  </div>
                </li>
                <li>
                  <Star className="guide-icon text-warning" />
                  <div>
                    <strong>GOLDEN TIP:</strong> Do not remove the liner all at once. Peel off only when pasting.
                  </div>
                </li>
              </ul>
              <div className="guide-illustration">
                <img src="/guide-cut.webp" alt="Cutting Tips" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PrintingGuide;
