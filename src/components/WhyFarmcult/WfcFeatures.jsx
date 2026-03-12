import React from 'react';

const WfcFeatures = () => {
  return (
    <section className="wfc-features-section">
      <div className="wfc-features-grid">
        <div className="wfc-feature-card">
          <div className="wfc-feature-icon">
            <img src="/icons/icon 1.svg" alt="Technology-led icon" />
          </div>
          <h3 className="wfc-feature-title">Technology-led</h3>
          <p className="wfc-feature-desc">
            Automation, IoT monitoring, and data-based decision-making systems.
          </p>
        </div>

        <div className="wfc-feature-card wfc-feature-card--border">
          <div className="wfc-feature-icon">
            <img src="/icons/icon 2.svg" alt="Sustainable icon" />
          </div>
          <h3 className="wfc-feature-title">Sustainable</h3>
          <p className="wfc-feature-desc">
            Less water usage and no soil dependency, build for long-term environmental balance.
          </p>
        </div>

        <div className="wfc-feature-card wfc-feature-card--border">
          <div className="wfc-feature-icon">
            <img src="/icons/icon 3.svg" alt="Scaleable icon" />
          </div>
          <h3 className="wfc-feature-title">Scaleable</h3>
          <p className="wfc-feature-desc">
            Structured systems designed to expand smoothly from small to large farms.
          </p>
        </div>
      </div>
    </section>
  );
};

export default WfcFeatures;
