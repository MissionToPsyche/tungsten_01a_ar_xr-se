import React from 'react';
import './SatellitePiecesPopup.css';
import { SpacecraftIcons } from '../../../Context/CommonConstants';

const BusPopup = ({ onClose }) => {
    return (
        <div className="popup-container">
            <div className="popup-content">
                <div className="popup-title">
                    Bus
                </div>
                <div className="popup-image">
                    <img src={SpacecraftIcons.BUS} />
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
