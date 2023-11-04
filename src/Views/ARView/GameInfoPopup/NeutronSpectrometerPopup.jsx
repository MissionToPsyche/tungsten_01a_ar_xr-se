import React from 'react';
import './SatellitePiecesPopup.css';

const NeutronSpectrometerPopup = ({ onClose }) => {
    return (
        <div className="popup-container">
            <div className="popup-content">
                <div className="popup-title">
                    Neutron Spectrometer
                </div>
                <div className="popup-image">
                    {/* TODO: ADD IMAGE*/}
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

export default NeutronSpectrometerPopup;
