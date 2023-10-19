import React from 'react';
import './ToggleButton.css';

const ToggleButton = ({ isChecked, onChange, label }) => {
  return (
    <div className="toggle-button">
      <label>{label}</label>
      <div className="toggle-switch">
        <input type="checkbox" checked={isChecked} onChange={onChange} />
        <span className="slider"></span>
      </div>
    </div>
  );
};

export default ToggleButton;
