export default function FooterSection() {
  return (
    <footer>
      {/* Main Contact/Help Section */}
      <section className="bg-gradient-to-br from-blue-500 via-blue-600 to-blue-700 py-12 md:py-16 relative overflow-hidden">
        {/* Animated background pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0id2hpdGUiIHN0cm9rZS13aWR0aD0iMSIvPjwvcGF0dGVybj48L2RlZnM+PHJlY3Qgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsbD0idXJsKCNncmlkKSIvPjwvc3ZnPg==')]"></div>
        </div>

        <div className="container mx-auto px-6 relative z-10">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-12">
            {/* Company Info with Map */}
            <div className="flex-shrink-0 space-y-4 animate-fadeIn">
              {/* Embedded Map */}
              <div className="w-full max-w-xs bg-white/10 backdrop-blur-sm rounded-xl shadow-lg border border-white/20 overflow-hidden hover:bg-white/20 transition-all duration-300">
                <div className="relative w-full h-48">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3984.201680084301!2d101.60096440000001!3d3.0405373!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31cc4cb4115fee09%3A0x73c8c3e0a67c8a56!2sQualiplus%20Sdn.%20Bhd.!5e0!3m2!1sen!2smy!4v1761381022315!5m2!1sen!2smy"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen=""
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    className="absolute inset-0"
                    title="Qualiplus Location Map"
                  ></iframe>
                </div>
              </div>

              {/* Contact Details */}
              <div className="space-y-3 text-white text-sm">
                <div className="flex items-start gap-3 group hover:translate-x-1 transition-transform duration-300">
                  <div className="w-10 h-10 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center flex-shrink-0 group-hover:bg-white/30 group-hover:scale-110 transition-all duration-300 shadow-lg">
                    <svg
                      className="w-5 h-5"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                  <div className="flex-1">
                    <p className="font-medium leading-relaxed">
                      32, Jalan TS 6/7,
                    </p>
                    <p className="font-medium leading-relaxed">
                      Taman Perindustrian Subang,
                    </p>
                    <p className="font-medium leading-relaxed">
                      47510 Subang Jaya, Selangor
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-3 group hover:translate-x-1 transition-transform duration-300">
                  <div className="w-10 h-10 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center flex-shrink-0 group-hover:bg-white/30 group-hover:scale-110 transition-all duration-300 shadow-lg">
                    <svg
                      className="w-5 h-5"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                    </svg>
                  </div>
                  <a
                    href="tel:012-208-8129"
                    className="font-medium hover:text-blue-100 transition-colors"
                  >
                    012-208 8129
                  </a>
                </div>

                <div className="flex items-center gap-3 group hover:translate-x-1 transition-transform duration-300">
                  <div className="w-10 h-10 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center flex-shrink-0 group-hover:bg-white/30 group-hover:scale-110 transition-all duration-300 shadow-lg">
                    <svg
                      className="w-5 h-5"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                      <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                    </svg>
                  </div>
                  <a
                    href="mailto:qualiplus@qualiplus.com.my"
                    className="font-medium hover:text-blue-100 transition-colors"
                  >
                    qualiplus@qualiplus.com.my
                  </a>
                </div>
              </div>
            </div>

            {/* CTA Section */}
            <div className="flex-1 text-center text-white animate-fadeIn delay-200">
              <h2 className="text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                Need Our Help?
              </h2>
              <p className="text-lg lg:text-xl mb-10 max-w-md mx-auto leading-relaxed opacity-95">
                Our team of consultant will guide you through our process of
                product selection.
              </p>
              <a
                href="/contact"
                className="inline-block bg-white text-blue-700 px-10 py-4 rounded-full text-lg font-semibold hover:bg-blue-50 hover:shadow-2xl transition-all duration-300 shadow-xl transform hover:-translate-y-1 hover:scale-105 active:scale-95"
              >
                Let us know what suits your needs!
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Bottom Footer Bar */}
      <div className="bg-gradient-to-br from-blue-600 via-blue-700 to-blue-800 text-white py-4">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-3 text-sm">
            <div className="flex items-center gap-4">
              <a
                href="#"
                className="hover:text-blue-200 transition-colors font-medium"
              >
                Security
              </a>
              <span className="text-blue-300">•</span>
              <a
                href="#"
                className="hover:text-blue-200 transition-colors font-medium"
              >
                Privacy
              </a>
              <span className="text-blue-300">•</span>
              <a
                href="#"
                className="hover:text-blue-200 transition-colors font-medium"
              >
                Terms
              </a>
            </div>

            <p className="text-center text-blue-50 font-medium">
              Because every breath deserves to be protected.
            </p>

            <p className="font-semibold text-blue-50">©QUALIPLUS 2025</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
