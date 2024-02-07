import React from "react";
import "../GameInfoPopup/SatellitePiecesPopup.css";
import { popupText } from "./InfoPopupContent";
("./InfoPopupContent");

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
