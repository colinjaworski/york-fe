import React, { useState } from 'react';
import './App.css';
import Name from './components/Name';
import RPS from './components/RPS'


function App() {
  const [gameOption, setGameOption] = useState('');

  const gameSelection = (tacos) => {
    setGameOption(tacos);
  }

  return (
    <div className="App">
      <Name />
      <button onClick={() => gameSelection('RPS')}>Rock Paper Scissors</button>
      {gameOption === 'RPS' && <RPS />}
    </div>
  );
}

export default App;
