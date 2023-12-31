/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.1.11 MonoAraña.gltf
*/

import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";

// export function MonoArana({  ...props }) {

//     const { nodes, materials } = useGLTF("/models/MonoArana.glb");
//     return (
//     <group {...props} dispose={null}>
//       <mesh geometry={nodes.Spider_Monkey.geometry} material={materials['12958_Spider_Monkey.001']} />
//     </group>
//   );

// }

// useGLTF.preload("/models/MonoArana.glb");

export function MonoArana(props) {
  const { nodes, materials } = useGLTF(
    "/models/Monos/MonoArana/MonoArana_01.glb"
  );
  return (
    <group {...props} dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Spider_Monkey_1.geometry}
        material={materials["12958_Spider_Monkey"]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Spider_Monkey_2.geometry}
        material={materials.Branch}
      />
    </group>
  );
}

useGLTF.preload("/models/Monos/MonoArana/MonoArana_01.glb");
