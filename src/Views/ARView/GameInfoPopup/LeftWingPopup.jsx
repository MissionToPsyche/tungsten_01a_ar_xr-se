import React from 'react';
import './SatellitePiecesPopup.css';
import { SpacecraftIcons } from '../../../Context/CommonConstants';

const LeftWingPopup = ({ onClose }) => {
    return (
        <div className="popup-container">
            <div className="popup-content">
                <div className="popup-title">
                    Left Solar Array
                </div>
      
                <div className="popup-image">
                    <img src={SpacecraftIcons.LEFT_WING} />
                </div>

                <div className="popup-text">
                    The spacecraft is equipped with large solar panel arrays that extend from the body of the bus. These solar arrays harness solar energy to power the spacecraft's systems.
                </div>
                <button className="popup-button" onClick={onClose}>
                    CONTINUE
                </button>
            </div>
        </div>
    );
};

export default LeftWingPopup;
