import { useRef, useEffect, useState, useMemo } from "react";
// three.js
import { GUI } from "dat.gui";
import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js";
import { EffectComposer } from "three/examples/jsm/postprocessing/EffectComposer.js";
import { RenderPass } from "three/examples/jsm/postprocessing/RenderPass.js";
import { UnrealBloomPass } from "three/examples/jsm/postprocessing/UnrealBloomPass.js";
import { OutputPass } from "three/examples/jsm/postprocessing/OutputPass.js";
// Shaders
import vertexShader from "../../components/atoms/vertexShader";
import fragmentShader from "../../components/atoms/fragmentShader";

interface VisualizerProps {
  audioData: Uint8Array | null;
  isListening: boolean;
}

/**
 * Shader uniforms interface
 */
export interface ShaderUniforms {
  [uniform: string]: { value: any };
  u_time: { value: number };
  u_red: { value: number };
  u_green: { value: number };
  u_blue: { value: number };
  u_amplitude: { value: number };
  u_bass: { value: number };
  u_mid: { value: number };
  u_treble: { value: number };
}

/**
 * Color parameters interface
 */
export interface ColorParams {
  red: number;
  green: number;
  blue: number;
}

/**
 * Bloom parameters interface
 */
export interface BloomParams {
  threshold: number;
  strength: number;
  radius: number;
}

function AudioVisualizer({ audioData, isListening }: VisualizerProps) {
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
  const [showStats, setShowStats] = useState<boolean>(false);
  const [fps, setFps] = useState<number>(0);
  const [quality, setQuality] = useState<"low" | "medium" | "high">("medium");

  // Detect device capabilities
  const deviceCapabilities = useMemo(() => {
    const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
    const isLowEndDevice =
      isMobile || (window.navigator.hardwareConcurrency || 4) <= 4;
    return {
      isMobile,
      isLowEndDevice,
      initialQuality: isLowEndDevice ? ("low" as const) : ("medium" as const),
    };
  }, []);

  // Set initial quality based on device capabilities
  useEffect(() => {
    setQuality(deviceCapabilities.initialQuality as "low" | "medium" | "high");
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
    u_red: { value: 1.0 },
    u_green: { value: 1.0 },
    u_blue: { value: 1.0 },
    u_detail: { value: getDetailLevel(quality) }, // Control noise detail level
  });

  // Bloom parameters with default values matching audiovisualizer-main
  const bloomParamsRef = useRef<BloomParams>({
    threshold: 0.5,
    strength: 0.3,
    radius: 0.8,
  });

  useEffect(() => {
    if (!containerRef.current) return;

    // Set detail level in uniforms
    uniformsRef.current.u_detail.value = getDetailLevel(quality);

    // Create scene
    const scene = new THREE.Scene();
    scene.background = new THREE.Color(0x000000);
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

    // Create renderer with optimized settings but matching original quality
    try {
      const renderer = new THREE.WebGLRenderer({
        // canvas: containerRef.current,
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
      renderer.outputColorSpace = THREE.SRGBColorSpace;

      // Clear any existing canvas
      if (containerRef.current.firstChild) {
        containerRef.current.removeChild(containerRef.current.firstChild);
      }

      containerRef.current.appendChild(renderer.domElement);
      rendererRef.current = renderer;

      // Add OrbitControls for better user interaction
      const controls = new OrbitControls(camera, renderer.domElement);
      controls.enableDamping = true;
      controls.dampingFactor = 0.05;
      controls.enableZoom = true;
      controls.autoRotate = false; // Disable auto-rotation for better performance
      controls.update();
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

    // Setup post-processing
    const params: BloomParams & ColorParams = {
      red: 1.0,
      green: 1.0,
      blue: 1.0,
      threshold: bloomParamsRef.current.threshold,
      strength: bloomParamsRef.current.strength,
      radius: bloomParamsRef.current.radius,
    };

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
      // composerRef.current.render();
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
  // Using a more efficient animation approach to prevent frame drops
  useEffect(() => {
    if (
      !sceneRef.current ||
      !cameraRef.current ||
      !clockRef.current ||
      !rendererRef.current ||
      !meshRef.current
    ) {
      console.error("Required refs are missing for animation");
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
      if (showStats) {
        const fps = 1000 / deltaTime;
        fpsHistoryRef.current.push(fps);
        if (fpsHistoryRef.current.length > 30) {
          fpsHistoryRef.current.shift();
        }

        // Update FPS display every 10 frames
        if (fpsHistoryRef.current.length % 10 === 0) {
          const avgFps =
            fpsHistoryRef.current.reduce((sum, val) => sum + val, 0) /
            fpsHistoryRef.current.length;
          setFps(Math.round(avgFps));
        }
      }

      // Camera follows mouse with smooth easing - match audiovisualizer-main
      cameraRef.current.position.x +=
        (mousePosition.x - cameraRef.current.position.x) * 0.05;
      cameraRef.current.position.y +=
        (-mousePosition.y - cameraRef.current.position.y) * 0.5;
      cameraRef.current.lookAt(sceneRef.current.position);

      // Update time uniform - match audiovisualizer-main style
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

            // Apply smoothing to prevent sudden jumps
            const smoothingFactor = 0.7; // Higher value = more responsive

            // Apply audio data to uniforms with high multipliers for visible effect
            uniformsRef.current.u_bass.value =
              uniformsRef.current.u_bass.value * (1 - smoothingFactor) +
              (bassAvg / 255) * 7.5 * smoothingFactor;

            uniformsRef.current.u_mid.value =
              uniformsRef.current.u_mid.value * (1 - smoothingFactor) +
              (midAvg / 255) * 7.5 * smoothingFactor;

            uniformsRef.current.u_treble.value =
              uniformsRef.current.u_treble.value * (1 - smoothingFactor) +
              (trebleAvg / 255) * 7.5 * smoothingFactor;

            // Overall amplitude based on average volume
            const avgVolume = (bassAvg + midAvg + trebleAvg) / 3;
            uniformsRef.current.u_amplitude.value =
              uniformsRef.current.u_amplitude.value * (1 - smoothingFactor) +
              (0.5 + (avgVolume / 255) * 7.5) * smoothingFactor;
          } catch (error) {
            console.error("Error in animation loop:", error);
            // Fall back to gentle animation on error
            const time = clockRef.current.getElapsedTime();
            uniformsRef.current.u_amplitude.value =
              1.0 + Math.sin(time * 0.2) * 0.3;
          }
        } else {
          // Idle animation with subtle movement
          const time = clockRef.current.getElapsedTime();
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
  }, [mousePosition, audioData, isListening, quality, showStats]);

  return (
    <div
      ref={containerRef}
      aria-label="3D Audio Visualizer"
      className="w-full h-full overflow-hidden bg-black relative"
    >
      Audio Visualizer
    </div>
  );
}

export default AudioVisualizer;
