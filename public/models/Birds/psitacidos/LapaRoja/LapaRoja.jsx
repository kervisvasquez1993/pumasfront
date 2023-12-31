/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.2.16 LapaRoja.glb 
*/

import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export function Model(props) {
  const { nodes, materials } = useGLTF('/LapaRoja.glb')
  return (
    <group {...props} dispose={null}>
      <mesh geometry={nodes.LapaRoja.geometry} material={materials.LapaRoja} />
    </group>
  )
}

useGLTF.preload('/LapaRoja.glb')
