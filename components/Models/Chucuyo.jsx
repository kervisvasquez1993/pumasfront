import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";

export function Chucuyo({ ...props }) {
  
    const { nodes, materials } = useGLTF(modelo);
    return (
      <group {...props} dispose={null}>
        <mesh geometry={nodes.Chucuyo.geometry} material={materials.amazon} />
      </group>
    );

}

useGLTF.preload("/models/Chucuyo.gltf");
