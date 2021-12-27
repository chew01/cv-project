import React, { Component } from 'react';
import './Field.css';

class Field extends Component {
  constructor() {
    super();

    this.state = {
      editing: false,
      data: '',
    };

    this.setEditing = this.setEditing.bind(this);
    this.handleEdit = this.handleEdit.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  setEditing() {
    this.setState({
      editing: true,
    });
  }

  handleEdit(e) {
    this.setState({
      data: e.target.value,
    });
  }

  handleSubmit(e) {
    this.setState({
      editing: false,
    });
  }

  render() {
    const fieldTitle =
      this.props.field[0].toUpperCase() + this.props.field.substring(1);

    if (this.state.editing === true) {
      // editing: render input and submit button
      return (
        <div className="field">
          <input
            type={this.props.type}
            onChange={this.handleEdit}
            defaultValue={this.state.data}
          />
          <button onClick={this.handleSubmit}>Submit</button>
        </div>
      );
    } else if (this.state.data === '') {
      // blank: render add button
      return (
        <div className="field">
          <button onClick={this.setEditing}>Add {this.props.field}</button>
        </div>
      );
    } else {
      // filled: render field and edit button
      return (
        <div className="field">
          {fieldTitle}: {this.state.data}
          <button onClick={this.setEditing}>Edit</button>
        </div>
      );
    }
  }
}

export default Field;
