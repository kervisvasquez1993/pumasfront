import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";
import { PointLight } from "three";

export const Jaguar = (props) => {
  const { nodes, materials } = useGLTF("/models/Jaguar.glb");

  const lightRef = useRef();
  const intensity = 10000;

  return (
    <group {...props} dispose={null}>
      <pointLight
        ref={lightRef}
        position={[20, 20, 15]}
        intensity={intensity}
        castShadow={true}
      />
      <pointLight
        ref={lightRef}
        position={[-20, 20, 15]}
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
