import React, { useState } from "react";
import { AudioVisualizer, useAudioListener } from "../../src";
import type { VisualizerOptions } from "../../src/types";

const AdvancedExample: React.FC = () => {
  const { isListening, audioData, error, startListening, stopListening } =
    useAudioListener();
  const [showError, setShowError] = useState<boolean>(false);

  // Customizable options
  const [options, setOptions] = useState<VisualizerOptions>({
    initialQuality: "medium" as "low" | "medium" | "high",
    orbColors: {
      red: 255,
      green: 255,
      blue: 255,
    },
    canvasColor: "#222",
    initialGlow: {
      threshold: 0.3,
      strength: 0.2,
      radius: 0.5,
    },
    inertiaEnabled: true,
    inertiaLevel: 0.05,
    zoomEnabled: true,
    spikeLevel: 5.5,
    smoothnessLevel: 0.7,
    showStats: true,
    enableOrbitControls: true,
    autoRotate: true,
    showGui: false,
    className: "custom-visualizer",
    containerStyle: {
      height: "80vh",
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

  return (
    <div className="min-h-screen flex flex-col bg-black text-white">
      {/* Visualizer container */}
      <div className="flex-1 w-full">
        <AudioVisualizer
          audioData={audioData}
          isListening={isListening}
          initialQuality={options.initialQuality}
          orbColors={options.orbColors}
          canvasColor={options.canvasColor}
          initialGlow={options.initialGlow}
          showStats={options.showStats}
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
            {/* <h2 className="text-xl font-bold">Visualizer Controls</h2> */}

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
