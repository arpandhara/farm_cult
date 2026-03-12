import React from 'react';

const Navbar = () => {
  return (
    <nav className="nav-container">
      <div className="nav-col nav-logo-col">
        <img src="/logo.svg" alt="Farmcult Logo" className="nav-logo" />
      </div>
      
      <div className="nav-col nav-links-col">
        <div className="nav-links">
          <a href="#solutions" className="nav-link">Solutions</a>
          <a href="#why" className="nav-link">Why Farmcult</a>
          <a href="#technology" className="nav-link">Technology</a>
          <a href="#resources" className="nav-link">Resources</a>
        </div>
      </div>
      
      <div className="nav-col nav-btn-col">
        <a href="#get-started" className="btn-outline">
          <span className="btn-text-wrapper">
            <span className="btn-text-inner">Get Started</span>
            <span className="btn-text-inner clone">Get Started</span>
          </span>
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
