import React, { Component } from 'react';
import './styles/SectionHeader.css';
import edit from './assets/edit.svg';

class SectionHeader extends Component {
  constructor() {
    super();

    this.state = {
      isHovered: false,
    };
  }

  handleHover = () => {
    if (this.state.isHovered === true) {
      this.setState({ isHovered: false });
    } else {
      this.setState({ isHovered: true });
    }
  };

  render() {
    return (
      <div
        className="section-header"
        onMouseEnter={this.handleHover}
        onMouseLeave={this.handleHover}
      >
        {this.props.name}
        <img
          src={edit}
          alt="edit"
          className={this.state.isHovered ? 'hovered' : ''}
          onClick={this.props.handleEdit}
        />
      </div>
    );
  }
}

export default SectionHeader;
