import React, { useState } from 'react';
import './styles/Field.css';

const Field = (props) => {
  const [editing, setEditing] = useState(false);
  const [data, setData] = useState('');

  const setEditingTrue = () => {
    setEditing(true);
  };

  const handleEdit = (e) => {
    setData(e.target.value);
  };

  const handleSubmit = () => {
    setEditing(false);
  };

  const fieldTitle = props.field[0].toUpperCase() + props.field.substring(1);

  if (props.editSection === false) {
    return (
      <div className="field">
        {fieldTitle}: {data}
      </div>
    );
  }

  if (editing === true) {
    // editing: render input and submit button
    return (
      <div className="field">
        <input type={props.type} onChange={handleEdit} defaultValue={data} />
        <button onClick={handleSubmit}>Submit</button>
      </div>
    );
  } else if (data === '') {
    // blank: render add button
    return (
      <div className="field">
        <button onClick={setEditingTrue}>Add {props.field}</button>
      </div>
    );
  } else {
    // filled: render field and edit button
    return (
      <div className="field">
        {fieldTitle}: {data}
        <button onClick={setEditingTrue}>Edit</button>
      </div>
    );
  }
};

export default Field;
