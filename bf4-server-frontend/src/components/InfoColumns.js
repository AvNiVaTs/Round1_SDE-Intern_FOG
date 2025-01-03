// InfoColumns.js
import React, { useEffect, useState } from 'react';
import '../App.css';
import axios from 'axios';

const InfoColumns = () => {
  const [data, setData] = useState({ players: "", ping: "", tickrate: "" });

  useEffect(() => {
    axios
      .get('https://battleground4-serverinfo.onrender.com/api/data') // Fetching data from the backend
      .then(response => {
        console.log("Fetched Data:", response.data); // Debugging log
        setData(response.data); // Update state with the fetched data
      })
      .catch(error => console.error("Error fetching data:", error));
  }, []);

  return (
    <div className="info-columns">
      <div className="column">
        PLAYERS
        <p>{data.players}</p>
      </div>
      <div className="column">
        PING
        <p>{data.ping}</p>
      </div>
      <div className="column">
        TICKRATE
        <p>{data.tickrate}</p>
      </div>
    </div>
  );
};

export default InfoColumns;
