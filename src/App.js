import React, { Component } from 'react';
import Paper from './icons/Paper';
import Rock from './icons/Rock';
import Scissors from './icons/Scissors';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className='App'>
        <div className='info'>
          <h2>Rock-Paper-Scissors</h2>

          {/* Stats */}
          <div className='stats-info'>
            <div className='wins'>
              <span className='number'>0</span>
              <span className='text'>Wins</span>
            </div>
            <div className='losses'>
              <span className='number'>0</span>
              <span className='text'>Losses</span>
            </div>
          </div>
        </div>
        {/* Choices */}
        <div className='choices'>
          <div>You</div>
          <div />
          <div>Computer</div>
          {/* Choices buttons */}
          <div>
            <button className='rock'>
              <Rock />
            </button>
            <button className='paper'>
              <Paper />
            </button>
            <button className='scissors'>
              <Scissors />
            </button>
          </div>

          <div className='vs'>vs</div>
          <div>
            <button className='computer-choice'>?</button>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
