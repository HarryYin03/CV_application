import React, { useState } from 'react';
import GeneralInfo from './components/GeneralInfo';
import Education from './components/Education';
import './styles/App.css';

function App() {
  return (
    <div className="app-container">
      <h1>My CV Builder</h1>
      <GeneralInfo />
      <Education />
     
    </div>
  );
}

export default App;