import { useState, useEffect } from 'react';
import '../App.css';

function RPS() {

  const [result, setResult] = useState('');
  const [userChoice, setUserChoice] = useState('');
  const [computerChoice, setComputerChoice] = useState('');
  const [score, setScore] = useState(0);
  const [highScore, setHighScore] = useState(score);

  useEffect(() => { // calls on page load
    getComputerChoice();
  })

  const getComputerChoice = () => { // generates random choice for computer 
    let computersChoice = Math.floor(Math.random() * 3);
    switch (computersChoice) {
      case 0: setComputerChoice('rock');
        break;
      case 1: setComputerChoice('paper');
        break;
      default: setComputerChoice('scissors');
        break;
    }
  }

  const setChoice = (choice) => { // sets user choice depending on button selected
    setUserChoice(choice);
  }

  function playGame() { // evaluates result based on users choice

    console.log('You chose: ', userChoice)
    console.log('The computer chose: ', computerChoice)

    switch (userChoice) {

      case computerChoice: setResult('This game was a tie');
        break;

      case 'rock':
        computerChoice === 'paper' ? youLost() : youWon();
        break;

      case 'paper':
        computerChoice === 'scissors' ? youLost() : youWon();
        break;

      default:
        computerChoice === 'rock' ? youLost() : youWon();
        break;
    }
    resetValues();
  }

  const youWon = () => { // helper function when game is won
    setResult('You won'); setScore(score + 1);
    score >= highScore ? setHighScore(score + 1) : setChoice('')
  }

  const youLost = () => { // helper function when game is lost
    setResult('You lost bud'); setScore(0);
  }

  const resetValues = () => { // changes computers choice and clears userChoice 
    getComputerChoice()
    setChoice('')
  }

  return (
    <>
      <header className="Header">
        <h1>Rock Paper Scissors Go!</h1>
      </header>
      <div>

        <button id='rock' onClick={() => setChoice('rock')}>Rock</button>
        <button id='paper' onClick={() => setChoice('paper')}>Paper</button>
        <button id='scissors' onClick={() => setChoice('scissors')}>Scissors</button>

        {userChoice !== '' &&
          <button id='playGame' onClick={playGame}>Play Game</button>
        }

        <button onClick={() => setHighScore(0)}>Clear High Score</button>

        {score !== 0 && score >= highScore && result !== 'This game was a tie' && 
          <h2 style={{ color: 'blue' }}>a new high score!</h2> 
        }

        <h1>{result}</h1>
        <h2>Your score: {score}</h2>
        <h2>High score: {highScore}</h2>

      </div>
    </>
  )
}

export default RPS;
 