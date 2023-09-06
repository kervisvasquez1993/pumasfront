
import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export function Jaguar({ modelo, ...props }) {
  
    const { nodes, materials } = useGLTF(modelo);
  return (
    <group {...props} dispose={null}>
      <mesh geometry={nodes.Jaguar.geometry} material={materials.Jaguar} />
    </group>
  )
  
  
}
