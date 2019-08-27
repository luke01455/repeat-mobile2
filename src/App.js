import React from 'react';
import { HashRouter, Switch, Route } from 'react-router-dom';

import './App.css';
import HomePage from './pages/homepage/homepage.component';
import SignInAndSignUpPage from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component';

function App() {
  return (
    <HashRouter basename='/'>
    <div className="App">
      <Switch>
      <Route exact path='/' component={HomePage} />
      <Route path='/signin' component={SignInAndSignUpPage}/>
      </Switch>
    </div>
    </HashRouter>
  );
}

export default App;