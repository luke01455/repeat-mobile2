import React from 'react';

import './App.css';
import TopSection from './components/top-section/top-section.component.jsx';
import MidSection from './components/mid-section/mid-section.component.jsx';
import BotSection from './components/bot-section/bot-section.component.jsx';

function App() {
  return (
    <div className="App">
      <TopSection />
      <MidSection />
      <BotSection />
    </div>
  );
}

export default App;
