import { useRef, useEffect, useState, useMemo, JSX } from "react";
// three.js
import { GUI } from "dat.gui";
import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js";
import { EffectComposer } from "three/examples/jsm/postprocessing/EffectComposer.js";
import { RenderPass } from "three/examples/jsm/postprocessing/RenderPass.js";
import { UnrealBloomPass } from "three/examples/jsm/postprocessing/UnrealBloomPass.js";
import { OutputPass } from "three/examples/jsm/postprocessing/OutputPass.js";
// Shaders
import vertexShader from "../shaders/vertexShader";
import fragmentShader from "../shaders/fragmentShader";
// Types
import {
  VisualizerProps,
  ShaderUniforms,
  BloomParams,
} from "../types";

/**
 * AudioVisualizer component that renders a 3D visualization of audio data
 * @param props Component props
 * @returns JSX.Element
 */
export const AudioVisualizer = ({
  audioData,
  isListening,
  initialQuality = "medium",
  orbColors,
  canvasColor = 0x000000,
  initialGlow,
  // showStats = false,
  enableOrbitControls = true,
  autoRotate = false,
  showGui = false,
  guiPositionTop = 100,
  inertiaEnabled = true,
  inertiaLevel = 0.05,
  zoomEnabled = false,
  spikeLevel = 5.5,
  smoothnessLevel = 0.7,
  className = "",
  containerStyle = {},
}: VisualizerProps): JSX.Element => {
  const containerRef = useRef<HTMLDivElement>(null);
  const rendererRef = useRef<THREE.WebGLRenderer | null>(null);
  const meshRef = useRef<THREE.Mesh | null>(null);
  const sceneRef = useRef<THREE.Scene | null>(null);
  const cameraRef = useRef<THREE.PerspectiveCamera | null>(null);
  const clockRef = useRef<THREE.Clock | null>(null);
  const composerRef = useRef<EffectComposer | null>(null);
  const bloomPassRef = useRef<UnrealBloomPass | null>(null);
  const guiRef = useRef<GUI | null>(null);
  const animationFrameRef = useRef<number | null>(null);
  const lastFrameTimeRef = useRef<number>(0);
  const fpsHistoryRef = useRef<number[]>([]);

  // Mouse position state for camera movement
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  // Performance monitoring
  const [fps, setFps] = useState<number>(0);
  const [quality, setQuality] = useState<"low" | "medium" | "high">(
    initialQuality
  );

  // Detect device capabilities
  const deviceCapabilities = useMemo(() => {
    if (typeof window === "undefined") {
      return {
        isMobile: false,
        isLowEndDevice: false,
        initialQuality: initialQuality,
      };
    }

    const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
    const isLowEndDevice =
      isMobile || (window.navigator.hardwareConcurrency || 4) <= 4;
    return {
      isMobile,
      isLowEndDevice,
      initialQuality: isLowEndDevice
        ? ("low" as const)
        : (initialQuality as "low" | "medium" | "high"),
    };
  }, [initialQuality]);

  // Helper function to parse various color formats to THREE.Color
  const parseColor = (
    color: number | string | { r: number; g: number; b: number }
  ): THREE.Color => {
    if (typeof color === "number") {
      return new THREE.Color(color);
    } else if (typeof color === "string") {
      return new THREE.Color(color);
    } else if (
      color &&
      typeof color === "object" &&
      "r" in color &&
      "g" in color &&
      "b" in color
    ) {
      return new THREE.Color(color.r / 255, color.g / 255, color.b / 255);
    }
    // Default fallback
    return new THREE.Color(0x000000);
  };

  // Helper function to convert color to CSS string
  const colorToCssString = (
    color: number | string | { r: number; g: number; b: number }
  ): string => {
    if (typeof color === "number") {
      return `#${color.toString(16).padStart(6, "0")}`;
    } else if (typeof color === "string") {
      // If it's already a valid CSS color, return it
      if (
        color.startsWith("#") ||
        color.startsWith("rgb") ||
        /^[a-z]+$/i.test(color)
      ) {
        return color;
      }
      // Try to convert hex string without # to proper format
      if (/^[0-9A-F]{6}$/i.test(color)) {
        return `#${color}`;
      }
      // Fallback
      return "#000000";
    } else if (
      color &&
      typeof color === "object" &&
      "r" in color &&
      "g" in color &&
      "b" in color
    ) {
      return `rgb(${color.r}, ${color.g}, ${color.b})`;
    }
    // Default fallback
    return "#000000";
  };

  // Set initial quality based on device capabilities
  useEffect(() => {
    setQuality(deviceCapabilities.initialQuality);
  }, [deviceCapabilities.initialQuality]);

  // Update detail level based on quality setting
  const getDetailLevel = (qualitySetting: string): number => {
    switch (qualitySetting) {
      case "low":
        return 0.8;
      case "high":
        return 2.0;
      default:
        return 1.2; // medium
    }
  };

  // Shader uniforms with memoization to prevent unnecessary updates
  const uniformsRef = useRef<ShaderUniforms>({
    u_time: { value: 0.0 },
    u_amplitude: { value: 1.5 },
    u_bass: { value: 0.5 },
    u_mid: { value: 0.5 },
    u_treble: { value: 0.5 },
    u_red: { value: orbColors?.red ? orbColors?.red / 255 : 1.0 },
    u_green: { value: orbColors?.green ? orbColors?.green / 255 : 1.0 },
    u_blue: { value: orbColors?.blue ? orbColors?.blue / 255 : 1.0 },
    u_detail: { value: getDetailLevel(quality) }, // Control noise detail level
  });

  // Bloom parameters with default values
  const bloomParamsRef = useRef<BloomParams>({
    threshold: initialGlow?.threshold ?? 0.5,
    strength: initialGlow?.strength ?? 0.2,
    radius: initialGlow?.radius ?? 0.5,
  });

  useEffect(() => {
    if (!containerRef.current) return;

    // Set detail level in uniforms
    uniformsRef.current.u_detail.value = getDetailLevel(quality);

    // Create scene
    const scene = new THREE.Scene();
    scene.background = parseColor(canvasColor);
    sceneRef.current = scene;

    // Create clock for animation
    const clock = new THREE.Clock();
    clockRef.current = clock;

    // Create camera
    const camera = new THREE.PerspectiveCamera(
      45,
      containerRef.current?.clientWidth / containerRef.current?.clientHeight,
      0.1,
      1000
    );
    camera.position.set(0, -2, 14);
    camera.lookAt(0, 0, 0);
    cameraRef.current = camera;

    // Create renderer with optimized settings
    try {
      const renderer = new THREE.WebGLRenderer({
        antialias: true, // Keep antialiasing for visual quality
        alpha: true,
        powerPreference: "high-performance",
        precision: quality === "low" ? "mediump" : "highp",
      });
      renderer.setSize(
        containerRef.current?.clientWidth,
        containerRef.current?.clientHeight
      );

      // Use adaptive pixel ratio based on device capabilities
      const getOptimalPixelRatio = () => {
        const baseRatio = window.devicePixelRatio || 1;
        if (deviceCapabilities.isLowEndDevice) return Math.min(baseRatio, 1);
        if (quality === "low") return Math.min(baseRatio, 1.5);
        if (quality === "medium") return Math.min(baseRatio, 2);
        return baseRatio; // For high quality, use native ratio
      };

      renderer.setPixelRatio(getOptimalPixelRatio());
      renderer.setClearColor(parseColor(canvasColor).getHex(), 1);
      renderer.outputColorSpace = THREE.SRGBColorSpace;

      // Clear any existing canvas
      if (containerRef.current.firstChild) {
        containerRef.current.removeChild(containerRef.current.firstChild);
      }

      containerRef.current.appendChild(renderer.domElement);
      rendererRef.current = renderer;

      // Add OrbitControls if enabled
      if (enableOrbitControls) {
        const controls = new OrbitControls(camera, renderer.domElement);
        controls.enableDamping = inertiaEnabled;
        controls.dampingFactor = inertiaLevel;
        controls.enableZoom = zoomEnabled;
        controls.autoRotate = autoRotate;
        controls.update();
      }
    } catch (error) {
      console.error("Error creating WebGL renderer:", error);
    }

    // Material with enhanced shaders for more robust animation
    const material = new THREE.ShaderMaterial({
      vertexShader: vertexShader,
      fragmentShader: fragmentShader,
      wireframe: true,
      uniforms: uniformsRef.current,
    });

    // Create geometry with much higher detail to match original visualizer
    // Using adaptive detail levels based on device capabilities
    const getSubdivisions = (qualitySetting: string): number => {
      switch (qualitySetting) {
        case "low":
          return 20; // Higher detail but still optimized for low-end devices
        case "high":
          return 40; // Match original visualizer's detail level
        default:
          return 30; // Good balance for medium quality
      }
    };

    const subdivisions = getSubdivisions(quality);

    // Create geometry with higher detail level
    // Use buffer geometry for better performance with high vertex counts
    const geometry = new THREE.IcosahedronGeometry(
      4,
      Math.min(subdivisions, 30)
    );

    // Apply geometry optimization techniques for better performance
    if (geometry.index) {
      geometry.index.needsUpdate = true;
    }
    geometry.attributes.position.needsUpdate = true;
    geometry.attributes.normal.needsUpdate = true;

    // Create mesh
    const mesh = new THREE.Mesh(geometry, material);
    scene.add(mesh);
    meshRef.current = mesh;

    // Create render pass
    const renderScene = new RenderPass(sceneRef.current, cameraRef.current);

    // Create bloom pass with adaptive settings based on quality
    const bloomPass = new UnrealBloomPass(
      new THREE.Vector2(
        containerRef.current?.clientWidth,
        containerRef.current?.clientHeight
      ),
      bloomParamsRef.current.strength,
      bloomParamsRef.current.radius,
      bloomParamsRef.current.threshold
    );
    bloomPassRef.current = bloomPass;

    // Create output pass
    const outputPass = new OutputPass();

    // Create effect composer with the renderer instance
    // TypeScript safety check to ensure renderer is not null
    if (rendererRef.current) {
      const composer = new EffectComposer(rendererRef.current);
      composer.addPass(renderScene);
      composer.addPass(bloomPass);
      composer.addPass(outputPass);
      composer.setSize(
        containerRef.current?.clientWidth,
        containerRef.current?.clientHeight
      );
      composerRef.current = composer;
    }

    // Add GUI if enabled
    if (showGui) {
      const gui = new GUI();
      gui.domElement.style.position = 'absolute';
      gui.domElement.style.top = `${guiPositionTop}px`;
      gui.domElement.style.right = '0px';
      guiRef.current = gui;

      // Add color controls
      const colorFolder = gui.addFolder("Colors");
      colorFolder.add(uniformsRef.current.u_red, "value", 0, 1).name("Red");
      colorFolder.add(uniformsRef.current.u_green, "value", 0, 1).name("Green");
      colorFolder.add(uniformsRef.current.u_blue, "value", 0, 1).name("Blue");
      // colorFolder.open();

      // Add bloom controls
      const bloomFolder = gui.addFolder("Bloom");
      bloomFolder
        .add(bloomParamsRef.current, "threshold", 0, 1)
        .name("Threshold")
        .onChange((value: number) => {
          if (bloomPassRef.current) {
            bloomPassRef.current.threshold = value;
          }
        });
      bloomFolder
        .add(bloomParamsRef.current, "strength", 0, 3)
        .name("Strength")
        .onChange((value: number) => {
          if (bloomPassRef.current) {
            bloomPassRef.current.strength = value;
          }
        });
      bloomFolder
        .add(bloomParamsRef.current, "radius", 0, 1)
        .name("Radius")
        .onChange((value: number) => {
          if (bloomPassRef.current) {
            bloomPassRef.current.radius = value;
          }
        });
      // bloomFolder.open();

      // Add quality control
      const settingsFolder = gui.addFolder("Settings");
      settingsFolder
        .add({ quality }, "quality", ["low", "medium", "high"])
        .name("Quality")
        .onChange((value: "low" | "medium" | "high") => {
          setQuality(value);
        });
      // settingsFolder.open();
    }

    // Handle window resize
    const handleResize = () => {
      if (!containerRef.current || !rendererRef.current || !cameraRef.current)
        return;

      const width = containerRef.current.clientWidth;
      const height = containerRef.current.clientHeight;

      cameraRef.current.aspect = width / height;
      cameraRef.current.updateProjectionMatrix();

      rendererRef.current.setSize(width, height);

      if (composerRef.current) {
        composerRef.current.setSize(width, height);
      }
    };

    window.addEventListener("resize", handleResize);

    // Cleanup
    return () => {
      window.removeEventListener("resize", handleResize);

      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
        animationFrameRef.current = null;
      }

      if (rendererRef.current && containerRef.current) {
        containerRef.current.removeChild(rendererRef.current.domElement);
      }

      if (meshRef.current) {
        meshRef.current.geometry.dispose();
        (meshRef.current.material as THREE.Material).dispose();
      }

      if (guiRef.current) guiRef.current.destroy();
    };
  }, [
    containerRef.current?.clientWidth,
    containerRef.current?.clientHeight,
    quality,
    deviceCapabilities.isLowEndDevice,
    enableOrbitControls,
    autoRotate,
    showGui,
    inertiaEnabled,
    inertiaLevel,
    zoomEnabled,
  ]);

  // Handle mouse movement for camera control
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const windowHalfX = window.innerWidth / 2;
      const windowHalfY = window.innerHeight / 2;

      setMousePosition({
        x: (e.clientX - windowHalfX) / 100,
        y: (e.clientY - windowHalfY) / 100,
      });
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  // Animation loop with frame limiting and adaptive quality
  useEffect(() => {
    if (
      !sceneRef.current ||
      !cameraRef.current ||
      !clockRef.current ||
      !rendererRef.current ||
      !meshRef.current
    ) {
      return;
    }

    // Target frame rate based on quality setting
    const getTargetFPS = (qualitySetting: string): number => {
      switch (qualitySetting) {
        case "low":
          return 30;
        case "high":
          return 60;
        default:
          return 45; // medium
      }
    };

    const targetFPS = getTargetFPS(quality);
    const frameInterval = 1000 / targetFPS;

    const animate = (): void => {
      animationFrameRef.current = requestAnimationFrame(animate);

      if (
        !cameraRef.current ||
        !sceneRef.current ||
        !clockRef.current ||
        !rendererRef.current ||
        !uniformsRef.current ||
        !meshRef.current
      ) {
        return;
      }

      // Frame rate limiting for consistent performance
      const currentTime = performance.now();
      const deltaTime = currentTime - lastFrameTimeRef.current;

      if (deltaTime < frameInterval) {
        return; // Skip this frame to maintain target FPS
      }

      // Calculate FPS for stats display
      // if (showStats) {
      //   const fps = 1000 / deltaTime;
      //   fpsHistoryRef.current.push(fps);
      //   if (fpsHistoryRef.current.length > 30) {
      //     fpsHistoryRef.current.shift();
      //   }

      //   // Update FPS display every 10 frames
      //   if (fpsHistoryRef.current.length % 10 === 0) {
      //     const avgFps =
      //       fpsHistoryRef.current.reduce((sum, val) => sum + val, 0) /
      //       fpsHistoryRef.current.length;
      //     setFps(Math.round(avgFps));
      //   }
      // }

      // Camera follows mouse with smooth easing
      cameraRef.current.position.x +=
        (mousePosition.x - cameraRef.current.position.x) * 0.05;
      cameraRef.current.position.y +=
        (-mousePosition.y - cameraRef.current.position.y) * 0.5;
      cameraRef.current.lookAt(sceneRef.current.position);

      // Update time uniform
      uniformsRef.current.u_time.value = clockRef.current.getElapsedTime();

      try {
        if (audioData && isListening && audioData.length > 0) {
          // Audio reactive animation
          try {
            const bufferLength = audioData.length;

            // Calculate frequency bands with reduced processing
            // Process fewer samples for better performance
            const sampleStep = Math.max(1, Math.floor(bufferLength / 64));

            // Bass frequencies (low end)
            const bassEnd = Math.floor(bufferLength * 0.1);
            let bassSum = 0;
            for (let i = 0; i < bassEnd; i += sampleStep) {
              bassSum += audioData[i] || 0;
            }
            const bassAvg = bassSum / Math.ceil(bassEnd / sampleStep) || 0;

            // Mid frequencies
            const midStart = bassEnd;
            const midEnd = Math.floor(bufferLength * 0.5);
            let midSum = 0;
            for (let i = midStart; i < midEnd; i += sampleStep) {
              midSum += audioData[i] || 0;
            }
            const midAvg =
              midSum / Math.ceil((midEnd - midStart) / sampleStep) || 0;

            // Treble frequencies (high end)
            const trebleStart = midEnd;
            let trebleSum = 0;
            for (let i = trebleStart; i < bufferLength; i += sampleStep) {
              trebleSum += audioData[i] || 0;
            }
            const trebleAvg =
              trebleSum /
                Math.ceil((bufferLength - trebleStart) / sampleStep) || 0;

            // Apply audio data to uniforms with high multipliers for visible effect
            uniformsRef.current.u_bass.value =
              uniformsRef.current.u_bass.value * (1 - smoothnessLevel) +
              (bassAvg / 255) * spikeLevel * smoothnessLevel;

            uniformsRef.current.u_mid.value =
              uniformsRef.current.u_mid.value * (1 - smoothnessLevel) +
              (midAvg / 255) * spikeLevel * smoothnessLevel;

            uniformsRef.current.u_treble.value =
              uniformsRef.current.u_treble.value * (1 - smoothnessLevel) +
              (trebleAvg / 255) * spikeLevel * smoothnessLevel;

            // Overall amplitude based on average volume
            const avgVolume = (bassAvg + midAvg + trebleAvg) / 3;
            uniformsRef.current.u_amplitude.value =
              uniformsRef.current.u_amplitude.value * (1 - smoothnessLevel) +
              (0.5 + (avgVolume / 255) * spikeLevel) * smoothnessLevel;
          } catch (error) {
            console.error("Error in animation loop:", error);
            // Fall back to gentle animation on error
            const time = clockRef.current.getElapsedTime();
            uniformsRef.current.u_amplitude.value =
              1.0 + Math.sin(time * 0.2) * 0.3;
          }
        } else {
          // Idle animation with subtle movement
          uniformsRef.current.u_amplitude.value = 0;
          uniformsRef.current.u_bass.value = 0;
          uniformsRef.current.u_mid.value = 0;
          uniformsRef.current.u_treble.value = 0;

          // Apply gentle rotation during idle state
          if (meshRef.current) {
            meshRef.current.rotation.y += 0.001;
          }
        }

        // Apply slow rotation for better visual effect
        if (meshRef.current) {
          meshRef.current.rotation.y += 0.001;
        }

        // Render scene with post-processing
        if (composerRef.current) {
          try {
            composerRef.current.render();
          } catch (renderError) {
            console.error("Error during composer render:", renderError);
            // Fallback to direct renderer if composer fails
            rendererRef.current.render(sceneRef.current, cameraRef.current);
          }
        } else {
          // Fallback to direct rendering if composer not available
          rendererRef.current.render(sceneRef.current, cameraRef.current);
        }

        // Update last frame time
        lastFrameTimeRef.current = currentTime;
      } catch (error) {
        console.error("Error in animation loop:", error);
      }
    };

    // Start animation loop
    animationFrameRef.current = requestAnimationFrame(animate);

    // Cleanup
    return () => {
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
        animationFrameRef.current = null;
      }
    };
  }, [
    mousePosition,
    audioData,
    isListening,
    quality,
    smoothnessLevel,
    spikeLevel,
  ]);

  return (
    <div
      ref={containerRef}
      aria-label="3D Audio Visualizer"
      style={{
        width: "100%",
        height: "100%",
        overflow: "hidden",
        backgroundColor: colorToCssString(canvasColor),
        position: "relative",
        ...containerStyle,
      }}
      className={className}
    ></div>
  );
};
