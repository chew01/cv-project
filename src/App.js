import React, { Component } from 'react';
import General from './components/General';
import Education from './components/Education';
import Practical from './components/Practical';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="main">
        <General />
        <Education />
        <Practical />
      </div>
    );
  }
}

export default App;
