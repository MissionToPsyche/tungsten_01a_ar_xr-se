import React from 'react';
import './SatellitePiecesPopup.css';
import GammaImage from '/Icons/gamma_ray.png';


const GammaRayPopup = ({ onClose }) => {
    return (
        <div className="popup-container">
            <div className="popup-content">
                <div className="popup-title">
                    Gamma-Ray
                </div>
                <img src={GammaImage} alt="Gamma" className='popup-image' />
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

export default GammaRayPopup;
