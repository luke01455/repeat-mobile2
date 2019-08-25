import React from 'react';
import './bot-section.styles.css';
import filebtn from '../../images/filebtn.png';
import premiumbtn from '../../images/premiumbtn.png';
import settingsbtn from '../../images/settingbtn.png';

const BotSection = () => (
    <div className="Bottom-section">
    <div className="buttons-container">
      <div className="lower-nav" id="ln1">
      <div className="lowerimg-div">
        <img src={settingsbtn} className="Lower-Button" alt="menu-button" />
      </div>
        <p>Settings</p>
      </div>
      <div className="lower-nav" id="ln2">
      <div className="lowerimg-div">
        <img src={filebtn} className="Lower-Button" alt="menu-button" />
      </div>
        <p id="Recordingsbtn">Recordings</p>
      </div>
      <div className="lower-nav" id="ln3">
      <div className="lowerimg-div">
        <img src={premiumbtn} className="Lower-Button" alt="menu-button" />
      </div>
        <p>Premium</p>
      </div>
    </div>
  </div>
)

export default BotSection;