import React, { Suspense } from "react";
import { Canvas } from "react-three-fiber";
import { Puma } from "../Models/Puma";
import { OrbitControls } from "@react-three/drei";

const PumasCanvas = () => {
  return (
    <div style={{width : "100%", height : "100%"}}>
      <Canvas camera={{zoom: 1 , position:[-4,4,13]}}>
        <ambientLight intensity={1.6} />
        <Suspense fallback={null} >
        <Puma />
        </Suspense>
        <OrbitControls/>
      </Canvas>
    </div>
  );
};

export default PumasCanvas;
