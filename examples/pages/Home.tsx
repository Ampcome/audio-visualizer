import React from "react";
import { Link } from "react-router-dom";
// layouts
import Layout from "../layouts";

const Home: React.FC = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative min-h-screen overflow-hidden bg-black text-white pt-32 pb-20">
        {/* Background gradient effect */}
        <div className="absolute inset-0 bg-gradient-to-b from-fuchsia-500/10 via-black/20 to-black z-0"></div>

        {/* Animated particles/dots effect */}
        <div className="absolute inset-0 z-0 opacity-30">
          <div
            className="absolute top-0 left-0 w-2 h-2 bg-neutral-800 rounded-full animate-pulse"
            style={{ left: "10%", top: "20%", animationDelay: "0.5s" }}
          ></div>
          <div
            className="absolute top-0 left-0 w-3 h-3 bg-neutral-800 rounded-full animate-pulse"
            style={{ left: "25%", top: "15%", animationDelay: "1.5s" }}
          ></div>
          <div
            className="absolute top-0 left-0 w-2 h-2 bg-neutral-800 rounded-full animate-pulse"
            style={{ left: "45%", top: "30%", animationDelay: "0.7s" }}
          ></div>
          <div
            className="absolute top-0 left-0 w-4 h-4 bg-neutral-800 rounded-full animate-pulse"
            style={{ left: "70%", top: "25%", animationDelay: "2s" }}
          ></div>
          <div
            className="absolute top-0 left-0 w-3 h-3 bg-neutral-800 rounded-full animate-pulse"
            style={{ left: "85%", top: "10%", animationDelay: "1s" }}
          ></div>
          <div
            className="absolute top-0 left-0 w-2 h-2 bg-neutral-800 rounded-full animate-pulse"
            style={{ left: "15%", top: "60%", animationDelay: "1.2s" }}
          ></div>
          <div
            className="absolute top-0 left-0 w-3 h-3 bg-neutral-800 rounded-full animate-pulse"
            style={{ left: "35%", top: "70%", animationDelay: "0.3s" }}
          ></div>
          <div
            className="absolute top-0 left-0 w-2 h-2 bg-neutral-800 rounded-full animate-pulse"
            style={{ left: "65%", top: "65%", animationDelay: "1.7s" }}
          ></div>
          <div
            className="absolute top-0 left-0 w-4 h-4 bg-neutral-800 rounded-full animate-pulse"
            style={{ left: "90%", top: "80%", animationDelay: "0.9s" }}
          ></div>
        </div>

        <div className="container mx-auto px-6 py-10 relative z-10">
          <div className="flex flex-col items-center justify-between gap-20">
            <div className="w-full flex flex-col items-center space-y-8">
              <div className="space-y-2 flex flex-col items-center">
                <div className="text-center mx-auto inline-block px-3 py-1 rounded-full bg-gradient-to-r from-blue-500/20 to-purple-500/20 backdrop-blur-sm text-sm font-medium text-rose-300 mb-4">
                  Powered by Three.js
                </div>
                <h1 className="text-4xl text-center md:text-6xl lg:text-7xl font-bold leading-tight">
                  <span className="block bg-clip-text text-transparent bg-gradient-to-r from-red-100 via-rose-200 to-fuchsia-300">
                    React 3D Audio
                  </span>
                  <span className="block mt-2 bg-clip-text text-transparent bg-gradient-to-r from-red-100 via-rose-200 to-fuchsia-300">Visualizer</span>
                </h1>
              </div>

              <p className="w-full text-lg text-center md:w-1/2 md:text-2xl text-gray-500 leading-relaxed">
                A stunning 3D audio visualizer component for React applications
                using Three.js
              </p>

              <div className="w-full flex flex-col sm:flex-row justify-center items-center gap-5 pt-4">
                <Link
                  to="/basic"
                  className="group relative px-8 py-4 bg-gradient-to-r from-neutral-600 to-neutral-700 overflow-hidden rounded-xl text-white font-medium text-center transition-all duration-300 hover:shadow-[0_0_25px_rgba(59,130,246,0.05)] hover:scale-105"
                >
                  <span className="relative z-10">Try Basic Example</span>
                  <div className="absolute inset-0 bg-gradient-to-r from-rose-600 to-fuchsia-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </Link>
                <Link
                  to="/advanced"
                  className="group relative px-8 py-4 bg-gradient-to-r from-neutral-600 to-neutral-700 overflow-hidden rounded-xl text-white font-medium text-center transition-all duration-300 hover:shadow-[0_0_25px_rgba(147,51,234,0.05)] hover:scale-105"
                >
                  <span className="relative z-10">Try Advanced Example</span>
                  <div className="absolute inset-0 bg-gradient-to-r from-rose-600 to-fuchsia-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </Link>
              </div>
            </div>

            <div className="w-full lg:w-2/3 relative">
              <div className="absolute -inset-0.5 bg-gradient-to-r from-neutral-900 to-neutral-900 rounded-2xl blur opacity-20 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-pulse-slow"></div>
              <div className="relative bg-neutral-950 rounded-2xl overflow-hidden shadow-[0_0_0px_rgba(59,130,246,0.0)]">
                <img
                  src="../assets/visualizer.gif"
                  alt="Audio Visualizer Demo"
                  className="w-full rounded-2xl transform transition-transform duration-500 hover:scale-105"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        {/* <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex flex-col items-center">
          <span className="text-sm text-gray-400 mb-2">Scroll to explore</span>
          <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center p-1">
            <div className="w-1.5 h-1.5 bg-white rounded-full animate-bounce-slow"></div>
          </div>
        </div> */}
      </section>
    </Layout>
  );
};

export default Home;
