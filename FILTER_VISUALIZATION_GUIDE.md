# Filter Visualization System

## Overview

The Qualiplus website now supports **interactive SVG filter visualizations** as an alternative to product images. The Dust Cartridge product features an animated, hover-activated filter visualization showing its multi-layer construction.

## ✨ What's New

### Before

- Products displayed static images or wireframe illustrations
- No interactive product visualizations
- Limited ability to show internal product structure

### After

- Products can use **animated SVG visualizations**
- **Hover-activated animations** show filter layers separating
- **Data-driven approach** - filter definitions stored in JSON
- Organized file structure for scalability

## 📁 File Organization

```
/qualiplus
├── /components
│   ├── ProductVisualization.js         # Smart renderer (SVG or image)
│   ├── ProductCard.js                  # Updated to support SVG filters
│   └── /filters                        # ⭐ NEW: Filter components
│       ├── DustCartridgeFilter.js      # Animated dust cartridge
│       ├── DustCartridgeFilter.module.css
│       └── DustCartridgeFilter.README.md
│
├── /data
│   ├── products.json                   # ⭐ UPDATED: Added visualizationType
│   ├── filterSvgs.json                 # ⭐ NEW: SVG filter definitions
│   └── README.md                       # ⭐ NEW: Data structure docs
│
└── /app
    └── /filter-demo
        └── page.js                     # Demo page for filter animation
```

## 🎯 How It Works

### 1. Product Data (products.json)

```json
{
  "id": "dust-cartridges",
  "slug": "dust-cartridges",
  "name": "Dust Cartridges",
  "visualizationType": "svg-filter", // ⭐ Enables SVG visualization
  "filterSvgId": "dust-cartridge-filter", // ⭐ Links to filterSvgs.json
  "images": ["/gauze-00.jpeg"] // Fallback images
  // ... other product data
}
```

### 2. Filter Definition (filterSvgs.json)

```json
{
  "dustCartridge": {
    "id": "dust-cartridge-filter",
    "name": "Dust Cartridge Filter",
    "type": "animated",
    "layers": [
      /* layer definitions */
    ],
    "annotations": [
      /* labels */
    ],
    "decorativeElements": [
      /* blue accent shapes */
    ]
  }
}
```

### 3. Component Flow

```
ProductCarousel
    ↓
ProductCard (receives full product object)
    ↓
Checks: visualizationType === "svg-filter" ?
    ↓
YES → SvgFilterSection
    ↓
ProductVisualization
    ↓
DustCartridgeFilter (animated component)
```

## 🎨 Dust Cartridge Animation Features

### On Initial Load

- 3 filter layers stacked together
- Blue decorative elements **hidden**
- Text labels **hidden**

### On Hover

1. **Layers transform**:

   - Back layer: slight rotation (0.3s delay)
   - Middle layer: larger movement (0.35s delay)
   - Front layer: most dramatic separation (0.4s delay)

2. **Blue elements fade in**:

   - Bottom left floats continuously
   - Top right floats with offset timing
   - Bottom center rotates continuously

3. **Labels appear**:
   - "gauze" (top left)
   - "gabodine" (bottom left)
   - "Solid concrete" (right side)
   - Fade in with 0.5s delay

## 🚀 Adding New Filter Visualizations

### Step 1: Create Filter Component

```bash
# Create new filter component
touch components/filters/NewFilter.js
touch components/filters/NewFilter.module.css
```

### Step 2: Add to filterSvgs.json

```json
{
  "newFilter": {
    "id": "new-filter-id",
    "name": "New Filter Name",
    "type": "animated"
    // ... filter data
  }
}
```

### Step 3: Update Product

```json
{
  "id": "new-product",
  "visualizationType": "svg-filter",
  "filterSvgId": "new-filter-id"
  // ... other fields
}
```

### Step 4: Update ProductVisualization.js

```javascript
// Add import
import NewFilter from "./filters/NewFilter";

// Update rendering logic
if (product.filterSvgId === "new-filter-id") {
  return <NewFilter />;
}
```

## 📊 Benefits

### Performance

- ✅ SVG animations use CSS transforms (GPU accelerated)
- ✅ No image loading delays
- ✅ Scalable graphics (looks crisp at any size)

### User Experience

- ✅ Interactive and engaging
- ✅ Shows internal product structure
- ✅ Smooth, professional animations
- ✅ Hover feedback encourages exploration

### Development

- ✅ Data-driven approach
- ✅ Reusable components
- ✅ Easy to maintain
- ✅ Organized file structure
- ✅ Documented system

## 🧪 Testing

### View Live Demo

Visit `/filter-demo` to see the isolated animation

### View in Product Carousel

Visit the homepage to see it integrated with products

## 🎓 Key Concepts

### Smart Rendering

`ProductVisualization` component automatically chooses:

- SVG filter if `visualizationType === "svg-filter"`
- Product image otherwise

### Backward Compatibility

Products without `visualizationType` fall back to:

1. Wireframe illustration (in ProductCard)
2. Or product images

### Hover States

- `isImageHovered` state triggers animations
- Arrow appears on hover
- Layers transform simultaneously

## 📝 Notes

- All filter components must use `"use client"` directive
- SVG animations defined in CSS modules
- Filter data stored separately from component logic
- Images kept as fallback for compatibility

## 🔗 Related Files

- `/components/ProductCard.js` - Main product card
- `/components/ProductCarousel.js` - Carousel container
- `/data/products.json` - Product catalog
- `/data/filterSvgs.json` - Filter definitions
- `/components/filters/` - Filter component directory

---

## Quick Reference

### Check if product uses SVG filter:

```javascript
const usesSvgFilter =
  product.visualizationType === "svg-filter" && product.filterSvgId;
```

### Access filter data:

```javascript
import filterSvgs from "@/data/filterSvgs.json";
const filterData = filterSvgs[product.filterSvgId];
```

### Demo page:

`http://localhost:3000/filter-demo`

---

**Last Updated:** October 26, 2025
