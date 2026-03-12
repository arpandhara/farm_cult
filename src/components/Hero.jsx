import React from 'react';

const Hero = () => {
  return (
    <section className="hero-container">
      <div className="hero-text-content">
        <h1 className="hero-title">
          Turn Your Idle Land Into A Money<br />Generating Asset
        </h1>
        <p className="hero-subtitle">
          Climate-smart, data-led farming models built for long-term growth.
        </p>
        <button className="btn-filled">
          <span className="btn-text-wrapper">
            <span className="btn-text-inner">Get Started</span>
            <span className="btn-text-inner clone">Get Started</span>
          </span>
        </button>
      </div>
      <div className="hero-image-wrapper">
        <img 
          src="/Hero%20Image.svg" 
          alt="Farmcult Modern Farming" 
          className="hero-bg-img"
          decoding="async"
          loading="lazy"
        />
      </div>
    </section>
  );
};

export default Hero;
