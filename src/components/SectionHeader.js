import React, { useState } from 'react';
import './styles/SectionHeader.css';
import edit from './assets/edit.svg';

const SectionHeader = (props) => {
  const [isHovered, setIsHovered] = useState(false);

  const handleHover = () => {
    if (isHovered === true) {
      setIsHovered(false);
    } else {
      setIsHovered(true);
    }
  };

  return (
    <div
      className="section-header"
      onMouseEnter={handleHover}
      onMouseLeave={handleHover}
    >
      {props.name}
      <img
        src={edit}
        alt="edit"
        className={isHovered ? 'hovered' : ''}
        onClick={props.handleEdit}
      />
    </div>
  );
};

export default SectionHeader;
