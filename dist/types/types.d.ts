/**
 * Visualizer component props interface
 */
export interface VisualizerProps {
    /**
     * Audio frequency data array
     */
    audioData: Uint8Array | null;
    /**
     * Whether the visualizer is actively listening to audio
     */
    isListening: boolean;
    /**
     * Optional configuration options for the visualizer
     */
    options?: VisualizerOptions;
}
/**
 * Optional configuration options for the visualizer
 */
export interface VisualizerOptions {
    /**
     * Initial quality setting for the visualizer
     * @default "medium"
     */
    initialQuality?: "low" | "medium" | "high";
    /**
     * Initial color settings for the visualizer
     */
    initialColors?: ColorParams;
    /**
     * Initial bloom effect settings
     */
    initialBloom?: BloomParams;
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
}
/**
 * Shader uniforms interface
 */
export interface ShaderUniforms {
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
export interface ColorParams {
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
export interface BloomParams {
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
