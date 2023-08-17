
import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export function Yagurandi(props) {
  const { nodes, materials } = useGLTF('/models/Yagurandi.gltf')
  return (
    <group {...props} dispose={null}>
      <mesh geometry={nodes.Yaguarundi.geometry} material={materials['Ocelot.001']} />
    </group>
  )
}

useGLTF.preload('/models/Yagurandi.gltf')
