import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";

export function Saino({ modelo, ...props }) {
  if (modelo) {
    const { nodes, materials } = useGLTF(modelo);

    return (
      <group {...props} dispose={null}>
        <mesh
          geometry={nodes.Saino.geometry}
          material={materials.CollaredPeccary_mat}
        />
      </group>
    );
  }
  return null;
}
