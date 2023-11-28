import React from 'react';
import './SatellitePiecesPopup.css';
import RightWingImage from '/Icons/right_wing.png';


const RightWingPopup = ({ onClose }) => {
    return (
        <div className="popup-container">
            <div className="popup-content">
                <div className="popup-title">
                    Right Solar Array
                </div>
                <img src={RightWingImage} alt="RightWing" className='popup-image' />
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

export default RightWingPopup;
