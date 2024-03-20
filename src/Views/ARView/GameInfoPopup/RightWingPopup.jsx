import React from 'react';
import './SatellitePiecesPopup.css';
import { SpacecraftIcons } from '../../../Context/CommonConstants';
//Game Tile pop-up that states information on the right wing 
//Includes a title, image of the instrument, description, and a button to close
const RightWingPopup = ({ onClose }) => {
    return (
        <div className="popup-container">
            <div className="popup-content">
                <div className="popup-title">
                    Right Solar Array
                </div>
      
                <div className="popup-image">
                    <img src={SpacecraftIcons.RIGHT_WING} />
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

export default RightWingPopup;
