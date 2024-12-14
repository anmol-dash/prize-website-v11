import React, { useState } from 'react';
import './NavBar.css'; // Ensure proper CSS styling is in place

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <nav className="navbar">
      <div className="navbar-brand">
        <img src="/pcv-white.png" alt="Logo" className="logo" />
      </div>
      <div className={`navbar-menu ${isOpen ? 'is-active' : ''}`}>
        <a href="/" onClick={closeMenu}>HOME</a>
        <a href="/about" onClick={closeMenu}>ABOUT US</a>
        <a href="/apply" onClick={closeMenu}>APPLICATION</a>
        <a href="/get-involved" onClick={closeMenu}>GET INVOLVED</a>
      </div>
      <div className="social-media">
        <a href="https://www.instagram.com/pennclimateventures/" target="_blank" rel="noopener noreferrer">
          <img src="/instagram.png" alt="Instagram" />
        </a>
        <a href="https://www.facebook.com/pennclimateventures/" target="_blank" rel="noopener noreferrer">
          <img src="/facebook.png" alt="Facebook" />
        </a>
        <a href="https://www.linkedin.com/company/penn-climate-ventures/" target="_blank" rel="noopener noreferrer">
          <img src="/linkedin.png" alt="LinkedIn" />
        </a>
      </div>
      <div className="hamburger" onClick={toggleMenu} aria-expanded={isOpen}>
        <div className="line"></div>
        <div className="line"></div>
        <div className="line"></div>
      </div>
    </nav>
  );
};

export default NavBar;