import React from 'react'
import { OrbitControls } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'
import { ARButton, XR } from '@react-three/xr'
import Cube from './Cube'


const ARViewContainer = () => {


    return (
        <>
            <ARButton />
            <Canvas>
                <XR>
                    <OrbitControls />
                    <ambientLight />
                    <Cube />
                </XR>
            </Canvas>
        </>
    )
}

export default ARViewContainer