import React from 'react';
import './SatellitePiecesPopup.css';
import { SpacecraftIcons } from '../../../Context/CommonConstants';

const GammaRayPopup = ({ onClose }) => {
    return (
        <div className="popup-container">
            <div className="popup-content">
                <div className="popup-title">
                    Gamma-Ray
                </div>
                <div className="popup-image">
                    <img src={SpacecraftIcons.GAMMA_RAY} />
                </div>
                <div className="popup-text">
                    The Gamma-Ray Spectrometer detects, measures, and maps the elemental composition of Psyche, providing crucial insights into the asteroid's makeup with advanced technology.
                </div>
                <button className="popup-button" onClick={onClose}>
                    CONTINUE
                </button>
            </div>
        </div>
    );
};

export default GammaRayPopup;
