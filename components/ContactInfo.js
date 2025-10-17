import ScrollReveal from "./ScrollReveal";

export default function ContactInfo({
  methods = [
    {
      icon: (
        <svg className="w-14 h-14" fill="currentColor" viewBox="0 0 20 20">
          <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
        </svg>
      ),
      text: "012-208 8129",
    },
    {
      icon: (
        <svg className="w-14 h-14" fill="currentColor" viewBox="0 0 20 20">
          <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
          <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
        </svg>
      ),
      text: "qualiplus@qualiplus.com.my",
    },
  ],
  layout = "horizontal", // "horizontal" or "vertical"
  className = "",
}) {
  const containerClass =
    layout === "horizontal"
      ? "flex flex-col md:flex-row justify-center gap-12"
      : "space-y-8";

  return (
    <div className={`${containerClass} ${className}`}>
      {methods.map((method, index) => (
        <ScrollReveal key={index} animation="scaleIn" delay={0.1 + index * 0.1}>
          <div className="text-center group">
            <div className="w-28 h-28 mx-auto mb-6 border-4 border-gray-800 rounded-full flex items-center justify-center group-hover:border-blue-600 group-hover:bg-blue-50 group-hover:scale-110 transition-all duration-300 shadow-lg group-hover:shadow-xl">
              <div className="group-hover:text-blue-600 transition-colors">
                {method.icon}
              </div>
            </div>
            <p className="text-xl font-bold text-gray-800 group-hover:text-blue-600 transition-colors">
              {method.text}
            </p>
          </div>
        </ScrollReveal>
      ))}
    </div>
  );
}
