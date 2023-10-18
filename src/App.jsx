import { Route, Routes } from "react-router-dom";

import HomeViewContainer from "./Views/HomeView/HomeViewContainer";
import ARViewContainer from "./Views/ARView/ARViewContainer";
import HelpViewContainer from "./Views/HelpView/HelpViewContainer";

import 'bootstrap/dist/css/bootstrap.css';
import "./App.css";

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomeViewContainer />} />
      <Route path="/ar" element={<ARViewContainer />} />
      <Route path="/help" element={<HelpViewContainer />} />
    </Routes>
  );
}

export default App;