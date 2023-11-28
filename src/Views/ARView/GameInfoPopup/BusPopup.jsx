import React from 'react';
import './SatellitePiecesPopup.css';
import BusImage from '/Icons/bus_with_structure.png';


const BusPopup = ({ onClose }) => {
    return (
        <div className="popup-container">
            <div className="popup-content">
                <div className="popup-title">
                    Bus
                </div>
                <img src={BusImage} alt="Bus" className='popup-image' />
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

export default BusPopup;
