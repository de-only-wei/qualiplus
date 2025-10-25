import productsData from "@/data/products.json";

export function getAllProducts() {
  return productsData.products;
}

export function getProductsByCategory(category) {
  return productsData.products.filter(
    (product) => product.category === category
  );
}

export function getProductBySlug(slug) {
  return productsData.products.find((product) => product.slug === slug);
}

export function getRelatedProducts(productId) {
  const product = productsData.products.find((p) => p.id === productId);
  if (!product || !product.relatedProducts) return [];

  return product.relatedProducts
    .map((relatedId) => productsData.products.find((p) => p.id === relatedId))
    .filter(Boolean);
}

export function getCategories() {
  return productsData.categories;
}
