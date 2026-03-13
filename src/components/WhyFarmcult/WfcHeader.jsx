import React from 'react';

const WfcHeader = () => {
  return (
    <section className="wfc-header-section pt-[120px] pb-[60px] px-[5%] text-center max-w-[1200px] mx-auto">
      <div className="wfc-header-inner">
        <span className="wfc-label block text-[0.85rem] font-bold text-accent tracking-[0.1em] mb-6 uppercase">
          WHY FARMCULT?
        </span>
        <h1 className="wfc-main-title text-[clamp(2.5rem,5vw,4.2rem)] font-medium leading-[1.1] mb-6 tracking-[-0.02em] text-text-primary">
          Cultivating for Tomorrow
        </h1>
        <p className="wfc-main-subtitle text-[clamp(1rem,2vw,1.25rem)] text-text-secondary max-w-[600px] mx-auto leading-[1.5]">
          Not just growing crops. Building the future of modern farming.
        </p>
      </div>
    </section>
  );
};

export default WfcHeader;