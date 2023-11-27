import React, { forwardRef, useState } from 'react';
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

const Interface = forwardRef((props, ref) => {
    const navigate = useNavigate();
    const arViewRef = useARContext();

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

    // Popup toggle functions
    const togglePopup = (setPopupState, setButtonClicked) => () => {
        setPopupState(prev => !prev);
        setButtonClicked(true);
    };

    // Handle back button click
    const handleBackButtonClick = () => {
        arViewRef.current?.invokeFunctionInARView();
    };

    // Info popup handlers
    const showInfoPopup = () => {
        console.log('Info Popup Opened');
        setShowInfo(true);
    };

    const closeInfoPopup = () => {
        console.log('Info Popup Closed');
        setShowInfo(prev => !prev);
    };

    return (
        <div id='overlay-content' ref={ref}>

            <div className='dom-container'>
                <div className='nav-container'>
                    <button className='return-home-button' onClick={handleBackButtonClick}><BackArrow /></button>
                    <button className='info-button' onClick={showInfoPopup}><InfoCircle /></button>
                </div>

                <div className='button-container'>
                    <button
                        className={`select-button ${busClicked ? 'button-clicked' : ''}`}
                        onClick={togglePopup(setShowBusPopup, setBusClicked)}
                        disabled={busClicked}
                    >
                        <img src={SpacecraftIcons.BUS} />
                    </button>

                    <button
                        className={`select-button ${leftWingClicked ? 'button-clicked' : ''}`}
                        onClick={togglePopup(setShowLeftWingPopup, setLeftWingClicked)}
                        disabled={leftWingClicked}
                    >
                        <img src={SpacecraftIcons.LEFT_WING} />
                    </button>

                    <button
                        className={`select-button ${rightWingClicked ? 'button-clicked' : ''}`}
                        onClick={togglePopup(setShowRightWingPopup, setRightWingClicked)}
                        disabled={rightWingClicked}
                    >
                        <img src={SpacecraftIcons.RIGHT_WING} />
                    </button>

                    <button
                        className={`select-button ${gammaRayClicked ? 'button-clicked' : ''}`}
                        onClick={togglePopup(setShowGammaRayPopup, setGammaRayClicked)}
                        disabled={gammaRayClicked}
                    >
                        <img src={SpacecraftIcons.GAMMA_RAY} />
                    </button>

                    <button
                        className={`select-button ${neutronSpectrometerClicked ? 'button-clicked' : ''}`}
                        onClick={togglePopup(setShowNeutronSpectrometerPopup, setNeutronSpectrometerClicked)}
                        disabled={neutronSpectrometerClicked}
                    >
                        <img src={SpacecraftIcons.NEUTRON_SPECTROMETER} />
                    </button>

                    <button
                        className={`select-button ${antennaClicked ? 'button-clicked' : ''}`}
                        onClick={togglePopup(setShowAntennaPopup, setAntennaClicked)}
                        disabled={antennaClicked}
                    >
                        <img src={SpacecraftIcons.ANTENNA} />
                    </button>


                </div>
            </div>

            {showLeftWingPopup && <LeftWingPopup onClose={togglePopup(setShowLeftWingPopup, setLeftWingClicked)} />}
            {showRightWingPopup && <RightWingPopup onClose={togglePopup(setShowRightWingPopup, setRightWingClicked)} />}
            {showGammaRayPopup && <GammaRayPopup onClose={togglePopup(setShowGammaRayPopup, setGammaRayClicked)} />}
            {showNeutronSpectrometerPopup && <NeutronSpectrometerPopup onClose={togglePopup(setShowNeutronSpectrometerPopup, setNeutronSpectrometerClicked)} />}
            {showAntennaPopup && <AntennaPopup onClose={togglePopup(setShowAntennaPopup, setAntennaClicked)} />}
            {showBusPopup && <BusPopup onClose={togglePopup(setShowBusPopup, setBusClicked)} />}
            {showInfo && <GameInfoPopup onClose={closeInfoPopup} />}
        </div>
    );
});

export default Interface;