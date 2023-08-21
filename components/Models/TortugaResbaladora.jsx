/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.1.11 TortugaResbaladora.gltf
*/

import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export function TortugaResbaladora({ modelo, ...props }) {
  if (modelo) {
    const { nodes, materials } = useGLTF(modelo);
    return (
    <group {...props} dispose={null}>
      <mesh geometry={nodes.TortugaResbaladora.geometry} material={materials['13103_pearlturtle_body']} />
    </group>
  );
  }

  return null;
}