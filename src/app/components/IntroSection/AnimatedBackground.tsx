'use client';

import React, { useEffect, useRef } from 'react';

const AnimatedBackground = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const orbRef = useRef<HTMLDivElement>(null);
  const scanLineRef = useRef<HTMLDivElement>(null);
  const animationFrameRef = useRef<number | null>(null);

  // Handle mouse move effect using requestAnimationFrame
  useEffect(() => {
    if (!orbRef.current) return;

    let mouseX = 0;
    let mouseY = 0;
    let currentX = 0;
    let currentY = 0;
    const friction = 0.1;

    const animate = () => {
      // Apply easing to the orb movement
      const dx = (mouseX - currentX) * friction;
      const dy = (mouseY - currentY) * friction;
      
      currentX += dx;
      currentY += dy;

      if (orbRef.current) {
        orbRef.current.style.transform = `translate(calc(${currentX}px - 50%), calc(${currentY}px - 50%))`;
      }

      animationFrameRef.current = requestAnimationFrame(animate);
    };

    const handleMouseMove = (e: MouseEvent) => {
      if (!containerRef.current) return;
      
      const rect = containerRef.current.getBoundingClientRect();
      mouseX = e.clientX - rect.left;
      mouseY = e.clientY - rect.top;
    };

    // Start animation loop
    animationFrameRef.current = requestAnimationFrame(animate);
    
    // Add mousemove listener
    document.addEventListener('mousemove', handleMouseMove);

    return () => {
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
      document.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  // Handle scan line effect
  useEffect(() => {
    if (!scanLineRef.current) return;
    
    let position = 0;
    const speed = 0.5;
    let animationFrameId: number;

    const animateScanLine = () => {
      position = (position + speed) % 100;
      if (scanLineRef.current) {
        scanLineRef.current.style.top = `${position}%`;
      }
      animationFrameId = requestAnimationFrame(animateScanLine);
    };

    animationFrameId = requestAnimationFrame(animateScanLine);

    return () => {
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <div ref={containerRef} className="fixed inset-0 pointer-events-none overflow-hidden">
      {/* Gradient Orb */}
      <div 
        ref={orbRef}
        className="absolute w-[800px] h-[800px] opacity-30 blur-3xl transition-transform duration-1000 will-change-transform"
        style={{
          background: 'radial-gradient(circle, rgba(100,255,218,0.15) 0%, rgba(10,25,50,0) 70%)',
          top: '50%',
          left: '50%',
        }}
      />

      {/* Animated Grid */}
      <div className="absolute inset-0 overflow-hidden opacity-20">
        <div className="absolute w-full h-full animate-grid-flow">
          {Array.from({ length: 20 }).map((_, i) => (
            <div
              key={`h-${i}`}
              className="absolute w-full h-px bg-gradient-to-r from-transparent via-[#64ffda] to-transparent"
              style={{ 
                top: `${i * 5}%`, 
                animationDelay: `${i * 0.1}s`,
                animationName: 'gridFlow',
                animationDuration: '3s',
                animationTimingFunction: 'ease-in-out',
                animationIterationCount: 'infinite',
                opacity: 0
              }}
            />
          ))}
          {Array.from({ length: 20 }).map((_, i) => (
            <div
              key={`v-${i}`}
              className="absolute h-full w-px bg-gradient-to-b from-transparent via-[#64ffda] to-transparent"
              style={{ 
                left: `${i * 5}%`, 
                animationDelay: `${i * 0.1}s`,
                animationName: 'gridFlow',
                animationDuration: '3s',
                animationTimingFunction: 'ease-in-out',
                animationIterationCount: 'infinite',
                opacity: 0
              }}
            />
          ))}
        </div>
      </div>

      {/* Floating Particles */}
      <div className="absolute inset-0 overflow-hidden">
        {Array.from({ length: 30 }).map((_, i) => {
          const size = Math.random() * 4 + 1;
          const duration = 5 + Math.random() * 10;
          const delay = Math.random() * 5;
          const startX = Math.random() * 100;
          const startY = Math.random() * 100;
          
          return (
            <div
              key={i}
              className="absolute rounded-full bg-[#64ffda]"
              style={{
                width: `${size}px`,
                height: `${size}px`,
                left: `${startX}%`,
                top: `${startY}%`,
                animation: `float ${duration}s ease-in-out ${delay}s infinite`,
                opacity: 0.3,
              }}
            />
          );
        })}
      </div>

      {/* Scan Line Effect */}
      <div 
        ref={scanLineRef}
        className="absolute w-full h-px bg-[#64ffda] opacity-20 blur-sm"
        style={{
          top: '0%',
          background: 'linear-gradient(90deg, transparent, #64ffda, transparent)',
          transition: 'top 0.1s linear'
        }}
      />

      <style jsx global>{`
        @keyframes gridFlow {
          0% { opacity: 0; }
          50% { opacity: 0.5; }
          100% { opacity: 0; }
        }
        @keyframes float {
          0%, 100% { 
            transform: translate(0, 0); 
          }
          25% { 
            transform: translate(10px, -10px); 
          }
          50% { 
            transform: translate(20px, 10px); 
          }
          75% { 
            transform: translate(-10px, 20px); 
          }
        }
      `}</style>
    </div>
  );
};

export default AnimatedBackground;