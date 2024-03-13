import React, { useContext, useEffect } from 'react';
import { useLoader } from '@react-three/fiber';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import { SpacecraftComponents } from '../Context/CommonConstants';
import { SpacecraftContext } from '../Context/SpacecraftContext';

//Loads the models into the scene, applies the opacity effect, and positions objects correctly
const SpacecraftAssembly = () => {
    const { activeComponents } = useContext(SpacecraftContext);
    //GLTF loader is used to load blender models in to be used for gameplay
    const busGLTF = useLoader(GLTFLoader, SpacecraftComponents.BUS);
    const wingRGLTF = useLoader(GLTFLoader, SpacecraftComponents.RIGHT_WING);
    const wingLGLTF = useLoader(GLTFLoader, SpacecraftComponents.LEFT_WING);
    const antennaGLTF = useLoader(GLTFLoader, SpacecraftComponents.ANTENNA);
    const neutronGLTF = useLoader(GLTFLoader, SpacecraftComponents.NEUTRON_SPECTROMETER);
    const gammaRayGLTF = useLoader(GLTFLoader, SpacecraftComponents.GAMMA_RAY);

    //logic for having the model be slightly transparent when initially loaded
    const applyOpacityChange = (scene, isActive) => {
        const inactiveOpacity = 0.2; // 0 = invisiible, 1 = visible 
        scene.traverse((child) => {
            if (child.isMesh) {
                child.material.transparent = true;
                child.material.opacity = isActive ? 1 : inactiveOpacity; 
            }
        });
    };
    
    

     // Effect hook for each component
     //Applies the logic for the opacitychange  
    useEffect(() => {
        if (busGLTF) applyOpacityChange(busGLTF.scene, activeComponents.BUS);
    }, [activeComponents.BUS, busGLTF]);

    useEffect(() => {
        if (wingRGLTF) applyOpacityChange(wingRGLTF.scene, activeComponents.RIGHT_WING);
    }, [activeComponents.RIGHT_WING, wingRGLTF]);

    useEffect(() => {
        if (wingLGLTF) applyOpacityChange(wingLGLTF.scene, activeComponents.LEFT_WING);
    }, [activeComponents.LEFT_WING, wingLGLTF]);

    useEffect(() => {
        if (antennaGLTF) applyOpacityChange(antennaGLTF.scene, activeComponents.ANTENNA);
    }, [activeComponents.ANTENNA, antennaGLTF]);

    useEffect(() => {
        if (neutronGLTF) applyOpacityChange(neutronGLTF.scene, activeComponents.NEUTRON_SPECTROMETER);
    }, [activeComponents.NEUTRON_SPECTROMETER, neutronGLTF]);

    useEffect(() => {
        if (gammaRayGLTF) applyOpacityChange(gammaRayGLTF.scene, activeComponents.GAMMA_RAY);
    }, [activeComponents.GAMMA_RAY, gammaRayGLTF]);


    // Define the static position for the mesh (the entire orbiter position)
    const position = [0, 0, 0];

    return (
        <mesh position={position}>
            {/* RIGHT WING */}
            <primitive 
                position={[1.37, -0.03, 0]} //Position where the object is loaded into the scene
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
