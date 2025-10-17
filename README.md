# Qualiplus - Clean Solutions at Your Core

A modern, professional Next.js web application for Qualiplus, showcasing air filtration products with stunning animations and modular architecture.

## 🎨 Features

- **Responsive Design**: Beautiful mobile-first UI with Tailwind CSS
- **Scroll Animations**: Apple/Stripe-style scroll-triggered animations
- **Wave Animations**: Flowing wave effects on hero text
- **Modular Components**: Highly reusable with smart defaults
- **Professional Polish**: Smooth transitions, hover effects, and micro-interactions
- **Clean Architecture**: Easy to customize with minimal code

## 📁 Project Structure

```
qualiplus/
├── app/
│   ├── page.js              # Home page
│   ├── layout.js            # Root layout
│   ├── globals.css          # Global styles & animations
│   ├── about/page.js        # About Us page
│   ├── contact/page.js      # Contact page
│   ├── products/
│   │   ├── page.js          # Products listing
│   │   └── dust-cartridges/page.js
├── components/
│   ├── HeroSection.js       # Reusable hero component
│   ├── Section.js           # Page section wrapper
│   ├── StatsSection.js      # Statistics display
│   ├── ProductGrid.js       # Product grid layout
│   ├── ContactInfo.js       # Contact methods display
│   ├── ScrollReveal.js      # Scroll animation wrapper
│   ├── WaveLine.js          # Animated wave line
│   ├── Header.js            # Navigation
│   ├── Footer.js            # Footer
│   └── HelpSection.js       # CTA section
├── hooks/
│   └── useScrollAnimation.js # Scroll observer hook
└── public/                  # Static assets
```

## 🧩 Modular Components

### HeroSection

Fully customizable hero with wave animations and gradients.

```jsx
<HeroSection
  title="Your main title"
  highlightedText="animated text" // Optional: animated gradient text
  subtitle="Subtitle" // Optional
  description="Long description" // Optional
  showWave={true} // Show animated wave line
  waveType="long" // "long" or "short"
  backgroundType="dark" // "dark" or "light"
  showGrid={true} // Background grid pattern
  animateText={true} // Text animations
  minHeight="min-h-screen" // Height class
/>
```

### Section

Consistent section wrapper with titles and backgrounds.

```jsx
<Section
  title="Section Title"
  titleHighlight="Highlighted" // Underlined text
  subtitle="Optional subtitle"
  background="white" // "white", "gray", "blue", "gradient"
  padding="py-24" // Padding class
  maxWidth="max-w-7xl" // Max width class
  titleAnimation="fadeInUp" // Animation type
>
  {/* Your content */}
</Section>
```

### StatsSection

Pre-configured stats with icons and animations.

```jsx
<StatsSection
  title="Over The Years, We've Gotten"
  titleHighlight="Over The Years"
  stats={[
    {
      icon: <svg>...</svg>,
      number: "1000+",
      label: "Clients Served",
    },
    // ... more stats
  ]}
  showIcon={true} // Show center icon
/>
```

### ProductGrid

Responsive product grid with scroll animations.

```jsx
<ProductGrid
  products={[
    {
      title: "Product Name",
      description: "Description",
      tags: ["Tag1", "Tag2"],
      href: "/link",
    },
  ]}
  columns="md:grid-cols-2" // Grid columns
  showAnimation={true} // Enable animations
  animationDelay={0.1} // Stagger delay
/>
```

### ContactInfo

Contact methods with hover effects.

```jsx
<ContactInfo
  methods={[
    {
      icon: <svg>...</svg>,
      text: "012-208 8129",
    },
  ]}
  layout="horizontal" // "horizontal" or "vertical"
/>
```

### ScrollReveal

Wrap any element for scroll animations.

```jsx
<ScrollReveal
  animation="fadeInUp" // Animation type
  delay={0.2} // Delay in seconds
  duration={0.6} // Duration in seconds
  threshold={0.1} // Visibility threshold
>
  {/* Your content */}
</ScrollReveal>
```

**Available animations:**

- `fadeInUp` - Fade in from below
- `fadeInDown` - Fade in from above
- `fadeInLeft` - Slide in from left
- `fadeInRight` - Slide in from right
- `scaleIn` - Scale up
- `scaleInBig` - Scale up from smaller

## 🎬 Wave Animations

Two wave components for animated underlines:

- **WaveLine**: Long wave for longer text
- **WaveLineShort**: Short wave for single words

Both create smooth, continuous wave animations using JavaScript.

## 🎨 Custom Animations

Global animations defined in `globals.css`:

- **fadeInUp/Down/Left/Right**: Directional fade animations
- **scaleIn**: Scale animations
- **float**: Floating effect
- **pulse-subtle**: Gentle pulsing
- **gradient-shift**: Animated gradients
- **text-gradient-animated**: Gradient text color shift

## 🚀 Getting Started

1. **Install dependencies:**

   ```bash
   npm install
   ```

2. **Run development server:**

   ```bash
   npm run dev
   ```

3. **Open browser:**
   Navigate to [http://localhost:3000](http://localhost:3000)

## ✏️ Customization Examples

### Simple Home Page

```jsx
export default function Home() {
  return (
    <main>
      <HeroSection
        title="Your Title"
        highlightedText="Special Text"
        description="Your description"
      />

      <Section title="What we do" titleHighlight="do">
        {/* Content */}
      </Section>
    </main>
  );
}
```

### Products Page

```jsx
export default function Products() {
  const products = [
    { title: "Product 1", description: "...", tags: [...], href: "/..." },
  ];

  return (
    <main>
      <HeroSection highlightedText="Our Products" minHeight="py-24" />
      <Section>
        <ProductGrid products={products} />
      </Section>
    </main>
  );
}
```

### About Page

```jsx
export default function About() {
  return (
    <main>
      <HeroSection title="About" highlightedText="Us" waveType="short" />

      <Section>
        <StatsSection />
      </Section>
    </main>
  );
}
```

## 🎯 Default Styling

All components have sensible defaults:

- **Colors**: Blue theme (#60A5FA, #3B82F6)
- **Spacing**: Consistent padding/margins
- **Animations**: Smooth 300ms transitions
- **Shadows**: Layered elevation
- **Borders**: Rounded corners
- **Typography**: Bold headings, readable body text

## 🔧 Technologies

- **Next.js 15**: React framework with App Router
- **React 19**: UI library
- **Tailwind CSS v4**: Utility-first CSS
- **Intersection Observer API**: Scroll animations
- **CSS Animations**: Hardware-accelerated effects

## 📞 Company Contact

- **Phone**: 012-208 8129
- **Email**: qualiplus@qualiplus.com.my
- **Address**: 32, Jalan TS 6/7, Taman Perindustrian Subang, 47510 Subang Jaya, Selangor

---

**©QUALIPLUS 2025** - Because every breath deserves to be protected.
