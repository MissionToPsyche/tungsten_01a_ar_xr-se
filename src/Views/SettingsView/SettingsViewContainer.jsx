import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";
import ToggleButton from './ToggleButton';
import { BsFillArrowLeftCircleFill as BackArrow } from 'react-icons/bs';
import "./SettingsStyles.css";

import Credits from './Credits'; 

const SettingsViewContainer = () => {

    // State to manage music and sound effect toggles
    const [musicEnabled, setMusicEnabled] = useState(true);
    const [soundEffectsEnabled, setSoundEffectsEnabled] = useState(true);
    const [showCredits, setShowCredits] = useState(false);
    const navigate = useNavigate();

   // Popup toggle functions
   const togglePopup = (setPopupState) => () => setPopupState(prev => !prev);

    const handleBackButtonClick = () => {
        // Call the function in ARView from Interface
        if (arViewRef.current) {
            arViewRef.current.invokeFunctionInARView();
        }
    };

    return (
        <div className='settings-container'>
            <div className=''>
                <button onClick={() => navigate('/')} className='back-button'><BackArrow /></button>
            </div>
            <div className='settings-header-section'>
                <h1>SETTINGS</h1>
            </div>
            <div className='toggle-button-section'>
                <ToggleButton
                    label="Music"
                    isChecked={musicEnabled}
                    onChange={() => setMusicEnabled(prev => !prev)}
                    className='toggle-button'
                />
                <ToggleButton
                    label="Sound"
                    isChecked={soundEffectsEnabled}
                    onChange={() => setSoundEffectsEnabled(prev => !prev)}
                    className='toggle-button'
                />
            </div>
            <div className='credits-section'>
                <button onClick={togglePopup(setShowCredits)}>Credits</button>
            </div>
            {showCredits && (<Credits onClose={togglePopup(setShowCredits)} /> )}
        </div>
    );
};

export default SettingsViewContainer;
