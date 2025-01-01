// MapRotationGrid.js
import React from 'react';
import Card from './Card';

const MapRotationGrid = () => {
  return (
    <section className="map-rotation">
      <h3>MAP ROTATION</h3>
      <div className="grid">
        <Card/><Card/><Card/><Card/>
        <Card/><Card/><Card/><Card/>
        <Card/><Card/><Card/><Card/>
        <Card/><Card/><Card/><Card/>
      </div>
    </section>
  );
};

export default MapRotationGrid;
