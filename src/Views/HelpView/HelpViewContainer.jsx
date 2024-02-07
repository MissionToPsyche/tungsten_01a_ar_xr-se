import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { BsFillArrowLeftCircleFill as BackArrow } from "react-icons/bs";
import { AudioContext } from "../../Context/AudioContext";
import { BUTTON_PRESS } from '../../Context/CommonConstants'; 
import { InstructionPictures } from "../../Context/CommonConstants";
import { popupText } from "../ARView/InfoPopups/InfoPopupContent";
import "./HelpView.css";

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
      <div className="text-container">
        <h1 className="title">HELP</h1>
        <p className="description">
          {popupText}
          <div className="popup-image">
            <img src={InstructionPictures.TILE} />
          </div>
          <div className="popup-image">
            <img src={InstructionPictures.SHADE_COLOR} />
          </div>
        </p>
      </div>
    </div>
  );
};
export default HelpViewContainer;
