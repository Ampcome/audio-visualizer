import { useState, useRef } from "react";
import AudioVisualizer from "../components/organisms/AudioVisualizer";
// hooks
import { useAudioListener } from "../hooks/useAudioListener";
// components
import { Button } from "../components/ui/button";

/**
 * Home page component displaying the audio visualizer
 */
export const Home = (): JSX.Element => {
  const containerRef = useRef<HTMLDivElement>(null);

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

  // console.log(audioData);

  return (
    <div className="h-screen flex flex-col items-center justify-center bg-black text-white relative">
      <div
        className="flex flex-1 w-full h-[70vh] relative mb-8 p-0"
        ref={containerRef}
      >
        <AudioVisualizer
          audioData={audioData}
          isListening={isListening}
        />
      </div>
      <div className="text-center z-10 p-8 bg-black/80 rounded-lg backdrop-blur-md">
        <Button
          onClick={handleToggleListening}
          variant={isListening ? "destructive" : "default"}
          size="lg"
        >
          {isListening ? "Stop Listening" : "Start Listening"}
        </Button>
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

export default Home;
