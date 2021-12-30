import React, { useState } from 'react';
import './styles/Education.css';
import Field from './Field';
import SectionHeader from './SectionHeader';

const Education = (props) => {
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

  const educationExperiences = experiences.map((experience) => {
    return (
      <EducationExperience key={experience.key} editSection={editSection} />
    );
  });

  return (
    <div className="education">
      <SectionHeader name="Education" handleEdit={handleEditSection} />
      <div className="field-container">
        {educationExperiences}
        <button onClick={addExperience} className={editSection ? '' : 'hidden'}>
          Add education experience
        </button>
      </div>
    </div>
  );
};

const EducationExperience = (props) => {
  return (
    <div className="eduExp">
      <Field field="name of institution" editSection={props.editSection} />
      <Field field="title of study" editSection={props.editSection} />
      <Field field="start date" type="date" editSection={props.editSection} />
      <Field field="end date" type="date" editSection={props.editSection} />
    </div>
  );
};

export default Education;
