import React, { Component } from 'react';
import './Education.css';
import Field from './Field';

class Education extends Component {
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
    const educationExperiences = this.state.experiences.map((experience) => {
      return <EducationExperience key={experience.key} />;
    });

    return (
      <div className="education">
        <p>Education</p>
        {educationExperiences}
        <button onClick={this.addExperience}>Add education experience</button>
      </div>
    );
  }
}

class EducationExperience extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div className="eduExp">
        <Field field="name of institution" />
        <Field field="title of study" />
        <Field field="start date" type="date" />
        <Field field="end date" type="date" />
      </div>
    );
  }
}

export default Education;
