// SettingsSection.js
import React from 'react';
import '../App.css';

const SettingsSection = () => {
  return (
    <section className="settings">
      <p>SETTINGS</p>
      <div class="list">
        <button>
          <p>REGION</p>
          <p class="option">EUROPE-DE</p>
        </button>
        <button>
          <p>PUNKBUSTER</p>
          <p class="option">ON</p>
        </button>
        <button>
          <p>FAIRFIGHT</p>
          <p class="option">ON</p>
        </button>
        <button>
          <p>PASSWORD</p>
          <p class="option">OFF</p>
        </button>
        <button>
          <p>PRESET</p>
          <p class="option">NORMAL</p>
        </button>
      </div>
    </section>
  );
};

export default SettingsSection;
