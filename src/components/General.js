import React, { useState } from 'react';
import './styles/General.css';
import Field from './Field';
import SectionHeader from './SectionHeader';

const General = (props) => {
  const [editSection, setEditSection] = useState(true);

  const handleEditSection = () => {
    if (editSection === true) {
      setEditSection(false);
    } else {
      setEditSection(true);
    }
  };

  return (
    <div className="general">
      <SectionHeader
        name="Personal Information"
        handleEdit={handleEditSection}
      />
      <div className="field-container">
        <Field field="name" editSection={editSection} />
        <Field field="email" type="email" editSection={editSection} />
        <Field field="phone number" editSection={editSection} />
      </div>
    </div>
  );
};

export default General;
