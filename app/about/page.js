import HeroSection from "@/components/HeroSection";
import Section from "@/components/Section";
import StatsSection from "@/components/StatsSection";
import ServiceCard from "@/components/ServiceCard";
import ScrollReveal from "@/components/ScrollReveal";

export default function AboutPage() {
  const services = [
    "CUSTOMISE YOUR ORDER",
    "CUSTOMISE YOUR ORDER",
    "CUSTOMISE YOUR ORDER",
    "CUSTOMISE YOUR ORDER",
  ];

  return (
    <main className="min-h-screen pb-20">
      <HeroSection
        title="Clean solutions at your"
        highlightedText="core."
        description="Qualiplus Sdn. Bhd. has been at the forefront of filtration technology, providing innovative solutions for industrial air and water purification. Our commitment to quality and innovation drives us to develop products that not only meet but exceed industry standards. With state-of-the-art manufacturing facilities and a dedicated team of experts, we serve clients across diverse industries who demand reliable, efficient, and cost-effective filtration solutions."
        waveType="short"
        minHeight="py-24"
      />

      <Section background="gradient" padding="py-24">
        <StatsSection />
      </Section>

      <Section title="Services we" titleHighlight="Offer" background="white">
        <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {services.map((service, index) => (
            <ScrollReveal
              key={index}
              animation={index % 2 === 0 ? "fadeInLeft" : "fadeInRight"}
              delay={0.1 + index * 0.1}
            >
              <ServiceCard title={service} />
            </ScrollReveal>
          ))}
        </div>
      </Section>
    </main>
  );
}
