import React from 'react';
import './App.css';
import menubtn from './images/menubtn.png';
import cddvd from './images/cddvd.png';

function App() {
  return (
    <div className="App">
      <div className="Top-Section">
        <div className="Menubtn-Container">
          <div className="Margin-div">
            <img src={menubtn} className="Menu-Button" alt="menu-button" />
          </div>
        </div>
        <div className="Top-Section-Button">
          <button className="Signup-button">Sign Up</button>
          <div className="Para-Holders">
            <p id="login-plain-text">
              Have an account?<a>Log In </a>
            </p>
          </div>
        </div>
      </div>
      <div className="App-header">
        <p id="MidText-1"> Save the last... </p>
        <p id="MidText-2"> 10 Minutes </p>
        <div> 
          <input type="range" class="range" name="" defaultValue="10"
          min="0" max="20"></input>
        </div>
        <img src={cddvd} className="App-logo" alt="logo" />
        <button className="Signup-button" id="Savebtn">Save</button>
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
