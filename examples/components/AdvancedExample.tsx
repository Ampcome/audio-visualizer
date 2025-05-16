import React, { useState, useEffect } from "react";
import { AudioVisualizer, useAudioListener } from "../../src";
import type { VisualizerOptions } from "../../src/types";
import { useMobileScreen } from "../utils";

const AdvancedExample: React.FC = () => {
  const isMobile = useMobileScreen();
  const { isListening, audioData, error, startListening, stopListening } =
    useAudioListener();
  const [showError, setShowError] = useState<boolean>(false);

  // Customizable options
  const [options, setOptions] = useState<VisualizerOptions>({
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
  });

  const handleToggleListening = () => {
    if (isListening) {
      stopListening();
    } else {
      setShowError(false);
      startListening();
    }
  };

  useEffect(() => {
    setOptions((prev) => ({
      ...prev,
      containerStyle: {
        showGui: isMobile ? false : true,
        height: isMobile ? "400px" : "65vh",
      },
    }));
  }, [isMobile]);

  return (
    <div className="h-[70vh] w-full md:h-full md:flex-1 flex flex-col items-center justify-center bg-black text-white">
      {/* Visualizer container */}
      <div className="h-[400px] md:flex-1 w-full">
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
      </div>

      {/* Controls panel */}
      <div className="p-6 bg-black">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col flex-wrap justify-center items-center mb-6">
            <button
              onClick={handleToggleListening}
              className={`px-6 py-3 text-white rounded-lg transition-colors ${
                isListening
                  ? "bg-red-600 hover:bg-red-700"
                  : "bg-gradient-to-r from-rose-600 to-fuchsia-700"
              }`}
            >
              {isListening ? "Stop Listening" : "Start Listening"}
            </button>
            <p className="mt-4 text-sm text-gray-400">
              Note: This will request microphone access
            </p>
          </div>
          {showError && error && (
            <div className="mb-4 p-4 bg-red-900/50 rounded-lg">
              <p className="text-red-300">{error}</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default AdvancedExample;
