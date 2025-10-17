"use client";

import { useScrollAnimation } from "@/hooks/useScrollAnimation";

export default function ScrollReveal({
  children,
  animation = "fadeInUp",
  delay = 0,
  duration = 0.6,
  threshold = 0.1,
  className = "",
}) {
  const [ref, isVisible] = useScrollAnimation({ threshold, once: true });

  const animationStyles = {
    opacity: isVisible ? 1 : 0,
    transform: getTransform(animation, isVisible),
    transition: `all ${duration}s ease-out ${delay}s`,
  };

  return (
    <div ref={ref} className={className} style={animationStyles}>
      {children}
    </div>
  );
}

function getTransform(animation, isVisible) {
  if (isVisible) return "none";

  switch (animation) {
    case "fadeInUp":
      return "translateY(50px)";
    case "fadeInDown":
      return "translateY(-50px)";
    case "fadeInLeft":
      return "translateX(-50px)";
    case "fadeInRight":
      return "translateX(50px)";
    case "scaleIn":
      return "scale(0.9)";
    case "scaleInBig":
      return "scale(0.8)";
    default:
      return "none";
  }
}
