import React from "react";
import '../CSS/Offer.css'; // Import your CSS file containing styles

const Main = () => {
  return (                      //this will be changed allot this part is a very basic version THE color will be changed to look better
    <section className="green-section">
        <div className="grey-box">                 
            
            <h2 className="box-header">What We Offer</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                sed do eiusmod tempor incididunt ut labore et dolore magna 
                aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris 
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore 
                eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat
                 non proident, sunt in culpa qui officia deserunt mollit anim id est laborum</p>
        </div>
        <div className="grey-box">
            <h2 className="box-header">Why Our gym?</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                sed do eiusmod tempor incididunt ut labore et dolore magna 
                aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris 
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore 
                eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat
                 non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
        </div>
</section>

  )
};

export default Main;