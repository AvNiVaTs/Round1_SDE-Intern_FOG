import React from 'react';
import '../App.css'; // Import the CSS file

const Card = ({ image, mode, map }) => {
  return (
    <div className="card">
      <div className="card-image">
        <img src={image} alt={`${map} Background`} />
      </div>
      <div className="card-text">
        <p>{mode}</p>
        <p>{map}</p>
      </div>
    </div>
  );
};

export default Card;
