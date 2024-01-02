import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";

// export function Chucuyo({ ...props }) {
//   const { nodes, materials } = useGLTF("/models/Birds/psitacidos/Chucuyo/Chucuyo.glb");
//   return (
//     <group {...props} dispose={null}>
//       <mesh geometry={nodes.Chucuyo.geometry} material={materials.amazon} />
//     </group>
//   );
// }

// useGLTF.preload("/models/Birds/psitacidos/Chucuyo/Chucuyo.glb");


export function Chucuyo(props) {
  const { nodes, materials } = useGLTF('/models/Birds/psitacidos/Chucuyo/Chucuyo.glb')
  return (
    <group {...props} dispose={null}>
      <mesh geometry={nodes.LoraCopeteRojo002.geometry} material={materials.Chucuyo} />
      <mesh geometry={nodes.LoraCopeteRojo002_1.geometry} material={materials.wood} />
    </group>
  )
}

useGLTF.preload('/models/Birds/psitacidos/Chucuyo/Chucuyo.glb')
