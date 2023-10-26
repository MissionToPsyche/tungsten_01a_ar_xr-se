import { Canvas } from "@react-three/fiber";
import { ARButton, XR } from "@react-three/xr";
import { useCallback, useState } from "react";

import ARView from "./ARView";
import Interface from "./Interface";
import { ARContextProvider } from "./ARContext";


const ARViewContainer = () => {

    const [overlayContent, setOverlayContent] = useState(null);

    let interfaceRef = useCallback((node) => {
        if (node !== null) {
            setOverlayContent(node);
        }
    });

    return (
        <>
            <ARContextProvider>
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