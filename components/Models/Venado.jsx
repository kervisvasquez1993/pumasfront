import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";

// export const  Venado= (props) =>  {
//   const { nodes, materials } = useGLTF("/models/VenadoColaBlanca.glb");
//   return (
//     <group {...props} dispose={null}>
//       <mesh
//         castShadow
//         receiveShadow
//         geometry={nodes.VenadoColaBlanca.geometry}
//         material={materials["12961_White_TailedDeer"]}
//       />
//     </group>
//   );
// }

// useGLTF.preload("/models/VenadoColaBlanca.glb");

export function Venado(props) {
  const { nodes, materials } = useGLTF("/models/Mustelidos/VenadoColaBlanca/VenadoColaBlanca_01.glb");
  return (
    <group {...props} dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes["White-Tailed_Deer"].geometry}
        material={materials["White-Tailed_Deer"]}
      />
    </group>
  );
}

useGLTF.preload("/models/Mustelidos/VenadoColaBlanca/VenadoColaBlanca_01.glb");
