import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="nav-container">
      <div className="nav-col nav-logo-col">
        <Link to="/">
          <img src="/logo.svg" alt="Farmcult Logo" className="nav-logo" />
        </Link>
      </div>
      
      <div className="nav-col nav-links-col">
        <div className="nav-links">
          <Link to="/#solutions" className="nav-link">Solutions</Link>
          <Link to="/why-farmcult" className="nav-link">Why Farmcult</Link>
          <Link to="/#technology" className="nav-link">Technology</Link>
          <Link to="/#resources" className="nav-link">Resources</Link>
        </div>
      </div>
      
      <div className="nav-col nav-btn-col">
        <Link to="/#get-started" className="btn-outline">
          <span className="btn-text-wrapper">
            <span className="btn-text-inner">Get Started</span>
            <span className="btn-text-inner clone">Get Started</span>
          </span>
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
