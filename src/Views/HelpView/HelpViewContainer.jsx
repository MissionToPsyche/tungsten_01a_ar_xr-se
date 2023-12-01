import React, { useContext } from 'react';
import { useNavigate } from "react-router-dom";
import { BsFillArrowLeftCircleFill as BackArrow } from 'react-icons/bs';
import { AudioContext } from '../../Context/AudioContext'; 
import { BUTTON_PRESS } from '../../Context/CommonConstants'; 
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
                    Sunt consequat nisi deserunt qui sint elit ullamco labore sit ex. Consectetur excepteur nulla ut exercitation nulla officia minim sit nostrud commodo velit Lorem Lorem. Irure dolore cillum ea commodo. Amet nisi consequat tempor deserunt minim sint nostrud nulla deserunt eiusmod. Ex fugiat pariatur veniam in aliquip voluptate laborum nulla. Id ut deserunt nulla nisi ullamco est elit consequat ullamco dolore ullamco et enim sunt.
                </p>
            </div>
        </div>
    )
}

export default HelpViewContainer