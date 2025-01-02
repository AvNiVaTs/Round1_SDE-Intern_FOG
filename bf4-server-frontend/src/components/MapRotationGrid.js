import React from 'react';
import Card from './Card';
import img1 from '../server-info/1.png'
import img2 from '../server-info/2.png'
import img3 from '../server-info/3.png'
import img4 from '../server-info/4.png'
import img5 from '../server-info/5.png'
import img6 from '../server-info/6.png'
import img7 from '../server-info/7.png'
import img8 from '../server-info/8.png'
import img9 from '../server-info/9.png'
import img10 from '../server-info/10.png'
import img11 from '../server-info/11.png'
import img12 from '../server-info/12.png'
import img13 from '../server-info/13.png'
import img14 from '../server-info/14.png'
import img15 from '../server-info/15.png'
import img16 from '../server-info/16.png'

const MapRotationGrid = () => {
  const cardsData = [
    { image: img1, mode: 'CONQUEST LARGE', map: 'DAWNBREAKER' },
    { image: img2, mode: 'CONQUEST LARGE', map: 'PROPAGANDA' },
    { image: img3, mode: 'CONQUEST LARGE', map: 'OPERATION LOCKER' },
    { image: img4, mode: 'CONQUEST LARGE', map: 'LANCANG DAM' },
    { image: img5, mode: 'CONQUEST LARGE', map: 'SIEGE OF SHANGHAI' },
    { image: img6, mode: 'CONQUEST LARGE', map: 'GOLMUD RAILWAY' },
    { image: img7, mode: 'CONQUEST LARGE', map: 'PROPAGANDA' },
    { image: img8, mode: 'CONQUEST LARGE', map: 'SIEGE OF SHANGHAI' },
    { image: img9, mode: 'CONQUEST LARGE', map: 'DAWNBREAKER' },
    { image: img10, mode: 'CONQUEST LARGE', map: 'PROPAGANDA' },
    { image: img11, mode: 'CONQUEST LARGE', map: 'OPERATION LOCKER' },
    { image: img12, mode: 'CONQUEST LARGE', map: 'LANCANG DAM' },
    { image: img13, mode: 'CONQUEST LARGE', map: 'SIEGE OF SHANGHAI' },
    { image: img14, mode: 'CONQUEST LARGE', map: 'GOLMUD RAILWAY' },
    { image: img15, mode: 'CONQUEST LARGE', map: 'PROPAGANDA' },
    { image: img16, mode: 'CONQUEST LARGE', map: 'SIEGE OF SHANGHAI' },
    // Add more cards as needed
  ];

  return (
    <section className="map-rotation">
      <p>MAP ROTATION</p>
      <div className="grid">
        {cardsData.map((card, index) => (
          <Card 
            key={index} 
            image={card.image} 
            mode={card.mode} 
            map={card.map} 
          />
        ))}
      </div>
    </section>
  );
};

export default MapRotationGrid;