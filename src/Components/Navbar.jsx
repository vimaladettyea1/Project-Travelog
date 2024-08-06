// src/Navbar.js

import React, { useState } from 'react';
import '../Styles/main.css'; 
import { NavLink } from 'react-router-dom';
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => setIsOpen(!isOpen);
  const closeNavbar = () => setIsOpen(false);

  return (
    <nav className="navbar1">
      <div className="navbar-container">
        <div className="logo">
          <h1>₸ʀavėLÖġ</h1>
        </div>
        <button className="navbar-toggle" onClick={toggleNavbar}>
          {isOpen ? '✖' : '☰'}
        </button>
        <div className={`nav-links ${isOpen ? 'active' : ''}`}>
          
          <ul>
       <NavLink to="/">     <li><a href="#home" onClick={closeNavbar}>Home</a></li></NavLink>
            <li><a href="#review" onClick={closeNavbar}>Review</a></li>
            <li><a href="#services" onClick={closeNavbar}>Services</a></li>
            <li><a href="#contact" onClick={closeNavbar}>Contact</a></li>
          </ul>
          <div className="auth-buttons">
          <NavLink to="/Sin">  <button className="login-btn">Login</button></NavLink>
          <NavLink to="/Signup">   <button className="signup-btn" style={{width:'100px'}}>Sign Up</button></NavLink>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
