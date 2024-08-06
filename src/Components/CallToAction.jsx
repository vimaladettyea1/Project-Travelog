// src/CallToAction.js

import React from 'react';
import '../Styles/CallToAction.css';

const CallToAction = () => {
  return (
    <div className="cta-container">
      <h1>Ready to plan your trip in half the time?</h1><br></br>
      <div className="cta-buttons">
        <button className="cta-button primary">Start planning</button>
        <button className="cta-button secondary">Get the app</button>
      </div>
    </div>
  );
};

export default CallToAction;
