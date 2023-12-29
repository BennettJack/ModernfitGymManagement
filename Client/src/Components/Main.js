import React from "react";
import '../CSS/main.css'; // Import your CSS file containing styles
import testVideo from './images/test.mp4'; // Import the video file

const Main = () => {
  return (
    <section className="video-background">
      <video autoPlay muted loop className="video">
        <source src={testVideo} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className="content">
        <h1 className="cen-text">START YOUR GYM JOURNEY</h1>
        <a href="/Signup" class="green-button">Join Now</a>
        {/* Additional content goes here */}
      </div>
    </section>
    
  )
};

export default Main;