import React from 'react';
import './App.css';
import Header from './components/Header/Header.jsx';
import Sidebar from './components/Sidebar/Sidebar.jsx';
import Games from './components/Games/Games.jsx';
import Live from './components/Live/Live.jsx';
import GameStreams from './components/GameStreams/GameStreams';
import TopStreams from './components/TopStreams/TopStreams.jsx';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";


function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Sidebar />
        <Routes>
          <Route path="/" element={<Games />} />
          <Route path="/top-streams" element={<TopStreams />} />
          <Route path="/live/:slug" element={<Live />} />
          <Route path="/game/:slug" element={<GameStreams />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;