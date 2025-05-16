import React, { JSX } from "react";

/**
 * Basic example page code block with Monokai theme styling
 */
export const BasicExampleCodeBlock = (): JSX.Element => {
  return (
    <div className="w-full md:w-1/3 overflow-auto bg-[#272822] rounded-lg p-4 h-[85vh] border border-gray-700">
      <h2 className="text-xl font-bold mb-4 text-white">Basic Example Code</h2>
      <div className="relative text-sm font-mono p-4 text-[#F8F8F2] overflow-auto leading-relaxed">
        <div className="">
          <span className="text-[#F92672]">import</span>
          <span className="text-[#F8F8F2]">
            &nbsp;React, &#123; useState &#125;{" "}
          </span>
          <span className="text-[#F92672]">&nbsp;from</span>
          <span className="text-[#E6DB74]">&nbsp;"react"</span>
          <span className="text-[#F8F8F2]">;</span>
        </div>

        <div className="">
          <span className="text-[#F92672]">import</span>
          <span className="text-[#F8F8F2]">
            &nbsp;&#123; AudioVisualizer, useAudioListener &#125;{" "}
          </span>
          <span className="text-[#F92672]">&nbsp;from</span>
          <span className="text-[#E6DB74]"> &nbsp;"audio-visualizer"</span>
          <span className="text-[#F8F8F2]">;</span>
        </div>

        <div className="h-4"></div>

        <div className="">
          <span className="text-[#F92672]">export const &nbsp;</span>
          <span className="text-[#A6E22E]"> BasicExample</span>
          <span className="text-[#F8F8F2]"> = () =&gt; &#123;</span>
        </div>

        <div className="pl-4">
          <span className="text-[#75715E]">
            // Use the hook to access microphone and get audio data
          </span>
        </div>

        <div className="pl-4 flex">
          <span className="text-[#F92672]">const</span>
          <span className="text-[#F8F8F2]">&nbsp;&#123;</span>
        </div>

        <div className="pl-8">
          <span className="text-[#F8F8F2]">isListening,</span>
        </div>
        <div className="pl-8">
          <span className="text-[#F8F8F2]">audioData,</span>
        </div>
        <div className="pl-8">
          <span className="text-[#F8F8F2]">error,</span>
        </div>
        <div className="pl-8">
          <span className="text-[#F8F8F2]">startListening,</span>
        </div>
        <div className="pl-8">
          <span className="text-[#F8F8F2]">stopListening</span>
        </div>

        <div className="pl-4 flex">
          <span className="text-[#F8F8F2]">&#125;&nbsp;= </span>
          <span className="text-[#66D9EF]">&nbsp;useAudioListener</span>
          <span className="text-[#F8F8F2]">();</span>
        </div>

        <div className="h-4"></div>

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
          <span className="text-[#F8F8F2]">startListening();</span>
        </div>

        <div className="pl-8">
          <span className="text-[#F8F8F2]">&#125;</span>
        </div>

        <div className="pl-4">
          <span className="text-[#F8F8F2]">&#125;;</span>
        </div>

        <div className="h-4"></div>

        <div className="pl-4 flex">
          <span className="text-[#F92672]">return</span>
          <span className="text-[#F8F8F2]">&nbsp;(</span>
        </div>

        <div className="pl-8 flex">
          <span className="text-[#F8F8F2]">&lt;</span>
          <span className="text-[#F92672]">div</span>
          <span className="text-[#66D9EF]">&nbsp;className</span>
          <span className="text-[#F8F8F2]">=</span>
          <span className="text-[#E6DB74]">"container"</span>
          <span className="text-[#F8F8F2]">&gt;</span>
        </div>

        <div className="pl-12">
          <span className="text-[#75715E]">
            {"{/* Visualizer component */}"}
          </span>
        </div>

        <div className="pl-12 flex">
          <span className="text-[#F8F8F2]">&lt;</span>
          <span className="text-[#F92672]">div</span>
          <span className="text-[#66D9EF]">&nbsp;className</span>
          <span className="text-[#F8F8F2]">=</span>
          <span className="text-[#E6DB74]">"visualizer-container"</span>
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

        <div className="pl-16 flex">
          <span className="text-[#F8F8F2]">/&gt;</span>
        </div>

        <div className="pl-12 flex">
          <span className="text-[#F8F8F2]">&lt;/</span>
          <span className="text-[#F92672]">div</span>
          <span className="text-[#F8F8F2]">&gt;</span>
        </div>

        <div className="h-4"></div>

        <div className="pl-12">
          <span className="text-[#75715E]">{"{/* Controls */}"}</span>
        </div>

        <div className="pl-12 flex">
          <span className="text-[#F8F8F2]">&lt;</span>
          <span className="text-[#F92672]">button</span>
          <span className="text-[#66D9EF]">&nbsp;onClick</span>
          <span className="text-[#F8F8F2]">=</span>
          <span className="text-[#F8F8F2]">
            &#123;handleToggleListening&#125;
          </span>
          <span className="text-[#F8F8F2]">&gt;</span>
        </div>

        <div className="pl-16">
          <span className="text-[#F8F8F2]">&#123;isListening ?&nbsp;</span>
          <span className="text-[#E6DB74]">"Stop Listening"</span>
          <span className="text-[#F8F8F2]">&nbsp;:&nbsp;</span>
          <span className="text-[#E6DB74]">"Start Listening"</span>
          <span className="text-[#F8F8F2]">&#125;</span>
        </div>

        <div className="pl-12 flex">
          <span className="text-[#F8F8F2]">&lt;/</span>
          <span className="text-[#F92672]">button</span>
          <span className="text-[#F8F8F2]">&gt;</span>
        </div>

        <div className="pl-8 flex">
          <span className="text-[#F8F8F2]">&lt;/</span>
          <span className="text-[#F92672]">div</span>
          <span className="text-[#F8F8F2]">&gt;</span>
        </div>

        <div className="pl-4">
          <span className="text-[#F8F8F2]">);</span>
        </div>

        <div>
          <span className="text-[#F8F8F2]">&#125;;</span>
        </div>
      </div>
    </div>
  );
};

export default BasicExampleCodeBlock;
