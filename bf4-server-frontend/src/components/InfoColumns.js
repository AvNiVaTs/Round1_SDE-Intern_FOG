// InfoColumns.js
import React from 'react';
import '../App.css';

const InfoColumns = () => {
  return (
    <div className="info-columns">
      <div className="column">
        PLAYERS
        <p>60/64</p>
      </div>
      <div className="column">
        PING
        <p>104 ms</p>
      </div>
      <div className="column">
        TICKRATE
        <p>60 Hz</p>
      </div>
    </div>
  );
};

export default InfoColumns;
