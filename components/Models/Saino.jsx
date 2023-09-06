import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";

export function Saino({  ...props }) {
  
    const { nodes, materials } = useGLTF("/models/Saino.gltf");

    return (
      <group {...props} dispose={null}>
        <mesh
          geometry={nodes.Saino.geometry}
          material={materials.CollaredPeccary_mat}
        />
      </group>
    );

}
