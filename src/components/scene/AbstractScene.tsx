import { Canvas } from "@react-three/fiber";
import {
  Float,
  Icosahedron,
  TorusKnot,
  Sphere,
  Stars,
} from "@react-three/drei";
import { Suspense } from "react";

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
        <pointLight position={[6, 6, 6]} intensity={2} color="#D4AF37" />
        <pointLight position={[-6, -4, -4]} intensity={1.2} color="#8C6D4F" />

        <Stars
          radius={40}
          depth={30}
          count={800}
          factor={2}
          saturation={0}
          fade
          speed={0.5}
        />

        <Float speed={1.4} rotationIntensity={0.6} floatIntensity={1.2}>
          <TorusKnot args={[1.7, 0.4, 180, 24]} position={[2.4, 0.4, -1]}>
            <meshStandardMaterial
              color="#D4AF37"
              metalness={0.85}
              roughness={0.25}
              wireframe
            />
          </TorusKnot>
        </Float>

        <Float speed={1.8} rotationIntensity={0.9} floatIntensity={1.6}>
          <Icosahedron args={[1.15, 0]} position={[-2.6, -1, -2]}>
            <meshStandardMaterial
              color="#8C6D4F"
              metalness={0.7}
              roughness={0.35}
            />
          </Icosahedron>
        </Float>

        <Float speed={2.2} rotationIntensity={1.1} floatIntensity={2}>
          <Sphere args={[0.5, 32, 32]} position={[0.5, 2.4, -3]}>
            <meshStandardMaterial
              color="#F7E7C4"
              emissive="#D4AF37"
              emissiveIntensity={0.6}
              metalness={0.6}
              roughness={0.2}
            />
          </Sphere>
        </Float>
      </Suspense>
    </Canvas>
  );
};

export default AbstractScene;
