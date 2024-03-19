import React from 'react';
import './SatellitePiecesPopup.css';
import { SpacecraftIcons } from '../../../Context/CommonConstants';

//Game Tile pop-up that states information on the antenna 
//Includes a title, image of the instrument, description, and a button to close
const AntennaPopup = ({ onClose }) => {
    return (
        <div className="popup-container">
            <div className="popup-content">
                <div className="popup-title"> 
                    Antenna
                </div>
      
                <div className="popup-image">
                    <img src={SpacecraftIcons.ANTENNA} />
                </div>

                <div className="popup-text">
                    The Psyche mission, led by teams from MIT and JPL, uses advanced X-band radio tech to precisely measure Psyche's gravity and analyze its interior structure using onboard imagery.
                </div>
                <button className="popup-button" onClick={onClose}>
                    CONTINUE
                </button>
            </div>
        </div>
    );
};

export default AntennaPopup;
