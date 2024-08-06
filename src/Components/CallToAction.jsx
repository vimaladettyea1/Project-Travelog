// src/CallToAction.js

import React from 'react';
import '../Styles/CallToAction.css';
import { NavLink } from 'react-router-dom';

const CallToAction = () => {
  return (
    <div className="cta-container">
      <h1>Ready to plan your trip in half the time?</h1><br></br>
      <div className="cta-buttons">
       <NavLink to="/Selector"> <button className="cta-button primary">Start planning</button></NavLink>
        <button className="cta-button secondary">Get the app</button>
      </div>
    </div>
  );
};

export default CallToAction;
