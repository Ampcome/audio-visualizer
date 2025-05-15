# React 3D Audio Visualizer

A stunning 3D audio visualizer component for React applications using Three.js with WebGL.

![Audio Visualizer Demo](https://via.placeholder.com/800x400?text=3D+Audio+Visualizer)

## Features

- Real-time audio visualization from microphone input
- Customizable colors and effects
- Performance optimizations for different devices
- Optional GUI controls for customization
- Responsive design that works on all devices
- Highly configurable with sensible defaults
- Beautiful post-processing effects with bloom
- Smart detection of device capabilities

## Installation

```bash
npm install Ampcome/audio-visualizer#package
# or
yarn add Ampcome/audio-visualizer#package
```

## Basic Usage

```tsx
import React, { useState } from 'react';
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
    </div>
  );
};

export default App;
```

## API Reference

### `AudioVisualizer` Component

|
Prop
|
Type
|
Description
|
|

---

## |

## |

|
|
`audioData`
|
`Uint8Array \| null`
|
Audio frequency data array
|
|
`isListening`
|
`boolean`
|
Whether the visualizer is actively listening to audio
|
|
`options`
|
`VisualizerOptions`
|
Optional configuration options
|

### `VisualizerOptions` Interface

|
Option
|
Type
|
Default
|
Description
|
|

---

## |

## |

## |

|
|
`initialQuality`
|
`"low" \| "medium" \| "high"`
|
`"medium"`
|
Initial quality setting for the visualizer
|
|
`initialColors`
|
`ColorParams`
|
`{ red: 1.0, green: 1.0, blue: 1.0 }`
|
Initial color settings
|
|
`initialBloom`
|
`BloomParams`
|
`{ threshold: 0.5, strength: 0.3, radius: 0.8 }`
|
Initial bloom effect settings
|
|
`showStats`
|
`boolean`
|
`false`
|
Whether to show performance stats
|
|
`enableOrbitControls`
|
`boolean`
|
`true`
|
Whether to enable orbit controls
|
|
`autoRotate`
|
`boolean`
|
`false`
|
Whether to enable auto-rotation
|
|
`showGui`
|
`boolean`
|
`false`
|
Whether to enable GUI controls
|
|
`className`
|
`string`
|
`""`
|
Custom class name for the container
|

### `useAudioListener` Hook

```tsx
const {
  isListening, // boolean - Whether the visualizer is listening
  audioData, // Uint8Array | null - Audio frequency data
  error, // string | null - Error message if microphone access fails
  startListening, // () => void - Function to start listening
  stopListening, // () => void - Function to stop listening
} = useAudioListener();
```

## Browser Support

This component requires WebGL and Web Audio API support. It works in all modern browsers:

- Chrome 49+
- Firefox 51+
- Safari 11+
- Edge 79+

## Performance Considerations

The visualizer automatically detects device capabilities and adjusts settings for optimal performance. For low-end devices, it will:

- Reduce geometry complexity
- Lower the rendering resolution
- Limit the frame rate
- Use simpler shaders

## License

MIT 
