import { Canvas } from "@react-three/fiber";
import { ARButton, XR } from "@react-three/xr";
import { Leva } from "leva";
import { useCallback, useState } from "react";

import ARView from "./ARView";
import Interface from "./Interface";


const ARViewContainer = () => {

    // const [overlayContent, setOverlayContent] = useState(null);

    // let interfaceRef = useCallback((node) => {
    //     if (node !== null) {
    //         setOverlayContent(node);
    //     }
    // });

    return (
        <>
            <ARButton
                className="ar-button"
                sessionInit={{
                    requiredFeatures: ["hit-test"],
                    optionalFeatures: ["dom-overlay"],
                    // domOverlay: { root: overlayContent },
                }}
            />
            <Canvas>
                <XR>
                    <ARView />
                </XR>
            </Canvas>
            <Interface />
        </>
    );
};

export default ARViewContainer;