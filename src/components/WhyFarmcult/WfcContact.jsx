import React from 'react';

const WfcContact = () => {
  return (
    <section className="wfc-contact-section">
      <div className="wfc-contact-inner">
        {/* Left Info Panel */}
        <div className="wfc-contact-info">
          <h2 className="wfc-contact-title">Build a Farm with Us</h2>
          <p className="wfc-contact-desc">
            We work closely with landowners and investors to build sustainable hydroponic farms.
            From planning to operations, our team supports you at every stage.
          </p>
          <div className="wfc-contact-details">
            <div className="wfc-contact-detail-group">
              <span className="wfc-contact-detail-label">Location</span>
              <span className="wfc-contact-detail-value">
                Ground Floor, T1, E-328, Sector 75, Sahibzada Ajit Singh Nagar, Punjab
              </span>
            </div>
            <div className="wfc-contact-detail-group">
              <span className="wfc-contact-detail-label">Contact</span>
              <span className="wfc-contact-detail-value">
                farmcult.company@gmail.com<br />
                +91 9041104230
              </span>
            </div>
          </div>
        </div>

        {/* Right Form Panel */}
        <div className="wfc-contact-form-panel">
          <h3 className="wfc-form-title">Send us a message</h3>
          <form className="wfc-form" onSubmit={(e) => e.preventDefault()}>
            <div className="wfc-form-row">
              <div className="wfc-form-group">
                <label className="wfc-form-label" htmlFor="wfc-first-name">First Name</label>
                <input id="wfc-first-name" type="text" placeholder="First Name" className="wfc-form-input" />
              </div>
              <div className="wfc-form-group">
                <label className="wfc-form-label" htmlFor="wfc-last-name">Last Name</label>
                <input id="wfc-last-name" type="text" placeholder="Last Name" className="wfc-form-input" />
              </div>
            </div>
            <div className="wfc-form-group">
              <label className="wfc-form-label" htmlFor="wfc-email">Email</label>
              <input id="wfc-email" type="email" placeholder="Email" className="wfc-form-input" />
            </div>
            <div className="wfc-form-group">
              <label className="wfc-form-label" htmlFor="wfc-phone">Phone Number</label>
              <input id="wfc-phone" type="tel" placeholder="Phone Number" className="wfc-form-input" />
            </div>
            <div className="wfc-form-group">
              <label className="wfc-form-label" htmlFor="wfc-message">Message</label>
              <textarea id="wfc-message" placeholder="Write your message.." className="wfc-form-textarea" rows={4} />
            </div>
            <button type="submit" className="wfc-btn-send">
              <span className="btn-text-wrapper">
                <span className="btn-text-inner">Send</span>
                <span className="btn-text-inner clone">Send</span>
              </span>
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default WfcContact;
