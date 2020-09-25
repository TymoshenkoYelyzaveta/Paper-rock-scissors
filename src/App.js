import React, { useState, useEffect } from 'react';
import Paper from './icons/Paper';
import Rock from './icons/Rock';
import Scissors from './icons/Scissors';
import './App.css';

const choices = [
  { id: 1, name: 'rock', comp: Rock, losesTo: 2 },
  { id: 2, name: 'paper', comp: Paper, losesTo: 3 },
  { id: 3, name: 'scissors', comp: Scissors, losesTo: 1 },
];

const App = () => {
  const [wins, setWins] = useState(0);
  const [losses, setLosses] = useState(0);
  const [gameState, setGameState] = useState(null); // win, lose, draw
  const [userChoice, setUserChoice] = useState(null);
  const [computerChoice, setComputerChoice] = useState(null);

  useEffect(() => {
    restartGame();
  }, []);

  const handleUserChoice = (choice) => {
    const chosenChoice = choices.find((c) => c.id === choice);
    setUserChoice(chosenChoice);

    // who is the winner
    if (chosenChoice.losesTo === computerChoice.id) {
      // lose
      setGameState('lose');
      setLosses((losees) => losses + 1);
    } else if (computerChoice.losesTo === chosenChoice.id) {
      // win
      setGameState('win');
      setWins((wins) => wins + 1);
    } else if (computerChoice.id === chosenChoice.id) {
      // draw
      setGameState('draw');
    }
  };

  const restartGame = () => {
    setGameState(null);
    setUserChoice(null);
    const randomChoice = choices[Math.floor(Math.random() * choices.length)];
    setComputerChoice(randomChoice);
  };

  const renderComponent = (choice) => {
    const Component = choice.comp; // Rock, Paper, Scissors
    return <Component />;
  };

  return (
    <div className='app'>
      <div className='info'>
        <h1>Rock-Paper-Scissors</h1>

        {/* Stats */}
        <div className='stats-info'>
          <div className='wins'>
            <span className='number'>{wins}</span>
            <span className='text'>{wins === 1 ? 'Win' : 'Wins'}</span>
          </div>
          <div className='losses'>
            <span className='number'>{losses}</span>
            <span className='text'>{losses === 1 ? 'Lose' : 'Losses'}</span>
          </div>
        </div>
      </div>

      {gameState && (
        <div className={`game-state ${gameState}`}>
          <div>
            <div className='game-state-content'>
              <p>{renderComponent(userChoice)}</p>
              {<p>You {gameState}!</p>}
              <p>{renderComponent(computerChoice)}</p>
            </div>
            <button onClick={() => restartGame()}>Play Again</button>
          </div>
        </div>
      )}

      {/* Choices */}
      <div className='choices'>
        <div className='headers'>
          <div>You</div>

          <div>Computer</div>
        </div>

        {/* Choices buttons */}
        <div className='choice-panel'>
          <div className='buttons'>
            <button className='rock' onClick={() => handleUserChoice(1)}>
              <Rock />
            </button>
            <button className='paper' onClick={() => handleUserChoice(2)}>
              <Paper />
            </button>
            <button className='scissors' onClick={() => handleUserChoice(3)}>
              <Scissors />
            </button>
          </div>

          <div className='vs'>vs</div>
          <div className='computer'>
            <button className='computer-choice'>
              <span>?</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
