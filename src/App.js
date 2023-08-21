import React, { useState } from 'react';
import './App.css';
import Name from './components/Name';
import RPS from './components/RPS';
import Placeholder from './components/Placeholder';
import TicTacToe from './components/TicTacToe';



function App() {
  const [gameOption, setGameOption] = useState('');

  const gameSelection = (tacos) => {
    setGameOption(tacos);
  }

  return (
    <div className="App">
      <Name />
      <button onClick={() => gameSelection('RPS')}>Rock Paper Scissors</button>
      <button onClick={() => gameSelection('TicTacToe')}>Tick Tack Toes</button>
      <button onClick={() => gameSelection('Placeholder')}>This is a placeholder</button>
      {gameOption === 'RPS' && <RPS />}
      {gameOption === 'TicTacToe' && <TicTacToe />}
      {gameOption === 'Placeholder' && <Placeholder />}
    </div>
  );
}

export default App;
