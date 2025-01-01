// RulesSection.js
import React from 'react';
import '../App.css';

const RulesSection = () => {
  return (
    <section className="rules">
      <p>RULES</p>
      <div class="list">
        <button>
          <p>TICKETS</p>
          <p class="option">400</p>
        </button>
        <button>
          <p>VEHICLE SPAWN DELAY</p>
          <p class="option">25</p>
        </button>
        <button>
          <p>BULLET DAMAGE</p>
          <p class="option">100</p>
        </button>
        <button>
          <p>KICK AFTER TEAM KILLS</p>
          <p class="option">5</p>
        </button>
        <button>
          <p>PLAYER HEALTH</p>
          <p class="option">100</p>
        </button>
        <button>
          <p>PLAYER RESPAWN TIME</p>
          <p class="option">100</p>
        </button>
        <button>
          <p>KICK AFTER IDLE</p>
          <p class="option">300</p>
        </button>
        <button>
          <p>BAN AFTER KICKS</p>
          <p class="option">3</p>
        </button>
      </div>
    </section>
  );
};

export default RulesSection;
