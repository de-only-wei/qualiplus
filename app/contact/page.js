import HeroSection from "@/components/HeroSection";
import Section from "@/components/Section";
import ContactInfo from "@/components/ContactInfo";
import ScrollReveal from "@/components/ScrollReveal";

export default function ContactPage() {
  return (
    <main className="min-h-screen pt-32 pb-20">
      <HeroSection
        highlightedText="Contact Us"
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed dictum pretium urna et euismod. Donec commodo sagittis molestie. Quisque sollicitudin dui id leo maximus rhoncus. Nulla facilisi. Morbi ac neque quis urna luctus luctus vitae nec mi. Mauris arcu lacus, aliquam ac neque vitae."
        minHeight="py-24"
        waveType="short"
      />

      <Section background="gradient">
        <ContactInfo className="mb-24" />
      </Section>

      <Section background="white" title="Visit Us!" titleHighlight="Us">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <ScrollReveal animation="fadeInLeft">
            <div className="flex gap-6 group">
              <div className="w-24 h-24 border-4 border-gray-800 rounded-full flex items-center justify-center flex-shrink-0 group-hover:border-blue-600 group-hover:bg-blue-50 group-hover:scale-105 transition-all duration-300 shadow-lg">
                <svg
                  className="w-12 h-12 group-hover:text-blue-600 transition-colors"
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
                <p className="text-xl font-bold text-gray-800 leading-relaxed">
                  32, Jalan TS 6/7,
                </p>
                <p className="text-xl font-bold text-gray-800 leading-relaxed">
                  Taman Perindustrian Subang,
                </p>
                <p className="text-xl font-bold text-gray-800 leading-relaxed">
                  47510 Subang Jaya, Selangor
                </p>
                <div className="mt-8">
                  <div className="inline-block p-4 bg-blue-50 rounded-2xl group-hover:bg-blue-100 transition-colors">
                    <svg
                      width="80"
                      height="80"
                      viewBox="0 0 80 80"
                      className="text-blue-600"
                    >
                      <path
                        d="M10 40 L70 40 M40 10 L40 70"
                        stroke="currentColor"
                        strokeWidth="5"
                        strokeLinecap="round"
                      />
                      <path
                        d="M40 10 L60 30 M60 30 L40 50"
                        stroke="currentColor"
                        strokeWidth="5"
                        strokeLinecap="round"
                        fill="none"
                      />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </ScrollReveal>

          <ScrollReveal animation="fadeInRight">
            <div className="bg-gradient-to-br from-blue-500 via-blue-600 to-blue-700 rounded-3xl p-8 shadow-2xl border-4 border-blue-600 hover:shadow-3xl hover:scale-[1.02] transition-all duration-300">
              <div className="bg-white rounded-2xl p-4 h-96 flex items-center justify-center group hover:bg-gray-50 transition-colors">
                <div className="text-center text-gray-400 group-hover:text-gray-600 transition-colors">
                  <svg
                    className="w-20 h-20 mx-auto mb-4"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <p className="text-xl font-semibold">Interactive Map</p>
                  <p className="text-sm mt-2">Map integration placeholder</p>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </Section>
    </main>
  );
}
