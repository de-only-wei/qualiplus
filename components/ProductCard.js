"use client";

import { useState } from "react";
import Link from "next/link";

export default function ProductCard({
  title,
  description,
  tags,
  image,
  imageExploded,
  href,
  annotations,
}) {
  const [isCardHovered, setIsCardHovered] = useState(false);
  const [isImageHovered, setIsImageHovered] = useState(false);

  return (
    <Link href={href || "#"} className="block">
      <div className="relative w-full">
        {/* Blue shadow layer */}
        <BlueShadowLayer />

        {/* Main card */}
        <MainCard
          isCardHovered={isCardHovered}
          setIsCardHovered={setIsCardHovered}
        >
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
            {/* Left: Content */}
            <ContentSection
              title={title}
              description={description}
              tags={tags}
            />

            {/* Right: Illustration */}
            <IllustrationSection
              isImageHovered={isImageHovered}
              setIsImageHovered={setIsImageHovered}
            />
          </div>

          {/* Navigation arrow - appears on image hover */}
          <NavigationArrow isImageHovered={isImageHovered} />
        </MainCard>
      </div>
    </Link>
  );
}

// Blue shadow layer behind the card
function BlueShadowLayer() {
  return (
    <div
      className="absolute inset-0 rounded-3xl bg-blue-600"
      style={{
        transform: "translate(12px, 12px)",
        zIndex: 0,
      }}
    />
  );
}

// Main white card with content
function MainCard({ isCardHovered, setIsCardHovered, children }) {
  return (
    <div
      className="relative overflow-hidden rounded-3xl bg-white p-12 transition-all duration-500"
      onMouseEnter={() => setIsCardHovered(true)}
      onMouseLeave={() => setIsCardHovered(false)}
      style={{
        transform: isCardHovered
          ? "rotate(3deg) scale(1.02)"
          : "rotate(0deg) scale(1)",
        zIndex: 1,
      }}
    >
      {children}
    </div>
  );
}

// Content section with title, description, and tags
function ContentSection({ title, description, tags }) {
  return (
    <div className="flex flex-col justify-between">
      <div>
        <h2 className="mb-6 font-sans text-5xl font-bold leading-tight tracking-tight text-black">
          {title.split(" ").map((word, i) => (
            <span key={i}>
              {word}
              <br />
            </span>
          ))}
        </h2>
        <p className="mb-8 font-sans text-base leading-relaxed text-neutral-600">
          {description}
        </p>
      </div>

      {tags && tags.length > 0 && (
        <div className="flex flex-wrap gap-2">
          {tags.map((tag, index) => (
            <span
              key={index}
              className="inline-block rounded-full bg-blue-200/60 px-4 py-1.5 font-sans text-sm font-medium text-blue-700 whitespace-nowrap"
            >
              {tag}
            </span>
          ))}
        </div>
      )}
    </div>
  );
}

// Illustration section with SVG wireframe
function IllustrationSection({ isImageHovered, setIsImageHovered }) {
  return (
    <div
      className="relative flex items-center justify-center"
      onMouseEnter={() => setIsImageHovered(true)}
      onMouseLeave={() => setIsImageHovered(false)}
    >
      {/* Wireframe illustration */}
      <svg
        viewBox="0 0 400 300"
        className="h-full w-full"
        style={{ maxHeight: "300px" }}
      >
        {/* Main 3D structure */}
        <g stroke="#1a1a1a" strokeWidth="1.5" fill="none">
          {/* Front frame with vertical gauze lines */}
          <path d="M 100 80 L 280 80 L 280 220 L 100 220 Z" />
          {[...Array(18)].map((_, i) => {
            const x = 110 + i * 10;
            return (
              <line
                key={`gauze-${i}`}
                x1={x}
                y1="85"
                x2={x}
                y2="215"
                strokeWidth="1"
              />
            );
          })}

          {/* Rivets on front frame */}
          {[...Array(6)].map((_, i) => {
            const y = 100 + i * 20;
            return (
              <circle
                key={`rivet-${i}`}
                cx="285"
                cy={y}
                r="3"
                fill="none"
                stroke="#1a1a1a"
                strokeWidth="1.5"
              />
            );
          })}

          {/* Bottom rivets */}
          {[...Array(4)].map((_, i) => {
            const x = 130 + i * 40;
            return (
              <circle
                key={`bottom-rivet-${i}`}
                cx={x}
                cy="225"
                r="3"
                fill="none"
                stroke="#1a1a1a"
                strokeWidth="1.5"
              />
            );
          })}

          {/* Middle frame (gabodine) */}
          <path d="M 120 100 L 300 100 L 300 240 L 120 240" />
          <line x1="280" y1="80" x2="300" y2="100" />
          <line x1="280" y1="220" x2="300" y2="240" />
          <line x1="100" y1="220" x2="120" y2="240" />

          {/* Back frame (solid concrete) */}
          <path d="M 140 120 L 320 120 L 320 260 L 140 260" />
          <line x1="300" y1="100" x2="320" y2="120" />
          <line x1="300" y1="240" x2="320" y2="260" />
          <line x1="120" y1="240" x2="140" y2="260" />

          {/* Horizontal lines on back frame */}
          <line x1="140" y1="140" x2="320" y2="140" strokeWidth="1" />
          <line x1="140" y1="160" x2="320" y2="160" strokeWidth="1" />
          <line x1="140" y1="180" x2="320" y2="180" strokeWidth="1" />
        </g>

        {/* Annotations - visible on hover */}
        <g
          className="transition-opacity duration-300"
          style={{ opacity: isImageHovered ? 1 : 0 }}
        >
          <Annotation
            path="M 190 60 Q 180 40 160 30"
            label="gauze"
            labelX="165"
            labelY="25"
          />
          <Annotation
            path="M 80 200 Q 60 220 40 240"
            label="gabodine"
            labelX="45"
            labelY="270"
          />
          <Annotation
            path="M 340 200 Q 360 220 380 240"
            label="solid concrete"
            labelX="290"
            labelY="285"
          />
        </g>

        {/* Arrow marker definition */}
        <defs>
          <marker
            id="arrowblue"
            markerWidth="10"
            markerHeight="10"
            refX="9"
            refY="3"
            orient="auto"
            markerUnits="strokeWidth"
          >
            <path d="M0,0 L0,6 L9,3 z" fill="#2563eb" />
          </marker>
        </defs>
      </svg>
    </div>
  );
}

// Annotation with curved arrow and label
function Annotation({ path, label, labelX, labelY }) {
  return (
    <>
      <path
        d={path}
        stroke="#2563eb"
        strokeWidth="3"
        fill="none"
        markerEnd="url(#arrowblue)"
      />
      <text
        x={labelX}
        y={labelY}
        fill="#1a1a1a"
        fontSize="16"
        fontFamily="serif"
      >
        {label}
      </text>
    </>
  );
}

// Navigation arrow that appears on image hover
function NavigationArrow({ isImageHovered }) {
  return (
    <div
      className="absolute bottom-8 right-8 transition-all duration-300"
      style={{
        opacity: isImageHovered ? 1 : 0,
        transform: isImageHovered ? "translateX(0)" : "translateX(20px)",
      }}
    >
      <svg
        className="h-12 w-12 text-blue-600"
        strokeWidth={3}
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M5 12h14m0 0l-7-7m7 7l-7 7"
          stroke="currentColor"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </div>
  );
}
