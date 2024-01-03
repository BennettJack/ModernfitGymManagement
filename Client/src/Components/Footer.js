import React from "react";
import '../CSS/Footer.css';
import logo from './images/logo.png'; // Import the logo image
import fbPic from './images/FacebookPic.jpg'; // Import the logo image
import twPic from './images/TwitterPic.jpg'; // Import the logo image

const Footer = () => {
  return (
    <footer id="footerWrapper">
      <ul id="footerList">
        <li><a href="/FindUs">FindUs</a></li>
        <li><a href="/Terms">Tranning Plans</a></li>
        <li><a href="/Contact">Contact</a></li>
        <li><a href="/Terms">Terms</a></li>
        <li><img src={logo} alt="Logo" className="right footer-logo" /></li>
      </ul>
      
    </footer>
  );
};

export default Footer;

