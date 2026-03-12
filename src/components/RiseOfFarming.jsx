import React from 'react';

const RiseOfFarming = () => {
  return (
    <section className="rise-container" id="technology">
      <div className="rise-content-wrapper">
        
        {/* Top Split Area */}
        <div className="rise-top-split">
          
          {/* Left Text & Capsules */}
          <div className="rise-info-side">
            <h2 className="rise-title">
              The Rise of Modern<br />Farming in India
            </h2>
            <p className="rise-desc">
              Rapid urban demand, water stress, and government support are accelerating hydroponic adoption across key Indian states.
            </p>
            
            <div className="states-capsule-grid">
              <span className="state-capsule">Maharashtra</span>
              <span className="state-capsule">Karnataka</span>
              <span className="state-capsule">Telangana</span>
              <span className="state-capsule">Punjab</span>
              <span className="state-capsule">Gujarat</span>
              <span className="state-capsule">Tamil Nadu</span>
              <span className="state-capsule">Haryana</span>
              <span className="state-capsule">Rajasthan</span>
            </div>
          </div>
          
          {/* Right Map Visual Area */}
          <div className="rise-map-side">
            <div className="impact-map-card">
               <img src="/impact_section.svg" alt="India Hydroponics Impact Map" className="impact-map-img" />
            </div>
          </div>

        </div>

        {/* Bottom Stats Grid */}
        <div className="rise-stats-grid">
          
          <div className="stat-card">
            <h3 className="stat-value">Over 30%</h3>
            <p className="stat-label">ROI on projects with hydroponics / modern farming</p>
          </div>
          
          <div className="stat-card">
            <h3 className="stat-value">80–90%</h3>
            <p className="stat-label">Less water usage compared to soil farming</p>
          </div>
          
          <div className="stat-card">
            <h3 className="stat-value">Up to 5x</h3>
            <p className="stat-label">Higher yield per acre in controlled systems</p>
          </div>
          
          <div className="stat-card borderless-right">
            <h3 className="stat-value">Up to 50%</h3>
            <p className="stat-label">Capital subsidy for eligible projects</p>
          </div>

        </div>
      </div>
    </section>
  );
};

export default RiseOfFarming;
