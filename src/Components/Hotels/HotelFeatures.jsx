import React from 'react';
import './HotelFeatures.css';
import hotelSearchImage from '../images/hotel1.jpg'; // Replace with your image path
import priceDropImage from '../images/hotel2.jpg'; // Replace with your image path

const HotelFeatures = () => {
  return (
    <div className="hotel-features-container">
      <div className="hotel-feature-item">
        <img src={hotelSearchImage} alt="All-in-one hotel search" className="hotel-feature-image" />
        <div className="hotel-feature-description">
          <h2>All-in-one hotel search</h2>
          <p>Never switch tabs again. Compare results from trusted booking sites like Airbnb, Google, Expedia, Hotels.com, Booking.com, and more.</p>
        </div>
      </div>
      <div className="hotel-feature-item">
        <img src={priceDropImage} alt="Never miss a price drop" className="hotel-feature-image" />
        <div className="hotel-feature-description">
          <h2>Never miss a price drop</h2>
          <p>We monitor for when your hotel price drops, and notify you so you can re-book.</p>
        </div>
      </div>
    </div>
  );
}

export default HotelFeatures;
