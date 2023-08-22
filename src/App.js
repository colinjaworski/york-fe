import React, { useState } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { ThemeProvider, CssBaseline } from '@mui/material';
import { createTheme } from '@mui/material/styles'
import './App.css';
import Name from './components/Name';
import RPS from './components/RPS';
import Header from './components/Header'


function App() {
  const [gameOption, setGameOption] = useState('');

  const gameSelection = (tacos) => {
    setGameOption(tacos);
  }

  const theme = createTheme({
    palette: {
      primary: {
        main: '#ADD8E6',
      }
    }
  })

  return (
    <ThemeProvider theme = {theme}>
      <CssBaseline />
    <div className="App">
      <Router>
      <Header/>
      </Router>
      <Name />
      <button onClick={() => gameSelection('RPS')}>Rock Paper Scissors</button>
      {gameOption === 'RPS' && <RPS />}
    </div>
    </ThemeProvider>
  );
}

export default App;
