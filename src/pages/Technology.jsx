import React from 'react';
import WfcHeader from '../components/WhyFarmcult/WfcHeader';
import SmartIntegration from '../components/Technology/SmartIntegration';

const Technology = () => {
  return (
    <div className="technology-page">
      <WfcHeader 
        tag="TECHNOLOGY"
        title="Technology That Powers Every Farm"
        subtitle="Smart systems working quietly behind the scenes. Monitoring, optimising, and improving performance every day."
      />
      <SmartIntegration />
    </div>
  );
};

export default Technology;
