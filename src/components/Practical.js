import React, { Component } from 'react';
import './Practical.css';
import Field from './Field';

class Practical extends Component {
  constructor() {
    super();

    this.state = {
      experiences: [],
    };
  }

  addExperience = () => {
    const newExperience = {
      key: this.state.experiences.length || 0,
    };

    this.setState({
      experiences: this.state.experiences.concat(newExperience),
    });
  };

  render() {
    const practicalExperiences = this.state.experiences.map((experience) => {
      return <PracticalExperience key={experience.key} />;
    });

    return (
      <div className="practical">
        <p>Practical</p>
        {practicalExperiences}
        <button onClick={this.addExperience}>Add work experience</button>
      </div>
    );
  }
}

export default Practical;

class PracticalExperience extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div className="workExp">
        <Field field="company" />
        <Field field="position" />
        <Field field="start date" type="date" />
        <Field field="end date" type="date" />
      </div>
    );
  }
}
