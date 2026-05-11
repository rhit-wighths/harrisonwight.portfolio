import { Html } from "@react-three/drei";

export default function FloatingPanels() {
  return (
    <>
      {/* MLB Heatmap */}
      <group position={[-3, 1, 0]}>
        <mesh>
          <planeGeometry args={[2.5, 2]} />
          <meshStandardMaterial
            color="#1a1a1a"
            emissive="#6366F1"
            emissiveIntensity={0.4}
          />
        </mesh>

        <Html center>
          <div className="text-white text-xs">
            ⚾ Pitch Heatmap
          </div>
        </Html>
      </group>

      {/* Stock Chart */}
      <group position={[3, 1.5, -1]}>
        <mesh>
          <planeGeometry args={[2.8, 1.8]} />
          <meshStandardMaterial
            color="#1a1a1a"
            emissive="#8B5CF6"
            emissiveIntensity={0.5}
          />
        </mesh>

        <Html center>
          <div className="text-white text-xs">
            📈 Market Analytics
          </div>
        </Html>
      </group>
    </>
  );
}