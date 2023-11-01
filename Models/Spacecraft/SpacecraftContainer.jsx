import React from 'react'
import { OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { ARButton, XR } from "@react-three/xr";

import Wing from './Wing';
import Axis from './AxisHelp';

const SpacecraftContainer = () => {
    return (
        <>
            <>
                <ARButton />
                <Canvas>
                    <XR>
                        <OrbitControls />
                        <ambientLight />
                        <Axis />
                        <Wing x={1} y={0} z={0} rotationY={0} />
                        <Wing x={1} y={0} z={0} rotationY={180} />
                    </XR>
                </Canvas>
            </>

        </>
    )
}

export default SpacecraftContainer