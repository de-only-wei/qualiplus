# Product Data Management

This directory contains the JSON data for all products displayed on the website.

## File Structure

- `products.json` - Main product database

## Product Schema

Each product in the JSON file has the following structure:

```json
{
  "id": "unique-product-id",           // Unique identifier
  "slug": "product-url-slug",           // URL-friendly slug (e.g., "dust-cartridges")
  "name": "Product Name",               // Display name
  "category": "dust" | "water",         // Product category
  "shortDescription": "Brief desc",     // Short description for cards/listings
  "fullDescription": "Detailed desc",   // Full description for product page
  "images": [                           // Array of image paths from /public
    "/image-name.jpeg",
    "/another-image.jpeg"
  ],
  "tags": [                             // Tags/keywords for filtering
    "Tag 1",
    "Tag 2"
  ],
  "specifications": {
    "title": "Technical Specifications",
    "description": "Detailed specs description",
    "layers": [                         // Optional: filter layers
      "layer 1",
      "layer 2"
    ],
    "features": [                       // List of key features
      "Feature 1",
      "Feature 2"
    ]
  },
  "relatedProducts": [                  // IDs of related products
    "related-product-id-1",
    "related-product-id-2"
  ]
}
```

## Adding a New Product

1. **Add product images** to `/public/` directory
2. **Add product data** to `products.json`:
   - Create a unique `id` (e.g., "hepa-filters")
   - Use the same value for `slug` (must be URL-friendly)
   - Fill in all required fields
   - Use image paths starting with `/` (e.g., "/hepa-filter-01.jpeg")
3. **Update related products** - Add the new product's ID to related products' `relatedProducts` arrays

## Image Guidelines

- Place all product images in `/public/` directory
- Supported formats: JPEG, PNG, WebP
- Reference images in JSON with paths like: `"/image-name.jpeg"`
- Use `"/placeholder-product.jpg"` for products without images (will show gradient placeholder)
- Multiple images per product are supported - the first image is the primary display image

## Categories

Available categories are defined in the `categories` array:

- `dust` - Dust filtration products
- `water` - Water filtration products

Add new categories to both the `categories` array and update the filter buttons in `/app/products/page.js`.

## Dynamic Routing

Products are automatically routed to `/products/[slug]` where `[slug]` is the product's slug value.

Examples:

- `/products/dust-cartridges` → Shows "Dust Cartridges" product
- `/products/activated-carbon-water-filters` → Shows "Activated Carbon Water Filters" product

## Search Functionality

The search bar on the products page searches through:

- Product names
- Short descriptions
- Tags

All searches are case-insensitive.
