import { Canvas } from "@react-three/fiber";
import { ARButton, XR } from "@react-three/xr";
import { useCallback, useState } from "react";
import { OverlayProvider } from "./XrOverlay/Overlay";

import Interface from "./XrOverlay/Interface";
import ARView from "./ARView";

import './XrOverlay/OverlayStyles.css'



const ARViewContainer = () => {
  const [overlayContent, setOverlayContent] = useState(null);

  let interfaceRef = useCallback((node) => {
    if (node !== null) {
      setOverlayContent(node);
    }
  });

  return (
    <>
      <OverlayProvider>
        <ARButton
          className="ar-button"
          sessionInit={{
            requiredFeatures: ["hit-test"],
            optionalFeatures: ["dom-overlay"],
            domOverlay: { root: overlayContent },
          }}
        />
        <Canvas>
          <XR>
            <ARView />
          </XR>
        </Canvas>
        <Interface ref={interfaceRef} />
      </OverlayProvider>
    </>
  );
};

export default ARViewContainer;
