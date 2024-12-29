import React, { useEffect, useState } from 'react';

const AnimatedBackground = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    const handleScroll = () => {
      setScrollPosition(window.scrollY);
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none">
      {/* Gradient Orb that follows mouse */}
      <div 
        className="absolute w-[800px] h-[800px] opacity-30 blur-3xl transition-transform duration-1000"
        style={{
          background: 'radial-gradient(circle, rgba(100,255,218,0.15) 0%, rgba(10,25,50,0) 70%)',
          transform: `translate(${mousePosition.x - 400}px, ${mousePosition.y - 400}px)`,
        }}
      />

      {/* Animated Grid */}
      <div className="absolute inset-0 overflow-hidden opacity-20">
        <div className="absolute w-full h-full animate-grid-flow">
          {Array.from({ length: 20 }).map((_, i) => (
            <div
              key={i}
              className="absolute w-full h-px bg-gradient-to-r from-transparent via-[#64ffda] to-transparent"
              style={{ top: `${i * 5}%`, animationDelay: `${i * 0.1}s` }}
            />
          ))}
          {Array.from({ length: 20 }).map((_, i) => (
            <div
              key={i}
              className="absolute h-full w-px bg-gradient-to-b from-transparent via-[#64ffda] to-transparent"
              style={{ left: `${i * 5}%`, animationDelay: `${i * 0.1}s` }}
            />
          ))}
        </div>
      </div>

      {/* Floating Particles */}
      <div className="absolute inset-0 overflow-hidden">
        {Array.from({ length: 30 }).map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-[#64ffda] rounded-full opacity-30 animate-float"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${5 + Math.random() * 5}s`
            }}
          />
        ))}
      </div>

      {/* Scan Line Effect */}
      <div 
        className="absolute w-full h-px bg-[#64ffda] opacity-20 blur-sm"
        style={{
          top: `${(scrollPosition % window.innerHeight)}px`,
          transition: 'top 0.1s linear'
        }}
      />

      <style jsx>{`
        @keyframes gridFlow {
          0% { opacity: 0; }
          50% { opacity: 0.5; }
          100% { opacity: 0; }
        }
        .animate-grid-flow > div {
          animation: gridFlow 3s ease-in-out infinite;
        }
        @keyframes float {
          0%, 100% { transform: translate(0, 0); }
          50% { transform: translate(20px, -20px); }
        }
        .animate-float {
          animation: float 5s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
};

export default AnimatedBackground;