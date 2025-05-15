import { useState, useEffect, useRef, useCallback } from "react";

/**
 * Audio listener state
 */
interface AudioListenerState {
  isListening: boolean;
  audioData: Uint8Array | null;
  error: string | null;
  startListening: () => void;
  stopListening: () => void;
}

/**
 * Custom hook for listening to audio from the microphone
 * @returns Audio listener state
 */
export const useAudioListener = (): AudioListenerState => {
  const [isListening, setIsListening] = useState<boolean>(false);
  const [audioData, setAudioData] = useState<Uint8Array | null>(() => {
    // Initialize with placeholder data to ensure visualization starts immediately
    const placeholderData = new Uint8Array(128);
    for (let i = 0; i < placeholderData.length; i++) {
      // Create a gentle wave pattern for initial visualization
      placeholderData[i] = Math.floor(40 + 20 * Math.sin(i * 0.1));
    }
    return placeholderData;
  });
  const [error, setError] = useState<string | null>(null);

  const audioContextRef = useRef<AudioContext | null>(null);
  const analyserRef = useRef<AnalyserNode | null>(null);
  const mediaStreamRef = useRef<MediaStream | null>(null);
  const animationFrameRef = useRef<number | null>(null);
  const dataArrayRef = useRef<Uint8Array | null>(null);

  // Cleanup function to release resources
  const cleanup = useCallback(() => {
    if (animationFrameRef.current) {
      cancelAnimationFrame(animationFrameRef.current);
      animationFrameRef.current = null;
    }

    if (mediaStreamRef.current) {
      mediaStreamRef.current.getTracks().forEach((track) => track.stop());
      mediaStreamRef.current = null;
    }

    if (audioContextRef.current && audioContextRef.current.state !== "closed") {
      audioContextRef.current.close().catch(console.error);
      audioContextRef.current = null;
    }

    analyserRef.current = null;
    dataArrayRef.current = null;
  }, []);

  // Clean up resources when component unmounts
  useEffect(() => {
    // Ensure browser supports audio APIs before even attempting to use them
    const browserSupported =
      typeof window !== "undefined" &&
      (typeof window.AudioContext !== "undefined" ||
        typeof (window as any).webkitAudioContext !== "undefined") &&
      navigator.mediaDevices &&
      navigator.mediaDevices.getUserMedia;

    if (!browserSupported) {
      setError("Your browser does not support the required audio APIs");
    }

    return cleanup;
  }, [cleanup]);

  /**
   * Start listening to audio from the microphone
   */
  const startListening = useCallback(async (): Promise<void> => {
    try {
      // First clean up any existing resources
      cleanup();
      setError(null);

      // Check if browser supports AudioContext
      if (
        typeof window === "undefined" ||
        (typeof window.AudioContext === "undefined" &&
          typeof (window as any).webkitAudioContext === "undefined")
      ) {
        throw new Error("Your browser does not support Web Audio API");
      }

      // Check if mediaDevices API is available
      if (!navigator.mediaDevices || !navigator.mediaDevices.getUserMedia) {
        throw new Error("Media Devices API not supported in this browser");
      }

      // Request microphone access
      const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
      mediaStreamRef.current = stream;

      // Create audio context
      const AudioContextClass =
        window.AudioContext || (window as any).webkitAudioContext;
      const audioContext = new AudioContextClass();
      audioContextRef.current = audioContext;

      // Resume audio context if it's suspended (needed for some browsers)
      if (audioContext.state === "suspended") {
        await audioContext.resume();
      }

      // Create analyser node with optimized settings
      const analyser = audioContext.createAnalyser();
      analyser.fftSize = 512; // Balanced value for performance and detail
      analyser.smoothingTimeConstant = 0.7; // Slightly reduced for more responsive visualization
      analyser.minDecibels = -90; // Increased sensitivity to quiet sounds
      analyser.maxDecibels = -10; // Better dynamic range
      analyserRef.current = analyser;

      // Connect the microphone to the analyser
      const source = audioContext.createMediaStreamSource(stream);
      source.connect(analyser);

      // Create data array for frequency data
      const dataArray = new Uint8Array(analyser.frequencyBinCount);
      dataArrayRef.current = dataArray;

      // Initialize with some data to ensure visualization starts immediately
      analyser.getByteFrequencyData(dataArray);
      setAudioData(new Uint8Array(dataArray));

      // Function to update audio data in animation frame
      const updateAudioData = (): void => {
        if (!analyserRef.current || !dataArrayRef.current) return;

        try {
          // Get frequency data from the analyser
          analyserRef.current.getByteFrequencyData(dataArrayRef.current);

          // Create a copy of the data array to avoid reference issues
          const newData = new Uint8Array(dataArrayRef.current);
          setAudioData(newData);

          // Continue the animation loop
          animationFrameRef.current = requestAnimationFrame(updateAudioData);
        } catch (err) {
          console.error("Error updating audio data:", err);
          // If there's an error, stop the animation frame but don't stop listening
          // This prevents complete failure if there's a temporary glitch
          if (animationFrameRef.current) {
            cancelAnimationFrame(animationFrameRef.current);
            // Try to restart the animation frame after a short delay
            setTimeout(() => {
              animationFrameRef.current =
                requestAnimationFrame(updateAudioData);
            }, 100);
          }
        }
      };

      // Start animation frame loop immediately
      animationFrameRef.current = requestAnimationFrame(updateAudioData);
      setIsListening(true);
    } catch (err) {
      cleanup();
      const errorMessage =
        err instanceof Error ? err.message : "Failed to access microphone";
      setError(errorMessage);
      console.error("Error accessing microphone:", err);
    }
  }, [cleanup]);

  /**
   * Stop listening to audio from the microphone
   */
  const stopListening = useCallback((): void => {
    cleanup();
    setIsListening(false);

    // Generate new placeholder data when stopping
    const placeholderData = new Uint8Array(128);
    for (let i = 0; i < placeholderData.length; i++) {
      // Create a gentle wave pattern for idle visualization
      placeholderData[i] = Math.floor(30 + 15 * Math.sin(i * 0.1));
    }
    setAudioData(placeholderData);
  }, [cleanup]);

  return {
    isListening,
    audioData,
    error,
    startListening,
    stopListening,
  };
};
