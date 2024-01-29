import React, { useContext, useEffect } from 'react';
import { useLoader } from '@react-three/fiber';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import { SpacecraftComponents } from '../Context/CommonConstants';
import { SpacecraftContext } from '../Context/SpacecraftContext';

const SpacecraftAssembly = () => {
    const { activeComponents } = useContext(SpacecraftContext);

    const busGLTF = useLoader(GLTFLoader, SpacecraftComponents.BUS);
    const wingRGLTF = useLoader(GLTFLoader, SpacecraftComponents.RIGHT_WING);
    const wingLGLTF = useLoader(GLTFLoader, SpacecraftComponents.LEFT_WING);
    const antennaGLTF = useLoader(GLTFLoader, SpacecraftComponents.ANTENNA);
    const neutronGLTF = useLoader(GLTFLoader, SpacecraftComponents.NEUTRON_SPECTROMETER);
    const gammaRayGLTF = useLoader(GLTFLoader, SpacecraftComponents.GAMMA_RAY);

    
    const greyedOutIntensity = 0.15; 

    // Function to apply the greyed-out effect to a GLTF scene
    const applyGreyedOutEffect = (scene, componentName) => {
        if (!activeComponents[componentName]) {
            scene.traverse((child) => {
                if (child.isMesh) {
                    child.material.color.offsetHSL(0, 0, -greyedOutIntensity);
                }
            });
        }
    };

    // Apply the effect conditionally based on activeComponents
    useEffect(() => {
        applyGreyedOutEffect(busGLTF.scene, 'BUS');
        applyGreyedOutEffect(wingRGLTF.scene, 'RIGHT_WING');
        applyGreyedOutEffect(wingLGLTF.scene, 'LEFT_WING');
        applyGreyedOutEffect(antennaGLTF.scene, 'ANTENNA');
        applyGreyedOutEffect(neutronGLTF.scene, 'NEUTRON_SPECTROMETER');
        applyGreyedOutEffect(gammaRayGLTF.scene, 'GAMMA_RAY');
    }, [activeComponents, busGLTF, wingRGLTF, wingLGLTF, antennaGLTF, neutronGLTF, gammaRayGLTF]);

    // Define the static position for the mesh (the entire orbiter position)
    const position = [0, 0, 0];

    return (
        <mesh position={position}>
            {/* RIGHT WING */}
            <primitive 
                position={[1.37, -0.03, 0]} 
                object={wingRGLTF.scene} 
                scale={[1, 1, 1]}
            />
            {/* LEFT WING */}
            <primitive 
                position={[-1.37, -0.03, -0.015]} 
                rotation-y={-Math.PI / 1} 
                object={wingLGLTF.scene} 
                scale={[1, 1, 1]}
            />
            {/* BUS */}
            <primitive 
                position={[0, 0, 0]} 
                object={busGLTF.scene} 
                scale={[1, 1, 1]}
            />
            {/* ANTENNA */}
            <primitive 
                position={[0, 0.34, 0.03]} 
                object={antennaGLTF.scene} 
                scale={[1, 1, 1]}
            />
            {/* Neutron Spectrometer */}
            <primitive 
                position={[-.138, .45, -.23]}  
                object={neutronGLTF.scene} 
                scale={[1, 1, 1]}
            />
            {/* Gamma Ray */}
            <primitive 
                position={[-.143, .65, -.183]}  
                object={gammaRayGLTF.scene} 
                scale={[1, 1, 1]}
            />
        </mesh>
    );
};

export default SpacecraftAssembly;
