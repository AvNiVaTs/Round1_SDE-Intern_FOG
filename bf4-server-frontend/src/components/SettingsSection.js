import React, { useEffect, useState } from 'react';
import '../App.css';
import axios from 'axios';

const SettingsSection = () => {
  const [settings, setSettings] = useState([]);

  useEffect(() => {
    axios
      .get('https://battleground4-serverinfo.onrender.com') // Fetch data from the correct endpoint
      .then(response => {
        console.log('API Response:', response.data);
        setSettings(response.data.settings); // Update state with the settings array
      })
      .catch(error => console.error('Error fetching settings:', error));
  }, []);

  return (
    <section className="settings">
      <p>SETTINGS</p>
      <div className="list">
        {settings.length > 0 ? (
          settings.map((setting, index) => (
            <button key={index}>
              <p>{setting.name}</p>
              <p className="option">{setting.option}</p>
            </button>
          ))
        ) : (
          <p>Loading settings...</p>
        )}
      </div>
    </section>
  );
};

export default SettingsSection;
