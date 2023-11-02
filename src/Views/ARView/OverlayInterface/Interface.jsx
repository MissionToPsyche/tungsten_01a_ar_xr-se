import React, { forwardRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useARContext } from '../Contexts/ARContext';
import GameInfoPopup from "../GameInfoPopup/GameInfoPopup";
import './Interface.css';
import Cube from "../Cube";

import { FaHome, FaInfoCircle, FaBackward } from 'react-icons/fa';

const Interface = forwardRef((props, ref) => {
    //   const { animations, animationIndex, setAnimationIndex } =
    //     useCharacterAnimations();
    const navigate = useNavigate();

    const [showInfo, setShowInfo] = useState(false);

    const arViewRef = useARContext();

    const handleBackButtonClick = () => {
        // Call the function in ARView from Interface
        if (arViewRef.current) {
            arViewRef.current.invokeFunctionInARView();
        }
    };

    const showInfoPopup = () => {
        console.log("Info Popup Opened")
        setShowInfo(true);
    };

    const closeInfoPopup = () => {
        console.log("Info Popup Closed")
        setShowInfo(prevShowInfo => !prevShowInfo);
    };

    return (
        <div id="overlay-content" ref={ref}>
            <div className="dom-container">
                <div className="nav-container">
                    <button onClick={handleBackButtonClick}>BACK</button>
                    <button onClick={showInfoPopup}>INFO</button>
                </div>
                <div className="button-container">
                    <button className='select-button'><FaHome /></button>
                    <button className='select-button'><FaInfoCircle /></button>
                    <button className='select-button'><FaBackward /></button>
                    <button className='select-button'><FaHome /></button>
                    <button className='select-button'><FaInfoCircle /></button>
                    <button className='select-button'><FaBackward /></button>
                    <button className='select-button'><FaHome /></button>
                    <button className='select-button'><FaInfoCircle /></button>
                    <button className='select-button'><FaBackward /></button>
                </div>
            </div>
            {showInfo && <GameInfoPopup onClose={closeInfoPopup} />}
        </div>
    );
});

export default Interface;
