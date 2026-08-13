import React, { useEffect, useRef, useState } from 'react';
import { Canvas } from '@react-three/fiber';
import { Environment } from '@react-three/drei';
import { HeroObject } from './HeroObject';

export const HeroScene = () => {
  const mousePos = useRef({ x: 0, y: 0 });
  const [isTouch, setIsTouch] = useState(false);

  useEffect(() => {
    // Detect touch device
    const checkTouch = () => {
      setIsTouch('ontouchstart' in window || navigator.maxTouchPoints > 0);
    };
    checkTouch();

    const handleMouseMove = (e) => {
      if (isTouch) return;
      // Normalize mouse coordinates (-1 to 1)
      const x = (e.clientX / window.innerWidth) * 2 - 1;
      const y = -(e.clientY / window.innerHeight) * 2 + 1;
      mousePos.current = { x, y };
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [isTouch]);

  return (
    <div className="w-full h-full min-h-[350px] sm:min-h-[450px] lg:min-h-[550px] relative flex items-center justify-center">
      <Canvas
        camera={{ position: [0, 0, 4.5], fov: 45 }}
        dpr={[1, Math.min(window.devicePixelRatio || 1, 2)]}
        gl={{ antialias: true, alpha: true, powerPreference: 'high-performance' }}
        className="w-full h-full"
      >
        {/* Controlled Studio Lighting */}
        <ambientLight intensity={0.7} />
        <directionalLight position={[5, 8, 5]} intensity={1.5} color="#ffffff" castShadow />
        <directionalLight position={[-5, -4, -3]} intensity={0.8} color="#ec4899" />
        <spotLight position={[0, 5, 2]} intensity={0.9} color="#8b5cf6" angle={0.6} penumbra={1} />
        
        {/* Environment preset for soft metallic reflections */}
        <Environment preset="city" />

        {/* 3D Abstract Object */}
        <HeroObject mousePos={mousePos} isTouch={isTouch} />
      </Canvas>
    </div>
  );
};
