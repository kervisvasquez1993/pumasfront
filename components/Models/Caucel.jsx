
import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";

export function Causel(props) {
  const { nodes, materials } = useGLTF("/models/Felinos/Caucel/Caucel.glb");
  return (
    <group {...props} dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Caucel.geometry}
        material={materials.Caucel}
        rotation={[0, -1.084, 0]}
        scale={0.8}
      />
    </group>
  );
}

useGLTF.preload("/models/Felinos/Caucel/Caucel.glb");


