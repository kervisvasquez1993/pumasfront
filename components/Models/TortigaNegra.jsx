/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.1.11 TortugaNegra.gltf
*/

import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

// export function TortugaNegra({  ...props }) {
  
//     const { nodes, materials } = useGLTF("/models/TortugaNegra.glb");
//     return (
//     <group {...props} dispose={null}>
//       <mesh geometry={nodes.TortugaNegra.geometry} material={materials['13102_pondturtle']} />
//     </group>
//   );
  
// }

// useGLTF.preload("/models/TortugaNegra.gltf");

export function TortugaNegra(props) {
  const { nodes, materials } = useGLTF("/models/Tortugas/TortugaNegra/TortugaNegra.glb");
  return (
    <group {...props} dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.TortugaNegra.geometry}
        material={materials.TortugaNegra}
      />
    </group>
  );
}

useGLTF.preload("/models/Tortugas/TortugaNegra/TortugaNegra.glb");
