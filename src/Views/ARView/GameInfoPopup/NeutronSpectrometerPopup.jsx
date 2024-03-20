import React from 'react';
import './SatellitePiecesPopup.css';
import { SpacecraftIcons } from '../../../Context/CommonConstants';
//Game Tile pop-up that states information on the neutron spectrometer
//Includes a title, image of the instrument, description, and a button to close
const NeutronSpectrometerPopup = ({ onClose }) => {
    return (
        <div className="popup-container">
            <div className="popup-content">
                <div className="popup-title">
                    Neutron Spectrometer
                </div>
      
                <div className="popup-image">
                    <img src={SpacecraftIcons.NEUTRON_SPECTROMETER} />
                </div>

                <div className="popup-text">
                    Neutron Spectrometer detects and measures neutrons from Psyche, mounted on a 6-foot (2-meter) boom for accurate readings, providing vital data on Psyche's elemental composition.
                </div>
                <button className="popup-button" onClick={onClose}>
                    CONTINUE
                </button>
            </div>
        </div>
    );
};

export default NeutronSpectrometerPopup;
