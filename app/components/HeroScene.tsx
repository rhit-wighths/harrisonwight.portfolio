"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { Float, Html } from "@react-three/drei";
import { useRef, useState } from "react";
import * as THREE from "three";

function AnalyticsCore() {
  const meshRef = useRef<THREE.Mesh>(null!);

  const [hovered, setHovered] = useState(false);

  useFrame((state) => {
    if (!meshRef.current) return;

    meshRef.current.rotation.y += hovered ? 0.003 : 0.002;

    meshRef.current.rotation.x = THREE.MathUtils.lerp(
      meshRef.current.rotation.x,
      state.mouse.y * 0.3,
      0.03
    );

    const targetScale = hovered ? 1.12 : 1;

    meshRef.current.scale.lerp(
      new THREE.Vector3(targetScale, targetScale, targetScale),
      0.08
    );
  });

  return (
    <group>
      {/* Analytics Sphere */}
      <Float speed={1.5} rotationIntensity={0.2}>
        <mesh
          ref={meshRef}
          onPointerOver={() => {
            setHovered(true);
            document.body.style.cursor = "pointer";
          }}
          onPointerOut={() => {
            setHovered(false);
            document.body.style.cursor = "auto";
          }}
        >
          <icosahedronGeometry args={[1.5, 1]} />

          <meshBasicMaterial
            color={hovered ? "#8B5CF6" : "#6366F1"}
            wireframe
          />
        </mesh>
      </Float>

      {/* Question Div */}
      <Html position={[0, 0, 0]} center>
        <div
          className={`
            transition-all duration-300
            px-4 py-2 rounded-xl
            bg-black/70 backdrop-blur-md
            border border-indigo-500/20
            text-white text-sm whitespace-nowrap
            shadow-xl
            ${
              hovered
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-2 pointer-events-none"
            }
          `}
        >
          Which direction am I rotating?
        </div>
      </Html>

    </group>
  );
}

export default function HeroScene() {
  return (
    <Canvas
      camera={{ position: [0, 0, 6], fov: 45 }}
      dpr={[1, 1.5]}
    >
      {/* Simple lighting */}
      <ambientLight intensity={0.5} />

      <directionalLight
        position={[3, 3, 3]}
        intensity={1}
      />

      <AnalyticsCore />
    </Canvas>
  );
}


// "use client";

// import { Canvas, useFrame } from "@react-three/fiber";
// import { Float, OrbitControls, Text, MeshDistortMaterial } from "@react-three/drei";
// import { useRef } from "react";

// function FloatingSphere() {
//   return (
//     <Float speed={2} rotationIntensity={1.5} floatIntensity={2}>
//       <mesh>
//         <sphereGeometry args={[1.2, 64, 64]} />
//         <MeshDistortMaterial
//           color="#6366F1"
//           distort={0.4}
//           speed={2}
//           roughness={0}
//         />
//       </mesh>
//     </Float>
//   );
// }

// function NameText() {
//   return (
//     <Float speed={1.5}>
//       <Text
//         fontSize={0.5}
//         color="white"
//         position={[0, -2, 0]}
//         anchorX="center"
//         anchorY="middle"
//       >
//         Harrison Wight
//       </Text>
//     </Float>
//   );
// }

// function CameraMotion() {
//   const ref = useRef<any>();

//   useFrame((state) => {
//     const t = state.clock.getElapsedTime();
//     state.camera.position.x = Math.sin(t / 4) * 2;
//     state.camera.position.y = Math.sin(t / 6) * 1;
//     state.camera.lookAt(0, 0, 0);
//   });

//   return null;
// }

// export default function HeroScene() {
//   return (
//     <Canvas camera={{ position: [0, 0, 5], fov: 50 }}>
//       {/* Lighting */}
//       <ambientLight intensity={0.5} />
//       <directionalLight position={[5, 5, 5]} intensity={1} />

//       {/* Objects */}
//       <FloatingSphere />
//       <NameText />

//       {/* Motion */}
//       <CameraMotion />

//       {/* Controls (optional for dev, remove later) */}
//       <OrbitControls enableZoom={false} />
//     </Canvas>
//   );
// }