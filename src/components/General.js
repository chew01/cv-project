import React, { Component } from 'react';
import './General.css';
import Field from './Field';

class General extends Component {
  render() {
    return (
      <div className="general">
        <p>Personal Info</p>
        <Field field="name" />
        <Field field="email" type="email" />
        <Field field="phone number" />
      </div>
    );
  }
}

export default General;
