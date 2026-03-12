import { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Lenis from 'lenis';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import RiseOfFarming from './components/RiseOfFarming';
import './index.css';

gsap.registerPlugin(ScrollTrigger, useGSAP);

function App() {
  const containerRef = useRef();

  useGSAP(() => {
    // Initialize Lenis for smooth scrolling
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smooth: true,
      direction: 'vertical',
      gestureDirection: 'vertical',
    });

    lenis.on('scroll', ScrollTrigger.update);

    gsap.ticker.add((time) => {
      lenis.raf(time * 1000);
    });

    gsap.ticker.lagSmoothing(0);


    // Initial Hero Animation
    gsap.fromTo('.nav-logo, .nav-link, .btn-outline, .hero-title, .hero-subtitle, .btn-filled', 
      {
        y: 30,
        opacity: 0,
      },
      {
        y: 0,
        opacity: 1,
        duration: 1.2,
        stagger: 0.1,
        ease: 'power3.out',
        delay: 0.2
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

    return () => {
      lenis.destroy();
    };
  }, { scope: containerRef });

  return (
    <div className="app-container" ref={containerRef}>
      <Navbar />
      <Hero />
      <About />
      <RiseOfFarming />
    </div>
  );
}

export default App;
