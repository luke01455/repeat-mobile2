import React from 'react';
import './App.css';
import menubtn from './images/menubtn.png';
import cddvd from './images/cddvd.png';
import filebtn from './images/filebtn.png';
import premiumbtn from './images/premiumbtn.png';
import settingsbtn from './images/settingbtn.png';


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
        <div className="SaveText-Container">
        <p id="MidText-1"> Save the last... </p>
        <p id="MidText-2"> 10 Minutes </p>
        </div>
        <div className="Rangebar-Container"> 
          <input type="range" className="range" name="" defaultValue="10"
          min="0" max="20"></input>
        </div>
        <div className="cd-container">
        <img src={cddvd} className="App-logo" alt="logo" />
        </div>
        <div className= "Savebtn-Container">
        <button className="Signup-button" id="Savebtn">Save</button>
        </div>
      </div>
      <div className="Bottom-section">
        <div className="buttons-container">
          <div className="lower-nav" id="ln1">
          <div className="lowerimg-div">
            <img src={settingsbtn} className="Menu-Button" alt="menu-button" />
          </div>
            <p>Settings</p>
          </div>
          <div className="lower-nav" id="ln2">
          <div className="lowerimg-div">
            <img src={filebtn} className="Menu-Button" alt="menu-button" />
          </div>
            <p id="Recordingsbtn">Recordings</p>
          </div>
          <div className="lower-nav" id="ln3">
          <div className="lowerimg-div">
            <img src={premiumbtn} className="Menu-Button" alt="menu-button" />
          </div>
            <p>Premium</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
