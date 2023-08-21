import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";

export function Chucuyo({ modelo, ...props }) {
  if (modelo) {
    const { nodes, materials } = useGLTF(modelo);
    return (
      <group {...props} dispose={null}>
        <mesh geometry={nodes.Chucuyo.geometry} material={materials.amazon} />
      </group>
    );
  }
  return null;
}

useGLTF.preload("/models/Chucuyo.gltf");
