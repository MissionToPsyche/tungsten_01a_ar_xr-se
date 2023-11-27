import React from 'react';
import './SatellitePiecesPopup.css';

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
                    The spacecraft is equipped with large solar panel arrays that extend from the body of the bus. These solar arrays harness solar energy to power the spacecraft's systems.
                </div>
                <button className="popup-button" onClick={onClose}>
                    CONTINUE
                </button>
            </div>
        </div>
    );
};

export default LeftWingPopup;
