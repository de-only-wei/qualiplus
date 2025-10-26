# Product Data Structure

This directory contains the product catalog and filter visualization data for the Qualiplus website.

> 📖 **For a complete guide on managing products, see [PRODUCTS_GUIDE.md](../PRODUCTS_GUIDE.md)** which includes:
>
> - Step-by-step instructions for adding/editing products
> - Image management guide
> - SVG animation setup
> - Troubleshooting tips
> - Quick reference checklists

## Files

### products.json

Main product catalog containing all filtration products. Each product can have different visualization types.

#### Product Schema

```json
{
  "id": "unique-product-id",
  "slug": "url-friendly-slug",
  "name": "Product Name",
  "category": "dust|water",
  "shortDescription": "Brief product description",
  "fullDescription": "Detailed product information",
  "visualizationType": "svg-filter|image", // Optional: How to display the product
  "filterSvgId": "filter-svg-identifier", // Required if visualizationType is "svg-filter"
  "images": ["/image1.jpg", "/image2.jpg"],
  "tags": ["Tag 1", "Tag 2"],
  "specifications": {
    "title": "Technical Specifications",
    "description": "Specification details",
    "layers": ["layer1", "layer2", "layer3"],
    "features": ["feature1", "feature2"]
  },
  "relatedProducts": ["product-id-1", "product-id-2"]
}
```

#### Visualization Types

- **`svg-filter`**: Uses an animated SVG filter visualization (e.g., Dust Cartridges)

  - Requires `filterSvgId` to reference the filter in `filterSvgs.json`
  - Renders using `ProductVisualization` component
  - Interactive hover effects and animations

- **`image`** (or no visualizationType): Uses standard product images
  - Falls back to wireframe illustration
  - Uses images from `images` array

### filterSvgs.json

Contains SVG filter visualization definitions for products that use animated filter graphics.

#### Filter SVG Schema

```json
{
  "filterName": {
    "id": "unique-filter-id",
    "name": "Display Name",
    "type": "animated|static",
    "viewBox": "0 0 435 446",
    "layers": [
      {
        "name": "layerName",
        "label": "Layer Display Label",
        "paths": [...],
        "hasDotsPattern": true,
        "hasGridPattern": true
      }
    ],
    "annotations": [
      {
        "label": "gauze",
        "x": "42.8153",
        "y": "53.82"
      }
    ],
    "decorativeElements": [
      {
        "name": "bottomLeft",
        "type": "float|rotate",
        "color": "#0F1BF4"
      }
    ]
  }
}
```

## Quick Start

### Adding a New Product

**See [PRODUCTS_GUIDE.md](../PRODUCTS_GUIDE.md) for detailed instructions.**

Quick steps:

1. Add product entry to `products.json`
2. Add product images to `/public` folder
3. Set `category`, `tags`, and `specifications`
4. (Optional) Enable SVG animation with `visualizationType: "svg-filter"`

### Using SVG Visualizations

1. Create filter component in `/components/filters/`
2. Add filter definition to `filterSvgs.json`
3. Set `visualizationType: "svg-filter"` in product
4. Set `filterSvgId` to match your filter definition
5. Update `ProductVisualization.js` to import your filter

### Example: Dust Cartridge Product

```json
{
  "id": "dust-cartridges",
  "slug": "dust-cartridges",
  "name": "Dust Cartridges",
  "visualizationType": "svg-filter",
  "filterSvgId": "dust-cartridge-filter"
  // ... other fields
}
```

This will:

1. Look up `dust-cartridge-filter` in `filterSvgs.json`
2. Render using `DustCartridgeFilter` component
3. Display with interactive hover animations

## Components

### ProductVisualization

Located at `/components/ProductVisualization.js`

Intelligently renders products based on their `visualizationType`:

- SVG filters: Renders the appropriate filter component
- Images: Renders standard product images

### Filter Components

Located at `/components/filters/`

- `DustCartridgeFilter.js`: Animated 3-layer dust cartridge with hover effects
- Add new filter components here for other products

## File Organization

```
/data
  ├── products.json          # Main product catalog
  ├── filterSvgs.json        # SVG filter definitions
  └── README.md             # This file

/components
  ├── ProductVisualization.js  # Smart product renderer
  ├── ProductCard.js           # Product card with visualization support
  └── filters/                 # Filter visualization components
      ├── DustCartridgeFilter.js
      └── DustCartridgeFilter.module.css
```

## Best Practices

1. **Images**: Keep as fallback even for SVG products
2. **IDs**: Use consistent kebab-case for all IDs
3. **Filters**: Store complex filter logic in dedicated components
4. **Data**: Keep visualization data separate from component logic
5. **Performance**: SVG filters are client-side only ('use client' directive)

## Related Files

- `/components/ProductCard.js` - Displays products in carousel
- `/components/ProductCarousel.js` - Product browsing interface
- `/components/ProductGrid.js` - Grid layout for products
- `/app/products/[slug]/page.js` - Individual product pages
