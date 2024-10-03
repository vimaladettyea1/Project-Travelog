import React from "react";
import "../Mid-phase/Sin.css";
import { NavLink } from "react-router-dom";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";

const LocationGuidePage = () => {
  return (
    <>
      <Navbar />
      <div className="location-guide-page">
        <div className="header-image-container">
          <img
            src="https://itin-dev.sfo2.cdn.digitaloceanspaces.com/freeImageSmall/yitfaNaah1Cxyrnht6TDK7dxn2U1EtMW" // Replace with the actual path to your header image
            alt="Japan"
            className="header-image"
          />
        </div>
        <div className="content">
          <div className="left-panel">
            <div className="location-item">
              <div className="location-info">
                <h3>2. Matsuya Akasaka</h3>
                <span className="tag">Gyudon restaurant</span>
                <p>
                  One of the 3 popular gyudon fast food chains, other 2 being
                  Yoshinoya and Sukiya. I prefer this chain, but that's up to
                  you to decide :)
                </p>
              </div>
              <div className="location-image">
                <img
                  src="https://itin-dev.sfo2.cdn.digitaloceanspaces.com/freeImage/hhAxAcnpsvAOARsa164o4aWBb9dg34Um"
                  alt="Matsuya Akasaka"
                />
                <button className="save-button">Save</button>
              </div>
            </div>
            <div className="location-item">
              <div className="location-info">
                <h3>3. Shibuya Scramble Square</h3>
                <span className="tag">Shopping mall</span>
                <p>
                  Hectic but it's fun to be a part of the scramble! Visit the
                  Hachiko statue as well
                </p>
              </div>
              <div className="location-image">
                <img
                  src="https://itin-dev.sfo2.cdn.digitaloceanspaces.com/freeImage/cvcTaSVWCSM42p1E7bXWWy5vRG0ib8pw"
                  alt="Shibuya Scramble Square"
                />
                <button className="save-button">Save</button>
              </div>
            </div>
            <div className="location-item">
              <div className="location-info">
                <h3>4. Round One Ikebukuro</h3>
                <span className="tag">Amusement center</span>
                <p>
                  Test your crane game skills out or try out shuffling with
                  DanceRush Stardom
                </p>
              </div>
              <div className="location-image">
                <img
                  src="https://itin-dev.sfo2.cdn.digitaloceanspaces.com/freeImage/sl1kVOIbGX1JXcyDLWX16Q4sQ78PY5Zi"
                  alt="Round One Ikebukuro"
                />
                <button className="save-button">Save</button>
              </div>
            </div>
          </div>
          <div className="right-panel">
            <div className="map-container">
              <img
                src="https://images.pexels.com/photos/13101952/pexels-photo-13101952.jpeg?auto=compress&cs=tinysrgb&w=600" // Replace with the actual path to your map image
                alt="Map"
              />
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default LocationGuidePage;
