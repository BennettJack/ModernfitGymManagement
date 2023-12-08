import React from "react";
import '../CSS/main.css'; // Import your CSS file containing styles
import mapImage from './images/map.png'; // Import the image file

const Main = () => {
  return (
    
    <section>
        <h1>will be changed to an image of map and interrative</h1>
      <img>
      <source src={mapImage} type="map/png" />
      </img>
      <div className="content">
         <h1 className="cen-text">Find a gym near you!</h1>
      </div>
    </section>

  )
};

export default Main;