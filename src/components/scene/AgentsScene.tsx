import { Canvas, useFrame } from "@react-three/fiber";
import { Float, Sphere, Octahedron, Line, Stars } from "@react-three/drei";
import { Suspense, useMemo, useRef } from "react";
import * as THREE from "three";

interface AgentOrbit {
  radius: number;
  speed: number;
  offset: number;
  height: number;
  color: string;
}

const agents: AgentOrbit[] = [
  { radius: 3.2, speed: 0.35, offset: 0, height: 0.4, color: "#2563EB" },
  {
    radius: 3.2,
    speed: 0.35,
    offset: (Math.PI * 2) / 3,
    height: -0.6,
    color: "#0EA5E9",
  },
  {
    radius: 3.2,
    speed: 0.35,
    offset: (Math.PI * 4) / 3,
    height: 0.9,
    color: "#3B82F6",
  },
  {
    radius: 4.4,
    speed: -0.22,
    offset: Math.PI / 4,
    height: -1.2,
    color: "#38BDF8",
  },
  {
    radius: 4.4,
    speed: -0.22,
    offset: Math.PI + Math.PI / 4,
    height: 1.3,
    color: "#1D4ED8",
  },
];

const AgentNode: React.FC<{ orbit: AgentOrbit }> = ({ orbit }) => {
  const ref = useRef<THREE.Group>(null);
  const lineRef = useRef<THREE.BufferGeometry>(null);

  useFrame(({ clock }) => {
    const t = clock.getElapsedTime() * orbit.speed + orbit.offset;
    const x = Math.cos(t) * orbit.radius;
    const z = Math.sin(t) * orbit.radius;
    if (ref.current) {
      ref.current.position.set(x, orbit.height, z);
    }
    if (lineRef.current) {
      lineRef.current.setFromPoints([
        new THREE.Vector3(0, 0, 0),
        new THREE.Vector3(x, orbit.height, z),
      ]);
    }
  });

  return (
    <>
      <lineSegments>
        <bufferGeometry ref={lineRef} />
        <lineBasicMaterial color={orbit.color} transparent opacity={0.35} />
      </lineSegments>
      <group ref={ref}>
        <Octahedron args={[0.32, 0]}>
          <meshStandardMaterial
            color={orbit.color}
            emissive={orbit.color}
            emissiveIntensity={0.7}
            metalness={0.5}
            roughness={0.3}
          />
        </Octahedron>
      </group>
    </>
  );
};

const AgentsScene: React.FC = () => {
  const orbitAgents = useMemo(() => agents, []);

  return (
    <Canvas
      camera={{ position: [0, 0, 11], fov: 42 }}
      dpr={[1, 1.5]}
      gl={{ antialias: true, alpha: true }}
      className="!absolute inset-0 !pointer-events-none"
    >
      <Suspense fallback={null}>
        <ambientLight intensity={0.5} />
        <pointLight position={[6, 6, 6]} intensity={2} color="#3B82F6" />
        <pointLight position={[-6, -4, -4]} intensity={1.4} color="#0EA5E9" />

        <Stars
          radius={40}
          depth={30}
          count={500}
          factor={1.6}
          saturation={0}
          fade
          speed={0.4}
        />

        <Float speed={1.4} rotationIntensity={0.3} floatIntensity={0.8}>
          {/* Orchestrator hub */}
          <Sphere args={[0.65, 32, 32]} position={[0, 0, 0]}>
            <meshStandardMaterial
              color="#1D4ED8"
              emissive="#3B82F6"
              emissiveIntensity={1}
              metalness={0.6}
              roughness={0.2}
            />
          </Sphere>

          {orbitAgents.map((orbit, i) => (
            <AgentNode key={i} orbit={orbit} />
          ))}
        </Float>
      </Suspense>
    </Canvas>
  );
};

export default AgentsScene;
