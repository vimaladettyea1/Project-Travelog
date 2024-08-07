import React from 'react';
import './ResponsiveComponent.css';

const ResponsiveComponent = () => {
  return (
    <div className="responsive-container">
      <hr className="responsive-line" />
      <h2 className="responsive-title">Plan your entire trip while you’re at it</h2>
      <p className="responsive-description">
        Not just another hotel search — plan out your trip with us too! With features like real-time collaboration, importing<br></br> reservations, and <a href="#">much more</a>.
      </p>
    </div>
  );
}

export default ResponsiveComponent;
