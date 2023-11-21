import React from 'react';
import './SatellitePiecesPopup.css';
import LeftWingImage from '/Icons/left_wing.png';

const LeftWingPopup = ({ onClose }) => {
    return (
        <div className="popup-container">
            <div className="popup-content">
                <div className="popup-title">
                    Left Wing 
                </div>
                <img src={LeftWingImage} alt="LeftWing" className='popup-image' />
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
