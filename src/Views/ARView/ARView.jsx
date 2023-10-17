import { Html, OrbitControls } from "@react-three/drei";
import { useThree } from "@react-three/fiber";
import { Interactive, useHitTest, useXR } from "@react-three/xr";
import { useRef, useState } from "react";
import Cube from "./Cube";
import './ARView.css';

import { FaArrowAltCircleLeft, FaInfoCircle } from 'react-icons/fa';

const ARView = () => {

  const reticleRef = useRef();
  const [cubes, setCubes] = useState([]);
  const { isPresenting } = useXR();

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
      {isPresenting && (
        <Html>
          <div className="nav-container">
          
            <button className="nav-button"><FaArrowAltCircleLeft /></button>
            <button className="nav-button"><FaInfoCircle /></button>
          </div>
        </Html>
      )}

      {!isPresenting && <Cube />}
    </>
  );
};

export default ARView;
