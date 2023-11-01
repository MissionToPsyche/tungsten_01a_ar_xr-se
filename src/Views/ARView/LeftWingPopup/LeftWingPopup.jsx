import React from 'react';
import './LeftWingPopup.css';

const LeftWingPopup = ({ onClose }) => {
    return (
        <div className="popup-container">
            <div className="popup-content">
                <div className="popup-title">
                    Left Wing 
                </div>
                <div className="popup-image">
                    {/* TODO: ADD LEFT WING IMAGE*/}
                </div>
                <div className="popup-text">
                    TODO : Lorem ipsum dolor sit amet, consectetur adipiscing elit...
                </div>
                <button className="popup-button" onClick={onClose}>
                    CONTINUE
                </button>
            </div>
        </div>
    );
};

export default LeftWingPopup;
