import React from 'react';
import General from './components/General';
import Education from './components/Education';
import Practical from './components/Practical';
import './App.css';

const App = (props) => {
  return (
    <div className="main">
      <General />
      <Education />
      <Practical />
    </div>
  );
};

export default App;
