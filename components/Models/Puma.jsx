import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";

// export function Puma({  ...props }) {
  
//     const { nodes, materials } = useGLTF("/models/Puma.glb");
//     return (
//       <group {...props} dispose={null}>
//         <mesh geometry={nodes.Puma.geometry} material={materials.Puma} />
//       </group>
//     );
 
// }

// useGLTF.preload("/models/Puma.glb");

export function Model(props) {
  const { nodes, materials } = useGLTF("/models/Felinos/Puma/Puma_01.glb");
  return (
    <group {...props} dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Puma.geometry}
        material={materials.Puma}
      />
    </group>
  );
}

useGLTF.preload("/models/Felinos/Puma/Puma_01.glb");
