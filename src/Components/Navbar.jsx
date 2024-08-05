// src/Navbar.js

import React, { useState } from 'react';
import '../Styles/main.css'; 

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => setIsOpen(!isOpen);
  const closeNavbar = () => setIsOpen(false);

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="logo">
          <h1>MySite</h1>
        </div>
        <button className="navbar-toggle" onClick={toggleNavbar}>
          {isOpen ? '✖' : '☰'}
        </button>
        <div className={`nav-links ${isOpen ? 'active' : ''}`}>
          
          <ul>
            <li><a href="#home" onClick={closeNavbar}>Home</a></li>
            <li><a href="#about" onClick={closeNavbar}>About</a></li>
            <li><a href="#services" onClick={closeNavbar}>Services</a></li>
            <li><a href="#contact" onClick={closeNavbar}>Contact</a></li>
          </ul>
          <div className="auth-buttons">
            <button className="login-btn">Login</button>
            <button className="signup-btn">Sign Up</button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
