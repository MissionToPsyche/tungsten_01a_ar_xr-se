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

    // Popup toggle functions
    const togglePopup = (setPopupState) => () => setPopupState(prev => !prev);

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
                    <button onClick={handleBackButtonClick}>BACK</button>
                    <button onClick={showInfoPopup}>INFO</button>
                </div>
                <div className='button-container'>
                    <button className='select-button' onClick={togglePopup(setShowLeftWingPopup)}><FaHome /></button>
                    <button className='select-button' onClick={togglePopup(setShowRightWingPopup)}><FaInfoCircle /></button>
                    <button className='select-button' onClick={togglePopup(setShowGammaRayPopup)}><FaBackward /></button>
                    <button className='select-button' onClick={togglePopup(setShowNeutronSpectrometerPopup)}><FaHome /></button>
                    <button className='select-button' onClick={togglePopup(setShowAntennaPopup)}><FaHome /></button>
                    <button className='select-button' onClick={togglePopup(setShowBusPopup)}><FaInfoCircle /></button>
                </div>
            </div>
            {showLeftWingPopup && <LeftWingPopup onClose={togglePopup(setShowLeftWingPopup)} />}
            {showRightWingPopup && <RightWingPopup onClose={togglePopup(setShowRightWingPopup)} />}
            {showGammaRayPopup && <GammaRayPopup onClose={togglePopup(setShowGammaRayPopup)} />}
            {showNeutronSpectrometerPopup && <NeutronSpectrometerPopup onClose={togglePopup(setShowNeutronSpectrometerPopup)} />}
            {showAntennaPopup && <AntennaPopup onClose={togglePopup(setShowAntennaPopup)} />}
            {showBusPopup && <BusPopup onClose={togglePopup(setShowBusPopup)} />}
            {showInfo && <GameInfoPopup onClose={closeInfoPopup} />}
        </div>
    );
});

export default Interface;
