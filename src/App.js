import React, { useState } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import './App.css';
import Name from './components/Name';
import RPS from './components/RPS';
import Header from './components/Header'


function App() {
  const [gameOption, setGameOption] = useState('');

  const gameSelection = (tacos) => {
    setGameOption(tacos);
  }

  return (
    <div className="App">
      <Router>
      <Header/>
      </Router>
      <Name />
      <button onClick={() => gameSelection('RPS')}>Rock Paper Scissors</button>
      {gameOption === 'RPS' && <RPS />}
    </div>
  );
}

export default App;
