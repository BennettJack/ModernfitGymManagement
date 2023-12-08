import React from "react";
import '../CSS/main.css'; // Import your CSS file containing styles
import mapImage from './images/map.png'; // Import the video file

const Main = () => {
  return (
    <section>
    <img>
    <source src={mapImage} type="map/png" />
    </img>
    <div className="content">
        <h1 className="cen-text">Find a gym near you!</h1>
        {/* Additional content goes here */}
      </div>
    </section>
  )
};

export default Main;