import { Route, Routes } from "react-router-dom";

import HomeViewContainer from "./Views/HomeView/HomeViewContainer";
import PlayViewContainer from "./Views/PlayView/PlayViewContainer";

import 'bootstrap/dist/css/bootstrap.css';
import "./App.css";

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomeViewContainer />} />
      <Route path="/ar" element={<PlayViewContainer />} />
    </Routes>
  );
}

export default App;