# Product Management Guide

## Overview

This guide explains how to add, edit, and manage products in the Qualiplus filtration website. Products are managed through JSON files and can display either standard images or interactive SVG animations.

---

## Table of Contents

1. [Product Data Structure](#product-data-structure)
2. [Adding a New Product](#adding-a-new-product)
3. [Editing Existing Products](#editing-existing-products)
4. [Adding Product Images](#adding-product-images)
5. [Enabling SVG Filter Animations](#enabling-svg-filter-animations)
6. [Creating New Filter Animations](#creating-new-filter-animations)
7. [Product Specifications](#product-specifications)
8. [Categories and Tags](#categories-and-tags)

---

## Product Data Structure

Products are defined in `/data/products.json`. Each product has the following structure:

```json
{
  "id": "unique-product-id",
  "slug": "url-friendly-name",
  "name": "Display Name",
  "category": "dust" or "water",
  "shortDescription": "Brief description for cards and listings",
  "fullDescription": "Detailed description for product detail page",
  "visualizationType": "svg-filter" or omit for images,
  "filterSvgId": "filter-id-from-filterSvgs.json" (optional),
  "images": ["/image1.jpg", "/image2.jpg"],
  "tags": ["Tag 1", "Tag 2", "Tag 3"],
  "specifications": {
    "title": "Technical Specifications",
    "description": "Overview of specifications",
    "layers": ["layer 1", "layer 2", "layer 3"],
    "features": ["Feature 1", "Feature 2"]
  },
  "relatedProducts": ["product-id-1", "product-id-2"]
}
```

### Field Descriptions

| Field               | Required | Type   | Description                                            |
| ------------------- | -------- | ------ | ------------------------------------------------------ |
| `id`                | ✅ Yes   | String | Unique identifier for the product                      |
| `slug`              | ✅ Yes   | String | URL-friendly version (used in `/products/[slug]`)      |
| `name`              | ✅ Yes   | String | Product display name                                   |
| `category`          | ✅ Yes   | String | Either "dust" or "water"                               |
| `shortDescription`  | ✅ Yes   | String | Brief description (shown in cards/listings)            |
| `fullDescription`   | ✅ Yes   | String | Detailed description (product detail page)             |
| `visualizationType` | ❌ No    | String | Set to "svg-filter" for animated SVG, omit for images  |
| `filterSvgId`       | ❌ No    | String | ID from filterSvgs.json (required if using svg-filter) |
| `images`            | ✅ Yes   | Array  | Array of image paths (relative to /public)             |
| `tags`              | ✅ Yes   | Array  | Array of tag strings                                   |
| `specifications`    | ✅ Yes   | Object | Technical specifications object                        |
| `relatedProducts`   | ❌ No    | Array  | Array of related product IDs                           |

---

## Adding a New Product

### Step 1: Open products.json

Navigate to `/data/products.json` and locate the `"products"` array.

### Step 2: Add Product Entry

Add a new object to the products array:

```json
{
  "id": "new-product-id",
  "slug": "new-product-name",
  "name": "New Product Name",
  "category": "dust",
  "shortDescription": "A brief description of the product.",
  "fullDescription": "A detailed description explaining the product features, benefits, and applications.",
  "images": ["/new-product-main.jpg", "/new-product-detail.jpg"],
  "tags": ["Tag 1", "Tag 2", "Tag 3"],
  "specifications": {
    "title": "Technical Specifications",
    "description": "Technical overview of the product.",
    "layers": ["layer 1", "layer 2"],
    "features": ["Feature 1", "Feature 2", "Feature 3", "Feature 4"]
  },
  "relatedProducts": ["dust-cartridges", "pleated-dust-filters"]
}
```

### Step 3: Save and Test

1. Save the file
2. The dev server will hot-reload automatically
3. Visit `/products` to see your new product
4. Visit `/products/new-product-name` to see the detail page

---

## Editing Existing Products

### Update Product Information

Simply find the product in `/data/products.json` and modify the desired fields:

```json
{
  "id": "dust-cartridges",
  "name": "Premium Dust Cartridges", // ← Changed
  "shortDescription": "Updated description", // ← Changed
  "tags": ["Industrial Grade", "High Efficiency", "New Tag"] // ← Added tag
}
```

### Update Images

Replace image paths in the `images` array:

```json
{
  "images": ["/new-main-image.jpg", "/new-detail-image.jpg"]
}
```

### Update Tags

Modify the `tags` array:

```json
{
  "tags": ["New Tag 1", "New Tag 2", "New Tag 3"]
}
```

---

## Adding Product Images

### Step 1: Prepare Images

- **Format**: JPG, PNG, or WEBP recommended
- **Main Image**: Recommended size: 1000x1000px (square aspect ratio)
- **Additional Images**: Same aspect ratio as main image
- **File Size**: Optimize to < 500KB for best performance

### Step 2: Add to Public Folder

Place images in the `/public` folder:

```
/public
  ├── gauze-00.jpeg
  ├── gauze-01.jpeg
  └── new-product.jpg  ← Add your image here
```

### Step 3: Reference in products.json

Update the product's `images` array:

```json
{
  "images": ["/new-product.jpg", "/new-product-detail.jpg"]
}
```

**Important**: Image paths start with `/` (relative to the public folder).

### Using Placeholder

If you don't have an image yet, use:

```json
{
  "images": ["/placeholder-product.jpg"]
}
```

The system will display a blue gradient with the product name.

---

## Enabling SVG Filter Animations

### When to Use SVG Animations

Use interactive SVG filter animations when you want to:

- Show the internal structure/layers of a filter
- Provide an interactive, engaging visualization
- Demonstrate filter composition

### Step 1: Add Visualization Fields

In `/data/products.json`, add these fields to your product:

```json
{
  "id": "your-product-id",
  "name": "Your Product",
  "visualizationType": "svg-filter", // ← Enables SVG animation
  "filterSvgId": "dust-cartridge-filter", // ← Links to filterSvgs.json
  "images": ["/fallback-image.jpg"] // ← Still needed as fallback
}
```

### Step 2: Verify Filter Exists

Check that the `filterSvgId` exists in `/data/filterSvgs.json`:

```json
{
  "dustCartridge": {
    "id": "dust-cartridge-filter", // ← This ID
    "name": "Dust Cartridge Filter",
    "type": "animated"
  }
}
```

### Where SVG Animations Appear

When enabled, the animation will show:

1. ✅ Home page product carousel
2. ✅ Products list page (`/products`)
3. ✅ Product detail page - main image section
4. ✅ Product detail page - technical specifications section

---

## Creating New Filter Animations

### Step 1: Design Your SVG

Create your SVG filter visualization with layers. Each layer should be in a separate `<g>` (group) element.

Example structure:

```svg
<svg viewBox="0 0 400 400">
  <g class="back-layer">
    <!-- Back layer paths -->
  </g>
  <g class="middle-layer">
    <!-- Middle layer paths -->
  </g>
  <g class="front-layer">
    <!-- Front layer paths -->
  </g>
</svg>
```

### Step 2: Create Filter Component

Create a new file in `/components/filters/`:

```bash
# Create the component file
touch components/filters/YourFilter.js
touch components/filters/YourFilter.module.css
```

**YourFilter.js:**

```javascript
"use client";

import { useState } from "react";
import styles from "./YourFilter.module.css";

export default function YourFilter() {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className={styles.filterContainer}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <svg viewBox="0 0 400 400" className={styles.filterSvg}>
        {/* Back layer */}
        <g className={isHovered ? styles.backLayerHover : styles.backLayer}>
          {/* Your SVG paths here */}
        </g>

        {/* Front layer */}
        <g className={isHovered ? styles.frontLayerHover : styles.frontLayer}>
          {/* Your SVG paths here */}
        </g>
      </svg>
    </div>
  );
}
```

**YourFilter.module.css:**

```css
.filterContainer {
  display: inline-block;
  cursor: pointer;
}

.filterSvg {
  max-width: 100%;
  height: auto;
}

.backLayer {
  transition: all 0.8s cubic-bezier(0.4, 0, 0.2, 1);
}

.backLayerHover {
  transform: translate(10px, 10px) rotate(-3deg);
  transition: all 0.8s cubic-bezier(0.4, 0, 0.2, 1);
}

.frontLayer {
  transition: all 0.8s cubic-bezier(0.4, 0, 0.2, 1) 0.2s;
}

.frontLayerHover {
  transform: translate(-20px, -15px) rotate(-5deg);
  transition: all 0.8s cubic-bezier(0.4, 0, 0.2, 1) 0.2s;
}
```

### Step 3: Add to filterSvgs.json

Add your filter definition to `/data/filterSvgs.json`:

```json
{
  "yourFilter": {
    "id": "your-filter-id",
    "name": "Your Filter Name",
    "type": "animated",
    "viewBox": "0 0 400 400",
    "layers": [
      {
        "name": "backLayer",
        "label": "Back Layer"
      },
      {
        "name": "frontLayer",
        "label": "Front Layer"
      }
    ]
  }
}
```

### Step 4: Update ProductVisualization

Edit `/components/ProductVisualization.js` to include your new filter:

```javascript
import DustCartridgeFilter from "./filters/DustCartridgeFilter";
import YourFilter from "./filters/YourFilter"; // ← Add import

export default function ProductVisualization({ product, className = "" }) {
  if (product.visualizationType === "svg-filter" && product.filterSvgId) {
    // Add conditional for your filter
    if (product.filterSvgId === "your-filter-id") {
      return (
        <div className={`${className} flex items-center justify-center`}>
          <YourFilter />
        </div>
      );
    }

    // Default to dust cartridge
    return (
      <div className={`${className} flex items-center justify-center`}>
        <DustCartridgeFilter />
      </div>
    );
  }

  // ... rest of component
}
```

### Step 5: Use in Product

Update your product in `products.json`:

```json
{
  "id": "your-product",
  "name": "Your Product",
  "visualizationType": "svg-filter",
  "filterSvgId": "your-filter-id",
  "images": ["/fallback.jpg"]
}
```

---

## Product Specifications

### Structure

The `specifications` object contains technical information displayed on the product detail page:

```json
{
  "specifications": {
    "title": "Technical Specifications",
    "description": "Overview paragraph about the specifications",
    "layers": ["Layer 1", "Layer 2", "Layer 3"],
    "features": [
      "Feature point 1",
      "Feature point 2",
      "Feature point 3",
      "Feature point 4"
    ]
  }
}
```

### Layers

The `layers` array is displayed:

- Below the filter animation (if using SVG)
- As labels for the static visualization (if using images)

Example:

```json
"layers": ["gauze", "gabardine", "solid concrete"]
```

### Features

The `features` array is displayed as a checklist with checkmark icons:

```json
"features": [
  "High dust holding capacity",
  "Easy installation and replacement",
  "Durable construction",
  "Cost-effective operation"
]
```

**Best Practices:**

- Keep features concise (< 50 characters each)
- Use 4-6 features for best layout
- Start with the most important features
- Use parallel sentence structure

---

## Categories and Tags

### Categories

Two main categories are defined in `products.json`:

1. **Dust Filters** (`"category": "dust"`)

   - Dust cartridges
   - Pleated filters
   - Bag filters
   - HEPA filters

2. **Water Filters** (`"category": "water"`)
   - Activated carbon filters
   - Sediment filters
   - RO systems
   - UV purifiers

To add a product to a category, set the `category` field:

```json
{
  "category": "dust" // or "water"
}
```

### Tags

Tags appear as colored badges on product cards and detail pages. They help users quickly understand key product features.

**Best Practices:**

- Use 2-4 tags per product
- Keep tags short (< 20 characters)
- Use consistent terminology across products
- Highlight unique selling points

**Common Tag Examples:**

For Dust Filters:

```json
"tags": ["Industrial Grade", "High Efficiency", "Multi-Layer"]
```

For Water Filters:

```json
"tags": ["Water Purification", "NSF Certified", "Chlorine Removal"]
```

### Adding a New Category

If you need to add a new category:

1. Update the categories array in `products.json`:

```json
{
  "categories": [
    {
      "id": "dust",
      "name": "Dust Filters",
      "description": "Industrial-grade dust filtration solutions"
    },
    {
      "id": "water",
      "name": "Water Filters",
      "description": "Comprehensive water purification systems"
    },
    {
      "id": "air", // ← New category
      "name": "Air Filters",
      "description": "Advanced air purification systems"
    }
  ]
}
```

2. Update `/app/products/page.js` to include the new filter button.

---

## Quick Reference

### Checklist for Adding a New Product

- [ ] Choose a unique `id` and `slug`
- [ ] Add product entry to `products.json`
- [ ] Add product images to `/public` folder
- [ ] Set appropriate `category` ("dust" or "water")
- [ ] Write clear `shortDescription` and `fullDescription`
- [ ] Add 2-4 relevant `tags`
- [ ] Define `specifications` with layers and features
- [ ] (Optional) Link related products
- [ ] (Optional) Enable SVG animation with `visualizationType` and `filterSvgId`
- [ ] Test on dev server at `/products` and `/products/[slug]`

### Common File Locations

| File                                  | Purpose                     |
| ------------------------------------- | --------------------------- |
| `/data/products.json`                 | Product data                |
| `/data/filterSvgs.json`               | SVG filter definitions      |
| `/public/`                            | Product images              |
| `/components/filters/`                | Filter animation components |
| `/components/ProductVisualization.js` | Main visualization router   |
| `/app/products/page.js`               | Products list page          |
| `/app/products/[slug]/page.js`        | Product detail page         |

---

## Troubleshooting

### Product Not Showing Up

1. **Check JSON syntax**: Use a JSON validator to ensure no syntax errors
2. **Verify category**: Must be exactly "dust" or "water"
3. **Check slug**: Must be URL-friendly (lowercase, hyphens, no spaces)
4. **Restart dev server**: Sometimes needed for JSON file changes

### Images Not Loading

1. **Check path**: Must start with `/` (e.g., `/image.jpg` not `image.jpg`)
2. **Verify file exists**: Check the `/public` folder
3. **Check file name**: Case-sensitive on production servers
4. **Clear browser cache**: Hard refresh with Cmd+Shift+R (Mac) or Ctrl+F5 (Windows)

### SVG Animation Not Working

1. **Verify `visualizationType`**: Must be exactly `"svg-filter"`
2. **Check `filterSvgId`**: Must match an ID in `filterSvgs.json`
3. **Confirm component import**: Check `ProductVisualization.js` imports your filter
4. **Check console**: Open browser DevTools for JavaScript errors

### Tags or Categories Not Filtering

1. **Check spelling**: Category must be exactly "dust" or "water"
2. **Verify tag format**: Must be an array of strings
3. **Clear filters**: Try refreshing the products page

---

## Need Help?

### Documentation Files

- **FILTER_VISUALIZATION_GUIDE.md** - Detailed guide on SVG animations
- **IMPLEMENTATION_SUMMARY.md** - Technical implementation overview
- **SYSTEM_ARCHITECTURE.md** - Overall system architecture
- **data/README.md** - Data structure documentation

### Example Products

Look at existing products in `products.json` for reference:

- **Dust Cartridges** - Has SVG animation enabled
- **Pleated Dust Filters** - Standard image-based product
- **Reverse Osmosis Systems** - Complex specifications example

---

**Last Updated:** October 26, 2025
