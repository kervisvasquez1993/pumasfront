
import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export function LoroCopeteRojo(props) {
  const { nodes, materials } = useGLTF('/models/LoraCopeteRojo.gltf')
  return (
    <group {...props} dispose={null}>
      <mesh geometry={nodes.LoraCopeteRojo002.geometry} material={materials.wood} />
      <mesh geometry={nodes.LoraCopeteRojo002_1.geometry} material={materials['amazon.001']} />
    </group>
  )
}

useGLTF.preload('/models/LoraCopeteRojo.gltf')
