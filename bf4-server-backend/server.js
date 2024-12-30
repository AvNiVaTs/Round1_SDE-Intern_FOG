const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors());

const serverInfo = {
  players: "64/64",
  ping: "104ms",
  region: "EU",
  tickrate: "60 Hz",
  gameMode: "Conquest Large",
  map: "Operation Metro",
  rules: {
    "Vehicle Spawn Delay": "100%",
    "Bullet Velocity": "On",
    "3D Spotting": "Off",
    "Minimap": "On",
    "Killcam": "On",
  },
};

app.get('/api/server-info', (req, res) => {
  res.json(serverInfo);
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
