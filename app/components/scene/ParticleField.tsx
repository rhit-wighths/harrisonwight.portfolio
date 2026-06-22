import { Points, PointMaterial } from "@react-three/drei";
import { useMemo } from "react";
import * as THREE from "three";

export default function ParticleField() {
  const particles = useMemo(() => {
    const temp = [];

    for (let i = 0; i < 1000; i++) {
      temp.push(
        (Math.random() - 0.5) * 20,
        (Math.random() - 0.5) * 20,
        (Math.random() - 0.5) * 20
      );
    }

    return new Float32Array(temp);
  }, []);

  return (
    <Points positions={particles} stride={3}>
      <PointMaterial
        transparent
        size={0.03}
        color="#6366F1"
        sizeAttenuation
        depthWrite={false}
      />
    </Points>
  );
}