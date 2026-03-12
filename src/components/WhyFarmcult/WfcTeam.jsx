import React from 'react';

const WfcTeam = () => {
  return (
    <>
      <section className="wfc-team-section">
        <div className="wfc-team-inner">
          <div className="wfc-team-image-col">
            {/* Placeholder for team image */}
            <div className="wfc-team-img-placeholder" />
          </div>
          <div className="wfc-team-text-col">
            <h2 className="wfc-section-heading">The People Behind the Farms</h2>
            <div className="wfc-founder-tag">
              <span>Our Team</span>
            </div>
            <p className="wfc-foundation-desc">
              Behind every greenhouse is a team of planners, engineers, agronomists, and operators
              working together.
            </p>
            <p className="wfc-foundation-desc">
              From feasibility assessments to system installation and farm monitoring, our team
              ensures that every project runs with clarity and discipline.
            </p>
            <p className="wfc-foundation-desc">
              We combine on-ground agricultural knowledge with modern technology systems to deliver
              consistent performance.
            </p>
          </div>
        </div>
      </section>

      <section className="wfc-team-cards-section">
        <div className="wfc-team-cards-grid">
          {[
            { name: 'Pritpal Singh', role: 'Founder & CEO' },
            { name: 'Sanampreet', role: 'Manager: Projects & Business Development' },
            { name: 'Aman', role: 'Sr Agronomist' },
            { name: 'Subhajit', role: 'Procurement Manager' },
            { name: 'Harleen', role: 'Business Development Manager' },
            { name: 'Dr Akshiptika', role: 'Head- Research and Training' },
          ].map((member, i) => (
            <div className="wfc-team-card" key={i}>
              <div className="wfc-team-avatar" />
              <div className="wfc-team-card-info">
                <div className="wfc-team-card-name-row">
                  <span className="wfc-team-name">{member.name}</span>
                  <span className="wfc-linkedin-icon" aria-label="LinkedIn">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                      <rect width="24" height="24" rx="4" fill="currentColor"/>
                      <path d="M7 10h2v7H7v-7zm1-3a1.25 1.25 0 110 2.5A1.25 1.25 0 018 7zm4 3h2v1h.03A2.22 2.22 0 0116 10c2 0 3 1.2 3 3.5V17h-2v-3.2c0-1-.35-1.8-1.25-1.8-.8 0-1.3.6-1.3 1.8V17h-2v-7z" fill="white"/>
                    </svg>
                  </span>
                </div>
                <div className="wfc-team-role-tag">
                  <span>{member.role}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default WfcTeam;
