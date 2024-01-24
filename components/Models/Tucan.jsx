import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";

// export const Tucan = (props) => {
//   const { nodes, materials } = useGLTF("/models/Tucan.glb");
//   return (
//     <group {...props} dispose={null}>
//       <mesh
//         castShadow
//         receiveShadow
//         geometry={nodes.Tucan.geometry}
//         material={materials["12260_Bird_Toucan"]}
//       />
//     </group>
//   );
// }

// useGLTF.preload("/models/Tucan.glb");


export function Tucan(props) {
  const { nodes, materials } = useGLTF("/models/Birds/Tucanes/Toucan.glb");
  return (
    <group {...props} dispose={null}>
      <mesh
        geometry={nodes.Bird_Toucan.geometry}
        material={materials.Bird_Toucan}
      />
    </group>
  );
}

useGLTF.preload("/models/Birds/Tucanes/Toucan.glb");