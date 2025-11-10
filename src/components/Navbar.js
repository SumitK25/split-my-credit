import React from 'react';
import logo from '../assets/splitmycredit logo.jpg';

const Navbar = () => (
  <nav className="navbar">
    <img src={logo} alt="Split My Credit Logo" className="navbar-logo"/>
    <ul className="navbar-links">
      <li><a href="/">Home</a></li>
      <li><a href="#">Services</a></li>
      <li><a href="#">FAQ</a></li>
      <li><a href="#">Contact</a></li>
      <li><a href="/login">Login</a></li>
    </ul>
    <div className="navbar-social">
      {/* Social icons can be added here */}
    </div>
  </nav>
);

export default Navbar;
