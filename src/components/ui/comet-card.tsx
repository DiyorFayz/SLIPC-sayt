'use client';

import React, { useRef, useState, useEffect } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';

interface CometCardProps {
  children: React.ReactNode;
  className?: string;
  containerClassName?: string;
  rotateDepth?: number;
  glareEffect?: boolean;
  isCircle?: boolean;
}

export function CometCard({
  children,
  className = '',
  containerClassName = '',
  rotateDepth = 14,
  glareEffect = true,
  isCircle = false,
}: CometCardProps) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);

  // Motion values for smooth 3D tilt
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const springConfig = { stiffness: 200, damping: 20 };
  const mouseX = useSpring(x, springConfig);
  const mouseY = useSpring(y, springConfig);

  const rotateX = useTransform(mouseY, [-0.5, 0.5], [`${rotateDepth}deg`, `-${rotateDepth}deg`]);
  const rotateY = useTransform(mouseX, [-0.5, 0.5], [`-${rotateDepth}deg`, `${rotateDepth}deg`]);
  const glareX = useTransform(mouseX, [-0.5, 0.5], ['0%', '100%']);
  const glareY = useTransform(mouseY, [-0.5, 0.5], ['0%', '100%']);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;

    // Normalizing mouse from -0.5 to 0.5
    const fromCenterX = (e.clientX - rect.left) / width - 0.5;
    const fromCenterY = (e.clientY - rect.top) / height - 0.5;

    x.set(fromCenterX);
    y.set(fromCenterY);
  };

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    x.set(0);
    y.set(0);
  };

  return (
    <div
      style={{ perspective: 1200 }}
      className={`w-full ${containerClassName}`}
    >
      <motion.div
        ref={cardRef}
        onMouseMove={handleMouseMove}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        // Continuous subtle floating idle motion when not hovered, and responsive 3D tilt on hover
        animate={
          isHovered
            ? { y: -4, transition: { duration: 0.25 } }
            : {
                y: [0, -6, 0],
                rotateZ: [0, 0.4, 0, -0.4, 0],
                transition: {
                  duration: 5,
                  repeat: Infinity,
                  ease: 'easeInOut',
                },
              }
        }
        style={{
          rotateX,
          rotateY,
          transformStyle: 'preserve-3d',
        }}
        className={`relative ${isCircle ? 'rounded-full' : 'rounded-2xl'} transition-shadow duration-300 transform-gpu ${
          isHovered ? 'shadow-2xl shadow-[#24356F]/20' : 'shadow-md shadow-slate-900/5'
        } ${className}`}
      >
        {/* Dynamic Comet Border Light Gradient */}
        <div
          className={`absolute -inset-[1px] ${isCircle ? 'rounded-full' : 'rounded-2xl'} pointer-events-none opacity-60 transition-opacity duration-300`}
          style={{
            background:
              'linear-gradient(135deg, rgba(36,53,111,0.4) 0%, rgba(18,113,90,0.3) 50%, rgba(56,189,248,0.3) 100%)',
          }}
        />

        {/* Inner 3D Content Container */}
        <div
          style={{ transform: 'translateZ(20px)', transformStyle: 'preserve-3d' }}
          className={`relative ${isCircle ? 'rounded-full' : 'rounded-2xl'} overflow-hidden`}
        >
          {children}

          {/* Interactive Glare Reflection Effect */}
          {glareEffect && isHovered && (
            <motion.div
              className={`absolute inset-0 pointer-events-none ${isCircle ? 'rounded-full' : 'rounded-2xl'} z-20`}
              style={{
                background: `radial-gradient(circle 180px at ${glareX} ${glareY}, rgba(255,255,255,0.35), transparent 70%)`,
              }}
            />
          )}
        </div>
      </motion.div>
    </div>
  );
}

export function CometCardDemo() {
  return (
    <div className="flex h-96 w-full items-center justify-center p-4">
      <CometCard className="max-w-sm p-4 bg-white border border-[#DDE2EF]">
        <div className="text-center p-6">
          <h3 className="font-bold text-lg text-slate-900">Comet Card Demo</h3>
          <p className="text-sm text-slate-500 mt-2">Interactive 3D Motion Card</p>
        </div>
      </CometCard>
    </div>
  );
}

export default CometCard;
