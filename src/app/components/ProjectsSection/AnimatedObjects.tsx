import React from "react";

const FloatingGrid = () => (
  <div className="absolute -left-20 top-1/4 w-40 h-40 opacity-20">
    <div className="relative w-full h-full animate-float-slow">
      <svg viewBox="0 0 100 100" fill="none" stroke="#64ffda" strokeWidth="1">
        <pattern
          id="grid"
          x="0"
          y="0"
          width="20"
          height="20"
          patternUnits="userSpaceOnUse"
        >
          <path d="M 20 0 L 0 0 0 20" fill="none" />
        </pattern>
        <rect width="100" height="100" fill="url(#grid)" />
      </svg>
      <div className="absolute inset-0 bg-gradient-to-tr from-[#64ffda]/10 via-transparent to-transparent blur-xl" />
    </div>
  </div>
);

const CircuitLines = () => (
  <div className="absolute -right-20 bottom-1/4 w-48 h-48 opacity-20">
    <div className="relative w-full h-full animate-pulse-glow">
      <svg viewBox="0 0 100 100" fill="none" stroke="#64ffda" strokeWidth="1">
        <path
          className="animate-draw"
          d="M 20,50 L 40,50 L 40,20 L 60,20 L 60,80 L 80,80"
          strokeDasharray="200"
          strokeDashoffset="200"
        />
        <circle
          cx="20"
          cy="50"
          r="2"
          className="animate-pulse"
          fill="#64ffda"
        />
        <circle
          cx="40"
          cy="20"
          r="2"
          className="animate-pulse-delay-1"
          fill="#64ffda"
        />
        <circle
          cx="60"
          cy="80"
          r="2"
          className="animate-pulse-delay-2"
          fill="#64ffda"
        />
        <circle
          cx="80"
          cy="80"
          r="2"
          className="animate-pulse-delay-3"
          fill="#64ffda"
        />
      </svg>
    </div>
  </div>
);

const FloatingDots = () => (
  <div className="absolute left-1/4 bottom-1/4 w-32 h-32 opacity-20">
    <div className="relative w-full h-full animate-rotate-slow">
      <svg viewBox="0 0 100 100" fill="none">
        {[...Array(8)].map((_, i) => (
          <circle
            key={i}
            cx={50 + 30 * Math.cos((i * Math.PI) / 4)}
            cy={50 + 30 * Math.sin((i * Math.PI) / 4)}
            r="3"
            className={`animate-pulse-delay-${i % 4}`}
            fill="#64ffda"
          />
        ))}
      </svg>
    </div>
  </div>
);

const WavyLines = () => (
  <div className="absolute right-1/4 top-1/4 w-40 h-40 opacity-20">
    <div className="relative w-full h-full animate-float-slow">
      <svg viewBox="0 0 100 100" fill="none" stroke="#64ffda" strokeWidth="1">
        {[...Array(5)].map((_, i) => (
          <path
            key={i}
            d={`M 10 ${20 + i * 15} Q 30 ${10 + i * 15}, 50 ${
              20 + i * 15
            } T 90 ${20 + i * 15}`}
            className="animate-draw-delay"
            strokeDasharray="200"
            strokeDashoffset="200"
            style={{ animationDelay: `${i * 0.2}s` }}
          />
        ))}
      </svg>
    </div>
  </div>
);

const HexagonGrid = () => (
  <div className="absolute left-1/3 top-1/2 w-36 h-36 opacity-20">
    <div className="relative w-full h-full animate-pulse-glow">
      <svg viewBox="0 0 100 100" fill="none" stroke="#64ffda" strokeWidth="1">
        {[...Array(4)].map((_, row) =>
          [...Array(4)].map((_, col) => (
            <path
              key={`${row}-${col}`}
              d={`M ${col * 20 + 10} ${
                row * 20 + 10
              } l 10 0 l 5 8.66 l -5 8.66 l -10 0 l -5 -8.66 z`}
              className={`animate-pulse-delay-${(row + col) % 4}`}
            />
          ))
        )}
      </svg>
    </div>
  </div>
);

const AnimatedDecorations = () => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      <style jsx>{`
        @keyframes floatSlow {
          0%,
          100% {
            transform: translate(0, 0) rotate(0deg);
          }
          25% {
            transform: translate(10px, -10px) rotate(5deg);
          }
          50% {
            transform: translate(0, -20px) rotate(0deg);
          }
          75% {
            transform: translate(-10px, -10px) rotate(-5deg);
          }
        }
        @keyframes draw {
          to {
            stroke-dashoffset: 0;
          }
        }
        @keyframes rotateSlow {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }
        @keyframes pulseGlow {
          0%,
          100% {
            opacity: 0.2;
          }
          50% {
            opacity: 0.4;
          }
        }
        .animate-float-slow {
          animation: floatSlow 8s ease-in-out infinite;
        }
        .animate-rotate-slow {
          animation: rotateSlow 20s linear infinite;
        }
        .animate-draw {
          animation: draw 3s ease-out infinite;
        }
        .animate-draw-delay {
          animation: draw 3s ease-out infinite;
        }
        .animate-pulse-glow {
          animation: pulseGlow 4s ease-in-out infinite;
        }
        .animate-pulse {
          animation: pulseGlow 2s ease-in-out infinite;
        }
        .animate-pulse-delay-0 {
          animation: pulseGlow 2s ease-in-out infinite;
        }
        .animate-pulse-delay-1 {
          animation: pulseGlow 2s ease-in-out infinite;
          animation-delay: 0.5s;
        }
        .animate-pulse-delay-2 {
          animation: pulseGlow 2s ease-in-out infinite;
          animation-delay: 1s;
        }
        .animate-pulse-delay-3 {
          animation: pulseGlow 2s ease-in-out infinite;
          animation-delay: 1.5s;
        }
      `}</style>

      <FloatingGrid />
      <CircuitLines />
      <FloatingDots />
      <WavyLines />
      <HexagonGrid />
    </div>
  );
};

export default AnimatedDecorations;
