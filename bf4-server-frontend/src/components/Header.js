// Header.js
import React from 'react';
import '../App.css';

const Header = () => {
  return (
    <header className="header">
      <p class="image-box">
        <img src="back.png" />
        <div><a href="https://battlefield-4-webflow-rebuild.webflow.io/game?tab=tab-multiplayer">MULTIPLAYER</a></div>
        <div>/</div>
        <div><a href="https://battlefield-4-webflow-rebuild.webflow.io/server-browser">SERVER BROWSER</a></div>
        <div>/</div>
      </p>
      <p class="heading">SERVER INFO</p>
    </header>
  );
};

export default Header;
