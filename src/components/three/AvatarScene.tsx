import { Suspense, useRef, Component, ErrorInfo, ReactNode } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { useGLTF, Environment } from '@react-three/drei';
import * as THREE from 'three';
import { useReducedMotion } from '../../hooks/useReducedMotion';

// Error boundary for GLB loading
class GLBErrorBoundary extends Component<
  { children: ReactNode; fallback: ReactNode },
  { hasError: boolean }
> {
  constructor(props: { children: ReactNode; fallback: ReactNode }) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(): { hasError: boolean } {
    return { hasError: true };
  }

  override componentDidCatch(_error: Error, _info: ErrorInfo) {
    // GLB load failed — show placeholder
  }

  override render() {
    if (this.state.hasError) return this.props.fallback;
    return this.props.children;
  }
}

function AvatarGLB({ scrollProgress }: { scrollProgress: number }) {
  const { scene } = useGLTF('/models/harshith-avatar.glb');
  const ref = useRef<THREE.Group>(null);
  const reducedMotion = useReducedMotion();

  useFrame(() => {
    if (!ref.current) return;
    const targetY = reducedMotion ? 0 : scrollProgress * Math.PI * 1.5;
    ref.current.rotation.y = THREE.MathUtils.lerp(ref.current.rotation.y, targetY, 0.05);
  });

  return <primitive ref={ref} object={scene} scale={1.8} position={[0, -1.2, 0]} />;
}

function PlaceholderFigure({ scrollProgress }: { scrollProgress: number }) {
  const groupRef = useRef<THREE.Group>(null);
  const reducedMotion = useReducedMotion();

  useFrame(({ clock }) => {
    if (!groupRef.current) return;
    const targetY = reducedMotion ? 0 : scrollProgress * Math.PI * 1.5;
    groupRef.current.rotation.y = THREE.MathUtils.lerp(groupRef.current.rotation.y, targetY, 0.05);
    if (!reducedMotion) {
      groupRef.current.position.y = Math.sin(clock.elapsedTime * 0.6) * 0.04;
    }
  });

  const bodyMat = new THREE.MeshStandardMaterial({
    color: new THREE.Color('#1e3a5f'),
    metalness: 0.6,
    roughness: 0.3,
    envMapIntensity: 0.8,
  });
  const accentMat = new THREE.MeshStandardMaterial({
    color: new THREE.Color('#3b82f6'),
    metalness: 0.8,
    roughness: 0.2,
    emissive: new THREE.Color('#1e40af'),
    emissiveIntensity: 0.3,
  });

  return (
    <group ref={groupRef}>
      {/* Head */}
      <mesh position={[0, 1.5, 0]} material={bodyMat} castShadow>
        <sphereGeometry args={[0.32, 32, 32]} />
      </mesh>
      {/* Neck */}
      <mesh position={[0, 1.1, 0]} material={bodyMat}>
        <cylinderGeometry args={[0.1, 0.12, 0.25, 16]} />
      </mesh>
      {/* Torso */}
      <mesh position={[0, 0.35, 0]} material={bodyMat} castShadow>
        <boxGeometry args={[0.7, 0.9, 0.35]} />
      </mesh>
      {/* Left shoulder */}
      <mesh position={[-0.42, 0.72, 0]} material={accentMat}>
        <sphereGeometry args={[0.14, 16, 16]} />
      </mesh>
      {/* Right shoulder */}
      <mesh position={[0.42, 0.72, 0]} material={accentMat}>
        <sphereGeometry args={[0.14, 16, 16]} />
      </mesh>
      {/* Left upper arm */}
      <mesh position={[-0.56, 0.42, 0]} rotation={[0, 0, 0.15]} material={bodyMat}>
        <cylinderGeometry args={[0.1, 0.09, 0.5, 16]} />
      </mesh>
      {/* Right upper arm */}
      <mesh position={[0.56, 0.42, 0]} rotation={[0, 0, -0.15]} material={bodyMat}>
        <cylinderGeometry args={[0.1, 0.09, 0.5, 16]} />
      </mesh>
      {/* Left forearm */}
      <mesh position={[-0.62, 0.02, 0.05]} rotation={[0.2, 0, 0.3]} material={bodyMat}>
        <cylinderGeometry args={[0.08, 0.07, 0.45, 16]} />
      </mesh>
      {/* Right forearm */}
      <mesh position={[0.62, 0.02, 0.05]} rotation={[0.2, 0, -0.3]} material={bodyMat}>
        <cylinderGeometry args={[0.08, 0.07, 0.45, 16]} />
      </mesh>
      {/* Hips */}
      <mesh position={[0, -0.15, 0]} material={bodyMat}>
        <boxGeometry args={[0.65, 0.3, 0.32]} />
      </mesh>
      {/* Left leg */}
      <mesh position={[-0.2, -0.72, 0]} material={bodyMat} castShadow>
        <cylinderGeometry args={[0.13, 0.11, 0.8, 16]} />
      </mesh>
      {/* Right leg */}
      <mesh position={[0.2, -0.72, 0]} material={bodyMat} castShadow>
        <cylinderGeometry args={[0.13, 0.11, 0.8, 16]} />
      </mesh>
      {/* Left shin */}
      <mesh position={[-0.2, -1.26, 0]} material={bodyMat}>
        <cylinderGeometry args={[0.1, 0.09, 0.7, 16]} />
      </mesh>
      {/* Right shin */}
      <mesh position={[0.2, -1.26, 0]} material={bodyMat}>
        <cylinderGeometry args={[0.1, 0.09, 0.7, 16]} />
      </mesh>
      {/* Base platform */}
      <mesh position={[0, -1.68, 0]} material={accentMat}>
        <cylinderGeometry args={[0.5, 0.55, 0.06, 32]} />
      </mesh>
      {/* Glow ring */}
      <mesh position={[0, -1.62, 0]} rotation={[Math.PI / 2, 0, 0]}>
        <torusGeometry args={[0.55, 0.015, 8, 64]} />
        <meshStandardMaterial
          color="#3b82f6"
          emissive="#3b82f6"
          emissiveIntensity={1.5}
          transparent
          opacity={0.7}
        />
      </mesh>
    </group>
  );
}

interface AvatarSceneProps {
  scrollProgress: number;
}

export default function AvatarScene({ scrollProgress }: AvatarSceneProps) {
  return (
    <div className="w-full h-full">
      <Canvas
        camera={{ position: [0, 0.3, 3.2], fov: 45 }}
        gl={{ antialias: true, alpha: true }}
        style={{ background: 'transparent' }}
      >
        {/* Lighting */}
        <ambientLight intensity={0.25} color="#c8d4e8" />
        <directionalLight
          position={[3, 5, 3]}
          intensity={1.4}
          color="#dde8ff"
          castShadow
        />
        <directionalLight
          position={[-4, 2, -2]}
          intensity={0.5}
          color="#7c3aed"
        />
        <pointLight position={[0, -1.5, 1.5]} intensity={0.3} color="#3b82f6" />

        <Suspense fallback={<PlaceholderFigure scrollProgress={scrollProgress} />}>
          <GLBErrorBoundary fallback={<PlaceholderFigure scrollProgress={scrollProgress} />}>
            <AvatarGLB scrollProgress={scrollProgress} />
            <Environment preset="city" />
          </GLBErrorBoundary>
        </Suspense>
      </Canvas>
    </div>
  );
}
