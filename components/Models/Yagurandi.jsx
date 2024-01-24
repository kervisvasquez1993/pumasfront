
import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

// export function Yagurandi({  ...props }) {

//   const { nodes, materials } = useGLTF("/models/Yagurandi.glb");
//   return (
//     <group {...props} dispose={null}>
//       <mesh geometry={nodes.Yaguarundi.geometry} material={materials['Ocelot.001']} />
//     </group>
//   );

// }

// useGLTF.preload("/models/Yagurandi.glb");


export function Yagurandi(props) {
  const { nodes, materials } = useGLTF("/models/Felinos/Yagurandi/Yaguarundi_01.glb");
  return (
    <group {...props} dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Yaguarundi.geometry}
        material={materials.Yaguarundi}
      />
    </group>
  );
}

useGLTF.preload("/models/Felinos/Yagurandi/Yaguarundi_01.glb");

