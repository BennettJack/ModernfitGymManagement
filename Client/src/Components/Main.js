import React from "react";
import '../CSS/main.css'; // Import your CSS file containing styles

const Main = () => {
  return (
    <section className="video-background">
      <div className="content">
        <h1 className="cen-text">START YOUR GYM JOURNEY</h1>
        <a href="/Signup" class="green-button">Join Now</a>
        {/* Additional content goes here */}
      </div>
    </section>
    
  )
};

export default Main;