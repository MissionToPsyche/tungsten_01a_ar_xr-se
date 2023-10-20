import React, { useState } from 'react';
import ToggleButton from './ToggleButton';

const SettingsViewContainer = () => {
  // State to manage music and sound effect toggles
  const [musicEnabled, setMusicEnabled] = useState(true);
  const [soundEffectsEnabled, setSoundEffectsEnabled] = useState(true);

  // State to manage credits modal visibility
  const [showCredits, setShowCredits] = useState(false);

  // Function to handle credits button click
  const handleCreditsClick = () => {
    setShowCredits(true);
  };

  const handleCloseCredits = () => {
    setShowCredits(false);
  };

  const authors = [
    { name: 'Edgar Hakobyan', email: 'ehakobya@asu.edu' },
    { name: 'Andres Morales De Jesus', email: 'amora131@asu.edu'},
    { name: 'Mia Harmon', email: 'mharmon7@asu.edu'},
    { name: 'Sarah Nicolas', email: 'senicola@asu.edu'}
  ];

  return (
    <div>
      <h1>Settings</h1>
      <ToggleButton
        label="Music"
        isChecked={musicEnabled}
        onChange={() => setMusicEnabled(prev => !prev)}
      />
      <ToggleButton
        label="Sound Effects"
        isChecked={soundEffectsEnabled}
        onChange={() => setSoundEffectsEnabled(prev => !prev)}
      />
      <button onClick={handleCreditsClick}>Credits</button>

      {/* Credits Modal */}
      {showCredits && (
        <div style={{
          position: 'fixed',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          backgroundColor: 'blue',
          padding: '20px',
          boxShadow: '0px 0px 10px rgba(0,0,0,0.1)'
        }}>
          <h2>Credits</h2>
          <p>This work was created in partial fulfillment of Arizona State University Capstone Course 401 & 402. The work is a result of the Psyche Student Collaborations component of NASA’s Psyche Mission (https://psyche.asu.edu). 
            “Psyche: A Journey to a Metal World” 01a_ar_xr-se is part of the NASA Discovery Program mission to solar system targets. Trade names and trademarks of ASU and NASA are used in this work for identification only. 
            Their usage does not constitute an official endorsement, either expressed or implied, by Arizona State University or National Aeronautics and Space Administration. 
            The content is solely the responsibility of the authors and does not necessarily represent the official views of ASU or NASA.
          </p>
          <h3>Authors:</h3>
          <ul>
            {authors.map((author, index) => (
              <li key={index}>
                {author.name} - {author.email}
              </li>
            ))}
          </ul>
         
          <button onClick={handleCloseCredits}>Close</button>
        </div>
      )}
    </div>
  );
};

export default SettingsViewContainer;
