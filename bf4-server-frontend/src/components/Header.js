// Header.js
import React from 'react';
import '../App.css';

const Header = () => {
  return (
    <header className="header">
      <p class="image-box">
        <img src="back.png" />
        <div>MULTIPLAYER</div> 
        <div>/</div>
        <div>SERVER BROWSER</div>
        <div>/</div>
      </p>
      <p class="heading">SERVER INFO</p>
    </header>
  );
};

export default Header;
