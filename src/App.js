import React, { useState } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import './App.css';
import Name from './components/Name';
import RPS from './components/RPS';
import Header from './components/Header'


function App() {
  return (
    <div className="App">
      <Router>
        <Header/>
      </Router>
  </div>
  );
}

export default App;
