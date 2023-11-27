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
                    Neutron Spectrometer detects and measures neutrons from Psyche, mounted on a 6-foot (2-meter) boom for accurate readings, providing vital data on Psyche's elemental composition.
                </div>
                <button className="popup-button" onClick={onClose}>
                    CONTINUE
                </button>
            </div>
        </div>
    );
};

export default NeutronSpectrometerPopup;
