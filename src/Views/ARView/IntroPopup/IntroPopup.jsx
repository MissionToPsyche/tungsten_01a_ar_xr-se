import React from "react";
import "./IntroPopup.css";

const IntroPopup = ({ onClose }) => {
  return (
    <div className="popup-container">
      <div className="popup-background">
        <img className="popup-image" src="/assets/meteor.jpg" alt="Meteor"/> 
        <div className="popup-content">
          <h2>Welcome to the AR Game!</h2>
          <p>Instructions on how to play the game go here...</p>
        </div>
        <button className="popup-button" onClick={onClose}>CLOSE</button>
      </div>
    </div>
  );
};

export default IntroPopup;
