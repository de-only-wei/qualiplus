import ProductCard from "./ProductCard";

export default function ProductGrid({
  products,
  columns = "md:grid-cols-2",
  className = "",
}) {
  return (
    <div className={`grid grid-cols-1 ${columns} gap-8 ${className}`}>
      {products.map((product, index) => (
        <ProductCard key={index} {...product} />
      ))}
    </div>
  );
}
