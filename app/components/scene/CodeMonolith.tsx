import { Html } from "@react-three/drei";

export default function CodeMonolith() {
  return (
    <group position={[0, 1.2, -2]}>
      <mesh>
        <boxGeometry args={[1.8, 4, 0.2]} />

        <meshStandardMaterial
          color="#0f0f0f"
          emissive="#6366F1"
          emissiveIntensity={0.8}
          metalness={1}
          roughness={0.1}
        />
      </mesh>

      <Html transform center>
        <div className="bg-black/80 p-4 rounded-xl text-green-400 text-xs font-mono w-[200px]">
{`fetch_pitch_data()
analyze_matchups()
calculate_edge()

API Response: 200
Win Probability: 63%
`}
        </div>
      </Html>
    </group>
  );
}