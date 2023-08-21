

import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";

export function Grison({ modelo, ...props }) {
  if (modelo) {
    const { nodes, materials } = useGLTF(modelo);
    return (
      <group {...props} dispose={null}>
        <mesh geometry={nodes.Grison.geometry} material={materials.Grison} />
      </group>
    );
  }
  return null;
}
