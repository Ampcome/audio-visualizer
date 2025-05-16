# Audio Visualizer

```
# Made with ♥ by Ampcome
$ echo "Crafted with precision and care"
$ open https://ampcome.com
```
[View Demo](https://ampcome.github.io/audio-visualizer/#/) | [Features](#features) | [Installation](#installation) | [Usage](#usage) | [API Reference](#api-reference)

![Audio Visualizer Demo](./examples/assets/visualizer.gif)

## Features

- **Real-time Audio Visualization**: Transform microphone input into stunning 3D visuals
- **High Performance**: Optimized rendering with adaptive quality settings
- **Customizable Appearance**: Adjust colors, bloom effects, and visual parameters
- **Interactive Controls**: Optional GUI for real-time customization
- **Responsive Design**: Adapts to all screen sizes and device capabilities
- **Post-processing Effects**: Beautiful bloom effects for enhanced visuals
- **Easy Integration**: Simple React component with minimal configuration
- **TypeScript Support**: Full type definitions for enhanced developer experience

## Installation

```bash
npm install https://github.com/Ampcome/audio-visualizer.git#package
# or
yarn add https://github.com/Ampcome/audio-visualizer.git#package
```

## Usage

### Basic Example

```tsx
import React from 'react';
import { AudioVisualizer, useAudioListener } from 'audio-visualizer';

const App = () => {
  const { isListening, audioData, error, startListening, stopListening } = useAudioListener();

  return (
    <div style={{ width: '100%', height: '500px' }}>
      <AudioVisualizer 
        audioData={audioData} 
        isListening={isListening} 
      />
      <button onClick={isListening ? stopListening : startListening}>
        {isListening ? 'Stop' : 'Start'} Listening
      </button>
      {error && <div>Error: {error}</div>}
    </div>
  );
};

export default App;
```

### Advanced Example

```tsx
import React from 'react';
import { AudioVisualizer, useAudioListener } from 'audio-visualizer';

const App = () => {
  const { isListening, audioData, error, startListening, stopListening } = useAudioListener();
  // Customizable options
  const options: VisualizerOptions = {
    // Controls the overall visual quality and performance of the visualizer
    // "low": Lower resolution and effects for better performance on weaker devices
    // "medium": Balanced quality and performance (default)
    // "high": Maximum visual quality but may impact performance on some devices
    initialQuality: "medium" as "low" | "medium" | "high",

    // Defines the color of the visual elements (orbs) in the visualizer
    // Values range from 0-255 for each RGB component
    // This example shows orange
    orbColors: {
      red: 249,
      green: 115,
      blue: 22,
    },

    // Sets the background color of the visualizer
    // Can be a hex color string (like "#0a0a0a"), RGB object
    // This is a dark gray background
    canvasColor: "#0a0a0a",

    // Controls the glow/bloom effect that makes bright parts of the visualization shine
    initialGlow: {
      // Brightness level required before glow is applied (0-1)
      // Lower values make more elements glow
      threshold: 0.3,

      // Intensity of the glow effect (0-3)
      // Higher values create stronger glow
      strength: 0.2,

      // How far the glow spreads (0-1)
      // Higher values create a more diffuse glow
      radius: 0.5,
    },

    // When enabled, the visualization continues to move slightly after you drag it
    // Like how a globe continues to spin after you push it
    inertiaEnabled: true,

    // Controls how much momentum/inertia is applied when moving the visualization
    // Range: 0-1 (higher values = more inertia)
    // Higher values make the visualization continue moving longer after interaction
    inertiaLevel: 0.05,

    // Allows zooming in and out of the visualization (usually with mouse wheel)
    // When enabled, you can zoom in to see details or zoom out for a wider view
    zoomEnabled: true,

    // Controls how dramatically the visualization reacts to audio
    // Higher values create larger, more pronounced spikes in response to sound
    // Think of this as the "sensitivity" to sound
    spikeLevel: 5.5,

    // Controls how quickly the visualization responds to changes in audio
    // Range: 0-1 (higher values = more responsive/less smooth)
    // Lower values make transitions more gradual, higher values make it react more immediately
    smoothnessLevel: 0.7,

    // Enables mouse/touch controls to rotate and move around the visualization
    // When enabled, you can drag to rotate the visualization in 3D space
    enableOrbitControls: true,

    // Makes the visualization slowly rotate automatically without user input
    // Creates a dynamic, always-moving effect even when nobody is interacting with it
    autoRotate: true,

    // Shows or hides an interactive control panel for adjusting visualizer settings
    // When enabled, displays sliders and controls to change colors, effects, etc. in real-time
    showGui: true,

    // Adds a custom CSS class to the visualizer container for styling
    // Allows you to apply custom CSS styles to the visualizer
    className: "custom-visualizer",

    // Applies inline CSS styles directly to the visualizer container
    // Standard React inline style object
    containerStyle: {
      // Sets the height to 80% of the viewport height
      height: "65vh",
    },
  };
  
  return (
    <div style={{ width: '100%', height: '500px' }}>
      <AudioVisualizer 
        audioData={audioData}
        isListening={isListening}
        initialQuality={options.initialQuality}
        orbColors={options.orbColors}
        canvasColor={options.canvasColor}
        initialGlow={options.initialGlow}
        enableOrbitControls={options.enableOrbitControls}
        autoRotate={options.autoRotate}
        showGui={options.showGui}
        className={options.className}
        containerStyle={options.containerStyle}
      />
      <button onClick={isListening ? stopListening : startListening}>
        {isListening ? 'Stop' : 'Start'} Listening
      </button>
    </div>
  );
};

export default App;
```

## API Reference

### `AudioVisualizer` Component

| Prop | Type | Required | Description |
|------|------|----------|-------------|
| `audioData` | `Uint8Array \| null` | Yes | Audio frequency data array from useAudioListener |
| `isListening` | `boolean` | Yes | Whether the visualizer is actively listening to audio |
| `initialQuality` | `'low' \| 'medium' \| 'high'` | No | Initial quality setting for the visualizer (default: 'medium') |
| `orbColors` | `ColorParams` | No | Initial color settings for the visualizer |
| `canvasColor` | `number \| string \| { r: number; g: number; b: number }` | No | Initial background color (default: 0x000000) |
| `initialGlow` | `BloomParams` | No | Initial bloom effect settings |
| `enableOrbitControls` | `boolean` | No | Whether to enable orbit controls (default: true) |
| `autoRotate` | `boolean` | No | Whether to enable auto-rotation (default: false) |
| `showGui` | `boolean` | No | Whether to enable GUI controls (default: false) |
| `guiPositionTop` | `number` | No | GUI position top (default: 100) |
| `inertiaEnabled` | `boolean` | No | Whether to enable inertia (default: true) |
| `inertiaLevel` | `number` | No | Inertia level (default: 0.05) |
| `zoomEnabled` | `boolean` | No | Whether to enable zoom (default: false) |
| `spikeLevel` | `number` | No | Spike level for the visualizer (default: 5.5) |
| `smoothnessLevel` | `number` | No | Smoothness level for the visualizer (default: 0.7) |
| `className` | `string` | No | Custom class name for the container (default: '') |
| `containerStyle` | `React.CSSProperties` | No | Custom inline styles for the container |

### `ColorParams` Interface

| Property | Type | Default | Description |
|----------|------|---------|-------------|
| `red` | `number` | `1.0` | Red color component (0-1) |
| `green` | `number` | `1.0` | Green color component (0-1) |
| `blue` | `number` | `1.0` | Blue color component (0-1) |

### `BloomParams` Interface

| Property | Type | Default | Description |
|----------|------|---------|-------------|
| `threshold` | `number` | `0.5` | Bloom threshold (0-1) |
| `strength` | `number` | `0.3` | Bloom strength (0-3) |
| `radius` | `number` | `0.8` | Bloom radius (0-1) |

### `useAudioListener` Hook

| Return Value | Type | Description |
|--------------|------|-------------|
| `isListening` | `boolean` | Whether the visualizer is actively listening |
| `audioData` | `Uint8Array \| null` | Audio frequency data array |
| `error` | `string \| null` | Error message if microphone access fails |
| `startListening` | `() => void` | Function to start listening |
| `stopListening` | `() => void` | Function to stop listening |

## Browser Support

The Audio Visualizer is compatible with all modern browsers that support WebGL and the Web Audio API:

| Browser | Support |
|---------|----------|
| Chrome | ✅ (v49+) |
| Firefox | ✅ (v51+) |
| Safari | ✅ (v11+) |
| Edge | ✅ (v79+) |
| Opera | ✅ (v36+) |

Mobile browsers are also supported, though performance may vary depending on the device capabilities.

## Performance Considerations

The 3D audio visualization can be resource-intensive, especially on lower-end devices. Consider the following tips for optimal performance:

- Use the `initialQuality` option to adjust rendering quality based on target devices
- For mobile devices, consider using the 'low' quality setting
- Disable `autoRotate` and `showGui` on lower-end devices to improve performance
- The visualizer automatically detects device capabilities and adjusts settings accordingly
- Consider implementing a quality toggle for end-users to choose based on their device performance

For low-end devices, the visualizer will automatically:
- Reduce geometry complexity
- Lower the rendering resolution
- Limit the frame rate
- Use simpler shaders

## License

MIT © [Ampcome](https://ampcome.com)
