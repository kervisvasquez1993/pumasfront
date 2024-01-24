
import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";



export function Caucel(props) {
  const { nodes, materials } = useGLTF("/models/Felinos/Caucel/Caucel.glb");
  return (
    <group {...props} dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Caucel.geometry}
        material={materials.Caucel}
        rotation={[0, -1.084, 0]}
      />
    </group>
  );
}

useGLTF.preload("/models/Felinos/Caucel/Caucel.glb");



