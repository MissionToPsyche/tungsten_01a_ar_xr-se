import React from 'react';
import './ToggleButton.css';

const ToggleButton = ({ label, isChecked, onChange }) => {
  return (
    <div className="toggle-button">
      <label>{label}:</label>
      <div className={`slider ${isChecked ? 'on' : 'off'}`} onClick={onChange}>
        <div className="thumb"></div>
      </div>
    </div>
  );
};

export default ToggleButton;
