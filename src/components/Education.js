import React, { Component } from 'react';
import './styles/Education.css';
import Field from './Field';
import SectionHeader from './SectionHeader';

class Education extends Component {
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
    const educationExperiences = this.state.experiences.map((experience) => {
      return (
        <EducationExperience
          key={experience.key}
          editSection={this.state.editSection}
        />
      );
    });

    return (
      <div className="education">
        <SectionHeader name="Education" handleEdit={this.handleEditSection} />
        <div className="field-container">
          {educationExperiences}
          <button
            onClick={this.addExperience}
            className={this.state.editSection ? '' : 'hidden'}
          >
            Add education experience
          </button>
        </div>
      </div>
    );
  }
}

class EducationExperience extends Component {
  render() {
    return (
      <div className="eduExp">
        <Field
          field="name of institution"
          editSection={this.props.editSection}
        />
        <Field field="title of study" editSection={this.props.editSection} />
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

export default Education;
