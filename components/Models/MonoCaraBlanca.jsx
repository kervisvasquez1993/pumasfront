
import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

// export function MonoCaraBlanca({  ...props }) {
  
//     const { nodes, materials } = useGLTF("/models/MonoCraBlance.glb");
//     return (
//     <group {...props} dispose={null}>
//       <mesh geometry={nodes.MonoCaraBlanca.geometry} material={materials['12958_Spider_Monkey.002']} />
//     </group>
//   );
   
// }


useGLTF.preload("/models/MonoCraBlance.glb");

export function MonoCaraBlanca(props) {
  const { nodes, materials } = useGLTF("/models/Monos/MonoCaraBlanca/MonoCaraBlanca_01.glb");
  return (
    <group {...props} dispose={null}>
      <group position={[0.063, 0.124, -0.127]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["12958_Spider_Monkey_v1_l2002"].geometry}
          material={materials["12958_Spider_Monkey.002"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["12958_Spider_Monkey_v1_l2002_1"].geometry}
          material={materials.Branch}
        />
      </group>
    </group>
  );
}

useGLTF.preload("/models/Monos/MonoCaraBlanca/MonoCaraBlanca_01.glb");