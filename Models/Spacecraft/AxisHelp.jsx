import React from 'react'

const Axis = () => {
    return (
        <>
            <mesh>
                {/* X-AXIS */}
                <mesh>
                    <boxGeometry args={[5, 0.01, 0.01]} />
                    <meshStandardMaterial color={"red"} />
                </mesh>

                {/* Y-AXIS */}
                <mesh>
                    <boxGeometry args={[0.01, 5, 0.01]} />
                    <meshStandardMaterial color={"green"} />
                </mesh>

                {/* Z-AXIS */}
                <mesh>
                    <boxGeometry args={[0.01, 0.01, 5]} />
                    <meshStandardMaterial color={"blue"} />
                </mesh>
            </mesh>
        </>
    )
}

export default Axis