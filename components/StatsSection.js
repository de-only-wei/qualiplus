import StatCard from "./StatCard";
import ScrollReveal from "./ScrollReveal";

export default function StatsSection({
  title = "Over The Years, We've Gotten",
  titleHighlight = "Over The Years",
  stats = [
    {
      icon: (
        <svg className="w-10 h-10" fill="currentColor" viewBox="0 0 20 20">
          <path d="M2 5a2 2 0 012-2h12a2 2 0 012 2v10a2 2 0 01-2 2H4a2 2 0 01-2-2V5zm3 1h10v8H5V6z" />
        </svg>
      ),
      number: "1000+",
      label: "Clients Served",
    },
    {
      icon: (
        <svg className="w-10 h-10" fill="currentColor" viewBox="0 0 20 20">
          <path d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z" />
        </svg>
      ),
      number: "500+",
      label: "Products",
    },
    {
      icon: (
        <svg className="w-10 h-10" fill="currentColor" viewBox="0 0 20 20">
          <path d="M9 2a1 1 0 000 2h2a1 1 0 100-2H9z" />
          <path
            fillRule="evenodd"
            d="M4 5a2 2 0 012-2 3 3 0 003 3h2a3 3 0 003-3 2 2 0 012 2v11a2 2 0 01-2 2H6a2 2 0 01-2-2V5zm3 4a1 1 0 000 2h.01a1 1 0 100-2H7zm3 0a1 1 0 000 2h3a1 1 0 100-2h-3zm-3 4a1 1 0 100 2h.01a1 1 0 100-2H7zm3 0a1 1 0 100 2h3a1 1 0 100-2h-3z"
            clipRule="evenodd"
          />
        </svg>
      ),
      number: "20+",
      label: "Years Experience",
    },
    {
      icon: (
        <svg className="w-10 h-10" fill="currentColor" viewBox="0 0 20 20">
          <path d="M9 6a3 3 0 11-6 0 3 3 0 016 0zM17 6a3 3 0 11-6 0 3 3 0 016 0zM12.93 17c.046-.327.07-.66.07-1a6.97 6.97 0 00-1.5-4.33A5 5 0 0119 16v1h-6.07zM6 11a5 5 0 015 5v1H1v-1a5 5 0 015-5z" />
        </svg>
      ),
      number: "100+",
      label: "Workers",
    },
  ],
  showIcon = true,
  className = "",
}) {
  return (
    <ScrollReveal animation="scaleIn" delay={0.1}>
      <div
        className={`bg-white rounded-3xl shadow-2xl p-12 max-w-6xl mx-auto border border-gray-100 ${className}`}
      >
        <div className="text-center mb-16">
          <h3 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">
            <span className="text-blue-600">{titleHighlight}</span>
            {title.replace(titleHighlight, "")}
          </h3>

          {showIcon && (
            <div className="flex justify-center">
              <div className="w-16 h-16 flex items-center justify-center">
                <svg
                  width="50"
                  height="50"
                  viewBox="0 0 50 50"
                  className="text-blue-600 animate-pulse-subtle"
                >
                  <circle
                    cx="25"
                    cy="25"
                    r="20"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="3"
                  />
                  <path
                    d="M25 10 L25 40 M10 25 L40 25"
                    stroke="currentColor"
                    strokeWidth="3"
                    strokeLinecap="round"
                  />
                </svg>
              </div>
            </div>
          )}
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-12">
          {stats.map((stat, index) => (
            <ScrollReveal
              key={index}
              animation="fadeInUp"
              delay={0.1 + index * 0.1}
              threshold={0.3}
            >
              <StatCard
                icon={stat.icon}
                number={stat.number}
                label={stat.label}
              />
            </ScrollReveal>
          ))}
        </div>
      </div>
    </ScrollReveal>
  );
}
