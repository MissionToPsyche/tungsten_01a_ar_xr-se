import { OrbitControls } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { useRef } from "react";

const Cube = ({ position }) => {
  const cubeRef = useRef();

  useFrame((state) => {
    cubeRef.current.rotation.y += 0.01;
  });

  return (
    <>
      <OrbitControls />
      <ambientLight />
      <mesh ref={cubeRef} position={position}>
        <boxGeometry args={[0.5, 0.5, 0.5]} />
        <meshStandardMaterial color={"mediumpurple"} />
      </mesh>
    </>
  );
};

export default Cube;