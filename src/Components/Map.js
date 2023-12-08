import React from "react";
import { Link } from "react-router-dom"; // Import Link from react-router-dom
import '../CSS/Map.css'; // Import your CSS file containing styles
import mapImage from './images/map.png'; // Import the image file

const Main = () => {
  return (
    <section className="map-container">
      <div className="map-wrapper">
        <img src={mapImage} alt="Map" className="mapImg" />
        <div className="content2">
          <h1 className="cen-text">Find a gym near you!</h1>
          <Link to="../findUS.js" className="button">
            View Gyms
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Main;
