"use client";

import WaveLine from "./WaveLine";
import WaveLineShort from "./WaveLineShort";

export default function HeroSection({
  title,
  highlightedText,
  subtitle,
  description,
  showWave = true,
  waveType = "long", // "long" or "short"
  backgroundType = "dark", // "dark" or "light"
  showGrid = true,
  animateText = true,
  minHeight = "min-h-screen",
  className = "",
}) {
  const bgClass =
    backgroundType === "dark"
      ? "bg-gradient-to-br from-slate-800 via-slate-700 to-slate-900 text-white"
      : "bg-gradient-to-br from-gray-50 to-white text-gray-900";

  const WaveComponent = waveType === "short" ? WaveLineShort : WaveLine;

  return (
    <section
      className={`relative ${minHeight} flex items-center justify-center ${bgClass} pb-20 overflow-hidden ${className}`}
    >
      {showGrid && (
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0icmdiYSgyNTUsMjU1LDI1NSwwLjEpIiBzdHJva2Utd2lkdGg9IjEiLz48L3BhdHRlcm4+PC9kZWZzPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjZ3JpZCkiLz48L3N2Zz4=')] opacity-20"></div>
      )}

      <div className="container mx-auto px-6 text-center relative z-10">
        <h1
          className={`text-6xl md:text-7xl font-bold mb-8 ${
            animateText ? "animate-fadeInUp" : ""
          }`}
        >
          <span className="block mt-8" style={{ lineHeight: "1.2" }}>
            {title}
          </span>
          {highlightedText && (
            <>
              <span
                className="relative inline-block mt-8"
                style={{ lineHeight: "1.2" }}
              >
                <span
                  className={`relative z-10 ${
                    animateText
                      ? "text-gradient-animated animate-float"
                      : backgroundType === "dark"
                      ? "text-blue-400"
                      : "text-blue-600"
                  }`}
                >
                  {highlightedText}
                </span>
                {showWave && <WaveComponent />}
              </span>
            </>
          )}
        </h1>

        {subtitle && (
          <h2
            className={`text-3xl md:text-4xl mb-10 font-semibold ${
              backgroundType === "dark" ? "text-blue-300" : "text-blue-600"
            } ${animateText ? "animate-fadeIn delay-200" : ""}`}
          >
            {subtitle}
          </h2>
        )}

        {description && (
          <p
            className={`text-xl md:text-2xl max-w-4xl mx-auto leading-relaxed ${
              backgroundType === "dark" ? "text-gray-200" : "text-gray-600"
            } ${animateText ? "animate-fadeIn delay-300" : ""}`}
          >
            {description}
          </p>
        )}
      </div>
    </section>
  );
}
