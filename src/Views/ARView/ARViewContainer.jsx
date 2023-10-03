import { Canvas } from "@react-three/fiber";
import { ARButton, XR } from "@react-three/xr";
import ARView from "./ARView";

const ARViewContainer = () => {
  return (
    <>
      <ARButton sessionInit={{
        requiredFeatures: ["hit-test"],
      }}/>
      <Canvas>
        <XR>
          <ARView />
        </XR>
      </Canvas>
    </>
  );
};

export default ARViewContainer;