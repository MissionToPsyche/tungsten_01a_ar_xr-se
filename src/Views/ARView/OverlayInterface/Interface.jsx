import React, { forwardRef, useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { useARContext } from '../Contexts/ARContext';
import './Interface.css';
import LeftWingPopup from '../GameInfoPopup/LeftWingPopup';
import RightWingPopup from '../GameInfoPopup/RightWingPopup';
import GammaRayPopup from '../GameInfoPopup/GammaRayPopup';
import NeutronSpectrometerPopup from '../GameInfoPopup/NeutronSpectrometerPopup';
import AntennaPopup from '../GameInfoPopup/AntennaPopup';
import BusPopup from '../GameInfoPopup/BusPopup';
import { FaHome, FaInfoCircle, FaBackward } from 'react-icons/fa';
import { BsFillArrowLeftCircleFill as BackArrow } from 'react-icons/bs';
import { AiFillInfoCircle as InfoCircle } from "react-icons/ai";
import { SpacecraftIcons } from '../../../Context/CommonConstants';
import InfoPopup from '../InfoPopups/InfoPopup';
import { AudioContext } from '../../../Context/AudioContext'; 
import { BUTTON_PRESS } from '../../../Context/CommonConstants';
import { SpacecraftContext } from '../../../Context/SpacecraftContext';


const Interface = forwardRef((props, ref) => {

    const navigate = useNavigate();
    const arViewRef = useARContext();
    const { activateComponent, activeComponents } = useContext(SpacecraftContext);
    
    // Sound effects
    const { soundEffectsEnabled } = useContext(AudioContext);
    const playSound = () => {
        if (soundEffectsEnabled) {
            new Audio(BUTTON_PRESS).play();
        }
    };

    // Popup visibility states
    const [showLeftWingPopup, setShowLeftWingPopup] = useState(false);
    const [showRightWingPopup, setShowRightWingPopup] = useState(false);
    const [showGammaRayPopup, setShowGammaRayPopup] = useState(false);
    const [showNeutronSpectrometerPopup, setShowNeutronSpectrometerPopup] = useState(false);
    const [showAntennaPopup, setShowAntennaPopup] = useState(false);
    const [showBusPopup, setShowBusPopup] = useState(false);

    const [showInfo, setShowInfo] = useState(false);

    // State variables to track button click status
    const [leftWingClicked, setLeftWingClicked] = useState(false);
    const [rightWingClicked, setRightWingClicked] = useState(false);
    const [gammaRayClicked, setGammaRayClicked] = useState(false);
    const [neutronSpectrometerClicked, setNeutronSpectrometerClicked] = useState(false);
    const [antennaClicked, setAntennaClicked] = useState(false);
    const [busClicked, setBusClicked] = useState(false);

    // Modified Popup toggle functions
    const togglePopup = (componentName, setPopupState, setButtonClicked) => () => {
        playSound();
        setPopupState(prev => !prev);

        // Toggle the activation status of the component
        if (!setButtonClicked) {
            setButtonClicked(true);
        }
        activateComponent(componentName, !activeComponents[componentName]); // Toggle the component activation
        console.log('Toggled, button ' + componentName)
};


    // Handle back button click
    const handleBackButtonClick = () => {
        playSound();
        arViewRef.current?.invokeFunctionInARView();
    };

    // Info popup handlers
    const showInfoPopup = () => {
        playSound();
        console.log('Info Popup Opened');
        setShowInfo(true);
    };

    const closeInfoPopup = () => {
        playSound();
        console.log('Info Popup Closed');
        setShowInfo(false);
    };


    return (
        <div id='overlay-content' ref={ref}>

            <div className='dom-container'>
                <div className='nav-container'>
                    <button className='return-home-button' onClick={handleBackButtonClick}><BackArrow /></button>
                    <button className='info-button' onClick={showInfoPopup}><InfoCircle /></button>
                </div>

                <div className='button-container'>
                    {/* BUS button */}
                    <button
                        className={`select-button ${busClicked ? 'button-clicked' : ''}`}
                        onClick={togglePopup('BUS', setShowBusPopup, setBusClicked)}
                        disabled={busClicked}
                    >
                        <img src={SpacecraftIcons.BUS} />
                    </button>

                     {/* LEFT WING button */}
                    <button
                        className={`select-button ${leftWingClicked ? 'button-clicked' : ''}`}
                        onClick={togglePopup('LEFT_WING', setShowLeftWingPopup, setLeftWingClicked)}
                        disabled={leftWingClicked}
                    >
                        <img src={SpacecraftIcons.LEFT_WING} />
                    </button>

                    {/* RIGHT WING button */}
                    <button
                        className={`select-button ${rightWingClicked ? 'button-clicked' : ''}`}
                        onClick={togglePopup('RIGHT_WING', setShowRightWingPopup, setRightWingClicked)}
                        disabled={rightWingClicked}
                    >
                        <img src={SpacecraftIcons.RIGHT_WING} />
                    </button>

                    {/* GAMMA RAY button */}
                    <button
                        className={`select-button ${gammaRayClicked ? 'button-clicked' : ''}`}
                        onClick={togglePopup('GAMMA_RAY', setShowGammaRayPopup, setGammaRayClicked)}
                        disabled={gammaRayClicked}
                    >
                        <img src={SpacecraftIcons.GAMMA_RAY} />
                    </button>

                    {/* NEUTRON SPECTROMETER button */}
                    <button
                        className={`select-button ${neutronSpectrometerClicked ? 'button-clicked' : ''}`}
                        onClick={togglePopup('NEUTRON_SPECTROMETER', setShowNeutronSpectrometerPopup, setNeutronSpectrometerClicked)}
                        disabled={neutronSpectrometerClicked}
                    >
                        <img src={SpacecraftIcons.NEUTRON_SPECTROMETER} />
                    </button>

                    {/* ANTENNA button */}
                    <button
                        className={`select-button ${antennaClicked ? 'button-clicked' : ''}`}
                        onClick={togglePopup('ANTENNA', setShowAntennaPopup, setAntennaClicked)}
                        disabled={antennaClicked}
                    >
                        <img src={SpacecraftIcons.ANTENNA} />
                    </button>
                </div>
            </div>

            {/* Popups */}
            {showLeftWingPopup && <LeftWingPopup onClose={togglePopup('LEFT_WING', setShowLeftWingPopup, setLeftWingClicked)} />}
            {showRightWingPopup && <RightWingPopup onClose={togglePopup('RIGHT_WING', setShowRightWingPopup, setRightWingClicked)} />}
            {showGammaRayPopup && <GammaRayPopup onClose={togglePopup('GAMMA_RAY', setShowGammaRayPopup, setGammaRayClicked)} />}
            {showNeutronSpectrometerPopup && <NeutronSpectrometerPopup onClose={togglePopup('NEUTRON_SPECTROMETER', setShowNeutronSpectrometerPopup, setNeutronSpectrometerClicked)} />}
            {showAntennaPopup && <AntennaPopup onClose={togglePopup('ANTENNA', setShowAntennaPopup, setAntennaClicked)} />}
            {showBusPopup && <BusPopup onClose={togglePopup('BUS', setShowBusPopup, setBusClicked)} />}
            {showInfo && <InfoPopup onClose={closeInfoPopup} />}
        </div>
    );
});

export default Interface;