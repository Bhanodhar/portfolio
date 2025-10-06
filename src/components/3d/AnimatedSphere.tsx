import { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { useSpring, a } from "@react-spring/three";
import { Mesh } from "three";

export function AnimatedSphere() {
  const meshRef = useRef<Mesh>(null);

  const [springs, api] = useSpring(() => ({
    scale: 1,
    position: [0, 0, 0],
    rotation: [0, 0, 0],
    config: { mass: 2, tension: 200, friction: 50 },
  }));

  useFrame((_state, delta) => {
    if (meshRef.current) {
      meshRef.current.rotation.x += delta * 0.2;
      meshRef.current.rotation.y += delta * 0.3;
    }
  });

  return (
    <a.mesh
      ref={meshRef}
      scale={springs.scale}
      position={springs.position as any}
      rotation={springs.rotation as any}
      onPointerEnter={() => api.start({ scale: 1.2 })}
      onPointerLeave={() => api.start({ scale: 1 })}
    >
      <icosahedronGeometry args={[1, 1]} />
      <a.meshPhongMaterial
        color="#007AFF"
        specular="#ffffff"
        shininess={50}
        transparent
        opacity={0.7}
      />
    </a.mesh>
  );
}
