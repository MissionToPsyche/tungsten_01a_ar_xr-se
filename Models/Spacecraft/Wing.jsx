import React from 'react'
import { useRef } from "react";

const LeftWing = ({ x, y, z, rotationY }) => {

    const bodyRef = useRef();

    return (
        <>
            <mesh ref={bodyRef} rotation-y={[rotationY * (Math.PI / 180)]}>
                <mesh position-x={x + 0}>
                    <boxGeometry args={[0.1, 0.1, 0.3]} />
                    <meshStandardMaterial color={"red"} />
                </mesh>
                <mesh position-x={x + 0.45} position-z={z + 0.35} rotation-y={[Math.PI / 3]}>
                    <boxGeometry args={[0.1, 0.1, 1]} />
                    <meshStandardMaterial color={"blue"} />
                </mesh>
                <mesh position-x={x + 0.45} position-z={z + -0.35} rotation-y={[-Math.PI / 3]}>
                    <boxGeometry args={[0.1, 0.1, 1]} />
                    <meshStandardMaterial color={"green"} />
                </mesh>
                <mesh position-x={x + 0.9}>
                    <boxGeometry args={[0.1, 0.1, 1.3]} />
                    <meshStandardMaterial color={"cyan"} />
                </mesh>
                <mesh position-x={x + 1.95}>
                    <boxGeometry args={[2, 0.1, 1.3]} />
                    <meshStandardMaterial color={"orange"} />
                </mesh>
                <mesh position-x={x + 3.6}>
                    <boxGeometry args={[1.3, 0.1, 1.3]} />
                    <meshStandardMaterial color={"bage"} />
                </mesh>
                <mesh position-x={x + 5.25}>
                    <boxGeometry args={[2, 0.1, 1.3]} />
                    <meshStandardMaterial color={"yellow"} />
                </mesh>
                <mesh position-x={x + 3.6} position-z={z + 1.65} rotation-y={[Math.PI / 2]}>
                    <boxGeometry args={[2, 0.1, 1.3]} />
                    <meshStandardMaterial color={"magenta"} />
                </mesh>
                <mesh position-x={x + 3.6} position-z={z + -1.65} rotation-y={[Math.PI / 2]}>
                    <boxGeometry args={[2, 0.1, 1.3]} />
                    <meshStandardMaterial color={"brown"} />
                </mesh>
            </mesh>

        </>
    )
}

export default LeftWing;