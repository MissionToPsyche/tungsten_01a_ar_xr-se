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
          <p>Instructions on how to play the game go here...
          Instructions on how to play the game go here...
          Instructions on how to play the game go here...
          Instructions on how to play the game go here...
          Instructions on how to play the game go here...
          Instructions on how to play the game go here...
          Instructions on how to play the game go here...
          Instructions on how to play the game go here...
          Instructions on how to play the game go here...
          Instructions on how to play the game go here...
          </p>
        </div>
        <button className="intro-button" onClick={handleClose}>CLOSE</button>
      </div>
    </div>
  );
};

export default IntroPopup;
