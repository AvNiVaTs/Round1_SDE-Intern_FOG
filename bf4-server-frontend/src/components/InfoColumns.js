// InfoColumns.js
import React from 'react';
import '../App.css';

const InfoColumns = () => {
  return (
    <div className="info-columns">
      <div className="column"><strong>PLAYERS</strong></div>
      <div className="column"><strong>PING</strong></div>
      <div className="column"><strong>TICKRATE</strong></div>
    </div>
  );
};

export default InfoColumns;
