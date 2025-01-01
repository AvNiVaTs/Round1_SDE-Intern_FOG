// AdvancedSettings.js
import React from 'react';
import '../App.css';

const AdvancedSettings = () => {
  return (
    <section className="advanced-settings">
      <p>ADVANCED</p>
      <div class="list">
        <button>
          <p>MINIMAP</p>
          <p class="option">ON</p>
        </button>
        <button>
          <p>ONLY SQUAD LEADER SPAWN</p>
          <p class="option">OFF</p>
        </button>
        <button>
          <p>VEHICLES</p>
          <p class="option">ON</p>
        </button>
        <button>
          <p>TEAM BALANCE</p>
          <p class="option">ON</p>
        </button>
        <button>
          <p>MINIMAP SPOTTING</p>
          <p class="option">ON</p>
        </button>
        <button>
          <p>HUD</p>
          <p class="option">ON</p>
        </button>
        <button>
          <p>3P VEHICLE CAM</p>
          <p class="option">ON</p>
        </button>
        <button>
          <p>REGENERATIVE HEALTH</p>
          <p class="option">ON</p>
        </button>
        <button>
          <p>KILL CAM</p>
          <p class="option">ON</p>
        </button>
        <button>
          <p>FRIENDLY FIRE</p>
          <p class="option">OFF</p>
        </button>
        <button>
          <p>3D SPOTTING</p>
          <p class="option">ON</p>
        </button>
        <button>
          <p>ENEMY NAME TAGS</p>
          <p class="option">ON</p>
        </button>
      </div>
    </section>
  );
};

export default AdvancedSettings;
