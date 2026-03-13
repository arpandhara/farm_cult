import React from 'react';

const WfcTeam = () => {
  return (
    <>
      <section className="wfc-team-section py-[4rem] px-[5%] pb-[8rem] max-w-[1600px] mx-auto">
        {/* Notice the reversed grid cols for the team header layout: lg:grid-cols-[1fr_1.2fr] */}
        <div className="wfc-team-inner grid grid-cols-1 lg:grid-cols-[1fr_1.2fr] gap-12 lg:gap-[6rem] items-start">
          <div className="wfc-team-image-col">
            <div className="wfc-team-img-placeholder w-full aspect-[4/5] bg-[#E0E0E0] rounded-[32px]" />
          </div>
          <div className="wfc-team-text-col">
            <h2 className="wfc-section-heading text-[clamp(2rem,3.5vw,3rem)] font-medium mb-8 tracking-[-0.02em] text-text-primary">The People Behind the Farms</h2>
            <div className="wfc-founder-tag inline-flex py-2 px-[1.2rem] bg-accent text-white rounded-full font-semibold text-[0.9rem] mb-10">
              <span>Our Team</span>
            </div>
            <p className="wfc-foundation-desc text-[1.1rem] text-text-secondary leading-[1.8] mb-8">
              Behind every greenhouse is a team of planners, engineers, agronomists, and operators
              working together.
            </p>
            <p className="wfc-foundation-desc text-[1.1rem] text-text-secondary leading-[1.8] mb-8">
              From feasibility assessments to system installation and farm monitoring, our team
              ensures that every project runs with clarity and discipline.
            </p>
            <p className="wfc-foundation-desc text-[1.1rem] text-text-secondary leading-[1.8] mb-8">
              We combine on-ground agricultural knowledge with modern technology systems to deliver
              consistent performance.
            </p>
          </div>
        </div>
      </section>

      <section className="wfc-team-cards-section px-[5%] pb-[8rem] max-w-[1600px] mx-auto">
        <div className="wfc-team-cards-grid grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-8">
          {[
            { name: 'Pritpal Singh', role: 'Founder & CEO' },
            { name: 'Sanampreet', role: 'Manager: Projects & Business Development' },
            { name: 'Aman', role: 'Sr Agronomist' },
            { name: 'Subhajit', role: 'Procurement Manager' },
            { name: 'Harleen', role: 'Business Development Manager' },
            { name: 'Dr Akshiptika', role: 'Head- Research and Training' },
          ].map((member, i) => (
            <div className="wfc-team-card bg-white border border-[#DEDEDE] rounded-[24px] overflow-hidden transition-all duration-300 ease-in-out hover:-translate-y-2 hover:border-accent" key={i}>
              <div className="wfc-team-avatar w-full aspect-square bg-[#F0F0F0]" />
              <div className="wfc-team-card-info p-6">
                <div className="wfc-team-card-name-row flex justify-between items-center mb-4">
                  <span className="wfc-team-name text-[1.25rem] font-semibold text-text-primary">{member.name}</span>
                  <span className="wfc-linkedin-icon text-text-primary opacity-40 transition-opacity duration-200 ease-in-out cursor-pointer hover:opacity-100 hover:text-[#0077b5]" aria-label="LinkedIn">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                      <rect width="24" height="24" rx="4" fill="currentColor"/>
                      <path d="M7 10h2v7H7v-7zm1-3a1.25 1.25 0 110 2.5A1.25 1.25 0 018 7zm4 3h2v1h.03A2.22 2.22 0 0116 10c2 0 3 1.2 3 3.5V17h-2v-3.2c0-1-.35-1.8-1.25-1.8-.8 0-1.3.6-1.3 1.8V17h-2v-7z" fill="white"/>
                    </svg>
                  </span>
                </div>
                <div className="wfc-team-role-tag inline-block py-[0.4rem] px-4 bg-[#F7F7F7] rounded-full text-[0.85rem] font-medium text-text-secondary">
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