import React from 'react';
import WfcBanner from '../components/WhyFarmcult/WfcBanner';
import SmartIntegration from '../components/Technology/SmartIntegration';

const Technology = () => {
  return (
    <div className="technology-page">
      <WfcBanner 
        variant="light"
        tag="TECHNOLOGY"
        title="Technology That Powers Every Farm"
        subtitle="Smart systems working quietly behind the scenes. Monitoring, optimising, and improving performance every day."
      />
      <SmartIntegration />
    </div>
  );
};

export default Technology;
