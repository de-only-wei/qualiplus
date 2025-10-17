import ScrollReveal from "./ScrollReveal";

export default function Section({
  children,
  title,
  titleHighlight,
  subtitle,
  background = "white", // "white", "gray", "blue", "gradient"
  padding = "py-24",
  maxWidth = "max-w-7xl",
  titleAnimation = "fadeInUp",
  className = "",
}) {
  const bgClasses = {
    white: "bg-white",
    gray: "bg-gradient-to-br from-gray-50 to-white",
    blue: "bg-gradient-to-br from-blue-500 via-blue-600 to-blue-700",
    gradient: "bg-gradient-to-br from-gray-50 to-white",
  };

  const titleColor = background === "blue" ? "text-white" : "text-gray-900";

  return (
    <section
      className={`${bgClasses[background]} ${padding} overflow-hidden ${className}`}
    >
      <div className="container mx-auto px-6">
        {(title || subtitle) && (
          <ScrollReveal animation={titleAnimation}>
            <div className="text-center mb-20">
              {title && (
                <h2
                  className={`text-5xl md:text-6xl font-bold mb-8 ${titleColor}`}
                >
                  {title}{" "}
                  {titleHighlight && (
                    <span className="relative inline-block">
                      <span className="relative z-10 text-blue-600">
                        {titleHighlight}
                      </span>
                      <svg
                        className="absolute -bottom-2 left-0 w-full"
                        viewBox="0 0 200 15"
                        xmlns="http://www.w3.org/2000/svg"
                        preserveAspectRatio="none"
                      >
                        <ellipse
                          cx="100"
                          cy="7"
                          rx="95"
                          ry="6"
                          stroke="#60A5FA"
                          strokeWidth="3"
                          fill="none"
                        />
                      </svg>
                    </span>
                  )}
                </h2>
              )}
              {subtitle && (
                <p
                  className={`text-lg md:text-xl max-w-4xl mx-auto leading-relaxed ${
                    background === "blue" ? "text-blue-50" : "text-gray-600"
                  }`}
                >
                  {subtitle}
                </p>
              )}
            </div>
          </ScrollReveal>
        )}

        <div className={`mx-auto ${maxWidth}`}>{children}</div>
      </div>
    </section>
  );
}
