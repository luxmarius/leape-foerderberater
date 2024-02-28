import React from 'react';

const NavigationBar = () => {
  return (
      <nav className="navbar">
          <div className="navbar-brand">
              <img src="https://i.ibb.co/CBRyLrn/Logo.png" alt="Logo" className="navbar-logo"/>
              <span className="navbar-text">Your Company</span>
          </div>
          <div className="navbar-links">
              <a href="#about" className="nav-item">About</a>
              <a href="#pricing" className="nav-item">Pricing</a>
              <button className="nav-button">Pro Version</button>
          </div>
      </nav>
  );
};

export default NavigationBar;
