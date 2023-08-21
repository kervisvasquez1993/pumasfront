
import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export function LoroCopeteRojo({ modelo, ...props }) {
  if (modelo) {
    const { nodes, materials } = useGLTF(modelo);
    return (
    <group {...props} dispose={null}>
      <mesh geometry={nodes.LoraCopeteRojo002.geometry} material={materials.wood} />
      <mesh geometry={nodes.LoraCopeteRojo002_1.geometry} material={materials['amazon.001']} />
    </group>
  );
    }
    return null;
}
