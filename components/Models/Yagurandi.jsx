
import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export function Yagurandi({ modelo, ...props }) {

  const { nodes, materials } = useGLTF(modelo);
  return (
    <group {...props} dispose={null}>
      <mesh geometry={nodes.Yaguarundi.geometry} material={materials['Ocelot.001']} />
    </group>
  );

}
