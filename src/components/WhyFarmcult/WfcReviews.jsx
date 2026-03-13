import React from 'react';

const WfcReviews = () => {
  return (
    <section className="wfc-reviews-section py-[8rem] px-[5%] bg-white">
      <div className="wfc-reviews-header-row flex flex-col md:flex-row justify-between items-start md:items-end mb-[5rem] max-w-[1600px] mx-auto gap-6">
        <div className="wfc-reviews-heading-col">
          <h2 className="wfc-section-heading text-[clamp(2rem,3.5vw,3rem)] font-medium mb-8 tracking-[-0.02em] text-text-primary">What Participants Say</h2>
          <p className="wfc-reviews-sub text-[1.1rem] text-text-secondary max-w-[500px] leading-[1.6]">
            Real feedback from students, growers, and professionals who've trained with Farmcult.
          </p>
        </div>
        <div className="wfc-reviews-cta">
          {/* Adapted Awwwards hover animation logic for the outline button */}
          <button className="wfc-btn-outline group border border-border-color rounded-[40px] py-[0.6rem] px-6 font-medium text-[0.95rem] text-text-primary bg-transparent whitespace-nowrap transition-all duration-300 ease-[cubic-bezier(0.4,0,0.2,1)] hover:bg-text-primary hover:text-bg-color hover:-translate-y-0.5 hover:shadow-[0_4px_12px_rgba(52,52,52,0.15)]">
            <span className="btn-text-wrapper relative inline-block overflow-hidden align-top">
              <span className="btn-text-inner block transition-transform duration-500 ease-[cubic-bezier(0.19,1,0.22,1)] group-hover:-translate-y-full">Read More Reviews</span>
              <span className="btn-text-inner clone absolute top-full left-0 w-full text-center block transition-transform duration-500 ease-[cubic-bezier(0.19,1,0.22,1)] group-hover:-translate-y-full">Read More Reviews</span>
            </span>
          </button>
        </div>
      </div>

      <div className="wfc-reviews-content grid grid-cols-1 xl:grid-cols-[350px_1fr] gap-[4rem] max-w-[1600px] mx-auto">
        <div className="wfc-google-rating-card bg-[#F7F7F7] p-[3rem] rounded-[32px] h-fit">
          <div className="wfc-google-rating-top">
            <span className="wfc-google-label block text-[1.5rem] font-bold mb-2 text-text-primary">Google</span>
            <span className="wfc-google-sublabel text-text-secondary text-[0.9rem]">average rating</span>
          </div>
          <div className="wfc-google-score-row mt-8 flex items-baseline gap-4">
            <span className="wfc-google-score text-[4rem] font-bold leading-none text-text-primary">4.7</span>
            <div className="wfc-stars flex gap-1">
              {[1,2,3,4,5].map(i => (
                <svg key={i} width="18" height="18" viewBox="0 0 20 20" fill={i <= 4 ? '#8DC83A' : '#E0E0E0'}>
                  <polygon points="10,1 12.9,7 19.5,7.6 14.7,12 16.3,18.5 10,15 3.7,18.5 5.3,12 0.5,7.6 7.1,7"/>
                </svg>
              ))}
            </div>
          </div>
        </div>

        <div className="wfc-review-cards-row grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-8">
          <div className="wfc-review-card p-8 bg-[#F7F7F7] rounded-[24px] flex flex-col gap-6">
            <div className="wfc-review-meta flex justify-between items-center">
              <div className="wfc-review-avatar w-10 h-10 rounded-full bg-[#8DC83A]" />
              <div className="wfc-review-stars flex gap-1">
                {[1,2,3,4,5].map(i => (
                  <svg key={i} width="14" height="14" viewBox="0 0 20 20" fill="#8DC83A">
                    <polygon points="10,1 12.9,7 19.5,7.6 14.7,12 16.3,18.5 10,15 3.7,18.5 5.3,12 0.5,7.6 7.1,7"/>
                  </svg>
                ))}
              </div>
            </div>
            <p className="wfc-review-text text-[0.95rem] leading-[1.6] text-text-primary">
              I attended a 4-day hydroponics training program and found it extremely well-structured and informative. The sessions were engaging, easy to understand, and packed with practical insights...
            </p>
            <div className="wfc-review-author-row mt-auto flex flex-col">
              <span className="wfc-review-author-name font-semibold text-[0.95rem] text-text-primary">Ramyata Aseri</span>
              <span className="wfc-review-date text-[0.85rem] text-text-secondary">2 months ago</span>
            </div>
          </div>

          <div className="wfc-review-card p-8 bg-[#F7F7F7] rounded-[24px] flex flex-col gap-6">
            <div className="wfc-review-meta flex justify-between items-center">
              <div className="wfc-review-avatar w-10 h-10 rounded-full bg-[#4A90E2]" />
              <div className="wfc-review-stars flex gap-1">
                {[1,2,3,4,5].map(i => (
                  <svg key={i} width="14" height="14" viewBox="0 0 20 20" fill="#8DC83A">
                    <polygon points="10,1 12.9,7 19.5,7.6 14.7,12 16.3,18.5 10,15 3.7,18.5 5.3,12 0.5,7.6 7.1,7"/>
                  </svg>
                ))}
              </div>
            </div>
            <p className="wfc-review-text text-[0.95rem] leading-[1.6] text-text-primary">
              The hydroponic farming training was an incredibly valuable experience. It provided a perfect balance of theoretical knowledge and practical, hands-on skills. I learned how to set up and maintain a hydroponic system, as well...
            </p>
            <div className="wfc-review-author-row mt-auto flex flex-col">
              <span className="wfc-review-author-name font-semibold text-[0.95rem] text-text-primary">Sandeep dhaliwal</span>
              <span className="wfc-review-date text-[0.85rem] text-text-secondary">4 months ago</span>
            </div>
          </div>

          <div className="wfc-review-card p-8 bg-[#F7F7F7] rounded-[24px] flex flex-col gap-6">
            <div className="wfc-review-meta flex justify-between items-center">
              <div className="wfc-review-avatar w-10 h-10 rounded-full bg-[#F5A623]" />
              <div className="wfc-review-stars flex gap-1">
                {[1,2,3,4,5].map(i => (
                  <svg key={i} width="14" height="14" viewBox="0 0 20 20" fill="#8DC83A">
                    <polygon points="10,1 12.9,7 19.5,7.6 14.7,12 16.3,18.5 10,15 3.7,18.5 5.3,12 0.5,7.6 7.1,7"/>
                  </svg>
                ))}
              </div>
            </div>
            <p className="wfc-review-text text-[0.95rem] leading-[1.6] text-text-primary">
              My hydroponics training at Farmcult was an excellent experience. The sessions were clear, practical, and very informative, giving me hands-on exposure to modern...
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WfcReviews;