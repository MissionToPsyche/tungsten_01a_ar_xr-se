import React, { useContext } from 'react';
import { useNavigate } from "react-router-dom";
import { BsFillArrowLeftCircleFill as BackArrow } from 'react-icons/bs';
import { AudioContext } from '../../Context/AudioContext'; 
import { BUTTON_PRESS } from '../../Context/CommonConstants'; 
import {InstructionPictures } from '../../Context/CommonConstants';
import './HelpView.css'

const HelpViewContainer = () => {

    const { soundEffectsEnabled } = useContext(AudioContext);
    const navigate = useNavigate();

    const playSound = () => {
        if (soundEffectsEnabled) {
            new Audio(BUTTON_PRESS).play();
        }
    };

    const handleBack = () => {
        playSound();
        navigate('/');
    };

    return (
        <div className='view-container'>
            <div>
                <button onClick={handleBack} className='back-button'><BackArrow /></button>
            </div>
            <div className='text-container'>
                <h1 className='title'>HELP</h1>
                <p className='description'>
                Welcome to a game that takes you beyond reality! We need your help as we journey around the Psyche orbiter through the use of Augmented Reality (AR).<br />
                <br />
                 Simply tap the “Enter AR” button located at the top of your screen to bring the orbiter to life. <br />
                 Utilize your device’s camera to explore the psyche orbiter by physically moving around. <br />
                 <br />
                Tap on the red tiles at the bottom of the screen to learn about each instrument and watch it light up on the Psyche orbiter. Be aware! You can only click on each piece once.<br /> 
                <div className="popup-image">
                    <img src={InstructionPictures.TILE} />
                </div>
                Keep on clicking all of the pieces until the entire orbiter has been revealed! Enjoy the adventure!<br />
                <br />
                <div className="popup-image">
                    <img src={InstructionPictures.NEW_SHADE_COLOR} />
                </div>
                </p>
            </div>
        </div>
    )
}

export default HelpViewContainer

