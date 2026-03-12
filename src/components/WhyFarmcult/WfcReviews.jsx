import React from 'react';

const WfcReviews = () => {
  return (
    <section className="wfc-reviews-section">
      <div className="wfc-reviews-header-row">
        <div className="wfc-reviews-heading-col">
          <h2 className="wfc-section-heading">What Participants Say</h2>
          <p className="wfc-reviews-sub">
            Real feedback from students, growers, and professionals who've trained with Farmcult.
          </p>
        </div>
        <div className="wfc-reviews-cta">
          <button className="wfc-btn-outline">
            <span className="btn-text-wrapper">
              <span className="btn-text-inner">Read More Reviews</span>
              <span className="btn-text-inner clone">Read More Reviews</span>
            </span>
          </button>
        </div>
      </div>

      {/* Google Rating Card */}
      <div className="wfc-reviews-content">
        <div className="wfc-google-rating-card">
          <div className="wfc-google-rating-top">
            <span className="wfc-google-label">Google</span>
            <span className="wfc-google-sublabel">average rating</span>
          </div>
          <div className="wfc-google-score-row">
            <span className="wfc-google-score">4.7</span>
            <div className="wfc-stars">
              {[1,2,3,4,5].map(i => (
                <svg key={i} width="18" height="18" viewBox="0 0 20 20" fill={i <= 4 ? '#8DC83A' : '#E0E0E0'}>
                  <polygon points="10,1 12.9,7 19.5,7.6 14.7,12 16.3,18.5 10,15 3.7,18.5 5.3,12 0.5,7.6 7.1,7"/>
                </svg>
              ))}
            </div>
          </div>
        </div>

        {/* Review Cards */}
        <div className="wfc-review-cards-row">
          <div className="wfc-review-card">
            <div className="wfc-review-meta">
              <div className="wfc-review-avatar wfc-avatar-green" />
              <div className="wfc-review-stars">
                {[1,2,3,4,5].map(i => (
                  <svg key={i} width="14" height="14" viewBox="0 0 20 20" fill="#8DC83A">
                    <polygon points="10,1 12.9,7 19.5,7.6 14.7,12 16.3,18.5 10,15 3.7,18.5 5.3,12 0.5,7.6 7.1,7"/>
                  </svg>
                ))}
              </div>
            </div>
            <p className="wfc-review-text">
              I attended a 4-day hydroponics training program and found it extremely well-structured and informative. The sessions were engaging, easy to understand, and packed with practical insights...
            </p>
            <div className="wfc-review-author-row">
              <span className="wfc-review-author-name">Ramyata Aseri</span>
              <span className="wfc-review-date">2 months ago</span>
            </div>
          </div>

          <div className="wfc-review-card">
            <div className="wfc-review-meta">
              <div className="wfc-review-avatar wfc-avatar-blue" />
              <div className="wfc-review-stars">
                {[1,2,3,4,5].map(i => (
                  <svg key={i} width="14" height="14" viewBox="0 0 20 20" fill="#8DC83A">
                    <polygon points="10,1 12.9,7 19.5,7.6 14.7,12 16.3,18.5 10,15 3.7,18.5 5.3,12 0.5,7.6 7.1,7"/>
                  </svg>
                ))}
              </div>
            </div>
            <p className="wfc-review-text">
              The hydroponic farming training was an incredibly valuable experience. It provided a perfect balance of theoretical knowledge and practical, hands-on skills. I learned how to set up and maintain a hydroponic system, as well...
            </p>
            <div className="wfc-review-author-row">
              <span className="wfc-review-author-name">Sandeep dhaliwal</span>
              <span className="wfc-review-date">4 months ago</span>
            </div>
          </div>

          <div className="wfc-review-card">
            <div className="wfc-review-meta">
              <div className="wfc-review-avatar wfc-avatar-orange" />
              <div className="wfc-review-stars">
                {[1,2,3,4,5].map(i => (
                  <svg key={i} width="14" height="14" viewBox="0 0 20 20" fill="#8DC83A">
                    <polygon points="10,1 12.9,7 19.5,7.6 14.7,12 16.3,18.5 10,15 3.7,18.5 5.3,12 0.5,7.6 7.1,7"/>
                  </svg>
                ))}
              </div>
            </div>
            <p className="wfc-review-text">
              My hydroponics training at Farmcult was an excellent experience. The sessions were clear, practical, and very informative, giving me hands-on exposure to modern...
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WfcReviews;
