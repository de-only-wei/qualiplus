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
    <main className="min-h-screen pt-32 pb-20">
      <HeroSection
        title="Clean solutions at your"
        highlightedText="core."
        subtitle="About Us"
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi feugiat lorem quis tortor aliquam, et accumsan arcu mollis. Curabitur rutrum enim in congue vehicula. Morbi cursus sit amet massa at congue. Morbi nec massa cursus, posuere nisl rhoncus, tincidunt orci. Aliquam venenatis convallis dolor et euismod. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Suspendisse tincidunt mi vel lacus tempus tempor. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas."
        waveType="short"
        minHeight="py-32"
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
