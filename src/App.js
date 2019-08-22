import React from 'react';
import logo from './images/logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <div className="Top-Section">
        <button className="Signup-button">Sign Up</button>
      </div>
      <div className="App-header">
        {/* <img src={logo} className="App-logo" alt="logo" /> */}

        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
      <div className="Bottom-section">
        <div className="buttons-container">
          <div className="lower-nav">
            <p>Settings</p>
            <p>Settings</p>
          </div>
          <div className="lower-nav">
            <p>Recordings</p>
            <p>Recordings</p>
          </div>
          <div className="lower-nav">
            <p>Premium</p>
            <p>Premium</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
