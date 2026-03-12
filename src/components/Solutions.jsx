import React, { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ArrowRight } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const Solutions = () => {
  const sectionRef = useRef(null);

  useGSAP(() => {
    // Left text animations
    gsap.fromTo('.solutions-title', 
      {
        y: 30,
        autoAlpha: 0,
      },
      {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 80%',
        },
        y: 0,
        autoAlpha: 1,
        duration: 1,
        ease: 'power3.out'
      }
    );

    gsap.fromTo('.solutions-desc', 
      {
        y: 20,
        autoAlpha: 0,
      },
      {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 80%',
        },
        y: 0,
        autoAlpha: 1,
        duration: 1,
        delay: 0.2,
        ease: 'power3.out'
      }
    );

    // Cards staggered animation
    gsap.fromTo('.solution-card', 
      {
        y: 50,
        autoAlpha: 0,
      },
      {
        scrollTrigger: {
          trigger: '.solutions-cards-wrapper',
          start: 'top 85%',
        },
        y: 0,
        autoAlpha: 1,
        duration: 1,
        stagger: 0.2,
        ease: 'power2.out'
      }
    );
  }, { scope: sectionRef });

  return (
    <section className="solutions-section" ref={sectionRef}>
      <div className="solutions-left">
        <h2 className="solutions-title">Our Solutions</h2>
        <p className="solutions-desc">
          From hands-free investing to <br />hands-on farming, we offer <br />flexible ways to work with <br />Farmcult based on your goals.
        </p>
      </div>
      
      <div className="solutions-right">
        <div className="solutions-cards-wrapper">
          
          {/* Card 1 */}
          <div className="solution-card" style={{ backgroundImage: "url('/ourSolutionCard1.svg'), linear-gradient(180deg, rgba(0,0,0,0.1) 0%, rgba(0,0,0,0.8) 100%)" }}>
            <div className="solution-card-overlay"></div>
            <div className="solution-card-top">
              <h3 className="solution-card-title">Passive Income Model</h3>
            </div>
            <div className="solution-card-bottom">
              <p className="solution-card-desc">
                Invest in a hydroponic farm while Farmcult manages operations end-to-end.
              </p>
              <button className="solution-btn">
                <span>Learn More</span> <ArrowRight size={18} />
              </button>
            </div>
          </div>

          {/* Card 2 */}
          <div className="solution-card" style={{ backgroundImage: "url('/ourSolutionCard2.svg'), linear-gradient(180deg, rgba(0,0,0,0.1) 0%, rgba(0,0,0,0.8) 100%)" }}>
            <div className="solution-card-overlay"></div>
            <div className="solution-card-top">
              <h3 className="solution-card-title">Turnkey Solution</h3>
            </div>
            <div className="solution-card-bottom">
              <p className="solution-card-desc">
                Farmcult will build and handover a fully operational hydroponic farm on your land.
              </p>
              <button className="solution-btn">
                <span>Learn More</span> <ArrowRight size={18} />
              </button>
            </div>
          </div>

          {/* Card 3 */}
          <div className="solution-card" style={{ backgroundImage: "url('/ourSolutionCard3.svg'), linear-gradient(180deg, rgba(0,0,0,0.1) 0%, rgba(0,0,0,0.8) 100%)" }}>
            <div className="solution-card-overlay"></div>
            <div className="solution-card-top">
              <h3 className="solution-card-title">Education & Training</h3>
            </div>
            <div className="solution-card-bottom">
              <p className="solution-card-desc">
                Learn hydroponic farming through practical training, workshops, and guidance.
              </p>
              <button className="solution-btn">
                <span>Learn More</span> <ArrowRight size={18} />
              </button>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Solutions;
