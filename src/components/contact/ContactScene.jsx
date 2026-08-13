import React, { useEffect, useRef, useState } from 'react';
import { Canvas } from '@react-three/fiber';
import { Environment } from '@react-three/drei';
import { ContactObject } from './ContactObject';

export const ContactScene = () => {
  const mousePos = useRef({ x: 0, y: 0 });
  const [isTouch, setIsTouch] = useState(false);

  useEffect(() => {
    const checkTouch = () => {
      setIsTouch('ontouchstart' in window || navigator.maxTouchPoints > 0);
    };
    checkTouch();

    const handleMouseMove = (e) => {
      if (isTouch) return;
      const x = (e.clientX / window.innerWidth) * 2 - 1;
      const y = -(e.clientY / window.innerHeight) * 2 + 1;
      mousePos.current = { x, y };
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [isTouch]);

  return (
    <div className="w-full h-full min-h-[280px] sm:min-h-[350px] relative flex items-center justify-center pointer-events-none">
      <Canvas
        camera={{ position: [0, 0, 4.2], fov: 45 }}
        dpr={[1, Math.min(window.devicePixelRatio || 1, 2)]}
        gl={{ antialias: true, alpha: true, powerPreference: 'high-performance' }}
        className="w-full h-full"
      >
        <ambientLight intensity={0.8} />
        <directionalLight position={[6, 8, 4]} intensity={1.8} color="#ffffff" />
        <directionalLight position={[-4, -4, -2]} intensity={0.9} color="#a3e635" />
        <spotLight position={[0, 4, 3]} intensity={1.0} color="#84cc16" angle={0.5} penumbra={1} />
        
        <Environment preset="city" />

        <ContactObject mousePos={mousePos} isTouch={isTouch} />
      </Canvas>
    </div>
  );
};
