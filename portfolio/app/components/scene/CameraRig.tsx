"use client";

import { useFrame } from "@react-three/fiber";
import * as THREE from "three";

export default function CameraRig() {
  useFrame((state) => {
    const x = state.mouse.x * 1.5;
    const y = state.mouse.y * 0.8;

    state.camera.position.x = THREE.MathUtils.lerp(
      state.camera.position.x,
      x,
      0.05
    );

    state.camera.position.y = THREE.MathUtils.lerp(
      state.camera.position.y,
      y + 2,
      0.05
    );

    state.camera.lookAt(0, 0, 0);
  });

  return null;
}