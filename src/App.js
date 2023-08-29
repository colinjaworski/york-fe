import React, { useState } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { ThemeProvider, CssBaseline } from '@mui/material';
import { createTheme } from '@mui/material/styles'
import './App.css';
import Name from './components/Name';
import RPS from './components/RPS'
import Header from './components/Header'
import Placeholder from './components/Placeholder';
import TicTacToe from './components/TicTacToe';
import Login from './components/Login';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';






function App() {
  const [gameOption, setGameOption] = useState('');

  const gameSelection = (tacos) => {
    setGameOption(tacos);
  }

  const theme = createTheme({
    palette: {
      primary: {
        main: '#00008B',
      }
    }
  })

  return (
    <ThemeProvider theme = {theme}>
      <CssBaseline />
    <div className="App">
      <Router>
        <Header />
      </Router>
      <Login />
      <Name />
      <Stack spacing={1} direction="row" className='gameSelection'>
        {/* button variant could also be "text" or "contained" */}
        <Button variant="outlined" onClick={() => gameSelection('RPS')}>Rock Paper Scissors</Button>
        <Button variant="outlined" onClick={() => gameSelection('TicTacToe')}>Tick Tack Toes</Button>
        <Button variant="outlined" onClick={() => gameSelection('Placeholder')}>This is a placeholder</Button>
      </Stack>
      {gameOption === 'RPS' && <RPS />}
      {gameOption === 'TicTacToe' && <TicTacToe />}
      {gameOption === 'Placeholder' && <Placeholder />}

    </div>
    </ThemeProvider>
  );
}

export default App;
