"use client";

import { useEffect, useRef } from "react";

export default function WaveLineShort({ className = "" }) {
  const pathRef = useRef(null);

  useEffect(() => {
    if (!pathRef.current) return;

    let animationFrame;
    let time = 0;

    const animate = () => {
      time += 0.02;

      const points = [];
      const segments = 20;
      const width = 150;

      for (let i = 0; i <= segments; i++) {
        const x = (i / segments) * width;
        const baseY = 10;
        const wave1 = Math.sin(x * 0.04 + time) * 3;
        const wave2 = Math.sin(x * 0.06 - time * 0.8) * 2;
        const y = baseY + wave1 + wave2;
        points.push(`${x},${y}`);
      }

      const pathData = `M ${points.join(" L ")}`;
      pathRef.current.setAttribute("d", pathData);

      animationFrame = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      if (animationFrame) {
        cancelAnimationFrame(animationFrame);
      }
    };
  }, []);

  return (
    <svg
      className={`absolute -bottom-3 left-0 w-full ${className}`}
      viewBox="0 0 150 20"
      xmlns="http://www.w3.org/2000/svg"
      preserveAspectRatio="none"
    >
      <path
        ref={pathRef}
        d="M0 10 Q37.5 0, 75 10 T150 10"
        stroke="#60A5FA"
        strokeWidth="4"
        fill="none"
        style={{
          filter: "drop-shadow(0 0 8px rgba(96, 165, 250, 0.5))",
        }}
      />
    </svg>
  );
}
