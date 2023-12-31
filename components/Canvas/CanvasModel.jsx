import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";


const CanvasModel = ({children, intensity, positionX, positionY, positionZ}) => {
  return (
    <div style={{ width: "100%", height: "100%" }} className="xl:py-10">
      <Canvas camera={{ zoom: 1, position: [positionX, positionY, positionZ] }}>
        <ambientLight intensity={intensity} />
        <Suspense fallback={null}>
        {children}
        </Suspense>
        <OrbitControls />
      </Canvas>
    </div>
  );
};

export default CanvasModel;
