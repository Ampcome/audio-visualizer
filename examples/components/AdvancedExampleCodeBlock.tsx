import React, { JSX } from "react";

/**
 * Advanced example page code block with Monokai theme styling
 */
export const AdvancedExampleCodeBlock = (): JSX.Element => {
  return (
    <div className="w-full md:w-1/3 overflow-auto bg-[#272822] rounded-lg p-4 h-[85vh] border border-gray-700">
      <h2 className="text-xl font-bold mb-4 text-white">
        Advanced Example Code
      </h2>
      <div className="relative text-sm font-mono p-4 text-[#F8F8F2] overflow-auto leading-relaxed">
        {/* Import statements */}
        <div className="flex">
          <span className="text-[#F92672]">import</span>
          <span className="text-[#F8F8F2]">
            &nbsp;React, &#123; useState &#125;
          </span>
          <span className="text-[#F92672]">&nbsp;from</span>
          <span className="text-[#E6DB74]">&nbsp;"react"</span>
          <span className="text-[#F8F8F2]">;</span>
        </div>

        <div className="flex">
          <span className="text-[#F92672]">import</span>
          <span className="text-[#F8F8F2]">
            &nbsp;&#123; AudioVisualizer, useAudioListener &#125;
          </span>
          <span className="text-[#F92672]">&nbsp;from</span>
          <span className="text-[#E6DB74]">&nbsp;"../../src"</span>
          <span className="text-[#F8F8F2]">;</span>
        </div>

        <div className="flex">
          <span className="text-[#F92672]">import</span>
          <span className="text-[#F8F8F2]">
            &nbsp;type &#123; VisualizerOptions &#125;
          </span>
          <span className="text-[#F92672]">&nbsp;from</span>
          <span className="text-[#E6DB74]">&nbsp;"../../src/types"</span>
          <span className="text-[#F8F8F2]">;</span>
        </div>

        <div className="h-4"></div>

        {/* Component definition */}
        <div className="flex">
          <span className="text-[#F92672]">const</span>
          <span className="text-[#A6E22E]">&nbsp;AdvancedExample</span>
          <span className="text-[#F8F8F2]">: React.FC = () =&gt; &#123;</span>
        </div>
        {/* Hook usage */}
        <div className="pl-4">
          <span className="text-[#F92672]">const</span>
          <span className="text-[#F8F8F2]">
            &nbsp;&#123; isListening, audioData, error, startListening,
            stopListening &#125; =&nbsp;
          </span>
          <span className="text-[#66D9EF]">useAudioListener</span>
          <span className="text-[#F8F8F2]">();</span>
        </div>

        <div className="pl-4 flex">
          <span className="text-[#F92672]">const</span>
          <span className="text-[#F8F8F2]">
            &nbsp;[showError, setShowError] =&nbsp;
          </span>
          <span className="text-[#66D9EF]">useState</span>
          <span className="text-[#F8F8F2]">&lt;boolean&gt;(false);</span>
        </div>

        <div className="h-4"></div>

        {/* Options comment */}
        <div className="pl-4">
          <span className="text-[#75715E]">// Customizable options</span>
        </div>

        {/* Options definition */}
        <div className="pl-4 flex">
          <span className="text-[#F92672]">const</span>
          <span className="text-[#F8F8F2]">
            &nbsp;options: VisualizerOptions = &#123;
          </span>
        </div>

        {/* Quality option */}
        <div className="pl-8">
          <span className="text-[#75715E]">
            // Controls the overall visual quality and performance
          </span>
        </div>
        <div className="pl-8">
          <span className="text-[#75715E]">
            // "low": Lower resolution and effects for better performance on
            weaker devices
            <br /> // "medium": Balanced quality and performance (default)
            <br /> // "high": Maximum visual quality but may impact performance
            on some devices
          </span>
        </div>
        <div className="pl-8 flex">
          <span className="text-[#A6E22E]">initialQuality</span>
          <span className="text-[#F8F8F2]">: </span>
          <span className="text-[#E6DB74]">"medium"</span>
          <span className="text-[#F8F8F2]">&nbsp;as </span>
          <span className="text-[#66D9EF]">"low"</span>
          <span className="text-[#F8F8F2]">&nbsp;| </span>
          <span className="text-[#66D9EF]">"medium"</span>
          <span className="text-[#F8F8F2]">&nbsp;| </span>
          <span className="text-[#66D9EF]">"high"</span>
          <span className="text-[#F8F8F2]">,</span>
        </div>

        <div className="pl-8">
          <span className="text-[#75715E]">
            // Defines the color of the visual elements (orbs) in the visualizer
            <br />
            // Values range from 0-255 for each RGB component
            <br />
            // This example shows orange
          </span>
        </div>
        {/* Orb colors */}
        <div className="pl-8 flex">
          <span className="text-[#A6E22E]">orbColors</span>
          <span className="text-[#F8F8F2]">: &#123;</span>
        </div>
        <div className="pl-12 flex">
          <span className="text-[#A6E22E]">red</span>
          <span className="text-[#F8F8F2]">: </span>
          <span className="text-[#AE81FF]">249</span>
          <span className="text-[#F8F8F2]">,</span>
        </div>
        <div className="pl-12 flex">
          <span className="text-[#A6E22E]">green</span>
          <span className="text-[#F8F8F2]">: </span>
          <span className="text-[#AE81FF]">115</span>
          <span className="text-[#F8F8F2]">,</span>
        </div>
        <div className="pl-12 flex">
          <span className="text-[#A6E22E]">blue</span>
          <span className="text-[#F8F8F2]">: </span>
          <span className="text-[#AE81FF]">22</span>
        </div>
        <div className="pl-8 flex">
          <span className="text-[#F8F8F2]">&#125;,</span>
        </div>

        <div className="pl-8">
          <span className="text-[#75715E]">
            // Sets the background color of the visualizer
            <br />
            // Can be a hex color string (like "#0a0a0a"), RGB object
            <br />
            // This is a dark gray background
          </span>
        </div>
        {/* Canvas color */}
        <div className="pl-8 flex">
          <span className="text-[#A6E22E]">canvasColor</span>
          <span className="text-[#F8F8F2]">: </span>
          <span className="text-[#E6DB74]">"#0a0a0a"</span>
          <span className="text-[#F8F8F2]">,</span>
        </div>

        <div className="pl-8">
          <span className="text-[#75715E]">
            // Controls the glow/bloom effect that makes bright parts of the
            visualization shine
          </span>
        </div>
        {/* Glow effect */}
        <div className="pl-8 flex">
          <span className="text-[#A6E22E]">initialGlow</span>
          <span className="text-[#F8F8F2]">: &#123;</span>
        </div>
        <div className="pl-12">
          <span className="text-[#75715E]">
            // Brightness level required before glow is applied (0-1) <br />
            // Lower values make more elements glow
          </span>
        </div>
        <div className="pl-12 flex">
          <span className="text-[#A6E22E]">threshold</span>
          <span className="text-[#F8F8F2]">: </span>
          <span className="text-[#AE81FF]">0.3</span>
          <span className="text-[#F8F8F2]">,</span>
        </div>
        <div className="pl-12">
          <span className="text-[#75715E]">
            // Intensity of the glow effect (0-3) <br />
            // Higher values create stronger glow
          </span>
        </div>
        <div className="pl-12 flex">
          <span className="text-[#A6E22E]">strength</span>
          <span className="text-[#F8F8F2]">: </span>
          <span className="text-[#AE81FF]">0.2</span>
          <span className="text-[#F8F8F2]">,</span>
        </div>
        <div className="pl-12">
          <span className="text-[#75715E]">
            // How far the glow spreads (0-1) <br />
            // Higher values create a more diffuse glow
          </span>
        </div>
        <div className="pl-12 flex">
          <span className="text-[#A6E22E]">radius</span>
          <span className="text-[#F8F8F2]">: </span>
          <span className="text-[#AE81FF]">0.5</span>
        </div>
        <div className="pl-8 flex">
          <span className="text-[#F8F8F2]">&#125;,</span>
        </div>

        <div className="pl-8">
          <span className="text-[#75715E]">
            // When enabled, the visualization continues to move slightly after
            you drag it <br />
            // Like how a globe continues to spin after you push it
          </span>
        </div>
        {/* Inertia settings */}
        <div className="pl-8 flex">
          <span className="text-[#A6E22E]">inertiaEnabled</span>
          <span className="text-[#F8F8F2]">: </span>
          <span className="text-[#AE81FF]">true</span>
          <span className="text-[#F8F8F2]">,</span>
        </div>
        <div className="pl-8">
          <span className="text-[#75715E]">
            // Controls how much momentum/inertia is applied when moving the
            visualization <br />
            // Range: 0-1 (higher values = more inertia) <br />
            // Higher values make the visualization continue moving longer after
            interaction
          </span>
        </div>
        <div className="pl-8 flex">
          <span className="text-[#A6E22E]">inertiaLevel</span>
          <span className="text-[#F8F8F2]">: </span>
          <span className="text-[#AE81FF]">0.05</span>
          <span className="text-[#F8F8F2]">,</span>
        </div>

        <div className="pl-8">
          <span className="text-[#75715E]">
            // Allows zooming in and out of the visualization (usually with
            mouse wheel) <br />
            // When enabled, you can zoom in to see details or zoom out for a
            wider view
          </span>
        </div>
        {/* Zoom settings */}
        <div className="pl-8 flex">
          <span className="text-[#A6E22E]">zoomEnabled</span>
          <span className="text-[#F8F8F2]">: </span>
          <span className="text-[#AE81FF]">true</span>
          <span className="text-[#F8F8F2]">,</span>
        </div>

        <div className="pl-8">
          <span className="text-[#75715E]">
            // Controls how dramatically the visualization reacts to audio{" "}
            <br />
            // Higher values create larger, more pronounced spikes in response
            to sound <br />
            // Think of this as the "sensitivity" to sound
          </span>
        </div>
        {/* Audio response settings */}
        <div className="pl-8 flex">
          <span className="text-[#A6E22E]">spikeLevel</span>
          <span className="text-[#F8F8F2]">: </span>
          <span className="text-[#AE81FF]">5.5</span>
          <span className="text-[#F8F8F2]">,</span>
        </div>
        <div className="pl-8">
          <span className="text-[#75715E]">
            // Controls how quickly the visualization responds to changes in
            audio
            <br />
            // Range: 0-1 (higher values = more responsive/less smooth)
            <br />
            // Lower values make transitions more gradual, higher values make it
            react more immediately
          </span>
        </div>
        <div className="pl-8 flex">
          <span className="text-[#A6E22E]">smoothnessLevel</span>
          <span className="text-[#F8F8F2]">: </span>
          <span className="text-[#AE81FF]">0.7</span>
          <span className="text-[#F8F8F2]">,</span>
        </div>

        <div className="pl-8">
          <span className="text-[#75715E]">
            // Enables mouse/touch controls to rotate and move around the
            visualization <br />
            // When enabled, you can drag to rotate the visualization in 3D
            space
          </span>
        </div>
        {/* Control settings */}
        <div className="pl-8 flex">
          <span className="text-[#A6E22E]">enableOrbitControls</span>
          <span className="text-[#F8F8F2]">: </span>
          <span className="text-[#AE81FF]">true</span>
          <span className="text-[#F8F8F2]">,</span>
        </div>
        <div className="pl-8">
          <span className="text-[#75715E]">
            // Makes the visualization slowly rotate automatically without user
            input <br />
            // Creates a dynamic, always-moving effect even when nobody is
            interacting with it
          </span>
        </div>
        <div className="pl-8 flex">
          <span className="text-[#A6E22E]">autoRotate</span>
          <span className="text-[#F8F8F2]">: </span>
          <span className="text-[#AE81FF]">true</span>
          <span className="text-[#F8F8F2]">,</span>
        </div>
        <div className="pl-8">
          <span className="text-[#75715E]">
            // Shows or hides an interactive control panel for adjusting
            visualizer settings <br />
            // When enabled, displays sliders and controls to change colors,
            effects, etc. in real-time
          </span>
        </div>
        <div className="pl-8 flex">
          <span className="text-[#A6E22E]">showGui</span>
          <span className="text-[#F8F8F2]">: </span>
          <span className="text-[#AE81FF]">true</span>
          <span className="text-[#F8F8F2]">,</span>
        </div>

        <div className="pl-8">
          <span className="text-[#75715E]">
            // Adds a custom CSS class to the visualizer container for styling{" "}
            <br />
            // Allows you to apply custom CSS styles to the visualizer
          </span>
        </div>
        {/* Styling */}
        <div className="pl-8 flex">
          <span className="text-[#A6E22E]">className</span>
          <span className="text-[#F8F8F2]">: </span>
          <span className="text-[#E6DB74]">"custom-visualizer"</span>
          <span className="text-[#F8F8F2]">,</span>
        </div>

        <div className="pl-8">
          <span className="text-[#75715E]">
            // Applies inline CSS styles directly to the visualizer container
            <br />
            // Standard React inline style object
          </span>
        </div>
        {/* Container style */}
        <div className="pl-8 flex">
          <span className="text-[#A6E22E]">containerStyle</span>
          <span className="text-[#F8F8F2]">: &#123;</span>
        </div>
        <div className="pl-12">
          <span className="text-[#75715E]">
            // Sets the height to 80% of the viewport height
          </span>
        </div>
        <div className="pl-12 flex">
          <span className="text-[#A6E22E]">height</span>
          <span className="text-[#F8F8F2]">: </span>
          <span className="text-[#E6DB74]">"70vh"</span>
        </div>
        <div className="pl-8 flex">
          <span className="text-[#F8F8F2]">&#125;</span>
        </div>

        <div className="pl-4 flex">
          <span className="text-[#F8F8F2]">&#125;;</span>
        </div>

        <div className="h-4"></div>

        {/* Toggle listening function */}
        <div className="pl-4 flex">
          <span className="text-[#F92672]">const</span>
          <span className="text-[#A6E22E]">&nbsp;handleToggleListening</span>
          <span className="text-[#F8F8F2]">&nbsp;= () =&gt; &#123;</span>
        </div>
        <div className="pl-8 flex">
          <span className="text-[#F92672]">if</span>
          <span className="text-[#F8F8F2]">&nbsp;(isListening) &#123;</span>
        </div>
        <div className="pl-12">
          <span className="text-[#F8F8F2]">stopListening();</span>
        </div>
        <div className="pl-8 flex">
          <span className="text-[#F8F8F2]">&#125;&nbsp;</span>
          <span className="text-[#F92672]">else</span>
          <span className="text-[#F8F8F2]">&nbsp;&#123;</span>
        </div>
        <div className="pl-12">
          <span className="text-[#F8F8F2]">setShowError(false);</span>
        </div>
        <div className="pl-12">
          <span className="text-[#F8F8F2]">startListening();</span>
        </div>
        <div className="pl-8">
          <span className="text-[#F8F8F2]">&#125;</span>
        </div>
        <div className="pl-4">
          <span className="text-[#F8F8F2]">&#125;;</span>
        </div>

        <div className="h-4"></div>

        {/* Return statement */}
        <div className="pl-4 flex">
          <span className="text-[#F92672]">return</span>
          <span className="text-[#F8F8F2]">&nbsp;(</span>
        </div>

        <div className="pl-8">
          <span className="text-[#F8F8F2]">&lt;</span>
          <span className="text-[#F92672]">div</span>
          <span className="text-[#66D9EF]">&nbsp;className</span>
          <span className="text-[#F8F8F2]">=</span>
          <span className="text-[#E6DB74]">
            "h-full flex-1 flex flex-col items-center justify-center bg-black
            text-white"
          </span>
          <span className="text-[#F8F8F2]">&gt;</span>
        </div>

        <div className="pl-12">
          <span className="text-[#75715E]">
            {"{/* Visualizer container */}"}
          </span>
        </div>

        <div className="pl-12 flex">
          <span className="text-[#F8F8F2]">&lt;</span>
          <span className="text-[#F92672]">div</span>
          <span className="text-[#66D9EF]">&nbsp;className</span>
          <span className="text-[#F8F8F2]">=</span>
          <span className="text-[#E6DB74]">"flex-1 w-full"</span>
          <span className="text-[#F8F8F2]">&gt;</span>
        </div>

        <div className="pl-16 flex">
          <span className="text-[#F8F8F2]">&lt;</span>
          <span className="text-[#66D9EF]">AudioVisualizer</span>
        </div>

        <div className="pl-20 flex">
          <span className="text-[#66D9EF]">audioData</span>
          <span className="text-[#F8F8F2]">=</span>
          <span className="text-[#F8F8F2]">&#123;audioData&#125;</span>
        </div>

        <div className="pl-20 flex">
          <span className="text-[#66D9EF]">isListening</span>
          <span className="text-[#F8F8F2]">=</span>
          <span className="text-[#F8F8F2]">&#123;isListening&#125;</span>
        </div>

        <div className="pl-20 flex">
          <span className="text-[#66D9EF]">initialQuality</span>
          <span className="text-[#F8F8F2]">=</span>
          <span className="text-[#F8F8F2]">
            &#123;options.initialQuality&#125;
          </span>
        </div>

        <div className="pl-20 flex">
          <span className="text-[#66D9EF]">orbColors</span>
          <span className="text-[#F8F8F2]">=</span>
          <span className="text-[#F8F8F2]">&#123;options.orbColors&#125;</span>
        </div>

        <div className="pl-20 flex">
          <span className="text-[#66D9EF]">canvasColor</span>
          <span className="text-[#F8F8F2]">=</span>
          <span className="text-[#F8F8F2]">
            &#123;options.canvasColor&#125;
          </span>
        </div>

        <div className="pl-20 flex">
          <span className="text-[#66D9EF]">initialGlow</span>
          <span className="text-[#F8F8F2]">=</span>
          <span className="text-[#F8F8F2]">
            &#123;options.initialGlow&#125;
          </span>
        </div>

        <div className="pl-20 flex">
          <span className="text-[#66D9EF]">enableOrbitControls</span>
          <span className="text-[#F8F8F2]">=</span>
          <span className="text-[#F8F8F2]">
            &#123;options.enableOrbitControls&#125;
          </span>
        </div>

        <div className="pl-20 flex">
          <span className="text-[#66D9EF]">autoRotate</span>
          <span className="text-[#F8F8F2]">=</span>
          <span className="text-[#F8F8F2]">&#123;options.autoRotate&#125;</span>
        </div>

        <div className="pl-20 flex">
          <span className="text-[#66D9EF]">showGui</span>
          <span className="text-[#F8F8F2]">=</span>
          <span className="text-[#F8F8F2]">&#123;options.showGui&#125;</span>
        </div>

        <div className="pl-20 flex">
          <span className="text-[#66D9EF]">className</span>
          <span className="text-[#F8F8F2]">=</span>
          <span className="text-[#F8F8F2]">&#123;options.className&#125;</span>
        </div>

        <div className="pl-20 flex">
          <span className="text-[#66D9EF]">containerStyle</span>
          <span className="text-[#F8F8F2]">=</span>
          <span className="text-[#F8F8F2]">
            &#123;options.containerStyle&#125;
          </span>
        </div>

        <div className="pl-16 flex">
          <span className="text-[#F8F8F2]">/&gt;</span>
        </div>

        <div className="pl-12 flex">
          <span className="text-[#F8F8F2]">&lt;/</span>
          <span className="text-[#F92672]">div</span>
          <span className="text-[#F8F8F2]">&gt;</span>
        </div>

        <div className="pl-12">
          <span className="text-[#75715E]">{"{/* Controls panel */}"}</span>
        </div>

        <div className="pl-12">
          <span className="text-[#F8F8F2]">&lt;</span>
          <span className="text-[#F92672]">div</span>
          <span className="text-[#66D9EF]">&nbsp;className</span>
          <span className="text-[#F8F8F2]">=</span>
          <span className="text-[#E6DB74]">"p-6 bg-black"</span>
          <span className="text-[#F8F8F2]">&gt;</span>
        </div>

        <div className="pl-16">
          <span className="text-[#F8F8F2]">&lt;</span>
          <span className="text-[#F92672]">div</span>
          <span className="text-[#66D9EF]">&nbsp;className</span>
          <span className="text-[#F8F8F2]">=</span>
          <span className="text-[#E6DB74]">"max-w-6xl mx-auto"</span>
          <span className="text-[#F8F8F2]">&gt;</span>
        </div>

        <div className="pl-20">
          <span className="text-[#F8F8F2]">&lt;</span>
          <span className="text-[#F92672]">div</span>
          <span className="text-[#66D9EF]">&nbsp;className</span>
          <span className="text-[#F8F8F2]">=</span>
          <span className="text-[#E6DB74]">
            "flex flex-col flex-wrap justify-center items-center mb-6"
          </span>
          <span className="text-[#F8F8F2]">&gt;</span>
        </div>

        <div className="pl-24">
          <span className="text-[#F8F8F2]">&lt;</span>
          <span className="text-[#F92672]">button</span>
          <span className="text-[#66D9EF]">&nbsp;onClick</span>
          <span className="text-[#F8F8F2]">=</span>
          <span className="text-[#F8F8F2]">
            &#123;handleToggleListening&#125;
          </span>
          <span className="text-[#66D9EF]">&nbsp;className</span>
          <span className="text-[#F8F8F2]">=</span>
          <span className="text-[#E6DB74]">
            "px-6 py-3 text-white rounded-lg transition-colors bg-gradient-to-r
            from-rose-600 to-fuchsia-700"
          </span>
          <span className="text-[#F8F8F2]">&gt;</span>
        </div>

        <div className="pl-28">
          <span className="text-[#F8F8F2]">&#123;isListening ? </span>
          <span className="text-[#E6DB74]">"Stop Listening"</span>
          <span className="text-[#F8F8F2]"> : </span>
          <span className="text-[#E6DB74]">"Start Listening"</span>
          <span className="text-[#F8F8F2]">&#125;</span>
        </div>

        <div className="pl-24 flex">
          <span className="text-[#F8F8F2]">&lt;/</span>
          <span className="text-[#F92672]">button</span>
          <span className="text-[#F8F8F2]">&gt;</span>
        </div>

        <div className="pl-24">
          <span className="text-[#F8F8F2]">&lt;</span>
          <span className="text-[#F92672]">p</span>
          <span className="text-[#66D9EF]">&nbsp;className</span>
          <span className="text-[#F8F8F2]">=</span>
          <span className="text-[#E6DB74]">"mt-4 text-sm text-gray-400"</span>
          <span className="text-[#F8F8F2]">&gt;</span>
        </div>

        <div className="pl-28">
          <span className="text-[#F8F8F2]">
            Note: This will request microphone access
          </span>
        </div>

        <div className="pl-24 flex">
          <span className="text-[#F8F8F2]">&lt;/</span>
          <span className="text-[#F92672]">p</span>
          <span className="text-[#F8F8F2]">&gt;</span>
        </div>

        <div className="pl-20 flex">
          <span className="text-[#F8F8F2]">&lt;/</span>
          <span className="text-[#F92672]">div</span>
          <span className="text-[#F8F8F2]">&gt;</span>
        </div>

        <div className="pl-16 flex">
          <span className="text-[#F8F8F2]">&lt;/</span>
          <span className="text-[#F92672]">div</span>
          <span className="text-[#F8F8F2]">&gt;</span>
        </div>

        <div className="pl-12 flex">
          <span className="text-[#F8F8F2]">&lt;/</span>
          <span className="text-[#F92672]">div</span>
          <span className="text-[#F8F8F2]">&gt;</span>
        </div>

        <div className="pl-8 flex">
          <span className="text-[#F8F8F2]">&lt;/</span>
          <span className="text-[#F92672]">div</span>
          <span className="text-[#F8F8F2]">&gt;</span>
        </div>

        <div className="pl-4 flex">
          <span className="text-[#F8F8F2]">);</span>
        </div>

        <div className="flex">
          <span className="text-[#F8F8F2]">&#125;;</span>
        </div>
      </div>
    </div>
  );
};

export default AdvancedExampleCodeBlock;
