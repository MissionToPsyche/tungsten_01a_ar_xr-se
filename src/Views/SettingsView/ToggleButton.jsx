import React from 'react';
import './ToggleButton.css';

//Add toggle button idea source: https://medium.com/@nishaadequate123/toggle-button-in-react-js-technical-chamber-644475687eb0 

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
