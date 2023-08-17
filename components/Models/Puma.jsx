

import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export function Puma(props) {
  const { nodes, materials } = useGLTF('/models/Puma.gltf')
  return (
    <group {...props} dispose={null}>
      <mesh geometry={nodes.Puma.geometry} material={materials.Puma} />
    </group>
  )
}

useGLTF.preload('/models/Puma.gltf')
