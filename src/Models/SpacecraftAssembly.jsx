import { useLoader } from "@react-three/fiber";
import { Suspense } from "react";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";

const SpacecraftAssembly = ({ position }) => {
    const busGLTF = useLoader(GLTFLoader, "/models/gltf-files/bus.gltf");
    const wingRGLTF = useLoader(GLTFLoader, "/models/gltf-files/RightWing.gltf");
    const wingLGLTF = useLoader(GLTFLoader, "/models/gltf-files/LeftWing.gltf");
    const antentnaGLTF = useLoader(GLTFLoader, "/models/gltf-files/Antenna.gltf");
    const neutronGLTF = useLoader(GLTFLoader, "/models/gltf-files/neutron_spectrometer.gltf");

    return (
        <Suspense fallback={null}>

            {/* RIGHT WING */}
            <primitive position={[1.37, -0.03, 0]} object={wingRGLTF.scene} scale={[1, 1, 1]} />
            {/* LEFT WING */}
            <primitive position={[-1.37, -0.03, -0.015]} rotation-y={-Math.PI / 1} object={wingLGLTF.scene} scale={[1, 1, 1]} />
            {/* BUS */}
            <primitive position={[0, 0, 0]} object={busGLTF.scene} scale={[1, 1, 1]} />
            {/* ANTENNA */}
            <primitive position={[0, 0.34, 0.043]} object={antentnaGLTF.scene} scale={[1, 1, 1]} />
            {/* Neutron Spectrometer */}
            <primitive position={[0.065, 0, 0.21]} rotation-z={Math.PI / 2} object={neutronGLTF.scene} scale={[0.06, 0.06, 0.06]} />
        </Suspense>
    );
};

export default SpacecraftAssembly;


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