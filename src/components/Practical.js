import React, { Component } from 'react';
import './css/Practical.css';
import Field from './Field';
import SectionHeader from './SectionHeader';

class Practical extends Component {
  constructor() {
    super();

    this.state = {
      experiences: [],
      editSection: true,
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

  handleEditSection = () => {
    if (this.state.editSection === true) {
      this.setState({ editSection: false });
    } else {
      this.setState({ editSection: true });
    }
  };

  render() {
    const practicalExperiences = this.state.experiences.map((experience) => {
      return (
        <PracticalExperience
          key={experience.key}
          editSection={this.state.editSection}
        />
      );
    });

    return (
      <div className="practical">
        <SectionHeader
          name="Work Experience"
          handleEdit={this.handleEditSection}
        />
        <div className="field-container">
          {practicalExperiences}
          <button
            onClick={this.addExperience}
            className={this.state.editSection ? '' : 'hidden'}
          >
            Add work experience
          </button>
        </div>
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
        <Field field="company" editSection={this.props.editSection} />
        <Field field="position" editSection={this.props.editSection} />
        <Field
          field="start date"
          type="date"
          editSection={this.props.editSection}
        />
        <Field
          field="end date"
          type="date"
          editSection={this.props.editSection}
        />
      </div>
    );
  }
}
