/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.1.11 OsoPerezosoDeDedos.gltf
*/

import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export function OsoPerezosoDeDedos({  ...props }) {
  
    const { nodes, materials } = useGLTF("/models/OsoPerezosoDeDedos.gltf");
    return (
    <group {...props} dispose={null}>
      <mesh geometry={nodes['13565_Linns_Sloth_v1_L2'].geometry} material={materials.Branch} />
      <mesh geometry={nodes['13565_Linns_Sloth_v1_L2_1'].geometry} material={materials.Linns_Sloth} />
    </group>
  );
  
}


useGLTF.preload("/models/OsoPerezosoDeDedos.gltf");