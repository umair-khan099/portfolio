import React, { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { Float } from "@react-three/drei";
import { lerp } from "../../animations/animationUtils";

export const HeroObject = ({ mousePos, isTouch }) => {
  const meshRef = useRef(null);
  const rotationOffset = useRef({ x: 0, y: 0 });

  useFrame((state, delta) => {
    if (!meshRef.current) return;

    // Smooth continuous idle rotation
    meshRef.current.rotation.x += delta * 0.06;
    meshRef.current.rotation.y += delta * 0.09;
    // Desktop Mouse Interaction with smooth physical lerp
    if (!isTouch && mousePos && mousePos.current) {
      const targetY = mousePos.current.x * 0.45;
      const targetX = mousePos.current.y * 0.45;

      rotationOffset.current.x = lerp(rotationOffset.current.x, targetX, 0.05);
      rotationOffset.current.y = lerp(rotationOffset.current.y, targetY, 0.05);

      meshRef.current.rotation.x += rotationOffset.current.x * 0.02;
      meshRef.current.rotation.y += rotationOffset.current.y * 0.02;
    }
  });

  return (
    <Float speed={1.2} rotationIntensity={0.15} floatIntensity={0.3}>
      <mesh ref={meshRef} castShadow receiveShadow scale={1.1}>
        {/* Organic inflated torus knot geometry */}
        <torusKnotGeometry args={[1.1, 0.42, 64, 20, 2, 3]} />
        <meshPhysicalMaterial
          color="#F4F4F0"
          roughness={0.18}
          metalness={0.2}
          clearcoat={0.95}
          clearcoatRoughness={0.1}
          reflectivity={0.8}
          iridescence={0.35}
          iridescenceIOR={1.33}
          emissive="#2e1065"
          emissiveIntensity={0.08}
        />
      </mesh>
    </Float>
  );
};
