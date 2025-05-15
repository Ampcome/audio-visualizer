/**
 * Audio listener state interface
 */
export interface AudioListenerState {
    /**
     * Whether the visualizer is currently listening to audio
     */
    isListening: boolean;
    /**
     * Audio frequency data array
     */
    audioData: Uint8Array | null;
    /**
     * Error message if microphone access fails
     */
    error: string | null;
    /**
     * Function to start listening to audio
     */
    startListening: () => void;
    /**
     * Function to stop listening to audio
     */
    stopListening: () => void;
}
/**
 * Custom hook for listening to audio from the microphone
 * @returns Audio listener state
 */
export declare const useAudioListener: () => AudioListenerState;
