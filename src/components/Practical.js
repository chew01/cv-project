import React, { useState } from 'react';
import './styles/Practical.css';
import Field from './Field';
import SectionHeader from './SectionHeader';

const Practical = (props) => {
  const [experiences, setExperiences] = useState([]);
  const [editSection, setEditSection] = useState(true);

  const addExperience = () => {
    const newExperience = {
      key: experiences.length || 0,
    };

    setExperiences(experiences.concat(newExperience));
  };

  const handleEditSection = () => {
    if (editSection === true) {
      setEditSection(false);
    } else {
      setEditSection(true);
    }
  };

  const practicalExperiences = experiences.map((experience) => {
    return (
      <PracticalExperience key={experience.key} editSection={editSection} />
    );
  });

  return (
    <div className="practical">
      <SectionHeader name="Work Experience" handleEdit={handleEditSection} />
      <div className="field-container">
        {practicalExperiences}
        <button onClick={addExperience} className={editSection ? '' : 'hidden'}>
          Add work experience
        </button>
      </div>
    </div>
  );
};

const PracticalExperience = (props) => {
  return (
    <div className="workExp">
      <Field field="company" editSection={props.editSection} />
      <Field field="position" editSection={props.editSection} />
      <Field field="start date" type="date" editSection={props.editSection} />
      <Field field="end date" type="date" editSection={props.editSection} />
    </div>
  );
};

export default Practical;
