import React from 'react';
import './SatellitePiecesPopup.css';

const BusPopup = ({ onClose }) => {
    return (
        <div className="popup-container">
            <div className="popup-content">
                <div className="popup-title">
                    Bus
                </div>
                <div className="popup-image">
                    {/* TODO: ADD IMAGE*/}
                </div>
                <div className="popup-text">
                    The spacecraft's main control center, known as the bus, acts as the "brain" of the mission. It coordinates and manages all functions of the spacecraft.
                </div>
                <button className="popup-button" onClick={onClose}>
                    CONTINUE
                </button>
            </div>
        </div>
    );
};

export default BusPopup;
