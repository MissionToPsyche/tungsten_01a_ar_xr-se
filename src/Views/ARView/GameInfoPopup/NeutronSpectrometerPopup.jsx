import React from 'react';
import './SatellitePiecesPopup.css';
import NeutronImage from '/Icons/neutron_spectrometer.png';


const NeutronSpectrometerPopup = ({ onClose }) => {
    return (
        <div className="popup-container">
            <div className="popup-content">
                <div className="popup-title">
                    Neutron Spectrometer
                </div>
                <img src={NeutronImage} alt="NeutronSpectrometer" className='popup-image' />
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
