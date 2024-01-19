import { Route, Routes } from "react-router-dom";
import { AudioProvider } from "./Context/AudioContext";
import { SpacecraftPartsVisibilityProvider } from "./Context/SpacecraftPartsVisibilityContext"; // Import the provider

import HomeViewContainer from "./Views/HomeView/HomeViewContainer";
import ARViewContainer from "./Views/ARView/ARViewContainer";
import HelpViewContainer from "./Views/HelpView/HelpViewContainer";
import SettingsViewContainer from "./Views/SettingsView/SettingsViewContainer";

import "./App.css";

function App() {
  return (
    <AudioProvider>
      <SpacecraftPartsVisibilityProvider> 
        <Routes>
          <Route path="/" element={<HomeViewContainer />} />
          <Route path="/ar" element={<ARViewContainer />} />
          <Route path="/help" element={<HelpViewContainer />} />
          <Route path="/settings" element={<SettingsViewContainer />} />
        </Routes>
      </SpacecraftPartsVisibilityProvider>
    </AudioProvider>
  );
}

export default App;
