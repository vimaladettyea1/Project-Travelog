import React from 'react';
import './HotelHelper.css';
import icon1 from '../images/Ho1.jpg';
import icon2 from '../images/Ho2.jpg';
import icon3 from '../images/Ho3.jpg';
import icon4 from '../images/Ho4.jpg';
import icon5 from '../images/Ho5.jpg';

const features = [
  {
    title: "See the full total upfront",
    description: "We show the full price with fees upfront, so there are no surprises on the checkout page.",
    icon: icon1
  },
  {
    title: "Transparent ranking",
    description: "Unlike other search sites, we rank hotels only by price and rating, not by how much they pay us.",
    icon: icon2
  },
  {
    title: "Compare location",
    description: "Integrated with our trip planner, you can see hotels in relation to the places you were planning to visit.",
    icon: icon3
  },
  {
    title: "We find the best deals",
    description: "We search multiple sites and make sure you’re getting the best prices across all of them.",
    icon: icon4
  },
  {
    title: "Designed with you in mind",
    description: "We make it easier to find the right hotel with a more user-friendly interface.",
    icon: icon5
  }
];

const HotelHelper = () => {
  return (
    <div className="hotel-helper-container">
      <div className="hotel-helper-wrapper">
        {features.map((feature, index) => (
          <div key={index} className="hotel-helper-feature">
            <img src={feature.icon} alt={feature.title} className="hotel-helper-icon" />
            <h3 className="hotel-helper-title">{feature.title}</h3>
            <p className="hotel-helper-description">{feature.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default HotelHelper;
