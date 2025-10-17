import HeroSection from "@/components/HeroSection";
import Section from "@/components/Section";
import ProductGrid from "@/components/ProductGrid";
import StatsSection from "@/components/StatsSection";

export default function Home() {
  const products = [
    {
      title: "DUST CARTRIDGES",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed dictum pretium urna et euismod. Donec commodo sagittis molestie.",
      tags: ["Dust Filter", "Commercial"],
      href: "/products/dust-cartridges",
    },
    {
      title: "WATER FILTER",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed dictum pretium urna et euismod. Donec commodo sagittis molestie.",
      tags: ["Replaceable", "Household"],
      href: "/products",
    },
  ];

  return (
    <main className="min-h-screen">
      <HeroSection
        title="Because every breath"
        highlightedText="deserves to be protected"
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed dictum pretium urna et euismod. Donec commodo sagittis molestie. Quisque sollicitudin dui id leo maximus rhoncus. Nulla facilisi. Morbi ac neque quis urna luctus luctus vitae nec mi. Mauris arcu lacus, aliquam ac neque vitae."
      />

      <Section
        title="What we do here at"
        titleHighlight="Qualiplus"
        subtitle="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed dictum pretium urna et euismod. Donec commodo sagittis molestie. Quisque sollicitudin dui id leo maximus rhoncus. Nulla facilisi. Morbi ac neque quis urna luctus luctus vitae nec mi. Mauris arcu lacus, aliquam ac neque vitae, bibendum ornare est. Fusce et orci lectus."
        background="gradient"
      >
        <Section
          title="Our Line of"
          titleHighlight="Products"
          padding="py-0 mb-24"
          maxWidth="max-w-6xl"
        >
          <ProductGrid products={products} />
        </Section>

        <StatsSection />
      </Section>
    </main>
  );
}
