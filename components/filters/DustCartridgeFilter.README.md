# AnimatedDustFilter Component

An interactive SVG animation component that transforms a dust filter illustration from an initial state to a final state on hover.

## Features

- **Smooth Transitions**: Each filter layer animates with staggered timing using cubic-bezier easing
- **3D-like Effect**: Layers transform with translation and rotation to create depth
- **Floating Elements**: Decorative elements animate continuously on hover
- **Responsive**: SVG scales appropriately for different screen sizes
- **No JavaScript Animation**: Pure CSS transitions and animations for better performance

## Usage

```jsx
import AnimatedDustFilter from "@/components/AnimatedDustFilter";

function MyComponent() {
  return (
    <div>
      <AnimatedDustFilter />
    </div>
  );
}
```

## Demo

Visit `/filter-demo` to see the component in action.

## Animation Details

### Layers

1. **Back Layer**: Largest filter box - translates and rotates slightly
2. **Middle Layer**: Medium filter box with dot pattern - transforms more dramatically
3. **Front Layer**: Main grid filter - transforms most prominently with longer rotation
4. **Decorative Elements**: Blue accent shapes that float and rotate continuously when hovered

### Timing

- Back layer: 0.8s transition
- Middle layer: 0.8s transition with 0.1s delay
- Front layer: 0.8s transition with 0.2s delay
- Decorative elements: 0.8s transition with 0.3-0.35s delay + continuous float animation

### Transform Origins

Each layer has a custom transform origin to ensure the rotation and translation appear natural and centered appropriately.

## Customization

You can customize the animation by editing the CSS module:

- **Duration**: Change the transition duration in `.backLayer`, `.middleLayer`, etc.
- **Transforms**: Adjust `translate()` and `rotate()` values in hover states
- **Easing**: Modify the `cubic-bezier()` function for different animation feels
- **Float Animation**: Customize the `@keyframes float` and `@keyframes rotateElement` for different effects

## Browser Support

Works in all modern browsers that support CSS transforms and transitions.
