import React, { useState, JSX } from "react";
import { AudioVisualizer, useAudioListener } from "../../src";

/**
 * Basic example component showing how to use the AudioVisualizer
 */
export const BasicExample = (): JSX.Element => {
  const { isListening, audioData, error, startListening, stopListening } =
    useAudioListener();
  const [showError, setShowError] = useState<boolean>(false);

  const handleToggleListening = () => {
    if (isListening) {
      stopListening();
    } else {
      setShowError(false);
      startListening();
    }
  };

  return (
    <div className="h-screen flex flex-col items-center justify-center bg-black text-white relative">
      <div className="flex flex-1 w-full h-[70vh] relative mb-8 p-0">
        <AudioVisualizer audioData={audioData} isListening={isListening} />
      </div>
      <div className="text-center z-10 p-8 bg-black/80 rounded-lg backdrop-blur-md">
        <button
          onClick={handleToggleListening}
          className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors"
        >
          {isListening ? "Stop Listening" : "Start Listening"}
        </button>
        <p className="mt-4 text-sm text-gray-400">
          Note: This will request microphone access
        </p>
      </div>
      {showError && error && (
        <div className="text-center z-10 p-8 bg-black/80 rounded-lg backdrop-blur-md">
          <p className="text-sm text-red-500">{error}</p>
        </div>
      )}
    </div>
  );
};

export default BasicExample;
