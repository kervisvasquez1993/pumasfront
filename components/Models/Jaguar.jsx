
import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export function Jaguar({ ...props }) {

  const { nodes, materials } = useGLTF("/models/Jaguar.gltf");
  return (
    <group {...props} dispose={null}>
      <mesh geometry={nodes.Jaguar.geometry} material={materials.Jaguar} />
    </group>
  )


}
