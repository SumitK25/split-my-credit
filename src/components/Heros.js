import React from 'react';
import CreditCard from './CreditCard'; // Import the new component

const Hero = () => (
  <section className="hero">
    <div className="hero-content">
      <div className="hero-text">
        <h1>Simplify Your Spending.<br />Smarter Credit Management.</h1>
        <p>Take control with SplitMyCredit.</p>
        <a href="/login">
          <button className="hero-btn">Get Started Today</button>
        </a>
      </div>
      <div className="hero-card">
        <CreditCard />
      </div>
    </div>
  </section>
);

export default Hero;