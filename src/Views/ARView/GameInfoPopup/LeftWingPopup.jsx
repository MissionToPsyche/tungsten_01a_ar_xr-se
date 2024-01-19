import React from 'react';
import './SatellitePiecesPopup.css';
import { SpacecraftIcons } from '../../../Context/CommonConstants';
import SpacecraftAssembly from '../../../Models/SpacecraftAssembly';
//import {undoGreyedOutEffect, SpacecraftAssembly} from '../../../Models/SpacecraftAssembly';
//import {SpacecraftAssembly}



const LeftWingPopup = ({ onClose }) => {

    const handleClick = () => {
        let wingLGLTF;
        const onReady = (greyRef) => {
            wingLGLTF = greyRef;
          };
          return <SpacecraftAssembly position={[-1.37, -0.03, -0.015]} onReady={onReady} />;
        onClose();
      };
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
                <button className="popup-button" onClick={handleClick}>
                    CONTINUE
                </button>
            </div>
        </div>
    );
};

export default LeftWingPopup;
