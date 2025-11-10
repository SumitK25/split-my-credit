import React from 'react';
import logo from '../assets/splitmycredit logo.jpg';

const Footer = () => (
  <footer className="footer">
    <img src={logo} alt="Split My Credit Logo" className="footer-logo"/>
    <div className="footer-links">
      <span>About Us</span>
      <span>Services</span>
      <span>FAQ</span>
      <span>Contact</span>
    </div>
    <div className="footer-social">
      {/* Social icons can be added here */}
    </div>
  </footer>
);

export default Footer;
