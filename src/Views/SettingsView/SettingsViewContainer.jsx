import React, { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AudioContext } from "../../Context/AudioContext.jsx";
import ToggleButton from "./ToggleButton";
import { BsFillArrowLeftCircleFill as BackArrow } from "react-icons/bs";
import "./SettingsStyles.css";
import { BUTTON_PRESS } from "../../Context/CommonConstants";
import Credits from "./Credits";

/*
  Settings View Main Container

  Displays Toggle Button for Music and Sound Effects, as well as a pupup for Credit information.

  AudioContext used to manage audio states, Credit information located in ./Credits.
*/

const SettingsViewContainer = () => {
  const navigate = useNavigate();

  // Manage music and sound effects
  const {
    isMusicPlaying,
    setIsMusicPlaying,
    soundEffectsEnabled,
    setSoundEffectsEnabled,
  } = useContext(AudioContext);

  // State to manage credits popup
  const [showCredits, setShowCredits] = useState(false);

  // Popup toggle function
  const togglePopup = (setPopupState) => () => setPopupState((prev) => !prev);

  // Function to toggle the music on or off
  const toggleMusic = () => {
    setIsMusicPlaying(!isMusicPlaying);
  };

  // Function to toggle sound effects on or off
  const toggleSoundEffects = () => {
    setSoundEffectsEnabled((prev) => !prev);
  };

  const playSound = () => {
    if (soundEffectsEnabled) {
      new Audio(BUTTON_PRESS).play();
    }
  };

  return (
    <div className="settings-container">
      <div>
        <button
          onClick={() => {
            playSound();
            navigate("/");
          }}
          className="back-button"
        >
          <BackArrow />
        </button>
      </div>
      <div className="settings-header-section">
        <h3>SETTINGS</h3>
      </div>
      <div className="toggle-button-section">
        <ToggleButton
          label="Music"
          isChecked={isMusicPlaying}
          onChange={() => {
            playSound();
            toggleMusic();
          }}
          className="toggle-button"
        />
        <ToggleButton
          label="Sound Effects"
          isChecked={soundEffectsEnabled}
          onChange={() => {
            playSound();
            toggleSoundEffects();
          }}
          className="toggle-button"
        />
      </div>
      <div className="credits-section">
        <button
          onClick={() => {
            playSound();
            togglePopup(setShowCredits)();
          }}
        >
          Credits
        </button>
      </div>
      {showCredits && (
        <Credits
          onClose={() => {
            playSound();
            togglePopup(setShowCredits)();
          }}
        />
      )}
    </div>
  );
};

export default SettingsViewContainer;
