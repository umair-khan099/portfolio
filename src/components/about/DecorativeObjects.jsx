import React from 'react';

/**
 * High-quality 3D SVG Decorative Objects matching the creative editorial visual theme.
 * Uses SVG gradients, drop shadows, and 3D lighting tricks for retina-sharp, performant 3D assets.
 */

// 1. Glossy 5-Petal Purple Flower
const GlossyPurpleFlower = ({ className = '' }) => (
  <svg viewBox="0 0 200 200" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <radialGradient id="purplePetal" cx="30%" cy="30%" r="70%">
        <stop offset="0%" stopColor="#D8B4FE" />
        <stop offset="35%" stopColor="#A855F7" />
        <stop offset="75%" stopColor="#6B21A8" />
        <stop offset="100%" stopColor="#3B0764" />
      </radialGradient>
      <linearGradient id="purpleGloss" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#FFFFFF" stopOpacity="0.7" />
        <stop offset="50%" stopColor="#C084FC" stopOpacity="0.2" />
        <stop offset="100%" stopColor="#000000" stopOpacity="0.5" />
      </linearGradient>
      <filter id="shadow3d" x="-20%" y="-20%" width="140%" height="140%">
        <feDropShadow dx="4" dy="10" stdDeviation="8" floodColor="#000000" floodOpacity="0.6" />
      </filter>
    </defs>
    <g filter="url(#shadow3d)">
      {[0, 72, 144, 216, 288].map((angle, i) => (
        <g key={i} transform={`rotate(${angle} 100 100)`}>
          <ellipse cx="100" cy="52" rx="28" ry="46" fill="url(#purplePetal)" />
          <ellipse cx="94" cy="46" rx="14" ry="28" fill="url(#purpleGloss)" opacity="0.6" />
        </g>
      ))}
      <circle cx="100" cy="100" r="22" fill="#1E0B36" />
      <circle cx="94" cy="94" r="16" fill="url(#purplePetal)" />
      <circle cx="90" cy="90" r="6" fill="#FFFFFF" opacity="0.8" />
    </g>
  </svg>
);

// 2. 4-Point Metallic Sparkle Star
const SparkleStar = ({ className = '', fill = '#E9D5FF' }) => (
  <svg viewBox="0 0 100 100" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <radialGradient id="starGlow" cx="50%" cy="50%" r="50%">
        <stop offset="0%" stopColor="#FFFFFF" />
        <stop offset="40%" stopColor={fill} />
        <stop offset="100%" stopColor="#6B21A8" stopOpacity="0.2" />
      </radialGradient>
      <filter id="starBlur">
        <feDropShadow dx="0" dy="4" stdDeviation="4" floodColor="#8B5CF6" floodOpacity="0.5" />
      </filter>
    </defs>
    <g filter="url(#starBlur)">
      <path
        d="M50 0 C52 35 65 48 100 50 C65 52 52 65 50 100 C48 65 35 52 0 50 C35 48 48 35 50 0 Z"
        fill="url(#starGlow)"
      />
      <path
        d="M50 10 C51 38 62 49 90 50 C62 51 51 62 50 90 C49 62 38 51 10 50 C38 49 49 38 50 10 Z"
        fill="#FFFFFF"
        opacity="0.8"
      />
    </g>
  </svg>
);

// 3. Glossy 3D Purple Heart
const GlossyHeart = ({ className = '' }) => (
  <svg viewBox="0 0 160 160" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <radialGradient id="heartGrad" cx="35%" cy="30%" r="70%">
        <stop offset="0%" stopColor="#F472B6" />
        <stop offset="30%" stopColor="#C084FC" />
        <stop offset="70%" stopColor="#7E22CE" />
        <stop offset="100%" stopColor="#3B0764" />
      </radialGradient>
      <linearGradient id="heartGloss" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0%" stopColor="#FFFFFF" stopOpacity="0.7" />
        <stop offset="100%" stopColor="#FFFFFF" stopOpacity="0" />
      </linearGradient>
      <filter id="heartShadow">
        <feDropShadow dx="3" dy="8" stdDeviation="6" floodColor="#000000" floodOpacity="0.5" />
      </filter>
    </defs>
    <g filter="url(#heartShadow)">
      <path
        d="M80 142 C20 100 10 65 30 35 C50 5 75 20 80 38 C85 20 110 5 130 35 C150 65 140 100 80 142 Z"
        fill="url(#heartGrad)"
      />
      <path
        d="M38 40 C48 18 68 28 72 44 C65 38 50 32 38 40 Z"
        fill="url(#heartGloss)"
      />
    </g>
  </svg>
);

// 4. 3D Rotated Glass Cube
const GlassCube = ({ className = '' }) => (
  <svg viewBox="0 0 140 140" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id="topFace" x1="0" y1="0" x2="1" y2="1">
        <stop offset="0%" stopColor="#C084FC" stopOpacity="0.8" />
        <stop offset="100%" stopColor="#581C87" stopOpacity="0.9" />
      </linearGradient>
      <linearGradient id="leftFace" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0%" stopColor="#3B0764" stopOpacity="0.95" />
        <stop offset="100%" stopColor="#0F031D" stopOpacity="0.95" />
      </linearGradient>
      <linearGradient id="rightFace" x1="0" y1="0" x2="1" y2="0">
        <stop offset="0%" stopColor="#7E22CE" stopOpacity="0.9" />
        <stop offset="100%" stopColor="#1E0B36" stopOpacity="0.9" />
      </linearGradient>
      <filter id="cubeShadow">
        <feDropShadow dx="2" dy="8" stdDeviation="6" floodColor="#000000" floodOpacity="0.7" />
      </filter>
    </defs>
    <g filter="url(#cubeShadow)">
      <path d="M70 15 L120 42 L70 69 L20 42 Z" fill="url(#topFace)" stroke="#F472B6" strokeWidth="0.8" strokeOpacity="0.4" />
      <path d="M20 42 L70 69 L70 122 L20 95 Z" fill="url(#leftFace)" stroke="#A855F7" strokeWidth="0.8" strokeOpacity="0.3" />
      <path d="M70 69 L120 42 L120 95 L70 122 Z" fill="url(#rightFace)" stroke="#C084FC" strokeWidth="0.8" strokeOpacity="0.3" />
      <line x1="70" y1="15" x2="70" y2="69" stroke="#FFFFFF" strokeWidth="1.5" strokeOpacity="0.6" />
      <line x1="20" y1="42" x2="70" y2="69" stroke="#FFFFFF" strokeWidth="1.2" strokeOpacity="0.5" />
      <line x1="120" y1="42" x2="70" y2="69" stroke="#FFFFFF" strokeWidth="1" strokeOpacity="0.4" />
    </g>
  </svg>
);

// 5. 3D Dark Helical Spring/Coil
const HelicalSpring = ({ className = '' }) => (
  <svg viewBox="0 0 120 220" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id="springMetal" x1="0" y1="0" x2="1" y2="0">
        <stop offset="0%" stopColor="#1E1A29" />
        <stop offset="30%" stopColor="#581C87" />
        <stop offset="50%" stopColor="#D8B4FE" />
        <stop offset="70%" stopColor="#3B0764" />
        <stop offset="100%" stopColor="#0B0714" />
      </linearGradient>
      <filter id="springShadow">
        <feDropShadow dx="3" dy="6" stdDeviation="5" floodColor="#000" floodOpacity="0.8" />
      </filter>
    </defs>
    <g filter="url(#springShadow)">
      {[0, 32, 64, 96, 128].map((y, i) => (
        <g key={i} transform={`translate(0, ${y})`}>
          <path
            d="M20 40 C 20 15, 100 15, 100 40 C 100 65, 20 65, 20 90"
            stroke="url(#springMetal)"
            strokeWidth="18"
            strokeLinecap="round"
            fill="none"
          />
          <path
            d="M20 38 C 20 18, 100 18, 100 38"
            stroke="#FFFFFF"
            strokeWidth="3"
            strokeLinecap="round"
            fill="none"
            opacity="0.6"
          />
        </g>
      ))}
    </g>
  </svg>
);

// 6. 3D Black Balloon Flower with Glowing Purple Center
const DarkBalloonFlower = ({ className = '' }) => (
  <svg viewBox="0 0 200 200" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <radialGradient id="blackPetal" cx="35%" cy="35%" r="65%">
        <stop offset="0%" stopColor="#3B3448" />
        <stop offset="40%" stopColor="#1E1926" />
        <stop offset="85%" stopColor="#0D0A12" />
        <stop offset="100%" stopColor="#050408" />
      </radialGradient>
      <radialGradient id="purpleGlowCenter" cx="40%" cy="40%" r="60%">
        <stop offset="0%" stopColor="#F472B6" />
        <stop offset="40%" stopColor="#A855F7" />
        <stop offset="80%" stopColor="#581C87" />
        <stop offset="100%" stopColor="#1E0B36" />
      </radialGradient>
      <filter id="darkFlowerShadow">
        <feDropShadow dx="6" dy="12" stdDeviation="10" floodColor="#000000" floodOpacity="0.85" />
      </filter>
    </defs>
    <g filter="url(#darkFlowerShadow)">
      {[0, 60, 120, 180, 240, 300].map((angle, i) => (
        <g key={i} transform={`rotate(${angle} 100 100)`}>
          <ellipse cx="100" cy="50" rx="30" ry="42" fill="url(#blackPetal)" />
          <ellipse cx="94" cy="42" rx="14" ry="24" fill="#FFFFFF" opacity="0.12" />
        </g>
      ))}
      <circle cx="100" cy="100" r="26" fill="url(#purpleGlowCenter)" />
      <circle cx="94" cy="94" r="8" fill="#FFFFFF" opacity="0.7" />
    </g>
  </svg>
);

// 7. Glossy 3D Blue-Purple Metallic Flower
const GlossyMetallicFlower = ({ className = '' }) => (
  <svg viewBox="0 0 200 200" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <radialGradient id="bluePurplePetal" cx="30%" cy="30%" r="70%">
        <stop offset="0%" stopColor="#C084FC" />
        <stop offset="35%" stopColor="#818CF8" />
        <stop offset="70%" stopColor="#4338CA" />
        <stop offset="100%" stopColor="#1E1B4B" />
      </radialGradient>
      <filter id="blueFlowerShadow">
        <feDropShadow dx="5" dy="10" stdDeviation="8" floodColor="#000000" floodOpacity="0.6" />
      </filter>
    </defs>
    <g filter="url(#blueFlowerShadow)">
      {[0, 72, 144, 216, 288].map((angle, i) => (
        <g key={i} transform={`rotate(${angle} 100 100)`}>
          <ellipse cx="100" cy="52" rx="28" ry="46" fill="url(#bluePurplePetal)" />
          <ellipse cx="92" cy="44" rx="12" ry="26" fill="#FFFFFF" opacity="0.4" />
        </g>
      ))}
      <circle cx="100" cy="100" r="20" fill="#0F172A" />
      <circle cx="94" cy="94" r="7" fill="#FFFFFF" opacity="0.85" />
    </g>
  </svg>
);

// 8. 3D Iridescent Hexagonal Gem Prism
const HexGemPrism = ({ className = '' }) => (
  <svg viewBox="0 0 140 160" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id="gemTop" x1="0" y1="0" x2="1" y2="1">
        <stop offset="0%" stopColor="#F472B6" />
        <stop offset="50%" stopColor="#C084FC" />
        <stop offset="100%" stopColor="#60A5FA" />
      </linearGradient>
      <linearGradient id="gemSideLeft" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0%" stopColor="#7E22CE" />
        <stop offset="100%" stopColor="#1E1B4B" />
      </linearGradient>
      <linearGradient id="gemSideRight" x1="0" y1="0" x2="1" y2="1">
        <stop offset="0%" stopColor="#3B82F6" />
        <stop offset="100%" stopColor="#0F172A" />
      </linearGradient>
      <filter id="gemShadow">
        <feDropShadow dx="3" dy="8" stdDeviation="6" floodColor="#000" floodOpacity="0.65" />
      </filter>
    </defs>
    <g filter="url(#gemShadow)">
      <polygon points="70,10 115,35 115,75 70,100 25,75 25,35" fill="url(#gemTop)" stroke="#FFFFFF" strokeWidth="0.8" strokeOpacity="0.6" />
      <polygon points="25,75 70,100 70,145 25,120" fill="url(#gemSideLeft)" />
      <polygon points="70,100 115,75 115,120 70,145" fill="url(#gemSideRight)" />
      <line x1="70" y1="10" x2="70" y2="100" stroke="#FFFFFF" strokeWidth="1.5" strokeOpacity="0.8" />
      <line x1="25" y1="35" x2="70" y2="100" stroke="#FFFFFF" strokeWidth="1" strokeOpacity="0.5" />
      <line x1="115" y1="35" x2="70" y2="100" stroke="#FFFFFF" strokeWidth="1" strokeOpacity="0.5" />
    </g>
  </svg>
);

// 9. 3D Purple Flower with Warm Yellow Center
const PurpleYellowFlower = ({ className = '' }) => (
  <svg viewBox="0 0 200 200" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <radialGradient id="purplePetal2" cx="30%" cy="30%" r="70%">
        <stop offset="0%" stopColor="#E9D5FF" />
        <stop offset="40%" stopColor="#A855F7" />
        <stop offset="80%" stopColor="#6B21A8" />
        <stop offset="100%" stopColor="#2E1065" />
      </radialGradient>
      <radialGradient id="yellowCenter" cx="35%" cy="35%" r="65%">
        <stop offset="0%" stopColor="#FEF08A" />
        <stop offset="50%" stopColor="#EAB308" />
        <stop offset="100%" stopColor="#854D0E" />
      </radialGradient>
      <filter id="flower2Shadow">
        <feDropShadow dx="4" dy="8" stdDeviation="7" floodColor="#000" floodOpacity="0.6" />
      </filter>
    </defs>
    <g filter="url(#flower2Shadow)">
      {[0, 72, 144, 216, 288].map((angle, i) => (
        <g key={i} transform={`rotate(${angle} 100 100)`}>
          <ellipse cx="100" cy="52" rx="30" ry="46" fill="url(#purplePetal2)" />
          <ellipse cx="94" cy="44" rx="14" ry="26" fill="#FFFFFF" opacity="0.4" />
        </g>
      ))}
      <circle cx="100" cy="100" r="24" fill="url(#yellowCenter)" />
      <circle cx="92" cy="92" r="8" fill="#FFFFFF" opacity="0.9" />
    </g>
  </svg>
);

// 10. Metallic Chrome Sphere
const ChromeSphere = ({ className = '' }) => (
  <svg viewBox="0 0 100 100" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <radialGradient id="chromeGrad" cx="30%" cy="30%" r="70%">
        <stop offset="0%" stopColor="#FFFFFF" />
        <stop offset="25%" stopColor="#E2E8F0" />
        <stop offset="55%" stopColor="#64748B" />
        <stop offset="80%" stopColor="#1E293B" />
        <stop offset="100%" stopColor="#0F172A" />
      </radialGradient>
      <filter id="sphereShadow">
        <feDropShadow dx="3" dy="6" stdDeviation="5" floodColor="#000" floodOpacity="0.7" />
      </filter>
    </defs>
    <g filter="url(#sphereShadow)">
      <circle cx="50" cy="50" r="42" fill="url(#chromeGrad)" />
      <ellipse cx="38" cy="34" rx="14" ry="9" fill="#FFFFFF" opacity="0.85" />
    </g>
  </svg>
);

// 11. 3D Organic Smooth Purple Blob
const PurpleOrganicBlob = ({ className = '' }) => (
  <svg viewBox="0 0 180 180" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <radialGradient id="blobGrad" cx="35%" cy="30%" r="70%">
        <stop offset="0%" stopColor="#C084FC" />
        <stop offset="40%" stopColor="#7E22CE" />
        <stop offset="80%" stopColor="#3B0764" />
        <stop offset="100%" stopColor="#140226" />
      </radialGradient>
      <filter id="blobShadow">
        <feDropShadow dx="4" dy="10" stdDeviation="8" floodColor="#000" floodOpacity="0.65" />
      </filter>
    </defs>
    <g filter="url(#blobShadow)">
      <path
        d="M90 20 C120 20 150 40 150 75 C150 110 130 150 90 150 C50 150 30 115 30 80 C30 45 60 20 90 20 Z"
        fill="url(#blobGrad)"
      />
      <path
        d="M60 40 C75 28 105 32 115 45 C100 38 75 38 60 40 Z"
        fill="#FFFFFF"
        opacity="0.6"
      />
    </g>
  </svg>
);

/**
 * Main Decorative Objects Overlay Container
 * Arranges items around left & right flanks with independent float keys & parallax response.
 */
export const DecorativeObjects = ({ parallaxOffset = { x: 0, y: 0 }, decosRef }) => {
  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden z-0 select-none">
      {/* ---------------- LEFT FLANK OBJECTS ---------------- */}

      {/* 1. Top-Left Glossy Purple Flower (Foreground) */}
      <div
        ref={(el) => decosRef && (decosRef.current[0] = el)}
        className="absolute top-[6%] left-[1%] sm:left-[3%] lg:left-[4%] w-28 sm:w-44 lg:w-56 h-28 sm:h-44 lg:h-56 animate-float-slow"
        style={{
          transform: `translate3d(${parallaxOffset.x * 35}px, ${parallaxOffset.y * 35}px, 0)`,
          transition: 'transform 0.2s ease-out'
        }}
      >
        <GlossyPurpleFlower className="w-full h-full drop-shadow-2xl" />
      </div>

      {/* 2. Left Mid-Top 4-Point Sparkle Star (Background) */}
      <div
        ref={(el) => decosRef && (decosRef.current[1] = el)}
        className="absolute top-[28%] left-[16%] sm:left-[19%] w-6 sm:w-10 lg:w-12 h-6 sm:h-10 lg:h-12 animate-pulse-glow"
        style={{
          transform: `translate3d(${parallaxOffset.x * 12}px, ${parallaxOffset.y * 12}px, 0)`,
          transition: 'transform 0.2s ease-out'
        }}
      >
        <SparkleStar className="w-full h-full" fill="#E9D5FF" />
      </div>

      {/* 3. Left Mid Glossy Purple Heart (Midground) */}
      <div
        ref={(el) => decosRef && (decosRef.current[2] = el)}
        className="absolute top-[38%] left-[2%] sm:left-[4%] w-20 sm:w-32 lg:w-40 h-20 sm:h-32 lg:h-40 animate-float-medium"
        style={{
          transform: `translate3d(${parallaxOffset.x * 24}px, ${parallaxOffset.y * 24}px, 0)`,
          transition: 'transform 0.2s ease-out'
        }}
      >
        <GlossyHeart className="w-full h-full" />
      </div>

      {/* 4. Left Mid-Lower Glass Cube (Midground) */}
      <div
        ref={(el) => decosRef && (decosRef.current[3] = el)}
        className="absolute top-[56%] left-[10%] sm:left-[13%] w-12 sm:w-18 lg:w-22 h-12 sm:h-18 lg:h-22 animate-float-reverse"
        style={{
          transform: `translate3d(${parallaxOffset.x * 18}px, ${parallaxOffset.y * 18}px, 0)`,
          transition: 'transform 0.2s ease-out'
        }}
      >
        <GlassCube className="w-full h-full" />
      </div>

      {/* 5. Left Lower Helical Coil (Background) */}
      <div
        ref={(el) => decosRef && (decosRef.current[4] = el)}
        className="absolute bottom-[10%] left-[1%] sm:left-[3%] w-16 sm:w-24 lg:w-32 h-28 sm:h-40 lg:h-52 animate-float-slow"
        style={{
          transform: `translate3d(${parallaxOffset.x * 15}px, ${parallaxOffset.y * 15}px, 0) rotate(-15deg)`,
          transition: 'transform 0.2s ease-out'
        }}
      >
        <HelicalSpring className="w-full h-full opacity-80" />
      </div>

      {/* 6. Left Bottom Dark Balloon Flower (Foreground) */}
      <div
        ref={(el) => decosRef && (decosRef.current[5] = el)}
        className="absolute bottom-[2%] left-[8%] sm:left-[11%] w-28 sm:w-44 lg:w-56 h-28 sm:h-44 lg:h-56 animate-float-medium"
        style={{
          transform: `translate3d(${parallaxOffset.x * 38}px, ${parallaxOffset.y * 38}px, 0)`,
          transition: 'transform 0.2s ease-out'
        }}
      >
        <DarkBalloonFlower className="w-full h-full" />
      </div>


      {/* ---------------- RIGHT FLANK OBJECTS ---------------- */}

      {/* 7. Right Top Helical Coil (Background) */}
      <div
        ref={(el) => decosRef && (decosRef.current[6] = el)}
        className="absolute top-[6%] right-[14%] sm:right-[17%] w-14 sm:w-20 lg:w-24 h-24 sm:h-36 lg:h-44 animate-float-reverse"
        style={{
          transform: `translate3d(${parallaxOffset.x * 14}px, ${parallaxOffset.y * 14}px, 0) rotate(20deg)`,
          transition: 'transform 0.2s ease-out'
        }}
      >
        <HelicalSpring className="w-full h-full opacity-70" />
      </div>

      {/* 8. Right Upper Sparkle Star (Background) */}
      <div
        ref={(el) => decosRef && (decosRef.current[7] = el)}
        className="absolute top-[14%] right-[22%] sm:right-[25%] w-5 sm:w-8 lg:w-10 h-5 sm:h-8 lg:h-10 animate-pulse-glow"
        style={{
          transform: `translate3d(${parallaxOffset.x * 10}px, ${parallaxOffset.y * 10}px, 0)`,
          transition: 'transform 0.2s ease-out'
        }}
      >
        <SparkleStar className="w-full h-full" fill="#F472B6" />
      </div>

      {/* 9. Right Top Glossy Blue-Purple Flower (Foreground) */}
      <div
        ref={(el) => decosRef && (decosRef.current[8] = el)}
        className="absolute top-[10%] right-[1%] sm:right-[3%] lg:right-[4%] w-24 sm:w-40 lg:w-52 h-24 sm:h-40 lg:h-52 animate-float-slow"
        style={{
          transform: `translate3d(${parallaxOffset.x * 32}px, ${parallaxOffset.y * 32}px, 0)`,
          transition: 'transform 0.2s ease-out'
        }}
      >
        <GlossyMetallicFlower className="w-full h-full" />
      </div>

      {/* 10. Right Mid-Top Star (Midground) */}
      <div
        ref={(el) => decosRef && (decosRef.current[9] = el)}
        className="absolute top-[30%] right-[2%] sm:right-[4%] w-6 sm:w-9 lg:w-12 h-6 sm:h-9 lg:h-12 animate-pulse-glow"
        style={{
          transform: `translate3d(${parallaxOffset.x * 16}px, ${parallaxOffset.y * 16}px, 0)`,
          transition: 'transform 0.2s ease-out'
        }}
      >
        <SparkleStar className="w-full h-full" fill="#FFFFFF" />
      </div>

      {/* 11. Right Mid Hexagonal Gem Prism (Midground) */}
      <div
        ref={(el) => decosRef && (decosRef.current[10] = el)}
        className="absolute top-[42%] right-[10%] sm:right-[12%] w-14 sm:w-20 lg:w-24 h-16 sm:h-24 lg:h-28 animate-float-medium"
        style={{
          transform: `translate3d(${parallaxOffset.x * 22}px, ${parallaxOffset.y * 22}px, 0)`,
          transition: 'transform 0.2s ease-out'
        }}
      >
        <HexGemPrism className="w-full h-full" />
      </div>

      {/* 12. Right Lower-Mid Purple Yellow Flower (Foreground) */}
      <div
        ref={(el) => decosRef && (decosRef.current[11] = el)}
        className="absolute bottom-[24%] right-[3%] sm:right-[6%] w-24 sm:w-36 lg:w-48 h-24 sm:h-36 lg:h-48 animate-float-slow"
        style={{
          transform: `translate3d(${parallaxOffset.x * 36}px, ${parallaxOffset.y * 36}px, 0)`,
          transition: 'transform 0.2s ease-out'
        }}
      >
        <PurpleYellowFlower className="w-full h-full" />
      </div>

      {/* 13. Right Lower Chrome Sphere (Background) */}
      <div
        ref={(el) => decosRef && (decosRef.current[12] = el)}
        className="absolute bottom-[16%] right-[15%] sm:right-[17%] w-10 sm:w-14 lg:w-16 h-10 sm:h-14 lg:h-16 animate-float-reverse"
        style={{
          transform: `translate3d(${parallaxOffset.x * 12}px, ${parallaxOffset.y * 12}px, 0)`,
          transition: 'transform 0.2s ease-out'
        }}
      >
        <ChromeSphere className="w-full h-full" />
      </div>

      {/* 14. Right Bottom Organic Purple Blob (Foreground) */}
      <div
        ref={(el) => decosRef && (decosRef.current[13] = el)}
        className="absolute bottom-[2%] right-[7%] sm:right-[9%] w-24 sm:w-36 lg:w-44 h-24 sm:h-36 lg:h-44 animate-float-medium"
        style={{
          transform: `translate3d(${parallaxOffset.x * 30}px, ${parallaxOffset.y * 30}px, 0)`,
          transition: 'transform 0.2s ease-out'
        }}
      >
        <PurpleOrganicBlob className="w-full h-full" />
      </div>
    </div>
  );
};
