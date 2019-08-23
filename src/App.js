import React from 'react';
import './App.css';
import menubtn from './images/menubtn.png';

function App() {
  return (
    <div className="App">
      
      <div className="Top-Section">
        <div className="Menubtn-Container">
        <div className="Margin-div">
        <img src={menubtn} className="Menu-Button" alt="logo" />
        </div>
        </div>
        <div className="Top-Section-Button">
        <button className="Signup-button">Sign Up</button> 
        <div className="Loginbtn-Section">
        <div className="Para-Holders"><p>Have an account?</p></div>
        <p></p>
        <div className="Para-Holders"><a><p id="login-btn">Log In</p></a></div>
        </div>   
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
