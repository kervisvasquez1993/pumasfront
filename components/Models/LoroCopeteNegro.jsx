

import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export function LoroCopeteNegro({ modelo, ...props }) {
  if (modelo) {
    const { nodes, materials } = useGLTF(modelo);
  return (
    <group {...props} dispose={null}>
      <mesh geometry={nodes.LoraCopeteNegro.geometry} material={materials.model_Material_u1_v1} />
    </group>
  );
  }
  return null
}
