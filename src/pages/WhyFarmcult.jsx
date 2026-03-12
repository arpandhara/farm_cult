import React, { useRef } from 'react';
import { motion } from 'framer-motion';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

import WfcHeader from '../components/WhyFarmcult/WfcHeader';
import WfcHero from '../components/WhyFarmcult/WfcHero';
import WfcFeatures from '../components/WhyFarmcult/WfcFeatures';
import WfcFoundation from '../components/WhyFarmcult/WfcFoundation';
import WfcBanner from '../components/WhyFarmcult/WfcBanner';
import WfcTeam from '../components/WhyFarmcult/WfcTeam';
import WfcReviews from '../components/WhyFarmcult/WfcReviews';
import WfcContact from '../components/WhyFarmcult/WfcContact';

const pageTransition = {
  initial: { opacity: 0, y: 20 },
  animate: { 
    opacity: 1, 
    y: 0, 
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } 
  },
  exit: { 
    opacity: 0, 
    y: -20, 
    transition: { duration: 0.4, ease: [0.22, 1, 0.36, 1] } 
  }
};

const WhyFarmcult = () => {
  const containerRef = useRef();

  useGSAP(() => {
    // Reveal Animations for Why Farmcult Page
    gsap.from('.wfc-main-title, .wfc-main-subtitle, .wfc-label', {
      scrollTrigger: {
        trigger: '.wfc-header-section',
        start: 'top 80%',
      },
      y: 40,
      opacity: 0,
      duration: 1.2,
      stagger: 0.2,
      ease: 'power3.out'
    });

    gsap.from('.wfc-hero-image', {
      scrollTrigger: {
        trigger: '.wfc-hero-image-section',
        start: 'top 85%',
      },
      clipPath: 'inset(10% 20% 10% 20% round 0px)',
      opacity: 0,
      duration: 1.5,
      ease: 'power4.inOut'
    });

    gsap.from('.wfc-feature-card', {
      scrollTrigger: {
        trigger: '.wfc-features-grid',
        start: 'top 85%',
      },
      y: 50,
      opacity: 0,
      duration: 1,
      stagger: 0.2,
      ease: 'power2.out'
    });

    gsap.from('.wfc-section-heading, .wfc-founder-tag, .wfc-foundation-desc', {
      scrollTrigger: {
        trigger: '.wfc-foundation-section',
        start: 'top 80%',
      },
      y: 30,
      opacity: 0,
      duration: 1,
      stagger: 0.15,
      ease: 'power3.out'
    });

    gsap.from('.wfc-team-card', {
      scrollTrigger: {
        trigger: '.wfc-team-cards-grid',
        start: 'top 85%',
      },
      scale: 0.9,
      opacity: 0,
      duration: 0.8,
      stagger: 0.1,
      ease: 'power2.out'
    });

    gsap.from('.wfc-review-card', {
      scrollTrigger: {
        trigger: '.wfc-review-cards-row',
        start: 'top 85%',
      },
      x: 30,
      opacity: 0,
      duration: 1,
      stagger: 0.2,
      ease: 'power2.out'
    });

    // Small delay to allow framer-motion to render the new component fully
    // before recalculating ScrollTrigger positions.
    setTimeout(() => {
      ScrollTrigger.refresh();
    }, 100);

  }, { scope: containerRef });

  return (
    <motion.div 
      className="why-farmcult-page" 
      ref={containerRef}
      variants={pageTransition}
      initial="initial"
      animate="animate"
      exit="exit"
      onAnimationComplete={() => ScrollTrigger.refresh()}
    >
      <WfcHeader />
      <WfcHero />
      <WfcFeatures />
      <WfcFoundation />
      <WfcBanner />
      <WfcTeam />
      <WfcReviews />
      <WfcContact />
    </motion.div>
  );
};

export default WhyFarmcult;
