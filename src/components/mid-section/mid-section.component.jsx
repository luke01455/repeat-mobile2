import React from 'react';
import './mid-section.styles.css';
import cddvd from '../../images/cddvd.png';


const MidSection = () => (
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

)

export default MidSection;