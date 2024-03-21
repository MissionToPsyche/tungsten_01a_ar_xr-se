import React from "react";
import "../GameInfoPopup/SatellitePiecesPopup.css";
import { popupText } from "./InfoPopupContent";
("./InfoPopupContent");
import HelpViewContainer from "../../HelpView/HelpViewContainer";

//Info pop-up on the AR View that is opened if the user presses the "i" in the top right corner. Explains to user how to play the game. 
//Includes a title, explanation text, and a button to close
const InfoPopup = ({ onClose }) => {
  return (
    <div className="popup-container">
      <div className="info-popup-content">
        <div className="popup-title">HELP</div>
        <div className="popup-text">{popupText}</div>
        <button className="popup-button" onClick={onClose}>
          CLOSE
        </button>
      </div>
    </div>
  );
};
export default InfoPopup;
