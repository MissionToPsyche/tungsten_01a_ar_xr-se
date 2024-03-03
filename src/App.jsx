import { Route, Routes } from "react-router-dom";
import { AudioProvider } from "./Context/AudioContext";

import HomeViewContainer from "./Views/HomeView/HomeViewContainer";
import ARViewContainer from "./Views/ARView/ARViewContainer";
import HelpViewContainer from "./Views/HelpView/HelpViewContainer";
import SettingsViewContainer from "./Views/SettingsView/SettingsViewContainer";
import TriviaContainer from "./Views/TriviaView/TriviaContainer";

import "./App.css";
import { SpacecraftProvider } from "./Context/SpacecraftContext";

function App() {
  return (
    <AudioProvider>
      <SpacecraftProvider>
      <Routes>
          <Route path="/" element={<HomeViewContainer />} />
          <Route path="/ar" element={<ARViewContainer />} />
          <Route path="/trivia" element={<TriviaContainer />} />
          <Route path="/help" element={<HelpViewContainer />} />
          <Route path="/settings" element={<SettingsViewContainer />} />
        </Routes>
      </SpacecraftProvider>
    </AudioProvider>
  );
}

export default App;
