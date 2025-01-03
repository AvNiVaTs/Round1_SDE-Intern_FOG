import React, { useEffect, useState } from 'react';
import '../App.css';
import axios from 'axios';

const RulesSection = () => {
  const [rules, setRules] = useState([]);

  useEffect(() => {
    axios
      .get('https://battleground4-serverinfo.onrender.com') // Fetch data from the API endpoint
      .then(response => {
        console.log('Rules API Response:', response.data.rules);
        setRules(response.data.rules); // Update state with the rules array
      })
      .catch(error => console.error('Error fetching rules:', error));
  }, []);

  return (
    <section className="rules">
      <p>RULES</p>
      <div className="list">
        {rules.length > 0 ? (
          rules.map((rule, index) => (
            <button key={index}>
              <p>{rule.name}</p>
              <p className="option">{rule.option}</p>
            </button>
          ))
        ) : (
          <p>Loading rules...</p>
        )}
      </div>
    </section>
  );
};

export default RulesSection;
