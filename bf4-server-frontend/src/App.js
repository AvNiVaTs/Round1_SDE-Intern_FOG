import React from 'react';
import Header from './components/Header';
import ServerInfo from './components/ServerInfo';
import Footer from './components/Footer';
import './styles/App.css';

const App = () => (
    <div className="app">
        <Header />
        <ServerInfo />
        <Footer />
    </div>
);

export default App;
