# Migration Guide

This guide will help you migrate from the original voice visualizer implementation to the new React 3D Audio Visualizer npm package.

## Overview

The React 3D Audio Visualizer package provides a modular, reusable implementation of the 3D audio visualization functionality from the original project. It includes performance optimizations, enhanced configurability, and better TypeScript support.

## Step-by-Step Migration

### 1. Install the Package

First, install the package in your project:

```bash
npm install audio-visualizer
# or
yarn add audio-visualizer
```

### 2. Replace Component Imports

Replace your imports from the original implementation:

**Before:**

```tsx
import AudioVisualizer from "../components/organisms/AudioVisualizer";
import { useAudioListener } from "../hooks/useAudioListener";
```

**After:**

```tsx
import { AudioVisualizer, useAudioListener } from "audio-visualizer";
```

### 3. Update Component Usage

The new package uses a more configurable approach with an `options` prop:

**Before:**

```tsx

```

**After:**

```tsx
<AudioVisualizer
  audioData={audioData}
  isListening={isListening}
  options={{
    // Optional configuration
    initialQuality: "medium",
    showStats: false,
    // Add any other options you need
  }}
/>
```

### 4. Remove Original Files

You can now safely remove the following files from your project as they are included in the package:

- `src/components/organisms/AudioVisualizer.tsx`
- `src/components/atoms/vertexShader.ts`
- `src/components/atoms/fragmentShader.ts`
- `src/hooks/useAudioListener.ts`

### 5. Customizing the Visualizer

The package provides several customization options that weren't available in the original implementation:

```tsx
<AudioVisualizer
  audioData={audioData}
  isListening={isListening}
  options={{
    // Visual quality (affects performance)
    initialQuality: "high", // "low" | "medium" | "high"

    // Initial colors
    initialColors: {
      red: 0.8,
      green: 0.2,
      blue: 0.7,
    },

    // Bloom effect settings
    initialBloom: {
      threshold: 0.4,
      strength: 0.6,
      radius: 0.5,
    },

    // Show performance stats
    showStats: true,

    // Enable orbit controls for camera
    enableOrbitControls: true,

    // Auto-rotate the visualization
    autoRotate: true,

    // Show GUI controls for customization
    showGui: true,

    // Additional CSS class name
    className: "my-visualizer",
  }}
/>
```

## Breaking Changes

### TypeScript Interfaces

If you were using any of the TypeScript interfaces from the original implementation, note that they have been updated:

- `VisualizerProps` now includes an optional `options` property
- `ShaderUniforms` includes an optional `u_detail` property
- New interfaces have been added: `VisualizerOptions`, `ColorParams`, and `BloomParams`

### CSS Classes

The default CSS classes have been simplified. If you were targeting specific CSS classes in the original implementation, you may need to update your selectors.

## Performance Improvements

The package includes several performance optimizations:

1. Adaptive quality based on device capabilities
2. Frame rate limiting to maintain consistent performance
3. Optimized audio data processing
4. Better memory management and cleanup

## Example Migration

Here's a complete example of migrating a simple implementation:

**Before:**

```tsx
import React from 'react';
import AudioVisualizer from "../components/organisms/AudioVisualizer";
import { useAudioListener } from "../hooks/useAudioListener";

export const VisualizerPage = () => {
  const { isListening, audioData, error, startListening, stopListening } = useAudioListener();

  return (






        {isListening ? "Stop" : "Start"}


      {error && {error}}

  );
};
```

**After:**

```tsx
import React from 'react';
import { AudioVisualizer, useAudioListener } from "audio-visualizer";

export const VisualizerPage = () => {
  const { isListening, audioData, error, startListening, stopListening } = useAudioListener();

  return (






        {isListening ? "Stop" : "Start"}


      {error && {error}}

  );
};
```

## Need Help?

If you encounter any issues during migration, please open an issue on our GitHub repository.
