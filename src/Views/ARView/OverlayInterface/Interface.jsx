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
    const [buttonClicked, setButtonClicked] = useState({
        LEFT_WING: false,
        RIGHT_WING: false,
        GAMMA_RAY: false,
        NEUTRON_SPECTROMETER: false,
        ANTENNA: false,
        BUS: false
    });

    // Modified Popup toggle functions
    const togglePopup = (componentName) => () => {
        playSound();
        setButtonClicked(prevState => ({
            ...prevState,
            [componentName]: true
        }));
        activateComponent(componentName, true);
        console.log("Active Components:", activeComponents);
        console.log('Toggled, button ' + componentName)

        // Update corresponding popup state
        switch (componentName) {
            case 'LEFT_WING':
                setShowLeftWingPopup(true);
                break;
            case 'RIGHT_WING':
                setShowRightWingPopup(true);
                break;
            case 'GAMMA_RAY':
                setShowGammaRayPopup(true);
                break;
            case 'NEUTRON_SPECTROMETER':
                setShowNeutronSpectrometerPopup(true);
                break;
            case 'ANTENNA':
                setShowAntennaPopup(true);
                break;
            case 'BUS':
                setShowBusPopup(true);
                break;
            default:
                break;
        }
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

    const allComponentsActivated = () => {
        const requiredComponents = ['LEFT_WING', 'RIGHT_WING', 'GAMMA_RAY', 'NEUTRON_SPECTROMETER', 'ANTENNA', 'BUS'];
        return requiredComponents.every(component => activeComponents[component]);
    };

    // Function to restart/play again
    const handleRestart = () => {
        console.log('Restarting...');
        playSound();
        // Reload the page to restart the game
        window.location.reload();
    };

    // Function to navigate to the Psyche website 
    const handleGoToWebsite = () => {
        playSound();
        window.location.href = 'https://psyche.asu.edu/mission/the-spacecraft/';
    };



    return (
        <div id='overlay-content' ref={ref}>
            <div className='dom-container'>
                <div className='nav-container'>
                    <button className='return-home-button' onClick={handleBackButtonClick}><BackArrow /></button>
                    <button className='info-button' onClick={showInfoPopup}><InfoCircle /></button>
                </div>

                {/* Conditionally render buttons if all components are NOT activated */}
                {!allComponentsActivated() && (
                    <div className='button-container'>
                        {/* BUS button */}
                        <button
                            className={`select-button ${buttonClicked.BUS ? 'button-clicked' : ''}`}
                            onClick={togglePopup('BUS')}
                            disabled={buttonClicked.BUS}
                        >
                            <img src={SpacecraftIcons.BUS} />
                        </button>

                        {/* LEFT WING button */}
                        <button
                            className={`select-button ${buttonClicked.LEFT_WING ? 'button-clicked' : ''}`}
                            onClick={togglePopup('LEFT_WING')}
                            disabled={buttonClicked.LEFT_WING}
                        >
                            <img src={SpacecraftIcons.LEFT_WING} />
                        </button>

                        {/* RIGHT WING button */}
                        <button
                            className={`select-button ${buttonClicked.RIGHT_WING ? 'button-clicked' : ''}`}
                            onClick={togglePopup('RIGHT_WING')}
                            disabled={buttonClicked.RIGHT_WING}
                        >
                            <img src={SpacecraftIcons.RIGHT_WING} />
                        </button>

                        {/* GAMMA RAY button */}
                        <button
                            className={`select-button ${buttonClicked.GAMMA_RAY ? 'button-clicked' : ''}`}
                            onClick={togglePopup('GAMMA_RAY')}
                            disabled={buttonClicked.GAMMA_RAY}
                        >
                            <img src={SpacecraftIcons.GAMMA_RAY} />
                        </button>

                        {/* NEUTRON SPECTROMETER button */}
                        <button
                            className={`select-button ${buttonClicked.NEUTRON_SPECTROMETER ? 'button-clicked' : ''}`}
                            onClick={togglePopup('NEUTRON_SPECTROMETER')}
                            disabled={buttonClicked.NEUTRON_SPECTROMETER}
                        >
                            <img src={SpacecraftIcons.NEUTRON_SPECTROMETER} />
                        </button>

                        {/* ANTENNA button */}
                        <button
                            className={`select-button ${buttonClicked.ANTENNA ? 'button-clicked' : ''}`}
                            onClick={togglePopup('ANTENNA')}
                            disabled={buttonClicked.ANTENNA}
                        >
                            <img src={SpacecraftIcons.ANTENNA} />
                        </button>
                    </div>
                )}

                {/* Conditionally render new buttons if all components are activated */}
                {allComponentsActivated() && (
                    <div className="new-button-container">
                        <button onClick={handleRestart} className="restart-button">RESTART</button>
                        <button onClick={handleGoToWebsite} className="go-to-website-button">VIEW WEBSITE</button>
                    </div>
                )}

            </div>

            {/* Popups */}
            {showLeftWingPopup && <LeftWingPopup onClose={() => setShowLeftWingPopup(false)} />}
            {showRightWingPopup && <RightWingPopup onClose={() => setShowRightWingPopup(false)} />}
            {showGammaRayPopup && <GammaRayPopup onClose={() => setShowGammaRayPopup(false)} />}
            {showNeutronSpectrometerPopup && <NeutronSpectrometerPopup onClose={() => setShowNeutronSpectrometerPopup(false)} />}
            {showAntennaPopup && <AntennaPopup onClose={() => setShowAntennaPopup(false)} />}
            {showBusPopup && <BusPopup onClose={() => setShowBusPopup(false)} />}
            {showInfo && <InfoPopup onClose={closeInfoPopup} />}
        </div>
    );
});

export default Interface;
