import React, { useState, useEffect } from 'react';
import '../styles/ServerInfo.css';

const ServerInfo = () => {
    const [serverData, setServerData] = useState(null);

    useEffect(() => {
        fetch('http://localhost:5000/api/server-info') // Replace with backend URL
            .then((response) => response.json())
            .then((data) => setServerData(data))
            .catch((error) => console.error(error));
    }, []);

    if (!serverData) return <div>Loading...</div>;

    return (
        <div className="server-info">
            <h2>{serverData.name}</h2>
            <p>{serverData.description}</p>
            <div className="server-stats">
                <div>Players: {serverData.players}</div>
                <div>Ping: {serverData.ping}ms</div>
                <div>Map: {serverData.map}</div>
                {/* Add more fields as per the API */}
            </div>
        </div>
    );
};

export default ServerInfo;
