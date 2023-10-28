import { Canvas } from "@react-three/fiber";
import { ARButton, XR } from "@react-three/xr";
import { useCallback, useState } from "react";

import ARView from "./ARView";
import Interface from "./Interface";
import IntroPopup from "./IntroPopup/IntroPopup";
import { ARContextProvider } from "./ARContext";

const ARViewContainer = () => {

    const [overlayContent, setOverlayContent] = useState(null);
    const [showIntro, setShowIntro] = useState(true);

    let interfaceRef = useCallback((node) => {
        if (node !== null) {
            setOverlayContent(node);
        }
    });

    const handleCloseIntro = () => {
        setShowIntro(false);
      }

      return (
        <>
            <ARContextProvider>
                {showIntro && <IntroPopup onClose={handleCloseIntro} />}
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
            </ARContextProvider>
        </>
      );
    };
    

export default ARViewContainer;