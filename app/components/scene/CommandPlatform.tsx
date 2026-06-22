export default function CommandPlatform() {
  return (
    <mesh position={[0, -2, 0]} rotation={[-0.1, 0, 0]}>
      <cylinderGeometry args={[4, 4.5, 0.6, 64]} />
      <meshStandardMaterial
        color="#111111"
        metalness={0.9}
        roughness={0.2}
      />
    </mesh>
  );
}