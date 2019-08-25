import React from 'react';
import menubtn from '../../images/menubtn.png';
import './top-section.styles.css';

const TopSection = () => (
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
)

export default TopSection;