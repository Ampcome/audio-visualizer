import { JSX } from "react";
import { VisualizerProps } from "../types";
/**
 * AudioVisualizer component that renders a 3D visualization of audio data
 * @param props Component props
 * @returns JSX.Element
 */
export declare const AudioVisualizer: ({ audioData, isListening, initialQuality, orbColors, canvasColor, initialGlow, enableOrbitControls, autoRotate, showGui, guiPositionTop, inertiaEnabled, inertiaLevel, zoomEnabled, spikeLevel, smoothnessLevel, className, containerStyle, }: VisualizerProps) => JSX.Element;
