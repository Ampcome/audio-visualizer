import React, { useState, useEffect } from "react";
import { AudioVisualizer, useAudioListener } from "../../src";
import type { VisualizerOptions } from "../../src/types";

const AdvancedExample: React.FC = () => {
  const { isListening, audioData, error, startListening, stopListening } =
    useAudioListener();
  const [showError, setShowError] = useState<boolean>(false);

  // Customizable options
  const [options, setOptions] = useState<VisualizerOptions>({
    initialQuality: "medium" as "low" | "medium" | "high",
    initialColors: {
      red: 0.8,
      green: 0.2,
      blue: 0.7,
    },
    initialBloom: {
      threshold: 0.4,
      strength: 0.6,
      radius: 0.5,
    },
    showStats: true,
    enableOrbitControls: true,
    autoRotate: false,
    showGui: true,
    className: "custom-visualizer",
  });

  const handleToggleListening = () => {
    if (isListening) {
      stopListening();
    } else {
      setShowError(false);
      startListening();
    }
  };

  // Update color settings
  const updateColors = (
    colors: Partial<{ red: number; green: number; blue: number }>
  ) => {
    setOptions({
      ...options,
      initialColors: {
        ...(options.initialColors || { red: 1.0, green: 1.0, blue: 1.0 }),
        ...colors,
      },
    });
  };

  // Update bloom settings
  const updateBloom = (
    bloom: Partial<{ threshold: number; strength: number; radius: number }>
  ) => {
    setOptions({
      ...options,
      initialBloom: {
        ...(options.initialBloom || {
          threshold: 0.5,
          strength: 0.3,
          radius: 0.8,
        }),
        ...bloom,
      },
    });
  };

  // Toggle a boolean option
  const toggleOption = (option: string) => {
    setOptions({
      ...options,
      [option]: !options[option as keyof typeof options],
    });
  };

  // Change quality setting
  const changeQuality = (quality: "low" | "medium" | "high") => {
    setOptions({
      ...options,
      initialQuality: quality,
    });
  };

  return (
    <div className="min-h-screen flex flex-col bg-gray-900 text-white">
      {/* Visualizer container */}
      <div className="flex-1 w-full h-[60vh]">
        <AudioVisualizer
          audioData={audioData}
          isListening={isListening}
          options={options}
        />
      </div>

      {/* Controls panel */}
      <div className="p-6 bg-gray-800 border-t border-gray-700">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-wrap justify-between items-center mb-6">
            <h2 className="text-xl font-bold">Visualizer Controls</h2>

            <button
              onClick={handleToggleListening}
              className={`px-6 py-3 rounded-lg transition-colors ${
                isListening
                  ? "bg-red-600 hover:bg-red-700"
                  : "bg-green-600 hover:bg-green-700"
              }`}
            >
              {isListening ? "Stop Listening" : "Start Listening"}
            </button>
          </div>

          {showError && error && (
            <div className="mb-4 p-4 bg-red-900/50 rounded-lg">
              <p className="text-red-300">{error}</p>
            </div>
          )}

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Quality settings */}
            <div className="p-4 bg-gray-700 rounded-lg">
              <h3 className="font-medium mb-3">Quality</h3>
              <div className="flex space-x-2">
                {(["low", "medium", "high"] as const).map((quality) => (
                  <button
                    key={quality}
                    onClick={() => changeQuality(quality)}
                    className={`px-3 py-1 rounded ${
                      options.initialQuality === quality
                        ? "bg-blue-600"
                        : "bg-gray-600 hover:bg-gray-500"
                    }`}
                  >
                    {quality.charAt(0).toUpperCase() + quality.slice(1)}
                  </button>
                ))}
              </div>
            </div>

            {/* Color settings */}
            <div className="p-4 bg-gray-700 rounded-lg">
              <h3 className="font-medium mb-3">Colors</h3>
              <div className="space-y-2">
                <div className="flex items-center">
                  <span className="w-10">Red:</span>
                  <input
                    type="range"
                    min="0"
                    max="1"
                    step="0.1"
                    value={options.initialColors?.red || 1.0}
                    onChange={(e) =>
                      updateColors({ red: parseFloat(e.target.value) })
                    }
                    className="flex-1 mx-2"
                  />
                  <span className="w-10 text-right">
                    {options.initialColors?.red.toFixed(1) || "1.0"}
                  </span>
                </div>
                <div className="flex items-center">
                  <span className="w-10">Green:</span>
                  <input
                    type="range"
                    min="0"
                    max="1"
                    step="0.1"
                    value={options.initialColors?.green || 1.0}
                    onChange={(e) =>
                      updateColors({ green: parseFloat(e.target.value) })
                    }
                    className="flex-1 mx-2"
                  />
                  <span className="w-10 text-right">
                    {options.initialColors?.green.toFixed(1) || "1.0"}
                  </span>
                </div>
                <div className="flex items-center">
                  <span className="w-10">Blue:</span>
                  <input
                    type="range"
                    min="0"
                    max="1"
                    step="0.1"
                    value={options.initialColors?.blue || 1.0}
                    onChange={(e) =>
                      updateColors({ blue: parseFloat(e.target.value) })
                    }
                    className="flex-1 mx-2"
                  />
                  <span className="w-10 text-right">
                    {options.initialColors?.blue.toFixed(1) || "1.0"}
                  </span>
                </div>
              </div>
            </div>

            {/* Bloom settings */}
            <div className="p-4 bg-gray-700 rounded-lg">
              <h3 className="font-medium mb-3">Bloom Effect</h3>
              <div className="space-y-2">
                <div className="flex items-center">
                  <span className="w-20">Threshold:</span>
                  <input
                    type="range"
                    min="0"
                    max="1"
                    step="0.1"
                    value={options.initialBloom?.threshold || 0.5}
                    onChange={(e) =>
                      updateBloom({ threshold: parseFloat(e.target.value) })
                    }
                    className="flex-1 mx-2"
                  />
                  <span className="w-10 text-right">
                    {options.initialBloom?.threshold.toFixed(1) || "0.5"}
                  </span>
                </div>
                <div className="flex items-center">
                  <span className="w-20">Strength:</span>
                  <input
                    type="range"
                    min="0"
                    max="3"
                    step="0.1"
                    value={options.initialBloom?.strength || 0.3}
                    onChange={(e) =>
                      updateBloom({ strength: parseFloat(e.target.value) })
                    }
                    className="flex-1 mx-2"
                  />
                  <span className="w-10 text-right">
                    {options.initialBloom?.strength.toFixed(1) || "0.3"}
                  </span>
                </div>
                <div className="flex items-center">
                  <span className="w-20">Radius:</span>
                  <input
                    type="range"
                    min="0"
                    max="1"
                    step="0.1"
                    value={options.initialBloom?.radius || 0.8}
                    onChange={(e) =>
                      updateBloom({ radius: parseFloat(e.target.value) })
                    }
                    className="flex-1 mx-2"
                  />
                  <span className="w-10 text-right">
                    {options.initialBloom?.radius.toFixed(1) || "0.8"}
                  </span>
                </div>
              </div>
            </div>

            {/* Toggle options */}
            <div className="p-4 bg-gray-700 rounded-lg">
              <h3 className="font-medium mb-3">Options</h3>
              <div className="space-y-2">
                <label className="flex items-center cursor-pointer">
                  <input
                    type="checkbox"
                    checked={options.showStats || false}
                    onChange={() => toggleOption("showStats")}
                    className="mr-2"
                  />
                  <span>Show Stats</span>
                </label>
                <label className="flex items-center cursor-pointer">
                  <input
                    type="checkbox"
                    checked={options.enableOrbitControls || false}
                    onChange={() => toggleOption("enableOrbitControls")}
                    className="mr-2"
                  />
                  <span>Orbit Controls</span>
                </label>
                <label className="flex items-center cursor-pointer">
                  <input
                    type="checkbox"
                    checked={options.autoRotate || false}
                    onChange={() => toggleOption("autoRotate")}
                    className="mr-2"
                  />
                  <span>Auto Rotate</span>
                </label>
                <label className="flex items-center cursor-pointer">
                  <input
                    type="checkbox"
                    checked={options.showGui || false}
                    onChange={() => toggleOption("showGui")}
                    className="mr-2"
                  />
                  <span>Show GUI</span>
                </label>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdvancedExample;
