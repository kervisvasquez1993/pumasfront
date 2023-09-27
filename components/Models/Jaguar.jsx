import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";
import { PointLight } from "three";

export const Jaguar = (props) => {
  const { nodes, materials } = useGLTF("/models/Jaguar.glb");

  // Crea una luz
  const lightRef = useRef();
  const intensity = 10;

  return (
    <group {...props} dispose={null}>
      {/* Agrega la luz a la escena usando 'new' */}
      <pointLight
        ref={lightRef}
        position={[0, 1000, 0]}
        intensity={intensity}
        castShadow={true}
      />

      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Jaguar.geometry}
        material={materials.Jaguar}
      />
    </group>
  );
};

useGLTF.preload("/models/Jaguar.glb");
