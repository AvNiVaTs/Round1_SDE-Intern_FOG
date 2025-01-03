import React, { useEffect, useState } from 'react';
import '../App.css';
import axios from 'axios';

const AdvancedSettings = () => {
  const [advancedSettings, setAdvancedSettings] = useState([]);

  useEffect(() => {
    axios
      .get('https://battleground4-serverinfo.onrender.com/api/data') // Fetch data from the correct endpoint
      .then(response => {
        console.log('Advanced Settings API Response:', response.data.advanced);
        setAdvancedSettings(response.data.advanced); // Update state with the advanced settings array
      })
      .catch(error => console.error('Error fetching advanced settings:', error));
  }, []);

  return (
    <section className="advanced-settings">
      <p>ADVANCED</p>
      <div className="list">
        {advancedSettings.length > 0 ? (
          advancedSettings.map((setting, index) => (
            <button key={index}>
              <p>{setting.name}</p>
              <p className="option">{setting.option}</p>
            </button>
          ))
        ) : (
          <p>Loading advanced settings...</p>
        )}
      </div>
    </section>
  );
};

export default AdvancedSettings;
