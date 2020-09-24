import React, { Component } from 'react';
import Paper from './icons/Paper';
import Rock from './icons/Rock';
import Scissors from './icons/Scissors';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className='app'>
        <div className='info'>
          <h1>Rock-Paper-Scissors</h1>

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
          <div className='headers'>
            <div>You</div>

            <div>Computer</div>
          </div>

          {/* Choices buttons */}
          <div className='choice-panel'>
            <div className='buttons'>
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
            <div className='computer'>
              <button className='computer-choice'>
                <span>?</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
