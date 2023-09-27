import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";

export function Venado(props) {
  const { nodes, materials } = useGLTF("/models/VenadoColaBlanca.glb");
  return (
    <group {...props} dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.VenadoColaBlanca.geometry}
        material={materials["12961_White_TailedDeer"]}
      />
    </group>
  );
}

useGLTF.preload("/models/VenadoColaBlanca.glb");