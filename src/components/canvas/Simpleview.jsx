import React from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload } from "@react-three/drei";

const SimpleCanvas = () => {
  return (
    <Canvas
      frameloop="demand"
      shadows
      dpr={[1, 2]}
      camera={{ position: [20, 3, 5], fov: 25 }}
      gl={{ preserveDrawingBuffer: true }}
    >
      <hemisphereLight intensity={0.15} groundColor="black" />
      <spotLight
        position={[-20, 50, 10]}
        angle={0.12}
        penumbra={1}
        intensity={1}
        castShadow
        shadow-mapSize={1024}
      />
      <pointLight intensity={1} />
      <mesh>
        <boxGeometry args={[1, 1, 1]} />
        <meshStandardMaterial color={"#915EFF"} />
      </mesh>
      <OrbitControls enableZoom={false} />
      <Preload all />
    </Canvas>
  );
};

export default SimpleCanvas;
