import React, { useRef, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { OrbitControls, Html } from "@react-three/drei";
import { useThree, useFrame } from "@react-three/fiber";
import { Interactive, useHitTest, useXR } from "@react-three/xr";
import * as THREE from 'three'; 

import { useARContext } from './Contexts/ARContext';
import SpacecraftAssembly from "../../Models/SpacecraftAssembly";
import Cube from "./Cube";
import { FaArrowAltCircleLeft, FaInfoCircle } from 'react-icons/fa';

const ARView = () => {
    const navigate = useNavigate();
    const arViewRef = useARContext();
    const reticleRef = useRef();
    const [models, setModels] = useState([]);
    const { xr, isPresenting } = useXR();
    const { scene, camera } = useThree(); 

    // Adjust camera position if not presenting
    useEffect(() => {
        if (!isPresenting) {
            camera.position.z = 3;
        }
    }, [isPresenting, camera]);

        // Load and set the space-themed background
    useEffect(() => {
        if (!isPresenting) {
            new THREE.TextureLoader().load('assets/space-background-360.jpg', (texture) => {
                texture.mapping = THREE.EquirectangularReflectionMapping;
                scene.background = texture;
                scene.environment = texture; // Set as the environment map
            });
        }
    }, [isPresenting, scene]);

    useHitTest((hitMatrix, hit) => {
        hitMatrix.decompose(
            reticleRef.current.position,
            reticleRef.current.quaternion,
            reticleRef.current.scale
        );
        reticleRef.current.rotation.set(-Math.PI / 2, 0, 0);
    });

    const placeModel = (e) => {
        const position = e.intersection.object.position.clone();
        const id = Date.now();
        setModels([...models, { position, id }]);
    };

    const invokeFunctionInARView = () => {
        if (isPresenting) {
            window.alert('Please Exit AR before going back');
        } else {
            navigate('/');
        }
    };

    // Attach the function to the ref for external access
    useEffect(() => {
        arViewRef.current = {
            invokeFunctionInARView,
        };
    }, [arViewRef, isPresenting]);

    return (
        <>
            <OrbitControls />
            <ambientLight />
            {isPresenting && models.map(({ position, id }) => <SpacecraftAssembly key={id} position={position} />)}
            {isPresenting && (
                <Interactive onSelect={placeModel}>
                    <mesh ref={reticleRef} rotation-x={-Math.PI / 2}>
                        <ringGeometry args={[0.1, 0.25, 32]} />
                        <meshStandardMaterial color={"white"} />
                    </mesh>
                </Interactive>
            )}
            {!isPresenting && <SpacecraftAssembly />}
        </>
    );
};

export default ARView;
