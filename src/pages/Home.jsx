import React, { useRef } from 'react';
import { motion } from 'framer-motion';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Hero from '../components/Hero';
import About from '../components/About';
import RiseOfFarming from '../components/RiseOfFarming';
import Solutions from '../components/Solutions';

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

const Home = () => {
  const homeRef = useRef();

  useGSAP(() => {
    // Initial Hero Animation
    gsap.fromTo('.hero-title, .hero-subtitle, .btn-filled', 
      {
        y: 30,
        autoAlpha: 0,
      },
      {
        y: 0,
        autoAlpha: 1,
        duration: 1.2,
        stagger: 0.1,
        ease: 'power3.out',
        delay: 0.2
      }
    );

    // Initial Hero Image Entrance Animation
    gsap.fromTo('.hero-image-wrapper',
      {
        y: 60,
        autoAlpha: 0,
      },
      {
        y: 0,
        autoAlpha: 1,
        duration: 1.5,
        ease: 'power3.out',
        delay: 0.4
      }
    );

    // Parallax Effect on Hero Image
    gsap.to('.hero-bg-img', {
      scrollTrigger: {
        trigger: '.hero-container',
        start: 'top top',
        end: 'bottom top',
        scrub: true,
      },
      y: 150,
      scale: 1.05,
    });

    // About Section Animations
    gsap.from('.about-header-text, .about-header-link', {
      scrollTrigger: {
        trigger: '.about-container',
        start: 'top 80%',
      },
      y: 30,
      opacity: 0,
      duration: 1,
      stagger: 0.2,
      ease: 'power3.out'
    });

    gsap.from('.feature-item', {
      scrollTrigger: {
        trigger: '.about-features-panel',
        start: 'top 85%',
      },
      y: 20,
      opacity: 0,
      duration: 0.8,
      stagger: 0.15,
      ease: 'power2.out'
    });

    // Rise of Farming Animations
    gsap.from('.rise-title, .rise-desc', {
      scrollTrigger: {
        trigger: '.rise-container',
        start: 'top 75%',
      },
      y: 30,
      opacity: 0,
      duration: 1,
      stagger: 0.2,
      ease: 'power3.out'
    });

    gsap.from('.state-capsule', {
      scrollTrigger: {
        trigger: '.states-capsule-grid',
        start: 'top 85%',
      },
      scale: 0.8,
      opacity: 0,
      duration: 0.6,
      stagger: 0.05,
      ease: 'back.out(1.5)'
    });

    gsap.from('.stat-card', {
      scrollTrigger: {
        trigger: '.rise-stats-grid',
        start: 'top 90%',
      },
      y: 40,
      opacity: 0,
      duration: 0.8,
      stagger: 0.15,
      ease: 'power3.out'
    });

    // Refresh ScrollTrigger slightly later to allow Framer Motion to mount correctly
    setTimeout(() => {
      ScrollTrigger.refresh();
    }, 100);

  }, { scope: homeRef });

  return (
    <motion.div
      variants={pageTransition}
      initial="initial"
      animate="animate"
      exit="exit"
      ref={homeRef}
      onAnimationComplete={() => ScrollTrigger.refresh()}
    >
      <Hero />
      <About />
      <RiseOfFarming />
      <Solutions />
    </motion.div>
  );
};

export default Home;
