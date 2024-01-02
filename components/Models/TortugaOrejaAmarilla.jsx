import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";

export function TortugaOrejaAmarilla(props) {
  const { nodes, materials } = useGLTF(
    "/models/Tortugas/TortugaOrejaAmarilla/TortugaOrejaAmarilla.glb"
  );
  return (
    <group {...props} dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.TortugaOrejaAmarilla.geometry}
        material={materials.TortugaOrejaAmarilla}
      />
    </group>
  );
}

useGLTF.preload(
  "/models/Tortugas/TortugaOrejaAmarilla/TortugaOrejaAmarilla.glb"
);
