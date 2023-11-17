import React from 'react';
import '../GameInfoPopup/SatellitePiecesPopup.css';

const InfoPopup = ({ onClose }) => {
    return (
        <div className="popup-container">
            <div className="info-popup-content">
                <div className="popup-title">
                    HELP
                </div>
                <div className="popup-text">
                    TODO : Lorem ipsum dolor sit amet, consectetur adipiscing elit...
                </div>
                <button className="popup-button" onClick={onClose}>
                    CLOSE
                </button>
            </div>
        </div>
    );
}
export default InfoPopup;
