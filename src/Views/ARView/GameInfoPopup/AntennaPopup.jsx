import React from 'react';
import './SatellitePiecesPopup.css';
import AntennaImage from '/Icons/antenna.png';


const AntennaPopup = ({ onClose }) => {
    return (
        <div className="popup-container">
            <div className="popup-content">
                <div className="popup-title">
                    Antenna
                </div>
                <img src={AntennaImage} alt="Antenna" className='popup-image' />
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

export default AntennaPopup;
