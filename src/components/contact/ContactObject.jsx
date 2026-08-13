import React, { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { Float } from '@react-three/drei';
import { lerp } from '../../animations/animationUtils';

export const ContactObject = ({ mousePos, isTouch }) => {
  const meshRef = useRef(null);
  const rotationOffset = useRef({ x: 0, y: 0 });

  useFrame((state, delta) => {
    if (!meshRef.current) return;

    // Slow organic idle rotation
    meshRef.current.rotation.x += delta * 0.15;
    meshRef.current.rotation.y += delta * 0.22;

    // Desktop mouse interaction lerp
    if (!isTouch && mousePos && mousePos.current) {
      const targetY = mousePos.current.x * 0.35;
      const targetX = mousePos.current.y * 0.35;

      rotationOffset.current.x = lerp(rotationOffset.current.x, targetX, 0.05);
      rotationOffset.current.y = lerp(rotationOffset.current.y, targetY, 0.05);

      meshRef.current.rotation.x += rotationOffset.current.x * 0.015;
      meshRef.current.rotation.y += rotationOffset.current.y * 0.015;
    }
  });

  return (
    <Float speed={2.0} rotationIntensity={0.35} floatIntensity={0.6}>
      <mesh ref={meshRef} castShadow receiveShadow scale={1.05}>
        {/* Organic glossy lime/yellow-green abstract geometry */}
        <icosahedronGeometry args={[1.25, 4]} />
        <meshPhysicalMaterial
          color="#a3e635"
          roughness={0.12}
          metalness={0.2}
          clearcoat={0.9}
          clearcoatRoughness={0.08}
          reflectivity={0.9}
          iridescence={0.4}
          iridescenceIOR={1.3}
          emissive="#65a30d"
          emissiveIntensity={0.12}
          wireframe={false}
        />
      </mesh>
    </Float>
  );
};
