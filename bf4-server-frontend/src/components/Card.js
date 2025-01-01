import React from 'react';
import '../App.css'; // Import the CSS file

const Card = () => {
  return (
    <div className="card">
      <div className="card-image">
        <img
          src="image.png"
          alt="Card Background"
        />
      </div>
      <div className="card-text">
        <h3>CONQUEST LARGE</h3>
        <p>PROPAGANDA</p>
      </div>
    </div>
  );
};

export default Card;