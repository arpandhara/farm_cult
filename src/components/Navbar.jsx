import React, { useRef } from 'react';
import { Link } from 'react-router-dom';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

const Navbar = () => {
  const navRef = useRef();

  useGSAP(() => {
    // Smooth stagger — tight increment so it feels fluid, not choppy
    gsap.fromTo('.nav-logo, .nav-link, .btn-outline',
      { y: -12, autoAlpha: 0 },
      { y: 0, autoAlpha: 1, duration: 0.6, stagger: 0.07, ease: 'power2.out', delay: 0 }
    );
  // FIX: Added the empty dependency array []
  // This ensures the animation only triggers once on mount, bypassing Strict Mode double-fire glitches.
  }, { scope: navRef, dependencies: [] });

  return (
    <nav className="nav-container absolute top-0 w-full flex justify-between items-center py-6 px-[5%] z-[100] max-w-[1600px] left-1/2 -translate-x-1/2" ref={navRef}>
      
      {/* Logo Column */}
      <div className="nav-col nav-logo-col flex-1 flex justify-start">
        <Link to="/">
          <img src="/logo.svg" alt="Farmcult Logo" className="nav-logo h-12" />
        </Link>
      </div>
      
      {/* Links Column */}
      <div className="nav-col nav-links-col flex-1 flex justify-center">
        <div className="nav-links flex gap-10">
          <Link to="/#solutions" className="nav-link font-medium text-base text-text-primary opacity-90 transition-all duration-200 ease-in-out whitespace-nowrap hover:opacity-100 hover:text-accent">
            Solutions
          </Link>
          <Link to="/why-farmcult" className="nav-link font-medium text-base text-text-primary opacity-90 transition-all duration-200 ease-in-out whitespace-nowrap hover:opacity-100 hover:text-accent">
            Why Farmcult
          </Link>
          <Link to="/#technology" className="nav-link font-medium text-base text-text-primary opacity-90 transition-all duration-200 ease-in-out whitespace-nowrap hover:opacity-100 hover:text-accent">
            Technology
          </Link>
          <Link to="/#resources" className="nav-link font-medium text-base text-text-primary opacity-90 transition-all duration-200 ease-in-out whitespace-nowrap hover:opacity-100 hover:text-accent">
            Resources
          </Link>
        </div>
      </div>
      
      {/* Button Column */}
      <div className="nav-col nav-btn-col flex-1 flex justify-end">
        {/* Added Tailwind "group" class to trigger the nested span animations on hover */}
        <Link to="/#get-started" className="btn-outline group border border-border-color rounded-[40px] py-[0.6rem] px-6 font-medium text-[0.95rem] text-text-primary bg-transparent whitespace-nowrap transition-all duration-300 ease-[cubic-bezier(0.4,0,0.2,1)] hover:bg-text-primary hover:text-bg-color hover:-translate-y-0.5 hover:shadow-[0_4px_12px_rgba(52,52,52,0.15)]">
          <span className="btn-text-wrapper relative inline-block overflow-hidden align-top">
            <span className="btn-text-inner block transition-transform duration-500 ease-[cubic-bezier(0.19,1,0.22,1)] group-hover:-translate-y-full">
              Get Started
            </span>
            <span className="btn-text-inner clone absolute top-full left-0 w-full text-center block transition-transform duration-500 ease-[cubic-bezier(0.19,1,0.22,1)] group-hover:-translate-y-full">
              Get Started
            </span>
          </span>
        </Link>
      </div>

    </nav>
  );
};

export default Navbar;