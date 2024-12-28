import { useEffect, useState } from "react";

interface Element {
  id: number;
  x: number;
  y: number;
  size: number;
  speed: number;
  type: number;
  rotation: number;
  delay: number;
  scale: number;
}

const AnimatedBackground = () => {
  const [elements, setElements] = useState<Element[]>([]);

  useEffect(() => {
    const generateElements = () => {
      const items = [];
      for (let quadrant = 0; quadrant < 6; quadrant++) {
        for (let i = 0; i < 6; i++) {
          const baseX = (quadrant % 3) * 33.33;
          const baseY = Math.floor(quadrant / 3) * 50;

          items.push({
            id: quadrant * 6 + i,
            x: baseX + Math.random() * 30,
            y: baseY + Math.random() * 40,
            size: Math.random() * 30 + 20,
            speed: Math.random() * 40 + 60,
            type: Math.floor(Math.random() * 10),
            rotation: Math.random() * 360,
            delay: Math.random() * 10,
            scale: Math.random() * 0.5 + 0.8,
          });
        }
      }
      return items;
    };

    setElements(generateElements());
  }, []);

  return (
    <div className="absolute inset-0 overflow-hidden">
      {elements.map((element) => (
        <div
          key={element.id}
          className="absolute animate-float"
          style={{
            left: `${element.x}%`,
            top: `${element.y}%`,
            animationDuration: `${element.speed}s`,
            animationDelay: `${element.delay}s`,
            opacity: 0.2,
            transform: `rotate(${element.rotation}deg) scale(${element.scale})`,
          }}
        >
          {/* Code/Browser Window */}
          {element.type === 0 && (
            <svg
              width={element.size}
              height={element.size}
              viewBox="0 0 24 24"
              fill="none"
              stroke="#64ffda"
              strokeWidth="1.5"
            >
              <path d="M18 3H6a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2Z" />
              <path d="M4 9h16" />
              <path d="m8 16 3-3-3-3" />
            </svg>
          )}
          {/* Database */}
          {element.type === 1 && (
            <svg
              width={element.size}
              height={element.size}
              viewBox="0 0 24 24"
              fill="none"
              stroke="#64ffda"
              strokeWidth="1.5"
            >
              <path d="M12 2C6.48 2 2 4.02 2 6.5v11C2 19.98 6.48 22 12 22s10-2.02 10-4.5v-11C22 4.02 17.52 2 12 2z" />
              <path d="M2 6.5C2 8.98 6.48 11 12 11s10-2.02 10-4.5" />
              <path d="M2 12c0 2.48 4.48 4.5 10 4.5s10-2.02 10-4.5" />
            </svg>
          )}
          {/* Terminal */}
          {element.type === 2 && (
            <svg
              width={element.size}
              height={element.size}
              viewBox="0 0 24 24"
              fill="none"
              stroke="#64ffda"
              strokeWidth="1.5"
            >
              <path d="M4 17l6-6-6-6" />
              <path d="M12 19h8" />
            </svg>
          )}
          {/* Git Branch */}
          {element.type === 3 && (
            <svg
              width={element.size}
              height={element.size}
              viewBox="0 0 24 24"
              fill="none"
              stroke="#64ffda"
              strokeWidth="1.5"
            >
              <circle cx="18" cy="6" r="3" />
              <circle cx="6" cy="12" r="3" />
              <circle cx="18" cy="18" r="3" />
              <path d="M6 15v-3" />
              <path d="M18 9v6" />
              <path d="M12 12h3" />
            </svg>
          )}
          {/* Server */}
          {element.type === 4 && (
            <svg
              width={element.size}
              height={element.size}
              viewBox="0 0 24 24"
              fill="none"
              stroke="#64ffda"
              strokeWidth="1.5"
            >
              <rect x="2" y="2" width="20" height="8" rx="2" ry="2" />
              <rect x="2" y="14" width="20" height="8" rx="2" ry="2" />
              <line x1="6" y1="6" x2="6.01" y2="6" />
              <line x1="6" y1="18" x2="6.01" y2="18" />
            </svg>
          )}
          {/* Code Brackets */}
          {element.type === 5 && (
            <svg
              width={element.size}
              height={element.size}
              viewBox="0 0 24 24"
              fill="none"
              stroke="#64ffda"
              strokeWidth="1.5"
            >
              <polyline points="16 18 22 12 16 6" />
              <polyline points="8 6 2 12 8 18" />
            </svg>
          )}
          {/* Settings/Gear */}
          {element.type === 6 && (
            <svg
              width={element.size}
              height={element.size}
              viewBox="0 0 24 24"
              fill="none"
              stroke="#64ffda"
              strokeWidth="1.5"
            >
              <circle cx="12" cy="12" r="3" />
              <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z" />
            </svg>
          )}
          {/* Cloud */}
          {element.type === 7 && (
            <svg
              width={element.size}
              height={element.size}
              viewBox="0 0 24 24"
              fill="none"
              stroke="#64ffda"
              strokeWidth="1.5"
            >
              <path d="M18 10h-1.26A8 8 0 1 0 9 20h9a5 5 0 0 0 0-10z" />
            </svg>
          )}
          {/* API/Network */}
          {element.type === 8 && (
            <svg
              width={element.size}
              height={element.size}
              viewBox="0 0 24 24"
              fill="none"
              stroke="#64ffda"
              strokeWidth="1.5"
            >
              <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
              <path d="M12 6v14" />
              <path d="M4 10h16" />
            </svg>
          )}
          {/* Bug */}
          {element.type === 9 && (
            <svg
              width={element.size}
              height={element.size}
              viewBox="0 0 24 24"
              fill="none"
              stroke="#64ffda"
              strokeWidth="1.5"
            >
              <path d="M8 2l1.88 1.88" />
              <path d="M14.12 3.88L16 2" />
              <path d="M9 7.13v-1a3.003 3.003 0 1 1 6 0v1" />
              <path d="M12 20c-3.3 0-6-2.7-6-6v-3a4 4 0 0 1 4-4h4a4 4 0 0 1 4 4v3c0 3.3-2.7 6-6 6" />
              <path d="M12 20v-9" />
              <path d="M6.53 9C4.6 8.8 3 7.1 3 5" />
              <path d="M6 13H2" />
              <path d="M3 21c0-2.1 1.7-3.9 3.8-4" />
              <path d="M17.47 9c1.93-.2 3.53-1.9 3.53-4" />
              <path d="M22 13h-4" />
              <path d="M21 21c0-2.1-1.7-3.9-3.8-4" />
            </svg>
          )}
        </div>
      ))}
      <style jsx>{`
        @keyframes float {
          0% {
            transform: translate(0, 0) rotate(0deg);
          }
          20% {
            transform: translate(30px, -25px) rotate(90deg);
          }
          40% {
            transform: translate(-15px, 30px) rotate(180deg);
          }
          60% {
            transform: translate(-25px, -35px) rotate(270deg);
          }
          80% {
            transform: translate(20px, 20px) rotate(360deg);
          }
          100% {
            transform: translate(0, 0) rotate(450deg);
          }
        }
        .animate-float {
          animation: float linear infinite;
          animation-fill-mode: both;
        }
      `}</style>
    </div>
  );
};

export default AnimatedBackground;
