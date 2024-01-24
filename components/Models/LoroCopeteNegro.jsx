

import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

// export function LoroCopeteNegro({  ...props }) {
 
//     const { nodes, materials } = useGLTF("/models/LoroCopeteNegro.glb");
//   return (
//     <group {...props} dispose={null}>
//       <mesh geometry={nodes.LoraCopeteNegro.geometry} material={materials.model_Material_u1_v1} />
//     </group>
//   );
  
// }


// useGLTF.preload("/models/LoroCopeteNegro.glb");

export function LoroCopeteNegro({...props}) {
  const { nodes, materials } = useGLTF("/models/Birds/psitacidos/LoraCopeteNegro/LoraCopeteNegro.glb");
  return (
    <group {...props} dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.LoraCopeteNegro.geometry}
        material={materials.LoraCopeteNegro}
      />
    </group>
  );
}

useGLTF.preload("/models/Birds/psitacidos/LoraCopeteNegro/LoraCopeteNegro.glb");