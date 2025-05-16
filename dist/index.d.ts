import { JSX } from 'react';

/**
 * Visualizer component props interface
 */
interface VisualizerProps {
    /**
     * Audio frequency data array
     */
    audioData: Uint8Array | null;
    /**
     * Whether the visualizer is actively listening to audio
     */
    isListening: boolean;
    /**
     * Initial quality setting for the visualizer
     * @default "medium"
     */
    initialQuality?: "low" | "medium" | "high";
    /**
     * Initial color settings for the visualizer
     */
    orbColors?: ColorParams;
    /**
     * Initial background color for the visualizer
     * Can be a hex number (0x000000), hex string ('#000000'),
     * RGB values ({r: 0, g: 0, b: 0}), or named color ('black')
     */
    canvasColor?: number | string | {
        r: number;
        g: number;
        b: number;
    };
    /**
     * Initial bloom effect settings
     */
    initialGlow?: BloomParams;
    /**
     * Whether to show performance stats
     * @default false
     */
    showStats?: boolean;
    /**
     * Whether to enable orbit controls
     * @default true
     */
    enableOrbitControls?: boolean;
    /**
     * Whether to enable auto-rotation
     * @default false
     */
    autoRotate?: boolean;
    /**
     * Whether to enable GUI controls
     * @default false
     */
    showGui?: boolean;
    /**
     * gui position top
     * only effective with showGui enabled
     * @default 150
     */
    guiPositionTop?: number;
    /**
     * Custom class name for the container
     */
    className?: string;
    /**
     * Custom inline styles for the container
     * Will be merged with the default styles
     */
    containerStyle?: React.CSSProperties;
    /**
     * Whether to enable inertia
     * needs enableOrbitControls enabled to effect
     * @default true
     */
    inertiaEnabled?: boolean;
    /**
     * Inertia level
     * needs enableOrbitControls enabled to effect
     * @default 0.05
     */
    inertiaLevel?: number;
    /**
     * Whether to enable Zoom
     * needs enableOrbitControls enabled to effect
     * @default false
     */
    zoomEnabled?: boolean;
    /**
     * Spike level for the visualizer
     * Higher value = larger spikes
     * @default 5.5
     */
    spikeLevel?: number;
    /**
     * Smoothness level for the visualizer
     * Higher value = more responsive
     * @default 0.7
     */
    smoothnessLevel?: number;
}
/**
 * Optional configuration options for the visualizer
 */
interface VisualizerOptions {
    /**
     * Initial quality setting for the visualizer
     * @default "medium"
     */
    initialQuality?: "low" | "medium" | "high";
    /**
     * Initial color settings for the visualizer
     */
    orbColors?: ColorParams;
    /**
     * Initial background color for the visualizer
     * Can be a hex number (0x000000), hex string ('#000000'),
     * RGB values ({r: 0, g: 0, b: 0}), or named color ('black')
     */
    canvasColor?: number | string | {
        r: number;
        g: number;
        b: number;
    };
    /**
     * Initial bloom effect settings
     */
    initialGlow?: BloomParams;
    /**
     * Whether to show performance stats
     * @default false
     */
    showStats?: boolean;
    /**
     * Whether to enable orbit controls
     * @default true
     */
    enableOrbitControls?: boolean;
    /**
     * Whether to enable auto-rotation
     * @default false
     */
    autoRotate?: boolean;
    /**
     * Whether to enable GUI controls
     * @default false
     */
    showGui?: boolean;
    /**
     * Custom class name for the container
     */
    className?: string;
    /**
     * Custom inline styles for the container
     * Will be merged with the default styles
     */
    containerStyle?: React.CSSProperties;
    /**
     * Whether to enable inertia
     * @default true
     */
    inertiaEnabled?: boolean;
    /**
     * Inertia level
     * @default 0.05
     */
    inertiaLevel?: number;
    /**
     * Whether to enable Zoom
     * @default false
     */
    zoomEnabled?: boolean;
    /**
     * Spike level for the visualizer
     * @default 5.5
     */
    spikeLevel?: number;
    /**
     * Smoothness level for the visualizer
     * @default 0.7
     */
    smoothnessLevel?: number;
}
/**
 * Shader uniforms interface
 */
interface ShaderUniforms {
    [uniform: string]: {
        value: any;
    };
    u_time: {
        value: number;
    };
    u_red: {
        value: number;
    };
    u_green: {
        value: number;
    };
    u_blue: {
        value: number;
    };
    u_amplitude: {
        value: number;
    };
    u_bass: {
        value: number;
    };
    u_mid: {
        value: number;
    };
    u_treble: {
        value: number;
    };
    u_detail: {
        value: number;
    };
}
/**
 * Color parameters interface
 */
interface ColorParams {
    /**
     * Red color component (0-1)
     * @default 1.0
     */
    red: number;
    /**
     * Green color component (0-1)
     * @default 1.0
     */
    green: number;
    /**
     * Blue color component (0-1)
     * @default 1.0
     */
    blue: number;
}
/**
 * Bloom parameters interface
 */
interface BloomParams {
    /**
     * Bloom threshold (0-1)
     * @default 0.5
     */
    threshold: number;
    /**
     * Bloom strength (0-3)
     * @default 0.3
     */
    strength: number;
    /**
     * Bloom radius (0-1)
     * @default 0.8
     */
    radius: number;
}

/**
 * AudioVisualizer component that renders a 3D visualization of audio data
 * @param props Component props
 * @returns JSX.Element
 */
declare const AudioVisualizer: ({ audioData, isListening, initialQuality, orbColors, canvasColor, initialGlow, enableOrbitControls, autoRotate, showGui, guiPositionTop, inertiaEnabled, inertiaLevel, zoomEnabled, spikeLevel, smoothnessLevel, className, containerStyle, }: VisualizerProps) => JSX.Element;

/**
 * Audio listener state interface
 */
interface AudioListenerState {
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
declare const useAudioListener: () => AudioListenerState;

export { AudioListenerState, AudioVisualizer, BloomParams, ColorParams, ShaderUniforms, VisualizerOptions, VisualizerProps, useAudioListener };
