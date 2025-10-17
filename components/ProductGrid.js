import ProductCard from "./ProductCard";
import ScrollReveal from "./ScrollReveal";

export default function ProductGrid({
  products,
  columns = "md:grid-cols-2",
  showAnimation = true,
  animationDelay = 0.1,
  className = "",
}) {
  return (
    <div className={`grid grid-cols-1 ${columns} gap-8 ${className}`}>
      {products.map((product, index) => {
        const content = (
          <ProductCard
            key={index}
            title={product.title}
            description={product.description}
            tags={product.tags}
            image={product.image}
            href={product.href}
          />
        );

        return showAnimation ? (
          <ScrollReveal
            key={index}
            animation={index % 2 === 0 ? "fadeInLeft" : "fadeInRight"}
            delay={animationDelay + index * 0.1}
          >
            {content}
          </ScrollReveal>
        ) : (
          content
        );
      })}
    </div>
  );
}
