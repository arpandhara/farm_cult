import React from 'react';

const WfcBanner = () => {
  return (
    <section className="wfc-about-banner bg-text-primary text-bg-color py-[10rem] px-[5%] text-center">
      <div className="wfc-about-banner-inner">
        <h2 className="wfc-about-banner-title text-[clamp(2rem,4vw,3.5rem)] font-medium mb-6 tracking-[-0.02em]">
          Grow smarter. Use less. Build for tomorrow.
        </h2>
        <p className="wfc-about-banner-sub text-[1.2rem] opacity-70">
          Technology-backed. Resource-efficient. Long-term focused.
        </p>
      </div>
    </section>
  );
};

export default WfcBanner;