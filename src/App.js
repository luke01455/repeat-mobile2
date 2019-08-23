import React from 'react';
import './App.css';
import menubtn from './images/menubtn.png';

function App() {
  return (
    <div className="App">
      
      <div className="Top-Section">
        <div className="Menubtn-Container">
        <img src={menubtn} className="Menu-Button" alt="logo" />
        </div>
        <div className="Top-Section-Button">
        <button className="Signup-button">Sign Up</button>
        </div>
      </div>
      <div className="App-header">

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
