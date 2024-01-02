

import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";

// export function Grison({ ...props }) {
 
//     const { nodes, materials } = useGLTF("/models/Grison.gltf");
//     return (
//       <group {...props} dispose={null}>
//         <mesh geometry={nodes.Grison.geometry} material={materials.Grison} />
//       </group>
//     );
  

// }


// useGLTF.preload("/models/Grison.gltf");

export function Grison(props) {
  const { nodes, materials } = useGLTF("/models/Ungulados/Grison/Grison.glb");
  return (
    <group {...props} dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Grison.geometry}
        material={materials.Grison}
      />
    </group>
  );
}

useGLTF.preload("/models/Ungulados/Grison/Grison.glb");