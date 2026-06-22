"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import {
  Float,
  Environment,
  ContactShadows,
} from "@react-three/drei";
import * as THREE from "three";
import { useRef } from "react";

function Avatar() {
  const headRef = useRef<THREE.Mesh>(null!);

  useFrame((state) => {
    const mouseX = state.mouse.x;
    const mouseY = state.mouse.y;

    if (headRef.current) {
      headRef.current.rotation.y = THREE.MathUtils.lerp(
        headRef.current.rotation.y,
        mouseX * 0.5,
        0.08
      );

      headRef.current.rotation.x = THREE.MathUtils.lerp(
        headRef.current.rotation.x,
        -mouseY * 0.3,
        0.08
      );
    }
  });

  return (
    <Float speed={2} rotationIntensity={0.3} floatIntensity={0.8}>
      <group>
        {/* Head */}
        <mesh ref={headRef} position={[0, 0.4, 0]}>
          <sphereGeometry args={[1, 64, 64]} />
          <meshStandardMaterial color="#f0c9a4" />

          {/* Hair */}
          <mesh position={[0, 0.65, 0]}>
            <sphereGeometry args={[1.02, 64, 64, 0, Math.PI * 2, 0, 1]} />
            <meshStandardMaterial color="#4b2e1f" />
          </mesh>

          {/* Mustache */}
          <mesh position={[0, -0.2, 0.92]} scale={[0.45, 0.08, 0.08]}>
            <sphereGeometry args={[1, 32, 32]} />
            <meshStandardMaterial color="#3a2418" />
          </mesh>

          {/* Glasses Left */}
          <mesh position={[-0.32, 0.08, 0.88]}>
            <torusGeometry args={[0.18, 0.025, 16, 100]} />
            <meshStandardMaterial color="black" />
          </mesh>

          {/* Glasses Right */}
          <mesh position={[0.32, 0.08, 0.88]}>
            <torusGeometry args={[0.18, 0.025, 16, 100]} />
            <meshStandardMaterial color="black" />
          </mesh>

          {/* Bridge */}
          <mesh position={[0, 0.08, 0.88]} scale={[0.18, 0.02, 0.02]}>
            <boxGeometry args={[1, 1, 1]} />
            <meshStandardMaterial color="black" />
          </mesh>

          {/* Eyes */}
          <mesh position={[-0.2, 0.08, 0.95]}>
            <sphereGeometry args={[0.05, 16, 16]} />
            <meshStandardMaterial color="black" />
          </mesh>

          <mesh position={[0.2, 0.08, 0.95]}>
            <sphereGeometry args={[0.05, 16, 16]} />
            <meshStandardMaterial color="black" />
          </mesh>
        </mesh>

 {/* Body */}
        <mesh position={[0, -1.6, 0]}>
          <capsuleGeometry args={[0.7, 1.8, 8, 16]} />
          <meshStandardMaterial color="#111827" />
        </mesh>
      </group>
    </Float>
  );
}

export default function HeroAvatar() {
  return (
    <Canvas
      camera={{ position: [0, 0, 5], fov: 40 }}
      dpr={[1, 1.5]}
    >
      {/* Lighting */}
      <ambientLight intensity={0.7} />

      <directionalLight
        position={[5, 5, 5]}
        intensity={2}
        color="#6366F1"
      />

      <pointLight
        position={[-4, 2, 2]}
        intensity={1.5}
        color="#ffffff"
      />

      {/* Environment */}
      <Environment preset="city" />

      {/* Avatar */}
      <Avatar />

      {/* Ground shadow */}
      <ContactShadows
        position={[0, -3, 0]}
        opacity={0.35}
        scale={10}
        blur={2.5}
        far={4}
      />
    </Canvas>
  );
}