import React, { forwardRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useARContext } from '../Contexts/ARContext';
import InfoPopup from "../InfoPopup/InfoPopup";
import './Interface.css';
// import { useCharacterAnimations } from "../../contexts/CharacterAnimations";

const Interface = forwardRef((props, ref) => {
    //   const { animations, animationIndex, setAnimationIndex } =
    //     useCharacterAnimations();
    const navigate = useNavigate();

    const [showInfo, setShowInfo] = useState(false);

    const arViewRef = useARContext();

    const buttonArray = [
        'Button 1',
        'Button 2',
        'Button 3',
        'Button 4',
        'Button 5',
        'Button 6',
        'Button 7',
        'Button 8',
        'Button 9',
        'Button 10'
    ];

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
                    {buttonArray.map((button, index) => (
                        <button onClick={() => console.log("DEBUG: Button Clicked")} className='select-button' key={index}>{button}</button>
                    ))}
                </div>
            </div>
            {showInfo && <InfoPopup onClose={closeInfoPopup} />}
        </div>
    );
});

export default Interface;
