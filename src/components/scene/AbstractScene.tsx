import { Canvas, useFrame } from "@react-three/fiber";
import {
  Float,
  Icosahedron,
  TorusKnot,
  Sphere,
  Ring,
  Sparkles,
  Stars,
} from "@react-three/drei";
import { Suspense, useRef } from "react";
import type { Group } from "three";

const ParallaxRig: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const groupRef = useRef<Group>(null);

  useFrame((state) => {
    const { x, y } = state.pointer;
    if (groupRef.current) {
      groupRef.current.rotation.y +=
        (x * 0.35 - groupRef.current.rotation.y) * 0.03;
      groupRef.current.rotation.x +=
        (-y * 0.2 - groupRef.current.rotation.x) * 0.03;
    }
  });

  return <group ref={groupRef}>{children}</group>;
};

const RotatingKnot: React.FC = () => {
  const ref = useRef<Group>(null);
  useFrame((_, delta) => {
    if (ref.current) ref.current.rotation.z += delta * 0.15;
  });
  return (
    <group ref={ref}>
      <TorusKnot args={[1.7, 0.38, 220, 28]} position={[2.6, 0.4, -1]}>
        <meshStandardMaterial
          color="#D4AF37"
          metalness={0.9}
          roughness={0.2}
          wireframe
        />
      </TorusKnot>
    </group>
  );
};

const OrbitRing: React.FC = () => {
  const ref = useRef<Group>(null);
  useFrame((_, delta) => {
    if (ref.current) ref.current.rotation.x += delta * 0.08;
  });
  return (
    <group ref={ref} position={[-2.4, -0.6, -2.5]} rotation={[1.2, 0.4, 0]}>
      <Ring args={[1.5, 1.58, 64]}>
        <meshStandardMaterial
          color="#F7E7C4"
          emissive="#D4AF37"
          emissiveIntensity={0.4}
          side={2}
        />
      </Ring>
    </group>
  );
};

const AbstractScene: React.FC = () => {
  return (
    <Canvas
      camera={{ position: [0, 0, 9], fov: 42 }}
      dpr={[1, 1.5]}
      gl={{ antialias: true, alpha: true }}
      className="!absolute inset-0 !pointer-events-none"
    >
      <Suspense fallback={null}>
        <ambientLight intensity={0.4} />
        <pointLight position={[6, 6, 6]} intensity={2.4} color="#D4AF37" />
        <pointLight position={[-6, -4, -4]} intensity={1.4} color="#8C6D4F" />
        <pointLight position={[0, 3, 4]} intensity={0.8} color="#F7E7C4" />

        <Stars
          radius={45}
          depth={35}
          count={1000}
          factor={2.2}
          saturation={0}
          fade
          speed={0.4}
        />
        <Sparkles
          count={70}
          scale={[10, 6, 6]}
          size={2.5}
          speed={0.35}
          color="#D4AF37"
          opacity={0.6}
        />

        <ParallaxRig>
          <RotatingKnot />

          <Float speed={1.8} rotationIntensity={0.9} floatIntensity={1.6}>
            <Icosahedron args={[1.15, 0]} position={[-2.6, -1, -2]}>
              <meshStandardMaterial
                color="#8C6D4F"
                metalness={0.75}
                roughness={0.3}
              />
            </Icosahedron>
          </Float>

          <Float speed={2.2} rotationIntensity={1.1} floatIntensity={2}>
            <Sphere args={[0.5, 32, 32]} position={[0.5, 2.4, -3]}>
              <meshStandardMaterial
                color="#F7E7C4"
                emissive="#D4AF37"
                emissiveIntensity={0.65}
                metalness={0.6}
                roughness={0.2}
              />
            </Sphere>
          </Float>

          <Float speed={1.4} rotationIntensity={0.5} floatIntensity={1}>
            <Sphere args={[0.28, 24, 24]} position={[-1.2, 1.6, -1.5]}>
              <meshStandardMaterial
                color="#D4AF37"
                emissive="#D4AF37"
                emissiveIntensity={0.9}
                metalness={0.5}
                roughness={0.15}
              />
            </Sphere>
          </Float>

          <OrbitRing />
        </ParallaxRig>
      </Suspense>
    </Canvas>
  );
};

export default AbstractScene;
