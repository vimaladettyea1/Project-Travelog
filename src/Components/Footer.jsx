import React from 'react';
import '../Styles/Footer.css';
const Footer = () => {
  return (
    <footer className="bg-light text-center text-lg-start" id='contact'>
      <div className="containerF p-4">
        <div className="row">
          <div className="col-lg-6 col-md-12 mb-4 mb-md-0">
            <h5 className="text-uppercase">Made with ❤️ in SF & more</h5>
            <p>© 2024 Travelchime Inc.</p>
          </div>

          <div className="col-lg-2 col-md-6 mb-4 mb-md-0">
            <h5 className="text-uppercase">Wanderlog</h5>
            <ul className="list-unstyled mb-0">
              <li><a href="#!" className="text-dark">Hotels</a></li>
              <li><a href="#!" className="text-dark">Blog</a></li>
              <li><a href="#!" className="text-dark">Report security issue</a></li>
              <li><a href="#!" className="text-dark">Terms, Privacy policy & Copyright</a></li>
              <li><a href="#!" className="text-dark">Mobile app</a></li>
              <li><a href="#!" className="text-dark">Browser extension</a></li>
              <li><a href="#!" className="text-dark">Travel budgeting & cost tracking</a></li>
              <li><a href="#!" className="text-dark">How to embed a map on your travel blog</a></li>
              <li><a href="#!" className="text-dark">Jobs</a></li>
              <li><a href="#!" className="text-dark">Contact us</a></li>
              <li><a href="#!" className="text-dark">Google data disclosure</a></li>
            </ul>
          </div>

          <div className="col-lg-2 col-md-6 mb-4 mb-md-0">
            <h5 className="text-uppercase">Guides and resources</h5>
            <ul className="list-unstyled mb-0">
              <li><a href="#!" className="text-dark">Trip planners by destination</a></li>
              <li><a href="#!" className="text-dark">Explore cities and countries</a></li>
              <li><a href="#!" className="text-dark">Road trips by destination</a></li>
              <li><a href="#!" className="text-dark">Best places to visit by category</a></li>
              <li><a href="#!" className="text-dark">Popular search terms by destination</a></li>
              <li><a href="#!" className="text-dark">Weather around the world</a></li>
              <li><a href="#!" className="text-dark">Travel questions & answers</a></li>
              <li><a href="#!" className="text-dark">Travel itinerary guides</a></li>
              <li><a href="#!" className="text-dark">Maps of cities and national parks</a></li>
              <li><a href="#!" className="text-dark">Destinations at different times of the year</a></li>
              <li><a href="#!" className="text-dark">Places to visit by destination</a></li>
            </ul>
          </div>

          <div className="col-lg-2 col-md-6 mb-4 mb-md-0">
            <h5 className="text-uppercase">Get the app</h5>
            <a href="#!" className="btn btn-outline-dark btn-block mb-2">
              <img src="https://img.icons8.com/ios-filled/50/000000/apple-app-store.png" alt="App Store"/>
            </a>
            <a href="#!" className="btn btn-outline-dark btn-block">
              <img src="https://img.icons8.com/ios-filled/50/000000/google-play.png" alt="Google Play"/>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
