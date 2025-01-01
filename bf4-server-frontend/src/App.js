// App.js
import React from 'react';
import Header from './components/Header';
import ServerInfo from './components/ServerInfo';
import ButtonGroup from './components/ButtonGroup';
import InfoColumns from './components/InfoColumns';
import SettingsSection from './components/SettingsSection';
import AdvancedSettings from './components/AdvancedSettings';
import RulesSection from './components/RulesSection';
import MapRotationGrid from './components/MapRotationGrid';
import LeftSidebar from './components/LeftSidebar';
import RightSidebar from './components/RightSidebar';
import './App.css';

function App() {
  return (
    <div className="app">
      <div class="background-layer">
        <div class="overlay-layer"></div>
      </div>
      <div class="main-box">
        <LeftSidebar />
        <div class="main">
          <Header />
          <div class="container">
            <ServerInfo />
            <ButtonGroup />
            <InfoColumns />
            <div class="subSection">
              <SettingsSection />
              <AdvancedSettings />
              <RulesSection />
            </div>
            <MapRotationGrid />
          </div>
          <div class="glowLine"></div>
        </div>
        <RightSidebar />
      </div>
    </div>
  );
}

export default App;
