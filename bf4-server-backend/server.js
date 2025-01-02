const express = require('express');
const cors = require('cors');
const app = express();
const PORT = 5000;

app.use(cors());

const data = {
  players: "64/64",
  ping: "104ms",
  tickrate: "60 Hz",
  settings: [
    {name: "REGION", option: "EUROPE-DE"},
    {name: "PUNKBUSTER", option: "ON"},
    {name: "FAIRFIGHT", option: "ON"},
    {name: "PASSWORD", option: "OFF"},
    {name: "PRESET", option: "NORMAL"}
  ],
  advanced: [
    {name: "MINIMAP", option:"ON"},
    {name: "ONLY SQUAD LEADER SPAWN", option:"OFF"},
    {name: "VEHICLES", option: "ON"},
    {name: "TEAM BALANCE", option:"ON"},
    {name: "MINIMAP SPOTTING", option:"ON"},
    {name: "HUD", option:"ON"},
    {name: "3P VEHICLE MAP", option:"ON"},
    {name: "REGENERATIVE HEALTH", option:"ON"},
    {name: "KILL CAM", option:"ON"},
    {name: "FRIENDLY FIRE", option:"OFF"},
    {name: "3D SPOTTING", option:"ON"},
    {name: "ENEMY NAME TAGS", option:"ON"},
  ],
  rules: [
    {name: "TICKETS", option:400},
    {name: "VEHICLE SPAWN DELAY", option:25},
    {name: "BULLET DAMAGE", option:100},
    {name: "KICK AFTER TEAM KILL", option:5},
    {name: "PLAYER HEALTH", option:100},
    {name: "PLAYER RESPAWN TIME", option:100},
    {name: "KICK AFTER IDLE", option:300},
    {name: "BAN AFTER KICKS", option:3},
  ]
};

app.get('/api/data/', (req, res) => {
  res.json(data);
});

app.get('/', (req, res) => {
  res.send('API is running');
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
