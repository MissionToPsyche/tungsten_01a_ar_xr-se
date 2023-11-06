import React from "react";
import "./IntroPopup.css";

const IntroPopup = ({ onClose }) => {
  return (
    <div className="popup-overlay">
      <div className="popup-container">
        <img src="/assets/meteor.jpg" alt="Meteor"/>
        <h2>Welcome to the AR Game!</h2>
        <p>Instructions on how to play the game go here...</p>
        <button onClick={onClose}>Close</button>
      </div>
    </div>
  );
};

export default IntroPopup;
