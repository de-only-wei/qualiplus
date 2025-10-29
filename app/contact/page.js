import HeroSection from "@/components/HeroSection";
import Section from "@/components/Section";
import ScrollReveal from "@/components/ScrollReveal";

export default function ContactPage() {
  return (
    <main className="min-h-screen pb-20">
      <HeroSection
        highlightedText="Contact Us"
        description="Have questions about our filtration solutions? We're here to help. Whether you need technical specifications, custom orders, or expert advice on the right filtration system for your needs, our team is ready to assist you. Visit our facility or reach out to discuss how we can support your filtration requirements."
        minHeight="py-24"
        waveType="short"
      />

      <Section background="white" title="Visit Us!" titleHighlight="Us">
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          <ScrollReveal animation="fadeInLeft">
            <div className="space-y-8">
              <div className="flex gap-6 items-start group">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center flex-shrink-0 group-hover:scale-105 transition-all duration-300 shadow-lg">
                  <svg
                    className="w-8 h-8 text-white"
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
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">
                    Our Location
                  </h3>
                  <div className="space-y-2">
                    <p className="text-lg text-gray-700 font-medium">
                      32, Jalan TS 6/7,
                    </p>
                    <p className="text-lg text-gray-700 font-medium">
                      Taman Perindustrian Subang,
                    </p>
                    <p className="text-lg text-gray-700 font-medium">
                      47510 Subang Jaya, Selangor
                    </p>
                  </div>
                  <a
                    href="https://www.google.com/maps/dir/?api=1&destination=Qualiplus+Sdn.+Bhd.+32+Jalan+TS+6%2F7+Taman+Perindustrian+Subang+47510+Subang+Jaya+Selangor"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 mt-6 px-6 py-3 bg-blue-600 text-white font-semibold rounded-xl hover:bg-blue-700 transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105"
                  >
                    <svg
                      className="w-5 h-5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7"
                      />
                    </svg>
                    Get Directions
                  </a>
                </div>
              </div>
            </div>
          </ScrollReveal>

          <ScrollReveal animation="fadeInRight">
            <div className="bg-gradient-to-br from-blue-500 via-blue-600 to-blue-700 rounded-3xl p-2 shadow-2xl hover:shadow-3xl transition-all duration-300">
              <div className="bg-white rounded-2xl overflow-hidden">
                <div className="relative w-full h-[500px]">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3984.201680084301!2d101.60096440000001!3d3.0405373!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31cc4cb4115fee09%3A0x73c8c3e0a67c8a56!2sQualiplus%20Sdn.%20Bhd.!5e0!3m2!1sen!2smy!4v1761381022315!5m2!1sen!2smy"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen=""
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    className="rounded-xl"
                  ></iframe>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </Section>
    </main>
  );
}
