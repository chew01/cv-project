import React, { Component } from 'react';
import './styles/General.css';
import Field from './Field';
import SectionHeader from './SectionHeader';

class General extends Component {
  constructor() {
    super();

    this.state = {
      editSection: true,
    };
  }

  handleEditSection = () => {
    if (this.state.editSection === true) {
      this.setState({ editSection: false });
    } else {
      this.setState({ editSection: true });
    }
  };

  render() {
    return (
      <div className="general">
        <SectionHeader
          name="Personal Information"
          handleEdit={this.handleEditSection}
        />
        <div className="field-container">
          <Field field="name" editSection={this.state.editSection} />
          <Field
            field="email"
            type="email"
            editSection={this.state.editSection}
          />
          <Field field="phone number" editSection={this.state.editSection} />
        </div>
      </div>
    );
  }
}

export default General;
