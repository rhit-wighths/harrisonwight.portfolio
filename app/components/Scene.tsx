"use client";

import { Canvas } from "@react-three/fiber";
// import { Fallback } from "next/dist/client/components/segment-cache/cache-map";

export default function Scene() {
  return (
    <Canvas style={{ height: 300 }} fallback={<div>Loading...</div>}>
      <ambientLight intensity={0.1}/>
      <directionalLight color="red" position={[0, 0, 5]} intensity={0.5} />
      <mesh>
        <boxGeometry args={[2, 2, 2]} />
        <meshStandardMaterial color="white" />
      </mesh>
    </Canvas>
  );
}