import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { BsFillArrowLeftCircleFill as BackArrow } from "react-icons/bs";
import { AudioContext } from "../../Context/AudioContext";
import { BUTTON_PRESS } from "../../Context/CommonConstants";
import "./HelpView.css";
import { popupText } from "../ARView/InfoPopups/InfoPopupContent";

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
    navigate("/");
  };

  return (
    <div className="view-container">
      <div>
        <button onClick={handleBack} className="back-button">
          <BackArrow />
        </button>
      </div>
      {/* Contents of help page */}
      <div className="text-container">
        <h1 className="title">HELP</h1>
        <p className="description">{popupText}</p>
      </div>
    </div>
  );
};

export default HelpViewContainer;
