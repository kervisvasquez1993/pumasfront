
import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export function MonoCaraBlanca({ modelo, ...props }) {
  if (modelo) {
    const { nodes, materials } = useGLTF(modelo);
    return (
    <group {...props} dispose={null}>
      <mesh geometry={nodes.MonoCaraBlanca.geometry} material={materials['12958_Spider_Monkey.002']} />
    </group>
  );
    }
    return null;
}
