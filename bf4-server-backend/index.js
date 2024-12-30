const express = require('express');
const cors = require('cors');
const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());

// Mock Data for the Server Info Section
const serverInfo = {
  serverName: "RC3 Base Maps",
  map: "Operation Locker",
  mode: "Conquest Large",
  players: "64/64",
  ping: "15 ms",
  region: "North America",
  details: [
    { label: "Ranked", value: true },
    { label: "Punkbuster", value: true },
    { label: "Friendly Fire", value: false },
  ],
};

// API Route
app.get('/api/server-info', (req, res) => {
  res.json(serverInfo);
});

// Start Server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
