import React, { useState } from 'react';
import ToggleButton from './ToggleButton';

const SettingsViewContainer = () => {
  // State to manage music and sound effect toggles
  const [musicEnabled, setMusicEnabled] = useState(true);
  const [soundEffectsEnabled, setSoundEffectsEnabled] = useState(true);

  // Function to handle credits button click
  const handleCreditsClick = () => {
    // TODO: Add modal or separate route for credits
    // For now, just use window.alert here
    window.alert('Credits: Add credits information here.');
  };

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
    </div>
  );
};

export default SettingsViewContainer;
