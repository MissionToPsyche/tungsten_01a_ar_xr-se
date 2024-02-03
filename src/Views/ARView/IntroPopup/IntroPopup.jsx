import React, { useContext } from 'react';
import "./IntroPopup.css";
import { AudioContext } from '../../../Context/AudioContext'; 
import { BUTTON_PRESS } from '../../../Context/CommonConstants';

const IntroPopup = ({ onClose }) => {
  const { soundEffectsEnabled } = useContext(AudioContext);

  const playSound = () => {
    if (soundEffectsEnabled) {
      new Audio(BUTTON_PRESS).play();
    }
  };

  const handleClose = () => {
    playSound();
    onClose();
  };

  return (
    <div className="intro-container">
      <div className="intro-background">
        <img className="intro-image" src="/assets/spacecraft.jpg" alt="Meteor"/> 
        <div className="intro-content">
          <h2>Welcome to the AR Game!</h2>
        
                
                Tap the “Enter AR” button located at the top of your screen to bring the orbiter to life. <br /> 
                Utilize your device’s camera to explore the psyche orbiter by physically moving around. <br />
                 
                Tap on the red tiles at the bottom of the screen to learn about each instrument and watch it light up on the Psyche orbiter.<br /> 
              
                Keep on clicking all of the pieces until the entire orbiter has been revealed!<br />
                <br />
         
        </div>
        <button className="intro-button" onClick={handleClose}>CLOSE</button>
      </div>
    </div>
  );
};

export default IntroPopup;

