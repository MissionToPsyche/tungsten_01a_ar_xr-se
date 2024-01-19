import { useLoader } from "@react-three/fiber";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { SpacecraftComponents } from "../Context/CommonConstants";
import { useSpacecraftPartsVisibility} from '../Context/SpacecraftPartsVisibilityContext';


const SpacecraftAssembly = ({ position }) => {
    const busGLTF = useLoader(GLTFLoader, SpacecraftComponents.BUS);
    const wingRGLTF = useLoader(GLTFLoader, SpacecraftComponents.RIGHT_WING);
    const wingLGLTF = useLoader(GLTFLoader, SpacecraftComponents.LEFT_WING);
    const antentnaGLTF = useLoader(GLTFLoader, SpacecraftComponents.ANTENNA);
    const neutronGLTF = useLoader(GLTFLoader, SpacecraftComponents.NEUTRON_SPECTROMETER);
    const gammaRayGLTF = useLoader(GLTFLoader, SpacecraftComponents.GAMMA_RAY);


    // Use useSpacecraftContext hook to access and modify  pieces states
    const { spacecraftPartsVisibility } = useSpacecraftContext();
 
    // Adjust the intensity to control the greyed-out effect
    const greyedOutIntensity = isGreyedOut ? 0.12 : 0; // Assuming 0 is not grey-out

    // Function to apply the greyed-out effect to a GLTF scene
    const applyGreyedOutEffect = (scene) => {
      scene.traverse((child) => {
          if (child.isMesh) {
              child.material.color.offsetHSL(0, 0, -greyedOutIntensity);
          }
      });
    };

    // Extra Info about effect hooks: https://legacy.reactjs.org/docs/hooks-overview.html
    // Effect hook to apply changes whenever the visibility state changes
    useEffect(() => {
      // Apply the effect to all loaded GLTF models
      applyGreyedOutEffect(busGLTF.scene, !spacecraftPartsVisibility.BUS);
      applyGreyedOutEffect(wingRGLTF.scene, !spacecraftPartsVisibility.RIGHT_WING);
      applyGreyedOutEffect(wingLGLTF.scene, !spacecraftPartsVisibility.LEFT_WING);
      applyGreyedOutEffect(antentnaGLTF.scene, !spacecraftPartsVisibility.ANTENNA);
      applyGreyedOutEffect(neutronGLTF.scene, !spacecraftPartsVisibility.NEUTRON_SPECTROMETER);
      applyGreyedOutEffect(gammaRayGLTF.scene, !spacecraftPartsVisibility.GAMMA_RAY);
  }, [spacecraftPartsVisibility]);

    return (
        <mesh position={position}>
            {/* RIGHT WING */}
            <primitive position={[1.37, -0.03, 0]} object={wingRGLTF.scene} scale={[1, 1, 1]} />
            {/* LEFT WING */}
            <primitive position={[-1.37, -0.03, -0.015]} rotation-y={-Math.PI / 1} object={wingLGLTF.scene} scale={[1, 1, 1]} />
            {/* BUS */}
            <primitive position={[0, 0, 0]} object={busGLTF.scene} scale={[1, 1, 1]} />
            {/* ANTENNA */}
            <primitive position={[0, 0.34, 0.03]} object={antentnaGLTF.scene} scale={[1, 1, 1]} />
            {/* Neutron Spectrometer */}
            <primitive position={[-.138, .45, -.23]}  object={neutronGLTF.scene} scale={[1, 1, 1]} />
            {/* Gamma Ray */}
            <primitive position={[-.143, .65, -.183]}  object={gammaRayGLTF.scene} scale={[1, 1, 1]} />
        </mesh>
    );
};


export default SpacecraftAssembly;


/*
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
*/

/*

import React, { useRef } from "react";
import { useGLTF, useAnimations } from "@react-three/drei";

export default function Model(props) {
  const group = useRef();
  const { nodes, materials, animations } = useGLTF("/models/bus.gltf");
  const { actions } = useAnimations(animations, group);
  return (
    <group ref={group} {...props} dispose={null}>
      <group scale={1.91}>
        <primitive object={nodes.root} />
        <skinnedMesh
          geometry={nodes.druid.geometry}
          material={materials.color_main}
          skeleton={nodes.druid.skeleton}
        />
      </group>
    </group>
  );
}

useGLTF.preload("/models/bus.gltf");

*/
