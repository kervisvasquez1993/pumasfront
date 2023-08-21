import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";

export function Puma({ modelo, ...props }) {
  if (modelo) {
    const { nodes, materials } = useGLTF(modelo);
    return (
      <group {...props} dispose={null}>
        <mesh geometry={nodes.Puma.geometry} material={materials.Puma} />
      </group>
    );
  }

  return null;
}
