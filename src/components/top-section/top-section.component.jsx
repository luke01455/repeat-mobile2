import React from 'react';
import { Link } from 'react-router-dom';
import { auth } from '../../firebase/firebase.utils';
import menubtn from '../../images/menubtn.png';
import { withRouter } from 'react-router-dom';

import './top-section.styles.css';

const TopSection = ({ currentUser,  history }) => (
    <div className="Top-Section">
<div className="Menubtn-Container">
  <div className="Margin-div">
    <img src={menubtn} className="Menu-Button" alt="menu-button" />
  </div>
</div>
<div className="Top-Section-Button">

  <button className="Signup-button" onClick={() => history.push('/signin')}>Sign Up</button>

  <div className="Para-Holders">
        {currentUser ?
          <p id="login-plain-text">
          Welcome back, <Link to='/' onClick={() => auth.signOut()}> {currentUser.displayName} </Link>
          </p>
          :
          <p id="login-plain-text">
           Have an account?<Link to='/'>Log In </Link>
          </p>
        }
  </div>



  
</div>
</div>
)

export default withRouter(TopSection);