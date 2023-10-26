import { Html, OrbitControls } from "@react-three/drei";
import { useThree } from "@react-three/fiber";
import { Interactive, useHitTest, useXR } from "@react-three/xr";
import { useRef, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import { useARContext } from './ARContext';
import Cube from "./Cube";
import './ARView.css';

import { FaArrowAltCircleLeft, FaInfoCircle } from 'react-icons/fa';

const ARView = () => {

    const navigate = useNavigate();
    const arViewRef = useARContext();
    const reticleRef = useRef();
    const [cubes, setCubes] = useState([]);
    const { xr, isPresenting } = useXR();

    useThree(({ camera }) => {
        if (!isPresenting) {
            camera.position.z = 3;
        }
    });

    useHitTest((hitMatrix, hit) => {
        hitMatrix.decompose(
            reticleRef.current.position,
            reticleRef.current.quaternion,
            reticleRef.current.scale
        );

        reticleRef.current.rotation.set(-Math.PI / 2, 0, 0);
    });

    const placeCube = (e) => {
        let position = e.intersection.object.position.clone();
        let id = Date.now();
        setCubes([...cubes, { position, id }]);
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
            {isPresenting &&
                cubes.map(({ position, id }) => {
                    return <Cube key={id} position={position} />;
                })}
            {isPresenting && (
                <Interactive onSelect={placeCube}>
                    <mesh ref={reticleRef} rotation-x={-Math.PI / 2}>
                        <ringGeometry args={[0.1, 0.25, 32]} />
                        <meshStandardMaterial color={"white"} />
                    </mesh>
                </Interactive>
            )}
            {!isPresenting && <Cube />}
        </>
    );
};

export default ARView;
