import { Route, Routes } from "react-router-dom";

import HomeViewContainer from "./Views/HomeView/HomeViewContainer";
import ARViewContainer from "./Views/ARView/ARViewContainer";
import HowToPlayContainer from "./Views/HowToPlayView/HowToPlayContainer";
import SettingsViewContainer from "./Views/SettingsView/SettingsViewContainer";

import 'bootstrap/dist/css/bootstrap.css';
import "./App.css";

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomeViewContainer />} />
      <Route path="/ar" element={<ARViewContainer />} />
      <Route path="/how" element={<HowToPlayContainer />} />
      <Route path="/settings" element={<SettingsViewContainer />} />
    </Routes>
  );
}

export default App;