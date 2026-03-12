import React from 'react';

const About = () => {
  return (
    <section className="about-container" id="why">
      <div className="about-header">
        <div className="about-header-text">
          <h2 className="section-title">Cultivating For Tomorrow</h2>
          <p className="section-subtitle">
            Farmcult uses technology to build farming systems that are easy to manage, sustainable, and designed to grow over time.
          </p>
        </div>
        <div className="about-header-link">
          <a href="#about-us" className="btn-text-link">
            Learn more about Farmcult &rarr;
          </a>
        </div>
      </div>

      <div className="about-content-wrapper">
        <div className="about-image-card">
          <img src="/homepage_img2.svg" alt="Farmcult Greenhouse Facility" className="about-img" />
          
          <div className="about-features-panel">
            <div className="feature-item">
              <div className="feature-icon">
                <img src="/icons/icon 1.svg" alt="Technology-led" />
              </div>
              <div className="feature-text">
                <h3 className="feature-title">Technology-led</h3>
                <p className="feature-desc">Automation, monitoring, and data-based decisions</p>
              </div>
            </div>

            <div className="feature-item">
              <div className="feature-icon">
                <img src="/icons/icon 2.svg" alt="Sustainable" />
              </div>
              <div className="feature-text">
                <h3 className="feature-title">Sustainable</h3>
                <p className="feature-desc">Less water. No pesticides. Cleaner farming.</p>
              </div>
            </div>

            <div className="feature-item">
              <div className="feature-icon">
                <img src="/icons/icon 3.svg" alt="Scaleable" />
              </div>
              <div className="feature-text">
                <h3 className="feature-title">Scaleable</h3>
                <p className="feature-desc">Systems that can grow from small to large farms</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
