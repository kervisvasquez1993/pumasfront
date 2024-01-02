
import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

// export function LoroCopeteRojo({  ...props }) {
  
//     const { nodes, materials } = useGLTF("/models/LoraCopeteRojo.glb");
//     return (
//     <group {...props} dispose={null}>
//       <mesh geometry={nodes.LoraCopeteRojo002.geometry} material={materials.wood} />
//       <mesh geometry={nodes.LoraCopeteRojo002_1.geometry} material={materials['amazon.001']} />
//     </group>
//   );
 
// }


// useGLTF.preload("/models/LoraCopeteRojo.glb");


export function  LoroCopeteRojo({  ...props }) {
  const { nodes, materials } = useGLTF("/models/Birds/psitacidos/LoraCopeteRojo/LoraCopeteRojo.glb");
  return (
    <group {...props} dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.LoraCopeteRojo_1.geometry}
        material={materials.wood}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.LoraCopeteRojo_2.geometry}
        material={materials.LoraCopeteRojo}
      />
    </group>
  );
}

useGLTF.preload("/models/Birds/psitacidos/LoraCopeteRojo/LoraCopeteRojo.glb");

