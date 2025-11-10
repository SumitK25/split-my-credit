import React from 'react';
import './CreditCard.css';

const CreditCard = () => {
  return (
    <div className="credit-card-container">
      <div className="card-front">
        <label className="number" htmlFor="cardNumber">
          5355 1234 0000 9999
        </label>
        <label className="name" htmlFor="cardHolder">
          Split My Credit
        </label>
        <label className="expiry" htmlFor="expiryMonth">
          03/27
        </label>
        <img 
          className="cardLogo" 
          src="https://simey-credit-card.netlify.app/img/logos/master.svg" 
          alt="Mastercard"
        />
        
        <div className="chip">
          <svg role="img" viewBox="0 0 100 100" aria-label="Chip">
            <use href="#chip-lines" />
          </svg>
        </div>
        <div className="contactless">
          <svg role="img" viewBox="0 0 24 24" aria-label="Contactless">
            <use href="#contactless-icon" />
          </svg>
        </div>
      </div>

      {/* Hidden SVGs for chip and contactless icons */}
      <svg id="chip" style={{ display: 'none' }}>
        <g id="chip-lines">
          <polyline points="0,50 35,50"></polyline>
          <polyline points="0,20 20,20 35,35"></polyline>
          <polyline points="50,0 50,35"></polyline>
          <polyline points="65,35 80,20 100,20"></polyline>
          <polyline points="100,50 65,50"></polyline>
          <polyline points="35,35 65,35 65,65 35,65 35,35"></polyline>
          <polyline points="0,80 20,80 35,65"></polyline>
          <polyline points="50,100 50,65"></polyline>
          <polyline points="65,65 80,80 100,80"></polyline>
        </g>
      </svg>

      <svg id="contactless" style={{ display: 'none' }}>
        <g id="contactless-icon">
          <path d="M9.172 15.172a4 4 0 0 1 5.656 0"></path>
          <path d="M6.343 12.343a8 8 0 0 1 11.314 0"></path>
          <path d="M3.515 9.515c4.686 -4.687 12.284 -4.687 17 0"></path>
        </g>
      </svg>
    </div>
  );
};

export default CreditCard;