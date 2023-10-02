import { Route, Routes } from "react-router-dom";
import "./App.css";
import CubeContainer from "./Models/Components/Cube/CubeContainer";
import XrCubeContainer from "./Models/Components/Cube/XrCubeContainer";
import HomeViewContainer from "./Views/Home/HomeViewContainer";
import 'bootstrap/dist/css/bootstrap.css';

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomeViewContainer />} />
      <Route path="/cube" element={<CubeContainer />} />
      <Route path="/xr-cube" element={<XrCubeContainer />} />
    </Routes>
  );
}

export default App;